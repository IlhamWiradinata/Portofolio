"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { id: "tentang", label: "Tentang" },
  { id: "keahlian", label: "Keahlian" },
  { id: "pengalaman", label: "Pengalaman" },
  { id: "proyek", label: "Proyek" },
  { id: "kontak", label: "Kontak" },
];

export default function TopbarClient({ initials, name }: { initials: string; name: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  // Penanda bagian aktif dan bilah kemajuan scroll.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      if (pathname !== "/") {
        setActive("");
        return;
      }
      const line = window.innerHeight * 0.35;
      let current = "";
      for (const n of nav) {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top <= line) current = n.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="topbar" aria-label="Navigasi utama">
      <div className="wrap topbar-in">
        <Link href="/" className="brand" aria-label="Ke beranda">
          <span className="mark">{initials}</span>
          <span className="brand-name">{name}</span>
        </Link>
        <ul id="menu-utama" className={`navlinks${open ? " open" : ""}`}>
          {nav.map((n) => (
            <li key={n.id}>
              <Link
                href={`/#${n.id}`}
                aria-current={active === n.id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="menu-utama"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Tutup" : "Menu"}
        </button>
      </div>
      <div
        className="progress"
        aria-hidden="true"
        style={{ clipPath: `inset(0 ${(1 - progress) * 100}% 0 0)` }}
      />
    </nav>
  );
}
