export interface ProjectData {
  id: string;
  title: string;
  category: string;
  hook: string;
  description: string;
  imageSrc: string;
  year: string;
  client?: string;
  deliverables?: string[];
  metrics?: { label: string; value: string }[];
  overview?: string;
  solution?: string;
  filterCategories?: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: "sprig",
    title: "SPRIG",
    category: "Website · UX/UI",
    hook: "Why were people leaving?",
    description: "I studied the website and user behaviour, found the problems and redesigned the experience to make the important things easier to find.",
    imageSrc: "/images/sprig_case_study_1787769705869.jpg",
    year: "2026",
    client: "Sprig Wellness Co.",
    deliverables: ["UX Audit", "Information Architecture", "Mobile & Web UI", "Design Tokens"],
    metrics: [
      { label: "Conversion Lift", value: "+38%" },
      { label: "Bounce Reduction", value: "-29%" },
    ],
    solution: "Eliminated fragmented funnel steps, re-architected the catalog search with instant visual filters, and unified checkout friction into a 2-step flow.",
    filterCategories: ["UX/UI Design"],
  },
  {
    id: "katha-crafts",
    title: "KATHA CRAFTS",
    category: "Brand Identity · Packaging",
    hook: "Can traditional craft feel contemporary?",
    description: "Created an identity system and sustainable packaging that honored artisan heritage while competing on premium global shelves.",
    imageSrc: "/images/katha_crafts_1787769731847.jpg",
    year: "2025",
    client: "Katha Artisan Collective",
    deliverables: ["Brand Identity", "Packaging Suite", "Unboxing Design", "Brand Guidelines"],
    metrics: [
      { label: "Retail Stores", value: "18+" },
      { label: "D2C Growth", value: "+140%" },
    ],
    solution: "Combined minimalist geometric typography with handcrafted Bihar motifs and zero-plastic soy ink packaging.",
    filterCategories: ["Package Design", "Branding"],
  },
  {
    id: "neurahealth",
    title: "NEURAHEALTH",
    category: "Product Design · UX Architecture",
    hook: "How to make complex clinical workflows calm?",
    description: "Streamlined diagnostic visualization for clinicians, reducing critical task completion time by 42%.",
    imageSrc: "/images/neurahealth_1787769759967.jpg",
    year: "2025",
    client: "Neura Diagnostics",
    deliverables: ["SaaS Product Design", "Clinical Dashboards", "Dark UI Theme", "WCAG AAA"],
    metrics: [
      { label: "Task Speed", value: "+42%" },
      { label: "Error Margin", value: "-65%" },
    ],
    solution: "Replaced cluttered tabular data with high-contrast hierarchical cards, contextual quick-actions, and keyboard shortcuts for radiologists.",
    filterCategories: ["UX/UI Design"],
  },
  {
    id: "patna-litfest",
    title: "PATNA LITFEST",
    category: "Visual Identity · Print & Campaigns",
    hook: "Giving cultural heritage a modern typographic voice.",
    description: "Designed an expressive festival identity, dynamic poster campaign, and environmental graphics across the city.",
    imageSrc: "/images/patna_litfest_1787769784211.jpg",
    year: "2025",
    client: "Bihar Arts & Culture Forum",
    deliverables: ["Festival Branding", "Multilingual Posters", "Wayfinding Graphics", "Social Kits"],
    metrics: [
      { label: "Attendees", value: "35k+" },
      { label: "Campaign Reach", value: "1.2M" },
    ],
    solution: "Developed custom bilingual Devanagari & Latin display typography paired with vibrant screenprinted poster textures.",
    filterCategories: ["Creative Post and Banner", "Branding"],
  },
];
