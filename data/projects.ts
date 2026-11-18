// export const projects = [
//   {
//     slug: "brew-bean-social-campaign",
//     number: "01",
//     title: "Brew & Bean Dubai",
//     category: "Social Media Campaign",
//     description:
//       "A self-initiated Instagram campaign concept for a fictional Dubai café focused on awareness and customer visits.",
//     tags: ["Social Media", "Content Strategy", "Campaign Planning"],
//     color: "bg-[#e9dfd1]",
//   },
//   {
//     slug: "hsm-seo-audit",
//     number: "02",
//     title: "HSM Website",
//     category: "SEO Audit",
//     description:
//       "A self-initiated SEO review identifying opportunities around search relevance, page structure and user experience.",
//     tags: ["SEO", "Website Optimization", "Content"],
//     color: "bg-[#dfece7]",
//   },
//   {
//     slug: "dubai-property-landing-page",
//     number: "03",
//     title: "Dubai Property Finder",
//     category: "Lead Generation Landing Page",
//     description:
//       "A conversion-focused landing page concept for a fictional Dubai real-estate business.",
//     tags: ["Landing Page", "UX", "Lead Generation"],
//     color: "bg-[#e2e2e0]",
//   },
//   {
//     slug: "dubai-property-meta-campaign",
//     number: "04",
//     title: "Dubai Property Lead Generation",
//     category: "Meta Ads Campaign",
//     description:
//       "A self-initiated paid advertising campaign concept designed to generate property enquiries.",
//     tags: ["Paid Advertising", "Lead Generation", "Campaign Strategy"],
//     color: "bg-[#e8ded8]",
//   },
//   {
//     slug: "marketing-performance-dashboard",
//     number: "05",
//     title: "Marketing Performance Dashboard",
//     category: "Marketing Analytics",
//     description:
//       "A sample marketing performance dashboard exploring campaign spend, clicks, leads and cost-per-lead.",
//     tags: ["Analytics", "Excel", "Campaign Performance"],
//     color: "bg-[#dfe4e9]",
//   },
// ];



// ─────────────────────────────────────────────────────────
// 1) Extend your existing Project type in data/projects.ts
//    (keep all your current fields — just add these two)
// ─────────────────────────────────────────────────────────


export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  cover?: string;
  gallery?: {
    src: string;
    alt: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "brew-and-bean",
    number: "01",
    title: "Brew & Bean Café",
    category: "Social Media Marketing",
    description:
      "Instagram content strategy for a Dubai-based café — designed a cohesive post, carousel and profile system to build brand presence and drive engagement.",
    tags: [
      "Instagram Strategy",
      "Content Design",
      "Branding",
      "Canva",
    ],
    color: "bg-[#f2ede2]",
    cover: "/Assets/logo.png",
    gallery: [
      {
        src: "/Assets/instapost1.webp",
        alt: "Brew & Bean Instagram feed post mockup",
      },
      {
        src: "/Assets/carousel.png",
        alt: "Brew & Bean 6-slide carousel mockup",
      },
      {
        src: "/Assets/instapost2.webp",
        alt: "Brew & Bean Instagram profile grid mockup",
      },
    ],
  },

  {
    slug: "skyline-properties",
    number: "02",
    title: "Skyline Properties",
    category: "SEO & Website Marketing",
    description:
      "A digital marketing and SEO concept for a fictional Dubai real estate brand, featuring a property website, keyword research, on-page optimization, technical SEO and content strategy.",
    tags: [
      "SEO Strategy",
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Content Marketing",
      "Next.js",
    ],
    color: "bg-[#14243A]",
    cover: "/Assets/skyline.png",
  },

  {
    slug: "seo-analytics-implementation",
    number: "03",
    title: "SEO & Website Analytics",
    category: "Technical SEO & Analytics",
    description:
      "Implemented technical SEO for my personal portfolio website, including canonical URLs, XML sitemap, robots.txt, Google Search Console verification and Google Analytics 4 integration to monitor website activity.",
    tags: [
      "Technical SEO",
      "Google Search Console",
      "Google Analytics 4",
      "Sitemap Optimization",
      "Canonical URLs",
      "Next.js",
      "Vercel",
    ],
    color: "bg-[#e8eee9]",
    cover: "/Assets/seo-analytics.png",
  },
];
