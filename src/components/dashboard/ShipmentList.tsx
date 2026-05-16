const rows = [
  { id: "MSKU7821934", route: "Shanghai → Nairobi ICD", mode: "Ocean", eta: "May 09", status: "In transit", tone: "bg-accent/15 text-accent-foreground" },
  { id: "CMAU4421887", route: "Jebel Ali → Mombasa", mode: "Ocean", eta: "May 14", status: "Customs assessment", tone: "bg-primary/10 text-primary" },
  { id: "AWB-176-44218", route: "Guangzhou → JKIA", mode: "Air", eta: "May 08", status: "Released", tone: "bg-success/15 text-success" },
  { id: "TCLU9982110", route: "Mumbai → Mombasa", mode: "Ocean", eta: "May 22", status: "Manifest lodged", tone: "bg-muted text-muted-foreground" },
  { id: "AWB-220-99812", route: "Istanbul → JKIA", mode: "Air", eta: "May 10", status: "Duty paid", tone: "bg-primary/10 text-primary" },
];

export function ShipmentList() {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
      <div className="px-6 py-5 border-b border-border flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">All shipments</div>
          <div className="text-lg font-semibold tracking-tight">Fleet overview</div>
        </div>
        <button className="text-xs font-medium text-primary hover:underline">View all →</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground bg-muted/40">
              <th className="px-6 py-3 font-semibold">Reference</th>
              <th className="px-6 py-3 font-semibold">Route</th>
              <th className="px-6 py-3 font-semibold">Mode</th>
              <th className="px-6 py-3 font-semibold">ETA</th>
              <th className="px-6 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-border hover:bg-muted/30 transition">
                <td className="px-6 py-4 font-semibold tabular-nums">{r.id}</td>
                <td className="px-6 py-4 text-muted-foreground">{r.route}</td>
                <td className="px-6 py-4">{r.mode}</td>
                <td className="px-6 py-4 tabular-nums">{r.eta}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block text-[10px] font-semibold uppercase tracking-wider rounded-full px-2.5 py-1 ${r.tone}`}>
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
