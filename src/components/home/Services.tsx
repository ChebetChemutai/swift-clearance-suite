import { Ship, Plane, Truck, FileCheck2, Warehouse, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Ocean Freight",
    desc: "FCL & LCL via Mombasa Port. Maersk, MSC, CMA CGM partnerships.",
    tag: "Sea",
  },
  {
    icon: Plane,
    title: "Air Freight",
    desc: "Express clearance through JKIA cargo terminal — same-day release.",
    tag: "Air",
  },
  {
    icon: Truck,
    title: "Road Transport",
    desc: "Modern fleet for Mombasa–Nairobi–Kampala–Kigali corridor haulage.",
    tag: "Land",
  },
  {
    icon: FileCheck2,
    title: "Customs Clearance",
    desc: "KRA iCMS entries, KEBS PVoC, duty optimization & AEO benefits.",
    tag: "Compliance",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    desc: "Bonded & general warehousing in Industrial Area & Athi River.",
    tag: "Storage",
  },
  {
    icon: FileCheck2,
    title: "Project Cargo",
    desc: "Heavy lift, OOG and turnkey logistics for industrial projects.",
    tag: "Specialty",
  },
];

export function Services() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">What we do</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
              Full-spectrum freight services, engineered for Kenya.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            One licensed agent. End-to-end visibility. From port arrival to your warehouse door.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:shadow-elegant hover:-translate-y-1"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent/0 group-hover:bg-accent/10 blur-2xl transition" />
              <div className="relative flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1">
                  {s.tag}
                </span>
              </div>
              <h3 className="relative mt-6 text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="relative mt-6 flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                Learn more <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
