import { useShipments } from "./useShipments";

export function ShipmentList() {
  const { data: rows, isLoading, error } = useShipments();

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
            {isLoading && (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-muted-foreground">
                  Loading shipment data…
                </td>
              </tr>
            )}
            {error && (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-destructive">
                  Unable to load shipments. Please refresh.
                </td>
              </tr>
            )}
            {rows?.map((r) => (
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
