import { Link, useRouterState, useRouter } from "@tanstack/react-router";
import { Menu, X, LogIn, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { clearAuthToken, getAuthToken } from "@/lib/auth";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [authToken, setAuthToken] = useState(getAuthToken());
  const router = useRouter();
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setAuthToken(getAuthToken());
  }, [path]);

  const authenticated = Boolean(authToken);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<Link to="/" className="flex items-center gap-3 group">
            <img src="/logo.svg" alt="HolivET Africa logo" className="h-9 w-9 rounded-xl bg-white/10 p-1" />
          <div className="leading-tight">
            <div className="font-bold tracking-tight text-foreground text-lg">HolivET Africa</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-accent">Clearing & Forwarding</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
          {authenticated ? (
            <Link
              to="/admin/dashboard"
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                path === "/admin/dashboard" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Dashboard
              {path === "/admin/dashboard" && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />
              )}
            </Link>
          ) : null}
          {authenticated ? (
            <button
              onClick={() => {
                clearAuthToken();
                setAuthToken(null);
                router.navigate({ to: "/admin/login" });
              }}
              className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted/80"
            >
              <LogOut className="h-4 w-4" /> Logout
            </button>
          ) : (
            <Link
              to="/admin/login"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              <LogIn className="h-4 w-4" /> Login
            </Link>
          )}
        </nav>


        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            {authenticated ? (
              <button
                onClick={() => {
                  clearAuthToken();
                  setAuthToken(null);
                  setOpen(false);
                  router.navigate({ to: "/admin/login" });
                }}
                className="px-3 py-2.5 text-left text-sm font-medium rounded-lg hover:bg-muted"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/admin/login"
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-muted"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
