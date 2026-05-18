import { Link } from "@tanstack/react-router";
import { Anchor, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="HolivET Africa logo" className="h-9 w-9 rounded-xl bg-gradient-primary p-1" />
            <div className="font-semibold tracking-tight">HolivET Africa</div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Your trusted clearing and forwarding partner, moving cargo from Mombasa Port and JKIA across East Africa.
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
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +254 733 917 543</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> sales@holivetafrica.com</li>
            <li className="flex items-start gap-2"><Anchor className="h-4 w-4 mt-0.5 text-accent" /> 9.00 AM – 10.00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <div>© {new Date().getFullYear()} HolivET Africa. KRA Licensed C&F Agent.</div>
          <div>KIFWA Member · AEO Certified · KEBS Approved</div>
        </div>
      </div>
    </footer>
  );
}
