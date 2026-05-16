import { Link } from "@tanstack/react-router";
import { Anchor, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary">
              <Anchor className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <div className="font-semibold tracking-tight">Clearing Agency</div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Premier clearing & forwarding partner moving cargo from Mombasa Port and JKIA to every corner of East Africa.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold mb-4">Services</div>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Ocean Freight</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Air Freight</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Customs Clearance</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Warehousing</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-4">Contact</div>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> Likoni Road, Industrial Area, Nairobi</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +254 711 200 300</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> ops@clearingagency.co.ke</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <div>© {new Date().getFullYear()} Clearing Agency Ltd. KRA Licensed C&F Agent.</div>
          <div>KIFWA Member · AEO Certified · KEBS Approved</div>
        </div>
      </div>
    </footer>
  );
}
