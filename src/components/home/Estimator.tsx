import { useEffect, useMemo, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ArrowRight, ArrowLeft, Ship, Plane, Truck, Package, CheckCircle2, Clock } from "lucide-react";
import { apiUrl } from "@/lib/api";

type Mode = "ocean" | "air" | "road";

const origins: Record<Mode, string[]> = {
  ocean: ["Shanghai, CN", "Mumbai, IN", "Jebel Ali, AE", "Rotterdam, NL"],
  air: ["Guangzhou, CN", "Dubai, AE", "Istanbul, TR", "London, UK"],
  road: ["Kampala, UG", "Kigali, RW", "Dar es Salaam, TZ", "Juba, SS"],
};
const destinations = ["Nairobi ICD", "Industrial Area Warehouse", "JKIA", "Eldoret", "Kisumu"];
const cargoTypes = ["General Cargo", "Electronics", "Vehicles & Parts", "Pharmaceuticals", "Hazardous"];

export function Estimator() {
  const [step, setStep] = useState(0);
  const [mode, setMode] = useState<Mode>("ocean");
  const [origin, setOrigin] = useState(origins.ocean[0]);
  const [destination, setDestination] = useState(destinations[0]);
  const [cargo, setCargo] = useState(cargoTypes[0]);
  const [weight, setWeight] = useState(2400);

  const timeline = useMemo(() => {
    const base = mode === "ocean" ? [4, 2, 1, 1, 1] : mode === "air" ? [1, 1, 1, 0, 1] : [1, 1, 0, 1, 1];
    const labels = ["Manifest Lodged", "Customs Assessment", "Duty Settled", "Cargo Released", "Delivered to Door"];
    return labels.map((l, i) => ({ label: l, days: base[i] }));
  }, [mode]);

  const estimateMutation = useMutation(async (payload: { origin: string; destination: string; weightKg: number }) => {
    const res = await fetch(apiUrl("/api/estimate/"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw new Error("Estimate service unavailable");
    }
    return res.json();
  });

  useEffect(() => {
    if (step === 3) {
      estimateMutation.mutate({ origin, destination, weightKg: weight });
    }
  }, [step, origin, destination, weight]);

  const totalDays = timeline.reduce((a, b) => a + b.days, 0);
  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <section className="relative py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Instant estimate</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
              Visualize your clearing window.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Tell us a little about your shipment and we'll project a realistic timeline from manifest lodgement to
              final delivery — no signup required.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Real KRA & KPA processing benchmarks",
                "Mode-aware (ocean / air / road)",
                "Adjusts for cargo type & duty class",
              ].map((b) => (
                <div key={b} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-success" /> {b}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card shadow-elegant p-6 md:p-8">
              {/* Stepper */}
              <div className="flex items-center gap-2 mb-8">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-all ${
                      i <= step ? "bg-accent" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              {step === 0 && (
                <div>
                  <Label>Choose freight mode</Label>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {([
                      { k: "ocean", l: "Ocean", I: Ship },
                      { k: "air", l: "Air", I: Plane },
                      { k: "road", l: "Road", I: Truck },
                    ] as const).map(({ k, l, I }) => (
                      <button
                        key={k}
                        onClick={() => {
                          setMode(k);
                          setOrigin(origins[k][0]);
                        }}
                        className={`group rounded-2xl border p-5 text-left transition ${
                          mode === k
                            ? "border-primary bg-primary text-primary-foreground shadow-soft"
                            : "border-border bg-card hover:border-primary/40"
                        }`}
                      >
                        <I className="h-6 w-6" />
                        <div className="mt-3 font-semibold">{l}</div>
                        <div className={`text-xs ${mode === k ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                          {k === "ocean" ? "FCL / LCL" : k === "air" ? "Express" : "Cross-border"}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Origin">
                    <Select value={origin} onChange={setOrigin} options={origins[mode]} />
                  </Field>
                  <Field label="Destination">
                    <Select value={destination} onChange={setDestination} options={destinations} />
                  </Field>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <Field label="Cargo type">
                    <Select value={cargo} onChange={setCargo} options={cargoTypes} />
                  </Field>
                  <Field label={`Weight: ${weight.toLocaleString()} kg`}>
                    <input
                      type="range"
                      min={100}
                      max={20000}
                      step={100}
                      value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      className="w-full accent-[oklch(0.78_0.17_65)]"
                    />
                  </Field>
                </div>
              )}

              {step === 3 && (
                <div>
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Estimated clearing window</div>
                      <div className="mt-1 text-4xl font-semibold tracking-tight">
                        {totalDays} <span className="text-lg font-normal text-muted-foreground">working days</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-xl bg-success/10 text-success px-3 py-1.5 text-sm font-medium">
                      <Clock className="h-4 w-4" /> Within SLA
                    </div>
                  </div>

                  <div className="mb-6 rounded-3xl border border-border bg-surface p-5 text-sm text-muted-foreground">
                    {estimateMutation.isLoading
                      ? "Requesting a HolivET Africa estimate..."
                      : estimateMutation.error
                      ? "Estimate service unavailable. Please try again."
                      : estimateMutation.data
                      ? `Estimated cost ${estimateMutation.data.currency} ${estimateMutation.data.estimatedCost.toFixed(2)} based on origin ${estimateMutation.data.origin} and destination ${estimateMutation.data.destination}.`
                      : "Your cost estimate will appear here once you reach the final step."}
                  </div>

                  <div className="relative">
                    <div className="absolute left-4 top-3 bottom-3 w-px bg-border" />
                    {timeline.map((t, i) => (
                      <div key={t.label} className="relative flex items-start gap-4 pb-5 last:pb-0">
                        <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold shadow-soft">
                          {i + 1}
                        </div>
                        <div className="flex-1 pt-1">
                          <div className="flex items-center justify-between">
                            <div className="font-medium text-sm">{t.label}</div>
                            <div className="text-xs text-muted-foreground">{t.days}d</div>
                          </div>
                          <div className="mt-1.5 h-1.5 rounded-full bg-muted overflow-hidden">
                            <div
                              className="h-full bg-gradient-accent rounded-full"
                              style={{ width: `${(t.days / Math.max(...timeline.map((x) => x.days))) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3 pt-6 border-t border-border">
                    <Stat label="Mode" value={mode.toUpperCase()} />
                    <Stat label="Route" value={`${origin.split(",")[0]} → ${destination.split(" ")[0]}`} />
                    <Stat label="Weight" value={`${weight.toLocaleString()} kg`} />
                  </div>
                </div>
              )}

              {/* Nav */}
              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={back}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                {step < 3 ? (
                  <button
                    onClick={next}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition"
                  >
                    Continue <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setStep(0)}
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:brightness-105 transition"
                  >
                    <Package className="h-4 w-4" /> New estimate
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{children}</div>;
}
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
function Select({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30"
    >
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-semibold truncate">{value}</div>
    </div>
  );
}
