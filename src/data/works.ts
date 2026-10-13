// ── Works / Projects data ────────────────────────────────────────────────────
export interface Work {
  id: string;
  period: string;
  title: string;
  subtitle?: string;
  client?: string;
  description: string;
  highlights?: string[];
  tags: string[];
  link?: string;
  featured?: boolean;
  metrics?: string;
}

export const WORKS: Work[] = [
  {
    id: "deepgrow",
    period: "2023 – Present",
    client: "Dinnova AG · Zurich, Switzerland",
    title: "DeepGrow — AI-Personalized Hypnosis & Voice Simulation",
    subtitle: "Published on the App Store",
    description:
      "Engineered an AI-personalized hypnosis application combining GPT-based voice simulation and ElevenLabs text-to-speech with OCEAN personality profiling. Implemented end-to-end in-app subscription flow and Clean Architecture.",
    highlights: [
      "Integrated OpenAI GPT for dynamic, personalized hypnosis scripts",
      "ElevenLabs TTS integration for natural, expressive voice simulation",
      "OCEAN personality assessment algorithm tailoring voice guidance",
      "Complete App Store in-app subscription and receipt validation pipeline",
    ],
    tags: ["Flutter", "OpenAI GPT", "ElevenLabs TTS", "In-App Purchases", "Clean Architecture", "iOS"],
    metrics: "Published on App Store",
    featured: true,
  },
  {
    id: "letsplan",
    period: "2023 – Present",
    client: "Dinnova AG · Zurich, Switzerland",
    title: "LetsPlan — Swiss Scheduling, Mapping & Event Platform",
    subtitle: "Enterprise Swiss Mobility & Planning",
    description:
      "Delivered a Swiss scheduling and mapping platform with interactive calendar engines, multi-tier payment flows, and precision location routing, successfully meeting all Swiss product delivery milestones.",
    highlights: [
      "Custom high-performance calendar engine for complex scheduling",
      "Interactive map overlays and geospatial routing with Google Maps",
      "Multi-currency, secure Swiss payment gateway integration",
      "Cross-platform responsive UX for iOS and Android",
    ],
    tags: ["Flutter", "Google Maps", "BLoC", "Payment Gateways", "Calendar Engine"],
    metrics: "Live in Switzerland",
    featured: true,
  },
  {
    id: "ridealike",
    period: "2022 – 2023",
    client: "LUUP (RideAlike Inc.) · Toronto, Canada",
    title: "RideAlike — Canadian Peer-to-Peer Car-Sharing Platform",
    subtitle: "3k+ App Store & Google Play Downloads",
    description:
      "Engineered the core car-exchange, vehicle booking, and in-app chat modules for a premier Canadian car-sharing network. Built live GPS tracking and activity-log auditing for vehicle fleet security.",
    highlights: [
      "Real-time vehicle availability, instant booking, and peer-to-peer user matching",
      "Built low-latency in-app chat for vehicle owners and renters",
      "Continuous GPS tracking and activity-log telemetry for trip auditing",
      "Achieved 3k+ downloads across Google Play and iOS App Store",
    ],
    tags: ["Flutter", "GPS Tracking", "In-App Chat", "Google Maps", "Ride Sharing", "REST API"],
    metrics: "3k+ Downloads",
    featured: true,
  },
  {
    id: "skillmatch",
    period: "2023 – Present",
    client: "Dinnova AG · Zurich, Switzerland",
    title: "SkillMatch — Real-Time Skill-Exchange & Mentorship Platform",
    subtitle: "Live Communication & Monetization",
    description:
      "Built a real-time peer-to-peer skill-exchange platform using Socket.io for live communication, instant messaging, and seamless in-app monetization, delivering all milestones ahead of schedule.",
    highlights: [
      "Socket.io live messaging and presence engine with minimal battery drain",
      "In-app monetization flows for session booking and premium tiers",
      "Modular Clean Architecture with BLoC state management",
    ],
    tags: ["Flutter", "Socket.io", "Real-Time Chat", "Monetization", "BLoC"],
    metrics: "Ahead of Schedule",
    featured: true,
  },
  {
    id: "shopyswiss",
    period: "2023 – Present",
    client: "Dinnova AG · Zurich, Switzerland",
    title: "ShopySwiss — BLE Hardware Smart-Fridge Shopping",
    subtitle: "IoT & Hardware Integration",
    description:
      "Delivered the company's first BLE (Bluetooth Low Energy) hardware integration, enabling automatic proximity detection and Bluetooth-triggered frictionless smart-fridge purchases.",
    highlights: [
      "Low-level BLE communication protocol with hardware smart-fridge controllers",
      "Autonomous beacon proximity recognition and automated purchase authorization",
      "Resilient background reconnection and error recovery handling",
    ],
    tags: ["Flutter", "BLE (Bluetooth Low Energy)", "IoT Hardware", "Payments", "Native Channels"],
    metrics: "First BLE Integration",
    featured: false,
  },
  {
    id: "smart-cashbook",
    period: "2023",
    client: "M360ICT Ltd. · Dhaka, Bangladesh",
    title: "Smart CashBook — Offline-First Business Finance Application",
    subtitle: "Offline-First Accounting & Bookkeeping",
    description:
      "Architected an offline-first finance application using SQLite and Hive, enabling core accounting and ledger management without requiring active internet connectivity.",
    highlights: [
      "Robust dual-layer local database design combining SQLite and Hive",
      "Seamless conflict resolution and background synchronization upon reconnecting",
      "Comprehensive daily accounting, ledger, and cash-flow reports",
    ],
    tags: ["Flutter", "SQLite", "Hive", "Offline-First", "BLoC", "Finance"],
    metrics: "Zero Downtime Offline",
    featured: false,
  },
  {
    id: "restaurant360",
    period: "2023",
    client: "M360ICT Ltd. · Dhaka, Bangladesh",
    title: "Restaurant360 — Real-Time Multi-Outlet Food Tracking",
    subtitle: "Order Monitoring & Analytics",
    description:
      "Integrated live food-status tracking and Mixpanel analytics across multiple restaurant outlets, supporting real-time order monitoring, push notifications, and payment processing.",
    highlights: [
      "Real-time order stage lifecycle tracking from kitchen to customer",
      "Mixpanel event tracking for funnel optimization and drop-off diagnosis",
      "Push notifications integration for live status updates and automated payment flows",
    ],
    tags: ["Flutter", "Mixpanel Analytics", "Push Notifications", "Payment Flows", "Real-Time Tracking"],
    metrics: "Multi-Outlet Support",
    featured: false,
  },
  {
    id: "myketobrain",
    period: "2023 – Present",
    client: "Dinnova AG · Zurich, Switzerland",
    title: "MyKetoBrain — Consumer Health & Wellness Application",
    subtitle: "1k+ Google Play Downloads",
    description:
      "Developed a consumer health and wellness application focused on ketogenic dietary habits and cognitive wellness tracking, reaching 1,000+ active downloads on Google Play.",
    highlights: [
      "Intuitive habit and biometric tracking dashboards",
      "Performant local state and caching with Riverpod",
      "Scaled to 1k+ organic downloads on Google Play with positive ratings",
    ],
    tags: ["Flutter", "Riverpod", "Health & Wellness", "Google Play"],
    metrics: "1k+ Downloads",
    featured: false,
  },
];
