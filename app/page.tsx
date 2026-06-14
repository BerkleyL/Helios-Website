"use client"

import { useState } from "react"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "zh">("en")

  const navItems =
  language === "en"
    ? ["Intro", "About", "Services", "Listings", "Contact"]
    : ["简介", "关于", "服务", "房源", "联系"]

  
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none absolute inset-0 z-50 animate-[introFade_0.9s_ease_forwards] bg-black" />

      <div
        className="absolute inset-0 animate-[backgroundFade_3.5s_ease_1.8s_forwards] bg-cover bg-[center_18%] bg-no-repeat opacity-0"
        style={{
          backgroundImage: "url('/images/condo_w_balconies_w_sky.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/35" />

      <button
        onClick={() => setLanguage(language === "en" ? "zh" : "en")}
        className="absolute right-6 top-6 z-20 border-2 border-white/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 transition duration-300 hover:bg-white hover:text-neutral-950"
      >
        {language === "en" ? "中文" : "EN"}
      </button>

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-10 flex h-80 w-80 items-center justify-center overflow-hidden rounded-full border-2 border-white/70">
            <img
              src="/images/berk_head_shot.jpg"
              alt="Berkley portrait"
              className="h-full w-full animate-[portraitFade_1.5s_ease_2.8s_forwards] object-cover opacity-0"
            />
          </div>

          <h1 className="mb-8 text-5xl font-light tracking-[0.18em] md:text-7xl">
            Brokered by Berk
          </h1>

          <div className="mx-auto mb-10 w-full">
            <div className="relative left-1/2 mx-auto h-40 w-screen -translate-x-1/2">
             <div className="absolute left-1/2 top-1/2 h-[2px] w-[48rem] animate-[topLineSplit_1.2s_ease_0.8s_both] bg-white/70" />

<div className="absolute left-1/2 top-1/2 h-[2px] w-[48rem] animate-[bottomLineSplit_1.2s_ease_0.8s_both] bg-white/70" />

              <div className="absolute left-1/2 top-1/2 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 text-white/85 opacity-0 animate-[descriptionReveal_1.2s_ease_1.4s_forwards]">

  {language === "en" ? (
    <>
      <div className="mb-4 text-sm uppercase tracking-[0.28em]">
        Brokered
      </div>

      <div className="text-sm uppercase leading-8 tracking-[0.28em]">
        ...to arrange, negotiate, or facilitate a deal or agreement
      </div>

      <div className="mb-4 text-sm uppercase leading-8 tracking-[0.28em]">
        between two or more parties...
      </div>

      <div className="mt-4 text-sm uppercase tracking-[0.28em]">
        What can I do for you?
      </div>
    </>
  ) : (
    <>
      <div className="mb-4 text-sm tracking-[0.28em]">
        经纪
      </div>

      <div className="text-sm leading-8 tracking-[0.12em]">
        ……安排、协商或促成双方或多方之间的交易与协议……
      </div>

      <div className="mt-4 text-sm tracking-[0.12em]">
        我能为您做些什么？
      </div>
    </>
  )}

</div>
            </div>
          </div>

          <div className="mx-auto -mt-10 h-20 w-[2px] bg-white/70 opacity-0 animate-[navFade_1.2s_ease_0.6s_forwards]" />

          <nav className="mx-auto grid max-w-4xl animate-[navFade_1.2s_ease_0.6s_forwards] border-2 border-white/70 opacity-0 md:grid-cols-5">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={
  item === "Intro" || item === "简介"
    ? "/intro"
    : item === "About" || item === "关于"
    ? "/about"
    : item === "Services" || item === "服务"
    ? "/services"
    : item === "Listings" || item === "房源"
    ? "/listings"
    : item === "Contact" || item === "联系"
    ? "/contact"
    : "/"
}
                className={`px-6 py-5 text-sm uppercase tracking-[0.25em] text-white/85 transition duration-300 hover:bg-white hover:text-neutral-950 hover:tracking-[0.32em] ${
                  index !== navItems.length - 1 ? "md:border-r-2 md:border-white/70" : ""
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </section>
    </main>
  )
}