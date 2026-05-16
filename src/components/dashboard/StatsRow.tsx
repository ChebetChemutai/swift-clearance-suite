import { Container, FileCheck2, Clock, Wallet } from "lucide-react";

const stats = [
  { icon: Container, label: "Active shipments", value: "7", trend: "+2 this week", tone: "text-primary" },
  { icon: Clock, label: "Avg. clearance", value: "44h", trend: "−6h vs last mo", tone: "text-success" },
  { icon: FileCheck2, label: "Docs pending", value: "3", trend: "Action needed", tone: "text-warning-foreground" },
  { icon: Wallet, label: "Outstanding", value: "KES 1.28M", trend: "Due May 12", tone: "text-foreground" },
];

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
              <s.icon className="h-5 w-5" />
            </div>
          </div>
          <div className={`mt-4 text-2xl font-semibold tracking-tight tabular-nums ${s.tone}`}>{s.value}</div>
          <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
          <div className="mt-2 text-[11px] font-medium text-muted-foreground/80">{s.trend}</div>
        </div>
      ))}
    </div>
  );
}
