import { FileText, Download, Eye, Upload } from "lucide-react";

const docs = [
  { name: "Bill of Lading", code: "MAEU2410098", status: "Approved", date: "May 02" },
  { name: "Commercial Invoice", code: "INV-SF-9821", status: "Approved", date: "May 02" },
  { name: "Packing List", code: "PL-SF-9821", status: "Approved", date: "May 02" },
  { name: "KRA Customs Entry", code: "C17-2024-87231", status: "Approved", date: "May 04" },
  { name: "KEBS PVoC", code: "PVOC-CN-44521", status: "Approved", date: "May 03" },
  { name: "Delivery Order", code: "DO-MSKU-7821934", status: "Pending Review", date: "May 07" },
  { name: "Insurance Certificate", code: "INS-2024-1188", status: "Approved", date: "May 01" },
  { name: "Final Invoice", code: "FI-CA-22918", status: "Draft", date: "—" },
];

const statusStyles: Record<string, string> = {
  Approved: "bg-success/10 text-success",
  "Pending Review": "bg-warning/15 text-warning-foreground",
  Draft: "bg-muted text-muted-foreground",
};

export function DocumentVault() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-7 shadow-soft">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Document vault</div>
          <div className="text-lg font-semibold tracking-tight">8 documents · MSKU 7821934</div>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground hover:shadow-soft transition">
          <Upload className="h-3.5 w-3.5" /> Upload
        </button>
      </div>

      <div className="space-y-2">
        {docs.map((d) => (
          <div
            key={d.code}
            className="group flex items-center gap-4 rounded-xl border border-border bg-background/50 hover:bg-background hover:border-primary/30 hover:shadow-soft transition px-4 py-3"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
              <FileText className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold truncate">{d.name}</div>
              <div className="text-xs text-muted-foreground">{d.code} · {d.date}</div>
            </div>
            <span className={`hidden sm:inline-block text-[10px] font-semibold uppercase tracking-wider rounded-full px-2.5 py-1 ${statusStyles[d.status]}`}>
              {d.status}
            </span>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
              <button className="p-2 rounded-lg hover:bg-muted" aria-label="View"><Eye className="h-4 w-4" /></button>
              <button className="p-2 rounded-lg hover:bg-muted" aria-label="Download"><Download className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
