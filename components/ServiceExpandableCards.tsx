"use client";
import { useState } from "react";
import styles from "./ServiceExpandableCards.module.css";
const services = [
  {
    titleEn: "Selling",
    titleZh: "出售房产",
    href: "#selling",
    text: "Strategic pricing, preparation guidance, marketing coordination, and negotiation support to help you move confidently from listing to closing.",
  },
  {
    titleEn: "Buying",
    titleZh: "购买房产",
    href: "#buying",
    text: "Clear guidance through the home search, offer, inspection, financing, and closing process so you can make informed decisions.",
  },
    {
      titleEn: "Condos",
      titleZh: "公寓",
      href: "#condos",
      text: "Condominium purchases and sales require specialized knowledge of HOA documents, reserve studies, assessments, rental restrictions, and building-specific market conditions.",
    },
  {
  titleEn: "中文服务",
  titleZh: "中文服务",
  href: "#chinese",
  text: "Bilingual support for Chinese-speaking clients who prefer clear communication in Chinese throughout the buying or selling process.",
},
{
  titleEn: "Relocating",
  titleZh: "搬迁",
  href: "#relocating",
  text: "Neighborhood orientation, market guidance, and practical support for clients moving into or out of the area.",
},
];
type ServiceExpandableCardsProps = {
  onLearnMore: (service: string) => void;
  language: "en" | "zh";
};
export default function ServiceExpandableCards({
  onLearnMore,
  language,
}: ServiceExpandableCardsProps) {
  const [active, setActive] = useState<number | null>(null);

return (
  <div className={styles.wrapper}>
      {active !== null && (
  <div
    className={`${styles.card} relative`}
    style={{ top: `${active * 50}px` }}
  >
    <button
    type="button"
    onClick={() => {
     setActive(null)
     onLearnMore("")
    }}
    className="absolute right-4 top-4 z-20 text-2xl font-light text-white/70 transition hover:text-white"
    aria-label="Close service details"
  >
    ×
    </button>

    <h3>{services[active].titleEn}</h3>
    <div className={styles.divider}></div>
    <p>{services[active].text}</p>
  <button
  className={styles.learnMore}
  onClick={() => onLearnMore(services[active].titleEn)}
>
  Learn More ▼
</button>
  </div>
)}
    

    <div className={styles.buttons}>
      {services.map((service, index) => (
        <button
          key={service.titleEn}
          className={`${styles.button} ${
            active === index ? styles.active : ""
          }`}
          onMouseEnter={() => setActive(index)}
          onClick={() => setActive(active === index ? null : index)}
        >
          {language === "en" ? service.titleEn : service.titleZh}
        </button>
      ))}
    </div>
  </div>
);
}