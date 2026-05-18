import { Ship, Plane, Truck, FileCheck2, Warehouse, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Ocean Freight",
    desc: "FCL & LCL via Mombasa Port. Maersk, MSC, CMA CGM partnerships.",
    tag: "Sea",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Plane,
    title: "Air Freight",
    desc: "Express clearance through JKIA cargo terminal — same-day release.",
    tag: "Air",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Truck,
    title: "Road Transport",
    desc: "Modern fleet for Mombasa–Nairobi–Kampala–Kigali corridor haulage.",
    tag: "Land",
    image:
      "https://images.unsplash.com/photo-1518546305925-2b78b90f3f57?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: FileCheck2,
    title: "Customs Clearance",
    desc: "KRA iCMS entries, KEBS PVoC, duty optimization & AEO benefits.",
    tag: "Compliance",
    image:
      "https://images.unsplash.com/photo-1581091215367-12dc9f9878a4?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    desc: "Bonded & general warehousing in Industrial Area & Athi River.",
    tag: "Storage",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: FileCheck2,
    title: "Project Cargo",
    desc: "Heavy lift, OOG and turnkey logistics for industrial projects.",
    tag: "Specialty",
    image:
      "https://images.unsplash.com/photo-1470761867315-319b57bff6b4?auto=format&fit=crop&w=900&q=80",
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
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-elegant hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
                  <s.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
