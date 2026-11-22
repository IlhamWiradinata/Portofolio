"use client";

import { useState } from "react";
import type { Job } from "@/lib/data";
import { jobDomain } from "@/lib/domain";

export default function Experience({ jobs }: { jobs: Job[] }) {
  const [openIds, setOpenIds] = useState<number[]>([0]);
  const allOpen = openIds.length === jobs.length;

  const toggle = (i: number) =>
    setOpenIds((cur) => (cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i]));

  return (
    <>
      <ol className="timeline">
        {jobs.map((job, i) => {
          const open = openIds.includes(i);
          const id = `job-${i}`;
          return (
            <li key={job.role + job.period} className={`job ${jobDomain(job.role)}${open ? " open" : ""}`}>
              <h3 className="job-h">
                <button
                  type="button"
                  className="job-head"
                  aria-expanded={open}
                  aria-controls={id}
                  onClick={() => toggle(i)}
                >
                  <span className="period">{job.period}</span>
                  <span className="job-title">
                    <span className="job-role">{job.role}</span>
                    <span className="company">{job.company}</span>
                  </span>
                  <span className="job-toggle" aria-hidden="true" />
                </button>
              </h3>
              <div id={id} className="job-body" hidden={!open}>
                <ul>
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
}
