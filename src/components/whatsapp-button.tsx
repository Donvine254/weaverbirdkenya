import { useRouterState } from "@tanstack/react-router";
import { WHATSAPP_NUMBER } from "@/lib/contact";
import { AllProductCategories } from "@/data/products";
import { SERVICES } from "@/data/services";

const PAGE_NAMES: Record<string, string> = {
  "/products": "Products",
  "/services": "Services",
  "/branches": "Branches",
  "/about": "About Us",
  "/downloads": "Downloads & Resources",
  "/blog": "Blog",
  "/quote": "Request a Quote",
};

function buildMessage(pathname: string, hash: string) {
  const base = "Hello Weaverbird, I would like to make an enquiry about your products.";
  const id = hash.replace(/^#/, "");
  if (pathname === "/products" && id) {
    const c = AllProductCategories.categories.find((x) => x.id === id);
    if (c)
      return `Hello Weaverbird, I would like to enquire about ${c.name}. I was viewing the ${c.name} section on your website.`;
  }
  if (pathname === "/services" && id) {
    const s = SERVICES.find((x) => x.id === id);
    if (s)
      return `Hello Weaverbird, I would like to enquire about ${s.title}. I was viewing the ${s.title} section on your website.`;
  }
  const name = PAGE_NAMES[pathname] ?? (pathname.startsWith("/blog/") ? "Blog" : null);
  return name ? `${base} I was viewing the ${name} page on your website.` : base;
}

export function WhatsAppButton() {
  const { pathname, hash } = useRouterState({
    select: (s) => ({ pathname: s.location.pathname, hash: s.location.hash }),
  });
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage(pathname, hash))}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-24 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline-2 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      style={{ background: "#25D366" }}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" aria-hidden>
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44a9.38 9.38 0 0 1 9.44 9.45c0 5.2-4.24 9.43-9.46 9.43m8.04-17.47A11.3 11.3 0 0 0 12.05.7C5.78.7.67 5.8.67 12.07c0 2 .52 3.96 1.52 5.68L.57 23.7l6.09-1.6a11.36 11.36 0 0 0 5.39 1.37h.01c6.27 0 11.38-5.1 11.38-11.37 0-3.04-1.18-5.9-3.35-8.05" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow transition-opacity group-hover:opacity-100 md:block">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
