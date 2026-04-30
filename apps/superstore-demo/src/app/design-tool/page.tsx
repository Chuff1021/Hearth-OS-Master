"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Camera, CheckCircle, Flame, Home, Mail, Phone, Ruler, Send, Wrench, Zap } from "lucide-react";

type Answers = {
  projectType: string;
  fuel: string;
  roomSize: string;
  style: string;
  budget: string;
  timeline: string;
  zip: string;
  contact: string;
  notes: string;
};

const initialAnswers: Answers = {
  projectType: "",
  fuel: "",
  roomSize: "",
  style: "",
  budget: "",
  timeline: "",
  zip: "",
  contact: "",
  notes: "",
};

const steps = ["Project", "Fuel", "Room", "Style", "Budget", "Contact"] as const;

const options = {
  projectType: [
    ["New fireplace", "Starting from a blank wall or new build"],
    ["Fireplace insert", "Upgrading an existing masonry/firebox opening"],
    ["Freestanding stove", "Wood, pellet, or gas stove project"],
    ["Replacement part", "I need help finding a compatible part"],
  ],
  fuel: [
    ["Gas", "Convenient, strong heat, clean look"],
    ["Wood", "Classic burn and high-output heat"],
    ["Electric", "Simple install, no venting"],
    ["Pellet", "Efficient automated solid fuel"],
    ["Not sure", "I want expert guidance"],
  ],
  roomSize: [
    ["Small", "Bedroom, office, den"],
    ["Medium", "Living room or family room"],
    ["Large", "Great room or open concept"],
    ["Need measurements", "I need help figuring this out"],
  ],
  style: [
    ["Traditional", "Mantel, brick, classic hearth"],
    ["Modern linear", "Clean face, long flame, minimal trim"],
    ["Rustic", "Stone, wood tones, cabin feel"],
    ["Transitional", "Warm but clean and flexible"],
  ],
  budget: [
    ["Under $2,500", "Simple unit or parts project"],
    ["$2,500–$5,000", "Entry-to-mid fireplace project"],
    ["$5,000–$10,000", "Premium fireplace or install-ready package"],
    ["$10,000+", "Full hearth / remodel / high-end unit"],
  ],
};

