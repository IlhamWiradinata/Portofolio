// Edit file ini untuk mengubah isi portofolio. Tidak perlu menyentuh komponen.

export const profile = {
  name: "Moch TBG Ilham Ramdhan Wiradinata",
  shortName: "Wiratech Solutions",
  initials: "W.S",
  title: "Fullstack Software Developer · Quality Control · EXIM & Logistics",
  tagline:
    "Freelance software developer yang membangun aplikasi sesuai kebutuhan klien, berpengalaman dengan Flutter, Java, PHP, C++, dan teknologi lainnya, dari analisis hingga aplikasi siap digunakan.",
  location: "Kota Bandung, Jawa Barat, Indonesia",
  email: "ilham.wiradinata93@gmail.com",
  phoneDisplay: "0813-1203-7835",
  whatsapp: "https://wa.me/6281312037835",
  cv: "/CV_Ilham_Wiradinata.pdf",
  photo: "/pose-foto.jpg",
};

export const about = [
  "Saya freelance software developer dengan pengalaman membangun aplikasi menggunakan Flutter, Java, PHP, C++, Laravel, dan MySQL. Saya menangani proyek dari analisis kebutuhan, perancangan, dan pengembangan, hingga aplikasi siap digunakan. Salah satu karya saya adalah sistem informasi akademik berbasis web dengan klasifikasi memakai algoritma Decision Tree.",
  "Latar belakang Teknik Informatika saya dipadukan dengan lebih dari lima tahun pengalaman di bidang manufaktur, ekspor-impor, dan logistik. Di quality control, saya terlatih memeriksa detail dan menjaga standar mutu, sejalan dengan disiplin pengujian dan debugging dalam pengembangan perangkat lunak. Di ekspor-impor, saya terbiasa mengelola dokumen dan data yang menuntut ketepatan melalui sistem kepabeanan Ceisa 4.0, sehingga memahami alur data dan proses bisnis dari sisi pengguna. Di logistik dan gudang, saya terbiasa dengan alur kerja terstruktur dan koordinasi lintas divisi.",
  "Pemahaman proses bisnis nyata ini membantu saya menerjemahkan kebutuhan klien menjadi aplikasi yang sesuai dengan alur kerja sebenarnya, bukan sekadar berjalan secara teknis. Saya menerima proyek pembuatan aplikasi baru maupun pengembangan sistem yang sudah berjalan. Hubungi saya untuk membahas kebutuhan, perkiraan lingkup, dan waktu pengerjaan.",
];

export const stats = [
  { value: "Proyek", label: "7" },
  { value: "Bahasa dan framework", label: "6+" },
  { value: "Fullstack Developer", label: "Dari analisis kebutuhan hingga aplikasi siap digunakan" },
  { value: "Status", label: "Terbuka untuk proyek baru" },
];

export const skillGroups = [
  {
    title: "Pengembangan web",
    note: "Dari desain antarmuka sampai integrasi back-end.",
    items: ["Laravel", "MySQL", "Web development full-cycle", "UI/UX dasar"],
  },
  {
    title: "Analisis sistem",
    note: "Merancang sistem yang langkah hitungnya bisa ditelusuri.",
    items: ["Sistem informasi akademik", "Decision Tree (rule-based)"],
  },
  {
    title: "Warehouse dan logistics",
    note: "Pekerjaan gudang untuk rantai pasok otomotif.",
    items: ["Receiving inspection", "Binning", "Picking operations", "Supply chain"],
  },
  {
    title: "Quality control",
    note: "Pemeriksaan produk manufaktur, bersertifikat.",
    items: ["Inspeksi manufaktur", "Visual product inspection"],
  },
  {
    title: "EXIM dan kepabeanan",
    note: "Dokumen impor dari supplier luar negeri.",
    items: ["Ceisa 4.0", "BC 2.0", "BC 2.3", "Invoice", "Air waybill", "Sea bill"],
  },
  {
    title: "Cara kerja",
    note: "Yang membuat pekerjaan lintas divisi berjalan.",
    items: ["Problem solving", "Manajemen waktu", "Koordinasi lintas divisi"],
  },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: Job[] = [
  {
    role: "Warehouse Operation",
    company: "PT Serasi Logistics Indonesia (bagian dari PT Sera Autoraya dan Astra International Group)",
    period: "Juni 2025 – November 2026",
    points: [
      "Menangani supply chain Toyota Astra Motor: receiving inspection, binning, dan picking operations.",
      "Memeriksa kuantitas, kondisi fisik, dan part number, serta memilah material P-to-P, Small Parts, dan Medium Parts.",
    ],
  },
  {
    role: "Quality Control dan Staf EXIM",
    company: "PT Banshu Electric Indonesia",
    period: "September 2021 – Mei 2025",
    points: [
      "Quality Control (checker) manufaktur wiring harness: memeriksa aliran listrik, dimensi, konektor, dan terminal. Bersertifikat Visual Product Inspection.",
      "Preparation Accessories Specialist: memasang rubber seal, tube, dan terminal kabel pada tahap pra-produksi.",
      "Import Staff Operator (Ceisa 4.0, dokumen BC 2.0 dan BC 2.3): mengelola invoice dari supplier Jepang, pivot data, invoice uang muka, serta draft invoice, air waybill, dan sea bill.",
    ],
  },
  {
    role: "Software Programmer (magang)",
    company: "Scola.id, startup Learning Management System",
    period: "Januari – Februari 2021",
    points: [
      "Mengembangkan website dengan Laravel, dari PKL SMK hingga program teaching factory.",
      "Terlibat dalam full-cycle web development, dari desain front-end hingga integrasi back-end.",
    ],
  },
];

export const education = [
  {
    name: "S1 Teknik Informatika",
    place: "Universitas Teknologi Bandung",
    period: "Lulus Juli 2026",
    detail: "IPK 3,87",
  },
  {
    name: "Rekayasa Perangkat Lunak (RPL)",
    place: "SMK Negeri 1 Cipeundeuy",
    period: "Lulus 2021",
    detail: "",
  },
];

export const certifications = [
  { name: "Certificate in Networking Security Associate (CNSA)", issuer: "CertNexus, 2026" },
  { name: "Project Integration Methodology of Excellence (PRIME)", issuer: "CertNexus, 2026" },
];

export type Project = {
  name: string;
  year: string;
  kind: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "Sistem Informasi Akademik Klasifikasi Prestasi Siswa",
    year: "2026",
    kind: "Tugas akhir",
    summary:
      "Aplikasi web yang mengklasifikasikan prestasi siswa memakai algoritma Decision Tree berbasis aturan, dengan studi kasus di SMK Negeri 1 Cipeundeuy.",
    points: [
      "Sistem informasi akademik berbasis web untuk mengelola dan mengklasifikasikan data prestasi siswa.",
      "Klasifikasi memakai aturan Decision Tree, sehingga hasilnya bisa ditelusuri dari aturan yang dipakai.",
    ],
    stack: ["Laravel", "MySQL", "Decision Tree"],
  },
];
