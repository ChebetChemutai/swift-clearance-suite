import { CreditCard, Download } from "lucide-react";

const lines = [
  { label: "Port Charges (KPA)", detail: "Storage, THC, lift on/off", value: 48200 },
  { label: "Shipping Line Fees", detail: "Maersk demurrage + DO release", value: 67500 },
  { label: "Import Duty", detail: "25% CIF (HS 8517.62)", value: 312800 },
  { label: "VAT", detail: "16% on duty inclusive", value: 154100 },
  { label: "IDF & RDL", detail: "Import declaration + Railway", value: 28400 },
  { label: "Agency Fees", detail: "Clearing & forwarding", value: 35000 },
  { label: "Inland Haulage", detail: "Mombasa → Nairobi ICD", value: 78000 },
];

const KES = (n: number) => `KES ${n.toLocaleString()}`;
const total = lines.reduce((a, b) => a + b.value, 0);

export function InvoiceSummary() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-7 shadow-soft">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Invoice summary</div>
          <div className="text-lg font-semibold tracking-tight">Statement #FI-CA-22918</div>
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs font-medium hover:bg-muted">
          <Download className="h-3.5 w-3.5" /> PDF
        </button>
      </div>

      <div className="space-y-1">
        {lines.map((l) => (
          <div key={l.label} className="flex items-center justify-between py-2.5 border-b border-border/60 last:border-0">
            <div className="min-w-0">
              <div className="text-sm font-medium truncate">{l.label}</div>
              <div className="text-xs text-muted-foreground truncate">{l.detail}</div>
            </div>
            <div className="text-sm font-semibold tabular-nums shrink-0 ml-4">{KES(l.value)}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-gradient-primary text-primary-foreground p-5">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-primary-foreground/70">Total payable</div>
            <div className="mt-1 text-3xl font-semibold tracking-tight tabular-nums">{KES(total)}</div>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-glow hover:brightness-105 transition">
            <CreditCard className="h-4 w-4" /> Pay now
          </button>
        </div>
      </div>
    </div>
  );
}
