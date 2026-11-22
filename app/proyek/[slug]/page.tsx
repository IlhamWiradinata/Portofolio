import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.name, description: p.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();

  const p = projects[index];
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : null;

  return (
    <>
      <Topbar />

      <main className="wrap detail">
        <Link href="/#proyek" className="back">Kembali ke daftar proyek</Link>

        <p className="meta">{p.kind}, {p.year}</p>
        <h1 className="detail-title">{p.name}</h1>
        <p className="lead">{p.summary}</p>

        <p className="actions">
          {p.demo && (
            <a
              className="btn code"
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buka demo
            </a>
          )}
          <Link className="btn ghost" href="/#kontak">
            Diskusikan proyek serupa
          </Link>
        </p>

        <div className="detail-grid">
          <div className="prose">
            <h2 className="h-sm">Tentang proyek ini</h2>
            {p.description.map((d) => (
              <p key={d}>{d}</p>
            ))}
            {p.features.length > 0 && (
              <>
                <h2 className="h-sm">Fitur utama</h2>
                <ul className="feature-list">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <dl className="facts">
            <div>
              <dt>Jenis</dt>
              <dd>{p.kind}</dd>
            </div>
            <div>
              <dt>Tahun</dt>
              <dd>{p.year}</dd>
            </div>
            <div>
              <dt>Teknologi</dt>
              <dd>
                <ul className="chips">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>

        {p.screenshots.length > 0 && (
          <section className="shots" aria-labelledby="judul-tampilan">
            <h2 className="h-sm" id="judul-tampilan">Tampilan aplikasi</h2>
            {p.screenshots.map((s) => (
              <figure key={s.src}>
                <a href={s.src} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={s.src}
                    alt={s.caption}
                    width={1600}
                    height={1000}
                    sizes="(max-width: 1040px) 100vw, 1000px"
                  />
                </a>
                <figcaption>{s.caption}</figcaption>
              </figure>
            ))}
          </section>
        )}

        {next && (
          <p className="next-project">
            <span className="muted">Proyek berikutnya</span>
            <Link href={`/proyek/${next.slug}`}>{next.name}</Link>
          </p>
        )}
      </main>

      <Footer />
    </>
  );
}
