"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/lib/projects";

export default function Projects({ projects }: { projects: Project[] }) {
  const [tag, setTag] = useState("");
  const tags = Array.from(new Set(projects.flatMap((p) => p.stack))).sort();
  const showFilter = projects.length >= 3 && tags.length > 1;
  const visible = tag ? projects.filter((p) => p.stack.includes(tag)) : projects;

  return (
    <>
      {showFilter && (
        <div className="tabs" role="group" aria-label="Saring proyek berdasarkan teknologi">
          <button type="button" className="tab" aria-pressed={tag === ""} onClick={() => setTag("")}>
            Semua <span className="count">{projects.length}</span>
          </button>
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              className="tab"
              aria-pressed={tag === t}
              onClick={() => setTag(t)}
            >
              {t}
            </button>
          ))}
        </div>
      )}
      <div className="projects">
        {visible.map((p) => (
          <article key={p.slug} className="project">
            {p.screenshots[0] && (
              <Link href={`/proyek/${p.slug}`} className="thumb" tabIndex={-1} aria-hidden="true">
                <Image
                  src={p.screenshots[0].src}
                  alt=""
                  width={1280}
                  height={800}
                  sizes="(max-width: 820px) 100vw, 500px"
                />
              </Link>
            )}
            <div className="project-body">
              <p className="meta">
                {p.kind}, {p.year}
              </p>
              <h3>{p.name}</h3>
              <p>{p.summary}</p>
              <ul className="chips">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="actions">
                <Link className="btn small" href={`/proyek/${p.slug}`}>
                  Lihat detail proyek
                </Link>
                {p.demo && (
                  <a
                    className="btn small code"
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buka demo
                  </a>
                )}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
