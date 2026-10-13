// ── Blog posts data ───────────────────────────────────────────────────────────
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "inside-flutter-architecture",
    slug: "inside-flutter-architecture",
    title: "Inside Flutter: From Tapping the Icon to Pixels on Screen",
    subtitle: "A practical tour of Flutter's architecture, startup, rendering pipeline, and how it talks to the operating system.",
    excerpt:
      "How does Android know your app is a Flutter app? It doesn't. The operating system launches a normal native app, and that app's entry point boots Flutter. Once you understand that, the rest of Flutter's architecture falls into place.",
    date: "October 14, 2026",
    readTime: "10 min read",
    category: "Flutter Internals",
    featured: true,
    content: `
How does Android know your app is a Flutter app? It doesn't. The operating system launches a normal native app, and that app's entry point boots Flutter. Once you understand that, the rest of Flutter's architecture falls into place.

This post walks through the whole journey: the layers, the startup sequence, the three trees, the frame pipeline, what happens when a user touches the screen, and how Flutter reaches native features.

---

### 1. The three layers

Flutter is split into three layers, each with a clear job.

\`\`\`
┌─────────────────────────────────────────┐
│  Framework (Dart)                       │
│  Material/Cupertino → Widgets →         │
│  Rendering → Animation/Painting/Gestures│
│  → Foundation                           │
├─────────────────────────────────────────┤
│  Engine (C++)                           │
│  Dart runtime, Skia/Impeller, text      │
│  layout, platform channels, a11y,       │
│  dart:ui bridge                         │
├─────────────────────────────────────────┤
│  Embedder (platform-specific)           │
│  Android (Kotlin/Java + JNI), iOS       │
│  (Obj-C/Swift), Windows/Linux/macOS     │
│  (C++/Obj-C), Web (JS/Wasm)             │
└─────────────────────────────────────────┘
        OS (surfaces, input, threads, GPU)
\`\`\`

* **Framework (Dart):** This is the Dart code you write against. It is open, layered, and replaceable.
* **Engine (C++):** It runs the Dart VM, rasterizes scenes with Skia (or Impeller, which is now the renderer on iOS and increasingly on Android), lays out text, and exposes low-level APIs to Dart through \`dart:ui\`.
* **Embedder (Platform-Specific):** This is the thin native shell that gives Flutter a surface to draw on, an event loop, input events, and threads. It is the only layer that talks to the OS directly.

> **The key idea:** Flutter does not use native UI widgets. It draws every pixel itself on a canvas provided by the OS. That is why your UI looks the same on every platform, and why reaching native features requires an explicit bridge.

---

### 2. What happens at startup

The embedder does not detect Flutter on its own. The launcher starts your app, and your native entry point sets everything in motion.

1. **User taps app icon:** Android starts the app process and reads \`AndroidManifest.xml\`.
2. **Launch native Activity:** Android launches the configured Activity, usually \`MainActivity\`, which extends \`FlutterActivity\`. On iOS, this is \`FlutterAppDelegate\` and \`FlutterViewController\`.
3. **FlutterEngine Initialization:** The embedder creates or attaches to a \`FlutterEngine\`, which starts the Dart VM. In debug mode, this runs JIT (which makes hot reload possible). In release mode, it runs AOT-compiled machine code for instant startup without JIT overhead.
4. **Dart execution:** The engine executes \`main()\`, which calls \`runApp()\`.
5. **Binding initialization:** \`runApp()\` initializes \`WidgetsFlutterBinding\`, which wires together the core bindings (*Gestures, Scheduler, Services, Painting, Semantics, Rendering, Widgets*), and mounts your root widget into the element tree.

A Flutter Android build is really a native app that bundles a manifest, a \`MainActivity\`, the Flutter engine and embedding libraries, and your compiled Dart code and assets.

---

### 3. The three trees

This is a classic interview question, and it explains most of Flutter's performance behavior.

| Tree | Nature | Role |
| :--- | :--- | :--- |
| **Widget** | Immutable, cheap configuration | Describes what the UI should look like |
| **Element** | Mutable, long-lived | Links a widget to its position in the tree, does the diffing, and holds State |
| **RenderObject** | Mutable, expensive | Handles layout, painting, and hit testing |

When \`build()\` runs, new widgets are created and each Element compares the new widget to the old one using \`Widget.canUpdate()\`, which checks for the same \`runtimeType\` and \`key\`.

* If they match, the element is reused and updated with new configuration parameters.
* Otherwise, the old element and render object are unmounted, and a new element is created.

This is why rebuilding widgets is remarkably cheap, and why keys matter in lists. Also note that \`StatelessWidget\` and \`StatefulWidget\` have no render object of their own; only \`RenderObjectWidget\` instances such as \`Padding\`, \`Flex\`, and \`RichText\` create and update render objects.

---

### 4. The frame pipeline

Every frame follows the same path:

1. **Vsync signal:** A vsync signal arrives from the OS at the embedder, then the engine, which calls \`PlatformDispatcher.onBeginFrame\` and \`onDrawFrame\`.
2. **SchedulerBinding:** Runs in order: transient callbacks (animation tickers), microtasks, build (dirty elements), layout, compositing bits, paint, semantics, and finally post-frame callbacks.
3. **Layout rule:** Constraints go down, sizes go up, and the parent sets the position.
4. **Paint:** Produces a layer tree, which becomes a \`Scene\` submitted to the engine.
5. **Rasterization:** The raster thread converts the layer tree into GPU commands (Skia or Impeller) and presents the frame to the native display surface.

#### Thread Model

* **Platform thread:** The native main thread. Plugins and channel handlers run here.
* **UI thread:** Runs your Dart code, executes layouts, and builds the layer tree.
* **Raster thread:** Converts layer trees into GPU commands.
* **IO thread:** Handles texture uploads and background image decoding.

> **Jank** happens when either the UI thread (heavy build, layout, or synchronous Dart execution) or the raster thread (shaders, \`saveLayer\`, excessive clipping) exceeds the 16.6 ms budget at 60 Hz (or 8.3 ms at 120 Hz). Impeller precompiles shaders ahead of time to eliminate shader-compilation jank entirely.

---

### 5. From touch to pixels

Here is what happens when someone taps a button on screen:

1. **OS Touch Delivery:** The OS delivers a touch event to the embedder's view (\`MotionEvent\` on Android, \`UITouch\` on iOS).
2. **Pointer Packet:** The embedder converts it to a platform-neutral pointer data packet and sends it to the engine, which forwards it to Dart through \`PlatformDispatcher.onPointerDataPacket\`.
3. **Hit Testing:** \`GestureBinding\` receives it and performs a hit test down the render tree, producing an ordered list of \`RenderObject\`s under the pointer, deepest first.
4. **Gesture Arena:** The \`PointerEvent\` is dispatched to each target. Gesture recognizers such as \`TapGestureRecognizer\` and \`PanGestureRecognizer\` join the gesture arena, where exactly one winner is declared (e.g., tap vs. drag vs. long press).
5. **Callback Execution:** The winning callback fires (such as \`onTap\`), which typically calls \`setState()\`.
6. **Frame Scheduling:** \`setState()\` marks the element dirty and calls \`scheduleFrame()\`, which requests the next vsync tick from the engine.
7. **Pipeline Runs:** The frame pipeline runs: rebuild dirty elements, layout, paint, rasterize on GPU, and present pixels to the display.

*Note on text input:* Text input is the exception. The keyboard is a native component, so the framework syncs editing state bidirectionally with the OS through the \`TextInputChannel\` platform channel.

---

### 6. How Flutter talks to the OS

Because Flutter draws its own UI, anything native needs an explicit bridge. There are several mechanisms, each suited to a different job.

#### Platform Channels
Platform channels pass asynchronous messages over a binary messenger.

* **MethodChannel:** For request/response calls, such as querying battery level or camera hardware.
* **EventChannel:** For native-to-Dart streams, such as accelerometer sensors or network connectivity changes.
* **BasicMessageChannel:** For simple bidirectional messages with custom codecs.

\`\`\`dart
// Dart
const channel = MethodChannel('com.example/battery');
final level = await channel.invokeMethod<int>('getBatteryLevel');
\`\`\`

\`\`\`kotlin
// Android (Kotlin)
MethodChannel(flutterEngine.dartExecutor.binaryMessenger, "com.example/battery")
  .setMethodCallHandler { call, result ->
    if (call.method == "getBatteryLevel") {
      result.success(getBattery())
    } else {
      result.notImplemented()
    }
  }
\`\`\`

Messages are serialized with a codec, and \`StandardMessageCodec\` is the default (primitives, lists, maps, typed byte arrays). Handlers run on the platform thread, so heavy native work should be offloaded to background threads. If string-based method names make you nervous, **Pigeon** generates type-safe channel interfaces across Dart, Kotlin, and Swift.

#### dart:ffi
FFI lets you call C, C++, or Rust (via C bindings) directly and synchronously without serialization overhead. It is ideal for compute-intensive logic, cryptography, audio synthesis, and SQLite engines. Tools like \`ffigen\` automate binding generation.

#### Plugins
Plugins are packages that wrap platform channels or FFI for each target platform. Modern **federated plugins** split responsibility into an app-facing package, a platform interface contract, and per-platform native implementations.

#### Platform Views
When you need a true native OS view (such as Google Maps, camera preview, or an in-app WebView), you can embed it with \`AndroidView\` or \`UiKitView\`. On Android, there are three modes: *Hybrid Composition*, *Virtual Display*, and *Texture Layer*, each with specific performance and gesture trade-offs.

#### Lifecycle and System Channels
\`WidgetsBindingObserver\` and \`AppLifecycleState\` (*resumed, inactive, paused, detached, hidden*) expose OS lifecycle events forwarded through the system lifecycle channel. Other system channels cover navigation history, haptic feedback, clipboard, and system accessibility.

#### Add-to-App
You can also embed Flutter inside an existing native application using cached \`FlutterEngine\` instances alongside \`FlutterFragment\` on Android or \`FlutterViewController\` on iOS.

---

### Putting it all together

Here is the whole picture in one pass:

* The OS launches a native app. Flutter is just a guest living inside it.
* The embedder gives the engine a surface, threads, and input events.
* The engine runs your Dart code and rasterizes what it draws.
* The framework turns widgets into elements and render objects, then into a layer tree.
* Touches travel the reverse path: OS to embedder to engine to Dart, then \`setState\`, a new frame, and new pixels.
* Channels, FFI, plugins, and platform views carry everything that needs to cross into native territory.

Once you see Flutter as a native app hosting an engine that paints its own pixels, startup bugs, jank, plugin issues, and add-to-app setups all become much easier to reason about.

---

*What part of Flutter's internals should we dig into next? Rendering and Impeller, the gesture arena, or platform views?*
    `,
  },
  {
    id: "flutter-clean-architecture-bloc",
    slug: "flutter-clean-architecture-bloc",
    title: "Clean Architecture with BLoC in Production Flutter Applications",
    subtitle: "Structuring large-scale Flutter apps for maintainability and testability.",
    excerpt:
      "Why decoupling presentation, domain, and data layers prevents technical debt as mobile codebases scale across distributed teams and multiple live products.",
    date: "October 8, 2026",
    readTime: "7 min read",
    category: "Architecture",
    content: `
Building production Flutter applications that survive long-term feature growth requires a disciplined architecture. Clean Architecture divides your codebase into three primary rings: Presentation, Domain, and Data.

### The Problem with Tightly-Coupled State
When UI widgets directly invoke API clients or handle caching, even small UI redesigns risk breaking backend contracts. By introducing BLoC (Business Logic Component), widgets only emit events and react to immutable states.

### Core Architecture Layers
1. **Presentation Layer:** Widgets and BLoC / Cubits. Responsible purely for rendering UI and forwarding user gestures.
2. **Domain Layer:** Pure Dart entities and Use Cases. Free from any Flutter or platform dependencies.
3. **Data Layer:** Models, Data Sources (Remote via REST/GraphQL, Local via SQLite/Hive), and Repository implementations.

This strict boundary allows independent unit testing of business rules without mocking Flutter UI harnesses.
    `,
  },
  {
    id: "ai-voice-elevenlabs-flutter",
    slug: "ai-voice-elevenlabs-flutter",
    title: "Integrating OpenAI GPT & ElevenLabs Voice Synthesis in Flutter",
    subtitle: "Real-time streaming audio and personalized AI voice generation.",
    excerpt:
      "Patterns for low-latency streaming audio, personality-based prompt construction, and managing App Store in-app subscription validation natively.",
    date: "September 20, 2026",
    readTime: "9 min read",
    category: "AI & Voice",
    content: `
In modern AI mobile applications like DeepGrow, delivering instant voice feedback requires streaming chunked audio rather than waiting for entire audio buffers to generate.

### Streaming Audio Pipeline
By combining OpenAI streaming completions with ElevenLabs WebSocket or chunked REST audio endpoints, Flutter can begin playing speech within 400ms of user input.

### In-App Purchase and Token Quotas
Personalized AI generation consumes API tokens. Binding StoreKit / Google Play Billing subscription validation to backend token quotas prevents unauthorized API exhaustion.
    `,
  },
  {
    id: "offline-first-sqlite-hive",
    slug: "offline-first-sqlite-hive",
    title: "Building Resilient Offline-First Mobile Apps with SQLite and Hive",
    subtitle: "Local caching, conflict resolution, and background sync.",
    excerpt:
      "How to architect local persistence, conflict resolution, and background sync to deliver smooth user experiences in zero-connectivity environments.",
    date: "August 14, 2026",
    readTime: "8 min read",
    category: "Engineering",
    content: `
Offline-first design treats the local device database as the single source of truth. When architecting Smart CashBook, transactions had to be recorded instantaneously regardless of whether internet access was active.

### Dual-Layer Storage Pattern
* **Hive (Key-Value):** Ideal for lightweight settings, active session tokens, and fast UI cache queries.
* **SQLite / Drift (Relational):** Essential for complex queries, ledger reconciliations, and structured financial balances.
    `,
  },
];
