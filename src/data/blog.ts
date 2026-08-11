export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  body: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "shipping-solo-mobile-mvps",
    title: "Shipping solo mobile MVPs under a runway deadline",
    date: "2026-06-12",
    excerpt:
      "Notes on building Azyanna end-to-end in SwiftUI + SwiftData before a startup's funding window closed.",
    tags: ["iOS", "SwiftUI", "Product"],
    body: [
      "When a startup's runway is measured in weeks instead of quarters, the usual checklist of native app patterns gets reordered fast. The priority becomes: what's the smallest slice of the product that proves the business, and how quickly can that slice reach real users making real payments?",
      "For Azyanna, that meant building content discovery, checkout, and delivery API integration in a single release cycle, solo, in SwiftUI with SwiftData for local persistence and a Spring Boot backend already in progress on the server side. No time for speculative abstraction — every screen shipped had to earn its place in the first release.",
      "The biggest lesson: MVMM discipline pays for itself under pressure. Keeping view logic thin and testable meant I could change a payment flow late without touching three other screens by accident.",
    ],
  },
  {
    slug: "kotlin-multiplatform-in-production",
    title: "What Kotlin Multiplatform actually saves you",
    date: "2026-03-04",
    excerpt:
      "Maintaining shared KMP modules across iOS, Android, and web at Vidio — where it paid off, where it didn't.",
    tags: ["Kotlin Multiplatform", "Architecture"],
    body: [
      "Kotlin Multiplatform gets pitched as 'write once, run everywhere,' but the honest version is 'write your business logic once, and stop re-litigating the same bug on three platforms.'",
      "At Vidio, the modules that benefited most from KMP were the ones with the least UI surface — data models, network layer, and core business rules. Anything close to platform-specific UI stayed native, and that boundary is what kept the shared modules maintainable instead of becoming a lowest-common-denominator mess.",
      "If you're evaluating KMP for a team, start by mapping which layers are truly platform-agnostic before writing a line of shared code.",
    ],
  },
];
