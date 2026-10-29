"use client";

import { useState } from "react";

export type FlowingMenuItem = {
  text: string;
  description: string;
  image: string;
};

export default function FlowingMenu({ items }: { items: FlowingMenuItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [lean, setLean] = useState(0);

  return (
    <div
      className="flowing-menu"
      onPointerLeave={() => { setActive(null); setLean(0); }}
      onPointerMove={(event) => {
        const row = (event.target as HTMLElement).closest<HTMLElement>(".flowing-menu__item");
        if (!row) return;
        const rect = row.getBoundingClientRect();
        setLean(Math.max(-12, Math.min(12, (event.clientY - rect.top - rect.height / 2) * 0.16)));
      }}
    >
      {items.map((item, index) => (
        <article
          className={`flowing-menu__item ${active === index ? "is-active" : ""}`}
          key={item.text}
          onPointerEnter={() => setActive(index)}
        >
          <div className="flowing-menu__base">
            <span className="flowing-menu__number">{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.text}</h3>
            <p>{item.description}</p>
            <span className="flowing-menu__arrow">↗</span>
          </div>
          <div className="flowing-menu__band" style={{ transform: `translateY(${active === index ? lean : 0}px)` }}>
            <div className="flowing-menu__track">
              {[0, 1, 2, 3].map((copy) => (
                <div className="flowing-menu__part" key={copy}>
                  <span>{item.text}</span>
                  <i style={{ backgroundImage: `url(${item.image})` }} />
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
