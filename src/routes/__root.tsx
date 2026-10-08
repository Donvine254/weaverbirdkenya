import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { CookieConsent } from "@/components/cookie-consent";
import { NotFound } from "@/components/not-found";
import { AccessibilityWidget } from "@/components/accessibility-widget";
import { WhatsAppButton } from "@/components/whatsapp-button";

import appCss from "../styles.css?url";

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Weaverbird Garments Manufacturers Ltd — Uniforms Made in Kenya" },
      {
        name: "description",
        content:
          "Weaverbird Garments Manufacturers Ltd designs and produces school, corporate, security, sports and hospitality uniforms in Kenya, from first sketch to delivery.",
      },
      { name: "author", content: "Weaverbird" },
      { property: "og:site_name", content: "Weaverbird Garments Manufacturers Ltd" },
      { property: "og:title", content: "Weaverbird Garments Manufacturers Ltd — Uniforms Made in Kenya" },
      {
        property: "og:description",
        content:
          "Kenyan uniform and apparel manufacturer since 1996: school, corporate, security, sports and hospitality wear made and delivered nationwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@weaverbirdkenya" },
      { name: "twitter:title", content: "Weaverbird Garments Manufacturers Ltd" },
      {
        name: "twitter:description",
        content:
          "Kenyan uniform and apparel manufacturer since 1996: school, corporate, security, sports and hospitality wear made and delivered nationwide.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "icon",
        href: "/favicon/favicon.ico",
      },
      { rel: "apple-touch-icon", href: "/favicon/apple-touch-icon.png" },
      { rel: "manifest", href: "/favicon/site.webmanifest" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Italianno&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Weaverbird Garments Manufacturers Ltd",
          url: "https://weaverbirdkenya.com",
          foundingDate: "1996",
          description:
            "Kenyan manufacturer of school, corporate, security, sports, hospitality and industrial uniforms.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Thika",
            addressCountry: "KE",
          },
          sameAs: [
            "https://facebook.com/weaverbirdgarmentsltd",
            "https://www.tiktok.com/@weaver.bird.garme5",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="09d6e590-968f-484d-821f-ae83fe36281d" data-blockingmode="auto" type="text/javascript"></script>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster />
      <CookieConsent />
      <AccessibilityWidget />
      <WhatsAppButton />
    </QueryClientProvider>
  );
}
