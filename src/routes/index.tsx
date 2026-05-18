import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Estimator } from "@/components/home/Estimator";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HolivET Africa — Nairobi's Premier Clearing & Forwarding Partner" },
      { name: "description", content: "Seamless customs clearance, ocean & air freight, and inland haulage from Mombasa Port and JKIA across East Africa." },
      { property: "og:title", content: "HolivET Africa — Global Logistics, Local Expertise" },
      { property: "og:description", content: "Real-time shipment tracking, KRA-licensed customs clearance, and end-to-end freight in Kenya." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <Estimator />
    </SiteLayout>
  );
}
