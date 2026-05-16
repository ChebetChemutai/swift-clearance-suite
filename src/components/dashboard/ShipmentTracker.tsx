import { Check, Anchor, FileSearch, Receipt, PackageCheck, Truck, Home } from "lucide-react";

const steps = [
  { label: "Manifest Lodged", date: "May 02 · 09:14", icon: Anchor, location: "Mombasa Port" },
  { label: "Customs Assessment", date: "May 04 · 14:22", icon: FileSearch, location: "KRA iCMS" },
  { label: "Duty Paid", date: "May 06 · 10:01", icon: Receipt, location: "KRA Settlement" },
  { label: "Cargo Released", date: "May 07 · 16:45", icon: PackageCheck, location: "KPA Yard 18" },
  { label: "En Route to Nairobi ICD", date: "In transit", icon: Truck, location: "Mombasa Rd, Mtito Andei", current: true },
  { label: "Delivered", date: "Pending", icon: Home, location: "Industrial Area, Nairobi" },
];

export function ShipmentTracker() {
  const currentIndex = steps.findIndex((s) => s.current);
  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Active shipment</div>
          <div className="mt-1 text-2xl font-semibold tracking-tight">Container MSKU 7821934</div>
          <div className="mt-1 text-sm text-muted-foreground">BL #MAEU2410098 · 40HC · Sahara Foods Ltd</div>
        </div>
        <div className="inline-flex items-center gap-2 rounded-xl bg-accent/10 text-accent-foreground px-3.5 py-2 text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-foreground">In transit · ETA May 09, 18:30</span>
        </div>
      </div>

      {/* Desktop horizontal timeline */}
      <div className="mt-10 hidden md:block">
        <div className="relative">
          <div className="absolute left-0 right-0 top-5 h-0.5 bg-border" />
          <div
            className="absolute left-0 top-5 h-0.5 bg-gradient-accent transition-all"
            style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
          />
          <div className="relative grid grid-cols-6 gap-2">
            {steps.map((s, i) => {
              const done = i < currentIndex;
              const active = i === currentIndex;
              return (
                <div key={s.label} className="flex flex-col items-center text-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition ${
                      done
                        ? "bg-primary border-primary text-primary-foreground"
                        : active
                        ? "bg-accent border-accent text-accent-foreground shadow-glow"
                        : "bg-card border-border text-muted-foreground"
                    }`}
                  >
                    {done ? <Check className="h-4 w-4" /> : <s.icon className="h-4 w-4" />}
                  </div>
                  <div className={`mt-3 text-xs font-semibold ${active ? "text-foreground" : "text-muted-foreground"}`}>
                    {s.label}
                  </div>
                  <div className="mt-1 text-[11px] text-muted-foreground">{s.date}</div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground/80">{s.location}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile vertical timeline */}
      <div className="mt-8 md:hidden relative">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />
        {steps.map((s, i) => {
          const done = i < currentIndex;
          const active = i === currentIndex;
          return (
            <div key={s.label} className="relative flex gap-4 pb-5 last:pb-0">
              <div
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 ${
                  done
                    ? "bg-primary border-primary text-primary-foreground"
                    : active
                    ? "bg-accent border-accent text-accent-foreground shadow-glow"
                    : "bg-card border-border text-muted-foreground"
                }`}
              >
                {done ? <Check className="h-4 w-4" /> : <s.icon className="h-4 w-4" />}
              </div>
              <div className="flex-1 pt-1.5">
                <div className={`text-sm font-semibold ${active ? "text-foreground" : done ? "text-foreground" : "text-muted-foreground"}`}>
                  {s.label}
                </div>
                <div className="text-xs text-muted-foreground">{s.date} · {s.location}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
