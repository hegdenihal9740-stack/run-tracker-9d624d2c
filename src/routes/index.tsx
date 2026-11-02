import { createFileRoute } from "@tanstack/react-router";
import App from "../northstar/App";
import northstarCss from "../northstar/northstar.css?url";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Director Portal — Student Management" },
      { name: "description", content: "Director dashboard for students, admissions, faculty, attendance, fees and reports." },
      { property: "og:title", content: "Director Portal" },
      { property: "og:description", content: "Director dashboard for student management." },

      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" },
      { rel: "stylesheet", href: northstarCss },
    ],
  }),
  component: App,
});
