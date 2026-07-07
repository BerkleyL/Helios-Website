"use client";
import Link from "next/link"
import { useEffect, useState } from "react";
import ServiceExpandableCards from "@/components/ServiceExpandableCards";
export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

const [language, setLanguage] = useState<"en" | "zh">("en");

useEffect(() => {
  const savedLanguage = localStorage.getItem("preferredLanguage");

  if (savedLanguage === "en" || savedLanguage === "zh") {
    setLanguage(savedLanguage);
  }
}, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 px-6 py-16 text-white">
      <div
        className="absolute inset-0 bg-cover bg-[center_18%] bg-no-repeat"
        style={{
          backgroundImage: "url('/images/condo_w_balconies_w_sky.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />

      <section className="relative z-10 mx-auto max-w-5xl rounded-sm bg-neutral-950/80 px-8 py-10 shadow-2xl ring-1 ring-white/20 md:px-14 md:py-14">
        <div className="mb-10 flex items-start justify-between gap-8">
          <div>
            <h1 className="text-3xl font-light uppercase tracking-[0.35em]">
            {language === "en" ? "Services" : "服务"}
            </h1>
            <div className="mt-5 h-[2px] w-40 bg-white/70" />
          </div>

          <Link
            href="/"
            className="text-3xl font-light text-white/80 transition hover:text-white"
            aria-label="Return home"
          >
            ×
          </Link>
        </div>
        
        <div className="mb-10 overflow-hidden rounded-sm">
         <img
          src="/images/cropped_curved_sofa_loft.jpg"
         alt="Contact"
         className="h-72 w-full object-cover object-[center_60%] opacity-90"
         />
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="space-y-7 text-lg leading-9 text-white/85">

          {language === "en" ? (
  <>
            <p>
              I may be a realtor now, but at heart, I still approach things like a contractor.
            </p>

              <p>
              When you're planning a project, you don't hire the first contractor you meet—you talk to a few, ask questions, and see who feels right. I believe choosing a realtor should be no different.
            </p>

              <p>
              Invite me to sit down with you. Share your buying, selling, or relocation plans. Ask me anything. I'm happy to offer my thoughts and answer your questions.
            </p>
  
            <p>
              If you feel I bring value to the table, then let's keep the conversation going.
            </p>

</>
) : (
  <>
    <p>中文内容即将更新。</p>
  </>
)}

          </div>
          <div className="lg:sticky lg:top-32">
            <ServiceExpandableCards
              onLearnMore={setSelectedService}
              language={language}
            />
          </div>
        
        </div>
        

{selectedService !== null && selectedService !== "" && (
  <div className="mt-20 border-t border-white/15 pt-10">
    <h2 className="text-3xl tracking-[0.2em] text-white uppercase">
      Detailed Service Section
    </h2>

    <div className="mt-8">
      <h3 className="text-2xl tracking-[0.2em] text-white uppercase">
        {selectedService}
      </h3>

      <p className="mt-6 text-lg leading-8 text-white/75">
        {selectedService} details to be built out shortly.
      </p>
    </div>
  </div>
)}

      </section>
    </main>
  )
}