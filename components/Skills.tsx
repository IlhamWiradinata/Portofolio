"use client";

import { useState } from "react";
import { skillDomain, domainLabels, type Domain } from "@/lib/domain";

type Group = { title: string; note: string; items: string[] };
type Filter = "all" | Domain;

export default function Skills({ groups }: { groups: Group[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [touched, setTouched] = useState(false);

  const all = groups.map((g) => ({ ...g, domain: skillDomain(g.title) }));
  const visible = filter === "all" ? all : all.filter((g) => g.domain === filter);
  const filters: Filter[] = (["all", "code", "industry", "neutral"] as Filter[]).filter(
    (f) => f === "all" || all.some((g) => g.domain === f)
  );

  const choose = (f: Filter) => {
    setTouched(true);
    setFilter(f);
  };

  return (
    <>
      <div className="tabs" role="group" aria-label="Saring keahlian">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className="tab"
            aria-pressed={filter === f}
            onClick={() => choose(f)}
          >
            {f !== "all" && <i className={`sw ${f}`} />}
            {f === "all" ? "Semua" : domainLabels[f]}
            <span className="count">
              {f === "all" ? all.length : all.filter((g) => g.domain === f).length}
            </span>
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        Menampilkan {visible.length} kelompok keahlian
      </p>
      <div className="skills">
        {visible.map((g) => (
          <article key={g.title} className={`skill ${g.domain}${touched ? " enter" : ""}`}>
            <h3>{g.title}</h3>
            <p className="muted">{g.note}</p>
            <ul className="chips">
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}
