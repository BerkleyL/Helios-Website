"use client";

import { useState } from "react";
import styles from "./ServiceExpandableCards.module.css";

const services = [
  {
    title: "Selling",
    href: "#selling",
    text: "Strategic pricing, preparation guidance, marketing coordination, and negotiation support to help you move confidently from listing to closing.",
  },
  {
    title: "Buying",
    href: "#buying",
    text: "Clear guidance through the home search, offer, inspection, financing, and closing process so you can make informed decisions.",
  },
    {
      title: "Condos",
      href: "#condos",
      text: "Condominium purchases and sales require specialized knowledge of HOA documents, reserve studies, assessments, rental restrictions, and building-specific market conditions.",
    },
  {
  title: "Chinese",
  href: "#chinese",
  text: "Bilingual support for Chinese-speaking clients who prefer clear communication in Chinese throughout the buying or selling process.",
},
{
  title: "Relocating",
  href: "#relocating",
  text: "Neighborhood orientation, market guidance, and practical support for clients moving into or out of the area.",
},
];
type ServiceExpandableCardsProps = {
  onLearnMore: (service: string) => void;
};
export default function ServiceExpandableCards({
  onLearnMore,
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
    onClick={() => setActive(null)}
    className="absolute right-4 top-4 z-20 text-2xl font-light text-white/70 transition hover:text-white"
    aria-label="Close service details"
  >
    ×
    </button>

    <h3>{services[active].title}</h3>
    <div className={styles.divider}></div>
    <p>{services[active].text}</p>
  <button
  className={styles.learnMore}
  onClick={() => onLearnMore(services[active].title)}
>
  Learn More ▼
</button>
  </div>
)}
    

    <div className={styles.buttons}>
      {services.map((service, index) => (
        <button
          key={service.title}
          className={`${styles.button} ${
            active === index ? styles.active : ""
          }`}
          onMouseEnter={() => setActive(index)}
          onClick={() => setActive(active === index ? null : index)}
        >
          {service.title}
        </button>
      ))}
    </div>
  </div>
);
}