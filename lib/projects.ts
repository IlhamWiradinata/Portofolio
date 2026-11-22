// Daftar proyek untuk beranda dan halaman detail (/proyek/[slug]).
//
// Cara menambah proyek:
// 1. Salin satu blok proyek di bawah, lalu ganti isinya. "slug" harus unik, huruf kecil, tanpa spasi.
// 2. Taruh screenshot di folder public/proyek/<slug>/ (contoh: public/proyek/sistem-informasi-akademik/1.png).
// 3. Tulis path-nya di "screenshots", selalu diawali "/proyek/...". Screenshot pertama jadi gambar sampul kartu.
// 4. Isi "demo" dengan alamat aplikasi online (https://...). Hapus barisnya kalau belum ada demo.

export type Screenshot = { src: string; caption: string };

export type Project = {
  slug: string;
  name: string;
  year: string;
  kind: string;
  summary: string;
  description: string[];
  features: string[];
  stack: string[];
  screenshots: Screenshot[];
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "sistem-informasi-akademik",
    name: "Sistem Informasi Akademik Klasifikasi Prestasi Siswa",
    year: "2026",
    kind: "Tugas akhir",
    summary:
      "Aplikasi web yang mengklasifikasikan prestasi siswa memakai algoritma Decision Tree berbasis aturan, dengan studi kasus di SMK Negeri 1 Cipeundeuy.",
    description: [
      "Sistem informasi akademik berbasis web untuk mengelola data siswa dan mengklasifikasikan prestasinya dengan algoritma Decision Tree berbasis aturan (rule-based).",
      "Aplikasi ini dikembangkan sebagai studi kasus di SMK Negeri 1 Cipeundeuy, dibangun dengan Laravel dan MySQL.",
    ],
    features: [
      "Klasifikasi prestasi siswa dengan aturan Decision Tree.",
      "Hasil klasifikasi dapat ditelusuri dari aturan yang dipakai.",
    ],
    stack: ["Laravel", "MySQL", "Decision Tree"],
    screenshots: [
      // { src: "/proyek/sistem-informasi-akademik/1.png", caption: "Halaman dashboard" },
      // { src: "/proyek/sistem-informasi-akademik/2.png", caption: "Hasil klasifikasi siswa" },
    ],
    // demo: "https://alamat-demo-anda.com",
  },
];
