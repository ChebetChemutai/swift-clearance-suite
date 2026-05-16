import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Trust } from "@/components/home/Trust";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Clearing Agency Nairobi" },
      { name: "description", content: "22 years moving cargo across East Africa. Meet the team behind Kenya's most trusted C&F agent." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">About us</div>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-balance">
          We've been moving East Africa's cargo since 2002.
        </h1>
        <div className="mt-10 prose prose-lg text-foreground/80 space-y-6 leading-relaxed">
          <p>
            Founded in Mombasa and headquartered in Nairobi's Industrial Area, Clearing Agency began with a single
            customs broker and a fax machine. Today we're a 140-person operation moving 10,000+ containers a year for
            importers across Kenya, Uganda, Rwanda, South Sudan and the DRC.
          </p>
          <p>
            We're KRA-licensed, AEO-certified, KIFWA members and ISO 9001:2015 compliant — but credentials are just the
            start. What our clients value most is what doesn't appear on any certificate: a team that picks up the
            phone, an operations desk that knows every yard officer at KPA by name, and a digital platform that means
            you never have to ask "where's my container?" again.
          </p>
        </div>
      </section>
      <Trust />
    </SiteLayout>
  );
}
