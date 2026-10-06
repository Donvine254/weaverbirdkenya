import { useRouterState } from "@tanstack/react-router";
import { WHATSAPP_NUMBER } from "@/lib/contact";
import { AllProductCategories } from "@/data/products";
import { services as SERVICES } from "@/data/services";
import { WhatsappLogo } from "@/assets/icons";

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
    select: (s) => ({
      pathname: s.location.pathname,
      hash: s.location.hash,
    }),
  });

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    buildMessage(pathname, hash),
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        group
        fixed bottom-20 right-5 z-[9990]
        flex h-12 w-12 mb-4 items-center justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-lg
        transition-transform duration-200
        hover:scale-110
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-[#25D366]
      "
    >
      {/* Pulse ring 1 */}
      <span
        aria-hidden="true"
        className="
          absolute inset-0 -z-10
          rounded-full
          bg-[#25D366]
          animate-[whatsapp-ping_2s_ease-out_infinite]
        "
      />

      {/* Pulse ring 2 */}
      <span
        aria-hidden="true"
        className="
          absolute inset-0 -z-10
          rounded-full
          bg-[#25D366]
          animate-[whatsapp-ping_2s_ease-out_0.7s_infinite]
        "
      />

      {/* WhatsApp icon */}
      <WhatsappLogo className="relative z-10 h-7 w-7" />

      {/* Tooltip */}
      <span
        className="
          pointer-events-none
          absolute right-full mr-3
          hidden whitespace-nowrap
          rounded-md
          bg-foreground
          px-3 py-1.5
          text-xs font-medium
          text-background
          opacity-0 shadow
          transition-opacity
          group-hover:opacity-100
          md:block
        "
      >
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
