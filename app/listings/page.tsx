"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
export default function ListingsPage() {

const [language, setLanguage] = useState<"en" | "zh">("en")

useEffect(() => {
  const savedLanguage = localStorage.getItem("preferredLanguage")

  if (savedLanguage === "en" || savedLanguage === "zh") {
    setLanguage(savedLanguage)
  }
}, [])

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
              {language === "en" ? "Listings" : "列表"}
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
            src="/images/cropped_curved_balcony_condos.jpg"
            alt="Berkley portrait"
            className="h-72 w-full object-cover object-center opacity-90"
          />
        </div>
        

        <div className="space-y-7 text-lg leading-9 text-white/85">

{language === "en" ? (
          <>
          <p>
            A KW-LWS Colleague listing would go here.
          </p>
          <p>
            Another KW-LWS Colleague listing would go here.
          </p>

          <p>
            And even more KW-LWS Colleague listings would go here.
          </p>

          </>
        ) : (
          <>
         <p>中文内容即将更新。</p>
        </>
)}

        </div>
      </section>
    </main>
  )
}