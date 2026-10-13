import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div
        className="min-h-[calc(100vh-68px-180px)] flex items-center justify-center px-gutter"
      >
        <div className="text-center">
          <div
            className="font-semibold mb-6"
            style={{ fontSize: 120, lineHeight: 1, color: "var(--hairline)" }}
          >
            404
          </div>
          <h1
            className="font-semibold mb-4 tracking-[-0.02em]"
            style={{ fontSize: 42, color: "var(--ink)" }}
          >
            Page not found
          </h1>
          <p
            className="mb-8 leading-[1.6]"
            style={{ fontSize: 17, color: "var(--muted)" }}
          >
            The page you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn-primary">
            Go home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
