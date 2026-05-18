import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Anchor, Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HolivET Africa" },
      { name: "description", content: "Get a quote or speak with the HolivET Africa operations team in Nairobi or Mombasa." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Get in touch</div>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-balance">
            Talk to a real clearing agent.
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
            Whether it's a one-off shipment or an ongoing import program, our ops desk responds within 30 minutes during business hours.
          </p>
          <div className="mt-10 space-y-5">
            <Item I={MapPin} title="Head office" body="Likoni Road, Industrial Area, Nairobi" />
            <Item I={MapPin} title="Mombasa branch" body="Moi Avenue, near Kilindini Port Gate 18" />
            <Item I={Phone} title="Sales" body="+254 733 917 543" />
            <Item I={Mail} title="Email" body="sales@holivetafrica.com" />
            <Item I={Anchor} title="Hours" body="9.00 AM – 10.00 PM" />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-3xl border border-border bg-card p-8 shadow-elegant space-y-5 h-fit"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name"><input className={input} placeholder="Aisha Mwangi" /></Field>
            <Field label="Company"><input className={input} placeholder="Sahara Foods Ltd" /></Field>
          </div>
          <Field label="Email"><input type="email" className={input} placeholder="aisha@company.co.ke" /></Field>
          <Field label="Shipment type">
            <select className={input} defaultValue="">
              <option value="" disabled>Select…</option>
              <option>Ocean Freight (FCL)</option>
              <option>Ocean Freight (LCL)</option>
              <option>Air Freight</option>
              <option>Cross-border Road</option>
              <option>Customs only</option>
            </select>
          </Field>
          <Field label="Message"><textarea rows={4} className={input} placeholder="Tell us about your cargo…" /></Field>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition"
          >
            {sent ? "Thanks — we'll be in touch shortly." : <>Send enquiry <Send className="h-4 w-4" /></>}
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}

const input = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">{label}</div>
      {children}
    </label>
  );
}

function Item({ I, title, body }: { I: any; title: string; body: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <I className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground">{body}</div>
      </div>
    </div>
  );
}
