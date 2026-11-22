// Pengelompokan warna: biru = perangkat lunak, kuning = industri dan operasional.
export type Domain = "code" | "industry" | "neutral";

export const domainLabels: Record<Domain, string> = {
  code: "Perangkat lunak",
  industry: "Industri dan operasional",
  neutral: "Cara kerja",
};

export function skillDomain(title: string): Domain {
  if (/perangkat lunak|software|\bweb\b|pemrograman|analisis|sistem|aplikasi/i.test(title)) return "code";
  if (/cara kerja|kompetensi|soft/i.test(title)) return "neutral";
  return "industry";
}

export function jobDomain(role: string): Domain {
  return /software|developer|programmer|pengembang/i.test(role) ? "code" : "industry";
}
