import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Services } from "@/components/home/Services";
import { Estimator } from "@/components/home/Estimator";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — HolivET Africa" },
      { name: "description", content: "Ocean, air, road freight, customs clearance and warehousing services in Kenya." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Our services</div>
          <h1 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tight max-w-3xl text-balance">
            Every link in your supply chain — handled.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/70">
            From the moment your cargo arrives at Mombasa Port or JKIA, to the second it reaches your warehouse door.
          </p>
        </div>
      </section>
      <Services />
      <Estimator />
    </SiteLayout>
  );
}