function OptionButton({ selected, title, subtitle, onClick }: { selected: boolean; title: string; subtitle: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border p-5 text-left transition ${
        selected
          ? "border-[#fde428] bg-[#eef6ff] shadow-[0_16px_38px_rgba(253,228,40,0.14)]"
          : "border-[#c8d8e8] bg-white hover:border-[#fde428] hover:bg-[#f7fbff]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-black tracking-[-0.02em] text-[#001f3d]">{title}</p>
          <p className="mt-2 text-sm leading-6 text-[#52677d]">{subtitle}</p>
        </div>
        {selected && <CheckCircle className="h-5 w-5 shrink-0 text-[#fde428]" />}
      </div>
    </button>
  );
}

export default function DesignToolPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const progress = Math.round(((step + 1) / steps.length) * 100);

  const setAnswer = (key: keyof Answers, value: string) => {
    setAnswers((current) => ({ ...current, [key]: value }));
  };

  const next = () => setStep((current) => Math.min(current + 1, steps.length - 1));
  const back = () => setStep((current) => Math.max(current - 1, 0));

  const canContinue =
    step === 0 ? Boolean(answers.projectType) :
    step === 1 ? Boolean(answers.fuel) :
    step === 2 ? Boolean(answers.roomSize) :
    step === 3 ? Boolean(answers.style) :
    step === 4 ? Boolean(answers.budget) :
    Boolean(answers.contact);

  const mailtoHref = `mailto:info@acozyfireplace.com?subject=${encodeURIComponent("Fireplace matchmaker request")}&body=${encodeURIComponent(`Contact: ${answers.contact}\nZip: ${answers.zip}\nTimeline: ${answers.timeline}\nProject type: ${answers.projectType}\nFuel: ${answers.fuel}\nRoom size: ${answers.roomSize}\nStyle: ${answers.style}\nBudget: ${answers.budget}\n\nNotes:\n${answers.notes}`)}`;

  return (
    <main className="min-h-screen bg-[#f7f1e8]">
      <section className="relative overflow-hidden bg-[#001f3d] px-4 py-16 text-white md:px-5 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(253,228,40,0.24),transparent_34%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#fde428]">Fireplace Matchmaker</p>
          <h1 className="mt-5 text-[44px] font-black leading-[0.98] tracking-[-0.055em] md:text-[72px]">
            Find the right fireplace without guessing.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#d7e6f7]">
            Answer a few practical planning questions so A Cozy Fireplace can narrow fuel type, fitment, style, budget, and next steps for expert follow-up.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-8 px-4 py-10 md:px-5 lg:grid-cols-[0.72fr_0.28fr]">
        <div className="border border-[#e2d3c0] bg-white p-6 shadow-[0_24px_80px_rgba(48,31,14,0.08)] md:p-8">
          <>
              <div className="mb-8">
                <div className="mb-3 flex items-center justify-between text-sm text-[#7a6d5f]">
                  <span className="font-bold">Step {step + 1} of {steps.length}: {steps[step]}</span>
                  <span>{progress}% complete</span>
                </div>
                <div className="h-2 bg-[#efe5d7]">
                  <div className="h-full bg-[#fde428] transition-all" style={{ width: `${progress}%` }} />
                </div>
              </div>

              {step === 0 && (
                <div>
                  <h2 className="text-3xl font-black tracking-[-0.04em] text-[#001f3d]">What are you trying to do?</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {options.projectType.map(([title, subtitle]) => (
                      <OptionButton key={title} title={title} subtitle={subtitle} selected={answers.projectType === title} onClick={() => setAnswer("projectType", title)} />
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h2 className="text-3xl font-black tracking-[-0.04em] text-[#001f3d]">Preferred fuel type?</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {options.fuel.map(([title, subtitle]) => (
                      <OptionButton key={title} title={title} subtitle={subtitle} selected={answers.fuel === title} onClick={() => setAnswer("fuel", title)} />
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-3xl font-black tracking-[-0.04em] text-[#001f3d]">What size space are we planning for?</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {options.roomSize.map(([title, subtitle]) => (
                      <OptionButton key={title} title={title} subtitle={subtitle} selected={answers.roomSize === title} onClick={() => setAnswer("roomSize", title)} />
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-3xl font-black tracking-[-0.04em] text-[#001f3d]">What style feels right?</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {options.style.map(([title, subtitle]) => (
                      <OptionButton key={title} title={title} subtitle={subtitle} selected={answers.style === title} onClick={() => setAnswer("style", title)} />
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="text-3xl font-black tracking-[-0.04em] text-[#001f3d]">What budget range should we respect?</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {options.budget.map(([title, subtitle]) => (
                      <OptionButton key={title} title={title} subtitle={subtitle} selected={answers.budget === title} onClick={() => setAnswer("budget", title)} />
                    ))}
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h2 className="text-3xl font-black tracking-[-0.04em] text-[#001f3d]">Where should we send your plan?</h2>
                  <div className="mt-6 grid gap-4">
                    <input className="border border-[#c8d8e8] px-4 py-3 outline-none focus:border-[#fde428]" placeholder="Email or phone" value={answers.contact} onChange={(e) => setAnswer("contact", e.target.value)} />
                    <input className="border border-[#c8d8e8] px-4 py-3 outline-none focus:border-[#fde428]" placeholder="Zip code" value={answers.zip} onChange={(e) => setAnswer("zip", e.target.value)} />
                    <input className="border border-[#c8d8e8] px-4 py-3 outline-none focus:border-[#fde428]" placeholder="Timeline: now, 30 days, this season, researching" value={answers.timeline} onChange={(e) => setAnswer("timeline", e.target.value)} />
                    <textarea className="min-h-32 border border-[#c8d8e8] px-4 py-3 outline-none focus:border-[#fde428]" placeholder="Optional: dimensions, model number, photos you can send later, or anything we should know" value={answers.notes} onChange={(e) => setAnswer("notes", e.target.value)} />
                  </div>
                </div>
              )}

              <div className="mt-10 flex items-center justify-between border-t border-[#c8d8e8] pt-6">
                <button type="button" onClick={back} disabled={step === 0} className="inline-flex items-center gap-2 text-sm font-bold text-[#52677d] disabled:opacity-30">
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                {step < steps.length - 1 ? (
                  <button type="button" onClick={next} disabled={!canContinue} className="inline-flex items-center gap-2 bg-black px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#fde428] hover:text-black disabled:opacity-30">
                    Continue <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <a href={canContinue ? mailtoHref : undefined} aria-disabled={!canContinue} className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-black uppercase tracking-[0.12em] transition ${canContinue ? "bg-[#fde428] text-black hover:bg-[#fff06a]" : "cursor-not-allowed bg-[#fde428]/40 text-black/50"}`}>
                    Email My Plan <Mail className="h-4 w-4" />
                  </a>
                )}
              </div>
            <p className="mt-4 text-sm text-[#52677d]">This opens your email app with the plan filled in so A Cozy Fireplace can review the details and recommend the next step.</p>
          </>
        </div>

        <aside className="space-y-4">
          {[
            { icon: Flame, title: "Practical planning", text: "This tool collects buying signals and fitment details A Cozy Fireplace can actually act on." },
            { icon: Camera, title: "Photos still help", text: "Room or model photos can be reviewed by an expert instead of pretending AI will solve everything." },
            { icon: Wrench, title: "Built for follow-up", text: "The end goal is a quote, part match, or shortlist — not a novelty demo." },
            { icon: Phone, title: "Expert-assisted", text: "Fireplace purchases are complex. This flow supports human trust instead of replacing it." },
            { icon: Mail, title: "Easy follow-up", text: "Your answers turn into a clear email A Cozy Fireplace can review before calling or replying." },
            { icon: Zap, title: "Fast path", text: "A customer can answer the basics in under two minutes." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="border border-[#e2d3c0] bg-white p-5">
              <Icon className="h-6 w-6 text-[#fde428]" />
              <h3 className="mt-4 font-black text-[#001f3d]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#52677d]">{text}</p>
            </div>
          ))}
        </aside>
      </section>
    </main>
  );
}
