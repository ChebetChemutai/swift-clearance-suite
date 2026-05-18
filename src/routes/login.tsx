import { useEffect, useState } from "react";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { apiUrl } from "@/lib/api";
import { getAuthToken, setAuthToken } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Admin Login — HolivET Africa" },
      { name: "description", content: "Secure admin access to the HolivET Africa client dashboard." },
    ],
  }),
  component: Login,
});

function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (getAuthToken()) {
      router.navigate({ to: "/admin/dashboard" });
    }
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch(apiUrl("/api/admin/login/"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => null);
        throw new Error(json?.detail || "Invalid credentials");
      }

      const data = await res.json();
      setAuthToken(data.token);
      router.navigate({ to: "/admin/dashboard" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SiteLayout>
      <section className="min-h-screen bg-background py-24">
        <div className="mx-auto max-w-xl rounded-3xl border border-border bg-card p-8 shadow-elegant">
          <div className="mb-8">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Admin login</div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">Secure dashboard access</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Enter your admin credentials to view shipments and dashboard analytics.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground">Username</label>
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                placeholder="admin"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Password</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                placeholder="••••••••"
                required
              />
            </div>

            {error ? <p className="text-sm text-destructive">{error}</p> : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>
              <Link
                to="/"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Back to home
              </Link>
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
