"use client"

import { useEffect, useState } from "react"
import {
  HiOutlineUser,
  HiOutlineInformationCircle,
  HiOutlineHome,
  HiOutlineBuildingOffice2,
  HiOutlineEnvelope,
} from "react-icons/hi2";
export default function Home() {
  const [language, setLanguage] = useState<"en" | "zh">("en")

useEffect(() => {
  const savedLanguage = localStorage.getItem("preferredLanguage")

  if (savedLanguage === "en" || savedLanguage === "zh") {
    setLanguage(savedLanguage)
  }
}, [])

const toggleLanguage = () => {
  const nextLanguage = language === "en" ? "zh" : "en"
  setLanguage(nextLanguage)
  localStorage.setItem("preferredLanguage", nextLanguage)
}

  const navItems =
  language === "en"
    ? ["Intro", "About", "Services", "Listings", "Contact"]
    : ["简介", "关于", "服务", "房源", "联系"]

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">

    <div className="absolute left-5 top-5 z-20 opacity-0 animate-[logoFade_1.2s_ease_3.2s_forwards] md:left-6 md:top-6">
     <img
      src="/images/kw-lws_logo_white_transparent.png"
     alt="Brokered By Berk logo"
     className="h-12 w-auto md:h-24"
    />
    </div>

      <div className="pointer-events-none absolute inset-0 z-50 animate-[introFade_0.9s_ease_forwards] bg-black" />

      <div
        className="absolute inset-0 animate-[backgroundFade_3.5s_ease_1.8s_forwards] bg-cover bg-[center_18%] bg-no-repeat opacity-0"
        style={{
          backgroundImage: "url('/images/condo_w_balconies_w_sky.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/35" />

      <button
        onClick={toggleLanguage}
        className="absolute right-6 top-6 z-20 border-2 border-white/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 transition duration-300 hover:bg-white hover:text-neutral-950"
      >
        {language === "en" ? "中文" : "EN"}
      </button>

      <section className="relative z-10 flex min-h-screen items-start justify-center px-6 pt-24 md:items-center md:pt-0">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mt-6 mb-10 flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border-2 border-white/70 md:mt-0 md:h-80 md:w-80">
            <img
              src="/images/berk_head_shot.jpg"
              alt="Berkley portrait"
              className="h-full w-full animate-[portraitFade_1.5s_ease_2.8s_forwards] object-cover opacity-0"
            />
          </div>

          <h1 className="mb-8 text-5xl font-light tracking-[0.18em] md:text-7xl">
            Brokered by Berk
          </h1>

          <div className="mx-auto mb-14 w-full py-4 md:mb-10 md:py-0">
            <div className="relative left-1/2 mx-auto h-40 w-screen -translate-x-1/2 md:h-40">
             <div className="absolute left-1/2 top-1/2 h-[2px] w-[48rem] animate-[topLineSplit_1.2s_ease_0.8s_both] bg-white/70" />

<div className="absolute left-1/2 top-1/2 h-[2px] w-[48rem] animate-[bottomLineSplit_1.2s_ease_0.8s_both] bg-white/70" />

              <div className="absolute left-1/2 top-1/2 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 text-white/85 opacity-0 animate-[descriptionReveal_1.2s_ease_1.4s_forwards]">

  {language === "en" ? (
    <>
      <div className="mb-3 text-sm uppercase tracking-[0.24em] md:tracking-[0.28em]">
        Brokered
      </div>

      <div className="mx-auto max-w-[22rem] text-sm uppercase leading-8 tracking-[0.22em] md:max-w-3xl md:tracking-[0.28em]">
  ...to arrange, negotiate, or facilitate a deal or agreement between two or more parties...
</div>

      <div className="mt-3 text-sm uppercase tracking-[0.24em] md:tracking-[0.28em]">
        What can I do for you?
      </div>
    </>
  ) : (
    <>
      <div className="mb-4 text-xl tracking-[0.18em] md:text-sm md:tracking-[0.28em]">
        经纪
      </div>

      <div className="mx-auto max-w-[20rem] text-base leading-9 tracking-[0.08em] md:max-w-3xl md:text-sm md:leading-8 md:tracking-[0.12em]">
      ....安排、协商或促成双方或多方之间的
      <br />
       交易与协议....
      </div>

      <div className="mt-4 text-sm tracking-[0.12em]">
        我能为您做些什么？
      </div>
    </>
  )}

</div>
            </div>
          </div>

          <div className="mx-auto -mt-12 h-16 w-[2px] bg-white/70 opacity-0 animate-[navFade_1.2s_ease_0.6s_forwards] md:-mt-4 md:h-20" />

          <nav className="mx-auto grid w-full max-w-sm gap-3 animate-[navFade_1.2s_ease_0.6s_forwards] opacity-0 md:max-w-5xl md:grid-cols-5 md:gap-0 md:border-2 md:border-white/70">
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
      className={`flex items-center justify-between border-2 border-white/70 bg-black/10 backdrop-blur-sm px-6 py-4 text-sm uppercase tracking-[0.25em] text-white/85 transition duration-300 hover:bg-white hover:text-neutral-950 hover:tracking-[0.32em] md:justify-center md:border-0 ${
        index !== navItems.length - 1 ? "md:border-r-2 md:border-white/70" : ""
      }`}
    >
      <div className="flex w-full items-center md:contents">
  <span className="w-10 text-2xl text-white/85 md:hidden">
    {index === 0 ? (
      <HiOutlineUser />
    ) : index === 1 ? (
      <HiOutlineInformationCircle />
    ) : index === 2 ? (
      <HiOutlineHome />
    ) : index === 3 ? (
      <HiOutlineBuildingOffice2 />
    ) : (
      <HiOutlineEnvelope />
    )}
  </span>

  <span className="flex-1 pl-4 text-left md:flex-none md:pl-0 md:text-center">
    {item}
  </span>

  <span className="w-6 text-right md:hidden">
    ›
  </span>
</div>
    </a>
  ))}
</nav>
        </div>
      </section>
    </main>
  )
}