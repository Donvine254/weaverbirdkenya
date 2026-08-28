import { ChevronRight, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import weaverLogo from "@/assets/logo.jpg";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { products } from "@/assets/uniforms";

/* ----------------- Brand Logo ----------------- */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={weaverLogo}
        alt="Weaverbird Apparel Solutions logo"
        className="h-12 w-auto object-contain sm:h-16"
      />
      <div className="hidden flex-col leading-tight sm:flex">
        <span className="text-lg font-bold tracking-wide text-white">WEAVERBIRD</span>
        <span className="text-xs font-cursive font-medium  text-white/70">
          Garments Manufacturer
        </span>
      </div>
    </div>
  );
}

/* ----------------- Header ----------------- */
export function Header({ current = "Home" }: { current?: string }) {
  const links: { label: string; to?: string; href?: string }[] = [
    { label: "Home", to: "/" },
    { label: "Products", href: "/#products" },
    { label: "Services", to: "/services" },
    { label: "Industries", href: "/#industries" },
    // { label: "Manufacturing", href: "/#manufacturing" },
    // { label: "Gallery", href: "/#gallery" },
    { label: "Branches", to: "/branches" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
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
            const inner = (
              <>
                {l.label}
                {isActive && (
                  <span
                    className="absolute -bottom-2 left-0 h-0.5 w-6"
                    style={{ background: "var(--accent-red)" }}
                  />
                )}
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
