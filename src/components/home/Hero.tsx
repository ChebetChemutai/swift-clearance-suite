import { Search, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Hero() {
  const [tracking, setTracking] = useState("");

  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-3.5 py-1.5 text-xs font-medium tracking-wide">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Trusted by 800+ importers across East Africa
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-balance">
            Global Logistics,{" "}
            <span className="text-accent">Local Expertise.</span>
            <br />
            <span className="text-primary-foreground/80 font-light">Seamless clearing & forwarding from Mombasa to Nairobi.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/70 leading-relaxed">
            From manifest lodgement to final-mile delivery — we move your cargo through KRA, KEBS and KPA with
            transparent pricing and real-time visibility.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow hover:shadow-elegant transition-all hover:-translate-y-0.5"
            >
              Open Client Dashboard <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl glass-dark px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-white/10 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Quick tracking */}
        <div className="mt-16 max-w-2xl">
          <div className="glass-dark rounded-2xl p-2 shadow-elegant">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex items-center gap-3 flex-1 px-4 py-3">
                <Search className="h-5 w-5 text-accent shrink-0" />
                <input
                  value={tracking}
                  onChange={(e) => setTracking(e.target.value)}
                  placeholder="Enter container or BL number e.g. MSKU7821934"
                  className="w-full bg-transparent text-sm placeholder:text-primary-foreground/50 text-primary-foreground focus:outline-none"
                />
              </div>
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-105 transition"
              >
                Track Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-primary-foreground/60">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            Live status from KRA iCMS, KPA & shipping line APIs
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="relative border-t border-white/10 glass-dark">
        <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: "10,420+", l: "Containers cleared" },
            { v: "48 hrs", l: "Avg. clearance time" },
            { v: "99.2%", l: "On-time release" },
            { v: "22 yrs", l: "In Kenyan logistics" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl font-semibold tracking-tight text-accent">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/60">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
