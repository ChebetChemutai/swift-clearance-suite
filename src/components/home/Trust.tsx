import { Quote, Star, Award, ShieldCheck, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Aisha Mwangi",
    role: "Procurement Lead, Sahara Foods",
    body: "Our perishables now clear JKIA in under 18 hours. The dashboard means I never have to chase status updates.",
  },
  {
    name: "Daniel Otieno",
    role: "MD, Rift Valley Motors",
    body: "We import 40+ vehicles monthly. Their KRA team is meticulous — duty bills are always optimized and accurate.",
  },
  {
    name: "Priya Shah",
    role: "Operations, Westlands Pharma",
    body: "From PVoC paperwork to bonded storage in Athi River, they've handled every edge case we've thrown at them.",
  },
];

const badges = [
  { icon: ShieldCheck, label: "AEO Certified" },
  { icon: Award, label: "KIFWA Member" },
  { icon: BadgeCheck, label: "KRA Licensed" },
  { icon: ShieldCheck, label: "ISO 9001:2015" },
];

export function Trust() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Proven partners</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
            Importers, exporters & manufacturers trust us with their cargo.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <Quote className="h-7 w-7 text-accent" />
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">{t.body}</p>
              <div className="mt-6 flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          {badges.map((b) => (
            <div
              key={b.label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
            >
              <b.icon className="h-4 w-4 text-accent" /> {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
