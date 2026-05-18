import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ShipmentTracker } from "@/components/dashboard/ShipmentTracker";
import { DocumentVault } from "@/components/dashboard/DocumentVault";
import { InvoiceSummary } from "@/components/dashboard/InvoiceSummary";
import { StatsRow } from "@/components/dashboard/StatsRow";
import { ShipmentList } from "@/components/dashboard/ShipmentList";
import { getAuthToken } from "@/lib/auth";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({
    meta: [
      { title: "Client Dashboard — HolivET Africa" },
      { name: "description", content: "Real-time shipment tracking, document vault, and invoicing for active cargo." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const router = useRouter();
  const token = getAuthToken();

  useEffect(() => {
    if (!token) {
      router.navigate({ to: "/admin/login" });
    }
  }, [router, token]);

  if (!token) {
    return null;
  }

  return (
    <SiteLayout>
      <section className="bg-gradient-mesh">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-6">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Welcome back</div>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight">Sahara Foods Ltd</h1>
              <p className="mt-1 text-muted-foreground">Here's what's moving today across your shipments.</p>
            </div>
            <div className="text-sm text-muted-foreground">
              Last sync · <span className="text-foreground font-medium">2 min ago</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-10 space-y-8">
        <StatsRow />
        <ShipmentTracker />
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3"><DocumentVault /></div>
          <div className="lg:col-span-2"><InvoiceSummary /></div>
        </div>
        <ShipmentList />
      </div>
    </SiteLayout>
  );
}
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/dashboard/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/dashboard/new"!</div>
}
