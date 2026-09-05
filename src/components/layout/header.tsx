import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import weaverLogo from "@/assets/logo.jpg";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

/* ----------------- Product categories ----------------- */
const productCategories = [
  { label: "School Uniforms", hash: "school-uniforms" },
  { label: "Corporate Wear", hash: "corporate-wear" },
  { label: "Workwear & Overalls", hash: "workwear-overalls" },
  { label: "Medical Wear", hash: "medical-wear" },
  { label: "Hospitality Wear", hash: "hospitality-wear" },
  { label: "T-Shirts & Polo Shirts", hash: "tshirts-polos" },
  { label: "Jumpers, Sweaters & Fleece", hash: "jumpers-sweaters" },
  { label: "Tracksuits & Sportswear", hash: "tracksuits-sportswear" },
  { label: "Maasai Shukas", hash: "shukas-heritage" },
];

/* ----------------- Brand Logo ----------------- */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={weaverLogo}
        alt="Weaverbird Garments Manufacturers Ltd"
        className="h-12 w-auto object-contain sm:h-16"
      />
      <div className="hidden flex-col leading-tight sm:flex">
        <span className="text-lg font-bold tracking-wide text-white">WEAVER BIRD</span>
        <span className="text-xs font-cursive font-medium  text-white/70">
          Garments Manufacturers Ltd
        </span>
      </div>
    </div>
  );
}

/* ----------------- Header ----------------- */
export function Header({ current = "Home" }: { current?: string }) {
  const links: { label: string; to?: string; href?: string }[] = [
    { label: "Home", to: "/" },
    { label: "Industries", href: "/#industries" },
    { label: "Products", to: "/products" },
    { label: "Services", to: "/services" },
    { label: "Branches", to: "/branches" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 80) setHidden(true);
      else if (y < lastY) setHidden(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!productsOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setProductsOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [productsOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      style={{ background: "var(--primary-darker)" }}
    >
      <a
        href="#main-content"
        className="sr-only rounded-md bg-white px-4 py-2 text-sm font-semibold text-black focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo light />
        <nav className="hidden items-center gap-7 text-sm font-medium text-white/85 lg:flex">
          {links.map((l) => {
            const isActive = l.label === current;
            const cls = `relative transition hover:text-white ${isActive ? "text-white" : ""}`;
            const underline = isActive && (
              <span
                className="absolute -bottom-2 left-0 h-0.5 w-6"
                style={{ background: "var(--accent-red)" }}
              />
            );
            if (l.label === "Products") {
              return (
                <div key={l.label} ref={dropdownRef} className="relative flex items-center gap-0.5">
                  <Link to="/products" className={cls} onClick={() => setProductsOpen(false)}>
                    Products
                    {underline}
                  </Link>
                  <button
                    type="button"
                    aria-label="Show product categories"
                    aria-expanded={productsOpen}
                    onClick={() => setProductsOpen((v) => !v)}
                    className="rounded-sm p-0.5 text-white/70 transition hover:text-white"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {productsOpen && (
                    <div
                      className="absolute left-0 top-full z-50 mt-3 w-64 overflow-hidden rounded-md border border-white/10 py-2 shadow-xl"
                      style={{ background: "var(--primary-darker)" }}
                    >
                      {productCategories.map((c) => (
                        <a
                          key={c.hash}
                          href={`/products#${c.hash}`}
                          onClick={() => setProductsOpen(false)}
                          className="block px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                        >
                          {c.label}
                        </a>
                      ))}
                      <div className="mt-1 border-t border-white/10 pt-1">
                        <Link
                          to="/products"
                          onClick={() => setProductsOpen(false)}
                          className="block px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                          View all products
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            const inner = (
              <>
                {l.label}
                {underline}
              </>
            );
            return l.to ? (
              <Link key={l.label} to={l.to} className={cls}>
                {inner}
              </Link>
            ) : (
              <a key={l.label} href={l.href} className={cls}>
                {inner}
              </a>
            );
          })}
        </nav>
        <Link
          to="/quote"
          className="group hidden items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95 lg:inline-flex"
          style={{ background: "var(--color-maroon)", boxShadow: "var(--shadow-red)" }}
        >
          Get a Quote{" "}
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="rounded-md p-2 text-white lg:hidden" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-l-0 p-0"
            style={{ background: "var(--primary-darker)", color: "var(--primary-foreground)" }}
          >
            <SheetHeader className="border-b border-white/10 p-6 text-left">
              <SheetTitle className="text-white">
                <Logo light />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 p-4">
              {links.map((l) => {
                const isActive = l.label === current;
                const cls = `rounded-md px-3 py-3 text-sm font-medium transition hover:bg-white/10 ${isActive ? "text-white" : "text-white/80"}`;
                if (l.label === "Products") {
                  return (
                    <div key={l.label}>
                      <div className="flex items-center">
                        <Link
                          to="/products"
                          onClick={() => setOpen(false)}
                          className={`${cls} flex-1`}
                        >
                          Products
                        </Link>
                        <button
                          type="button"
                          aria-label="Show product categories"
                          aria-expanded={mobileProductsOpen}
                          onClick={() => setMobileProductsOpen((v) => !v)}
                          className="rounded-md p-3 text-white/70 transition hover:bg-white/10 hover:text-white"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>
                      {mobileProductsOpen && (
                        <div className="ml-3 flex flex-col border-l border-white/10 pl-2">
                          {productCategories.map((c) => (
                            <a
                              key={c.hash}
                              href={`/products#${c.hash}`}
                              onClick={() => setOpen(false)}
                              className="rounded-md px-3 py-2.5 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                            >
                              {c.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return l.to ? (
                  <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className={cls}>
                    {l.label}
                  </Link>
                ) : (
                  <a key={l.label} href={l.href} onClick={() => setOpen(false)} className={cls}>
                    {l.label}
                  </a>
                );
              })}
              <Link
                to="/quote"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-md"
                style={{ background: "var(--color-maroon)", boxShadow: "var(--shadow-red)" }}
              >
                Get a Quote <ChevronRight className="h-4 w-4" />
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
