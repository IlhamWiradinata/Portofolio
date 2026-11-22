import Image from "next/image";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import {
  profile,
  about,
  stats,
  skillGroups,
  experience,
  education,
  certifications,
} from "@/lib/data";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Topbar/>

      <header id="top" className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="hero-title">{profile.title}</p>
            <h1>{profile.name}</h1>
            <p className="lead">{profile.tagline}</p>
            <p className="cta-row">
              <a className="btn" href="#proyek">Lihat proyek</a>
              <a className="btn ghost" href="#kontak">Hubungi saya</a>
              <a className="btn ghost" href={profile.cv} download>Unduh CV</a>
            </p>
            <p className="where">{profile.location}</p>
          </div>
          <div className="photo">
            <Image
              src={profile.photo}
              alt={`Foto ${profile.shortName}`}
              width={600}
              height={800}
              priority
            />
          </div>
        </div>
      </header>

      <main>
        <section id="tentang" className="wrap">
          <h2>Sekilas Tentang Saya</h2>
          <div className="about-grid">
            <div className="prose">
              {about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <dl className="stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt>{s.value}</dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="keahlian" className="wrap">
          <h2>Keahlian saya</h2>
          <Skills groups={skillGroups} />
        </section>

        <section id="pengalaman" className="wrap">
          <h2>Jalan sampai ke sini</h2>
          <Experience jobs={experience} />

          <div className="two-col">
            <div>
              <h3 className="sub">Pendidikan</h3>
              <ul className="plain">
                {education.map((e) => (
                  <li key={e.name}>
                    <strong>{e.name}</strong>
                    <span>{e.place}</span>
                    <span className="muted">
                      {e.period}
                      {e.detail ? `, ${e.detail}` : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="sub">Sertifikasi</h3>
              <ul className="plain">
                {certifications.map((c) => (
                  <li key={c.name}>
                    <strong>{c.name}</strong>
                    <span className="muted">{c.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="proyek" className="wrap">
          <h2>Yang sudah saya bangun</h2>
          <Projects projects={projects} />
        </section>

        <section id="kontak" className="contact">
          <div className="wrap">
            <h2>Ada peluang? Hubungi saja</h2>
            <p className="prose">
              Saya terbuka untuk posisi entry-level di Software Development, IT, dan
              Officer. Kirim pesan lewat email atau WhatsApp.
            </p>
            <ul className="contact-list">
              <li>
                <span>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <span>WhatsApp</span>
                <a href={profile.whatsapp}>{profile.phoneDisplay}</a>
              </li>
              <li>
                <span>Lokasi</span>
                <p>{profile.location}</p>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
