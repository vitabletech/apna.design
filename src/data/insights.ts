export interface Article {
  id: string;
  title: string;
  category: "Design" | "UX" | "Visual Communication" | "Branding" | "Business" | "Bihar" | "Lessons";
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  takeaway: string;
}

export const articles: Article[] = [
  {
    id: "why-bihar-shapes-how-i-see-design",
    title: "Why designing from Bihar gives me an unfair advantage in visual communication",
    category: "Bihar",
    readTime: "4 min read",
    date: "Aug 2026",
    excerpt: "Living away from the echo chamber of metro design bubbles forces you to design for clarity and real human resonance rather than fleeting internet micro-trends.",
    content: [
      "When people ask me why I chose to base my visual communication practice out of Bihar, they usually expect a romanticized answer about heritage. But the truth is much more practical: constraint breeds immense clarity.",
      "In tier-2 and tier-3 landscapes, communication cannot hide behind buzzwords or superficial gradient blobs. A sign, an app, or a poster either communicates its intent within 3 seconds, or it fails completely.",
      "Designing from Bihar means keeping one foot firmly grounded in raw utility and real user instincts, while building systems that stand shoulder-to-shoulder with global design studios in San Francisco, London, or Tokyo.",
      "Madhubani art itself is not just decoration — it is a rigorous ancient grid system designed to tell complex stories across plain mud walls. That systematic mindset is what I bring to every UX architecture and visual brand."
    ],
    takeaway: "Rooted design is not nostalgic ornament — it is clarity forged in real-world human context."
  },
  {
    id: "good-design-must-work-well",
    title: "Good design should look good. It should also work well.",
    category: "Design",
    readTime: "5 min read",
    date: "Jul 2026",
    excerpt: "A beautiful website that confuses your customers is worse than an ugly one that converts. Here is how I balance aesthetic delight with measurable function.",
    content: [
      "In modern visual communication, there is a dangerous temptation to prioritize Dribbble aesthetics over user comprehension.",
      "Clients often come to me after spending thousands of dollars on agency designs that looked stunning in keynote presentations, but caused their user bounce rate to double.",
      "Why does this happen? Because when aesthetics are decoupled from user psychology and information architecture, beauty becomes friction.",
      "My rule is simple: Every visual decision — typography weight, color contrast, whitespace rhythm, motion curve — must justify itself through communication clarity before visual flair."
    ],
    takeaway: "If the user has to guess what to click next, the design has failed regardless of how pretty the colors are."
  },
  {
    id: "why-people-leave-websites",
    title: "Why were people leaving? A breakdown of user drop-offs in digital products",
    category: "UX",
    readTime: "6 min read",
    date: "Jun 2026",
    excerpt: "Analyzing 100+ user session replays revealed the 3 silent killers of digital conversion that most redesigns completely overlook.",
    content: [
      "When auditing digital products, 80% of churn comes down to three cognitive overload traps:",
      "1. Ambiguous Value Proposition: The user lands on the hero section and has no idea what the business actually sells within 5 seconds.",
      "2. Visual Competition: Multiple competing CTAs of equal visual prominence screaming for attention at the exact same moment.",
      "3. Hidden Information Architecture: Burying pricing, core features, or shipping details behind complex multi-level menus.",
      "By stripping away secondary noise and establishing strict typographical hierarchy, we turned Sprig's conversion from a leaking bucket into a high-trust growth engine."
    ],
    takeaway: "Reduce choices, elevate clarity, and answer the user's primary doubt before asking for their commitment."
  },
  {
    id: "branding-that-endures",
    title: "Brand Identity is what people remember when you leave the room",
    category: "Branding",
    readTime: "4 min read",
    date: "May 2026",
    excerpt: "A logo is only 5% of a brand. The remaining 95% is the consistency of tone, typographic discipline, and emotional reassurance across every customer touchpoint.",
    content: [
      "Too many founders think a brand identity is just choosing a cool SVG logo mark and a couple of pastel hex codes.",
      "In reality, brand identity is the cohesive visual operating system of your business. It is how your email receipt looks, how your packaging opens, how your error states speak, and how your posters command attention across a noisy street.",
      "When we designed Katha Crafts, we did not just draw a logo. We engineered a distinct tactile visual language that signaled premium organic craftsmanship whether printed on soy-based carton paper or displayed on a 4K mobile retina screen."
    ],
    takeaway: "A good business deserves good communication. Consistency over time creates irreversible trust."
  },
  {
    id: "business-communication-lessons",
    title: "5 Lessons from 5 years of visual communication design",
    category: "Lessons",
    readTime: "5 min read",
    date: "Apr 2026",
    excerpt: "What running an independent design practice taught me about client collaboration, problem discovery, and staying curious.",
    content: [
      "1. The client's stated problem is rarely the actual problem. Always dig into the underlying friction.",
      "2. Fast feedback loops beat months of isolated conceptualization.",
      "3. Great typography does 70% of the heavy lifting in UI design.",
      "4. Never present options you wouldn't stand behind in production.",
      "5. Good design is an investment that compounds over time."
    ],
    takeaway: "Stay curious, listen to the friction, and never stop refining your craft."
  }
];
