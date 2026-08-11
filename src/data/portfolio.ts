export const about = {
  name: "Windy Windy",
  title: "Senior Software Engineer",
  email: "windywu812@gmail.com",
  linkedin: "https://www.linkedin.com/in/windy-windy",
  phone: "+62 896 4752 7757",
  location: "Indonesia",
  bio: "Hi there👋, I am a senior software engineer who ships across iOS, web, and backend — turning ambiguous problems into products that ship. I am curious person who love to solve real problems and love to deep dive how things can works",
  education: [
    {
      degree: "Bachelor of Information System",
      school: "Universal University",
      year: "Aug 2019 - Nov 2023",
      gpa: "3.93 / 4.00",
    },
  ],
  skills: {
    mobile: [
      "iOS",
      "UIKit",
      "SwiftUI",
      "Android",
      "Kotlin Multiplatform",
      "Flutter",
      "React Native",
    ],
    web: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "Express.js",
      "Firebase",
      "Supabase",
    ],
    principles: [
      "Clean Architecture",
      "SOLID",
      "Clean Code",
      "TDD",
      "Reactive Programming",
      "Unit Testing",
    ],
    tools: ["VIM", "Fastlane", "Crashlytics", "Xcode", "Figma", "Git"],
  },
  languages: ["English (Professional Working)", "Indonesian (Native)"],
  interests: ["Gym", "Music", "Traveling"],
};

export const experiences = [
  {
    title: "Frontend Developer",
    company: "Slingshot Brand Architect",
    location: "Remote",
    period: "Feb 2025 - Present",
    description: [
      "Built and maintained responsive web apps using React, Next.js, TypeScript, Tailwind CSS",
      "Collaborated with backend teams to integrate RESTful APIs and ensure smooth data flow",
      "Act as project manager to gather client's requirements",
    ],
  },
  {
    title: "iOS Developer",
    company: "Upwork",
    location: "Remote",
    period: "Jan 2023 - Present",
    description: [
      "Upwork Top Talent with 6+ proven happy clients",
      "Delivered high-quality native iOS apps for diverse clients",
      "Demonstrated high collaboration skills with clients and colleagues across the world",
    ],
  },
  {
    title: "iOS Engineer",
    company: "Vidio Dot Com",
    location: "Indonesia | Remote",
    period: "Jan 2023 - Jul 2025",
    description: [
      "Collaborated with cross-functional teams to build iOS features such as SharePlay, WidgetKit, Live Activity, and Short feature",
      "Refactored complex flows into simpler architectures, improving productivity and maintainability",
      "Maintained Kotlin Multiplatform modules for shared code across iOS, Android, and Web",
      "Built Swift Macros to automate boilerplate, improving developer productivity by 50%",
      "Improved app launch time by ~50% using Mergeable libs and performance profiling",
    ],
  },
  {
    title: "iOS Engineer Intern",
    company: "Vidio Dot Com",
    location: "Indonesia | Remote",
    period: "Feb 2022 - Dec 2022",
    description: [
      "Developed design system from scratch to keep app's design consistency and improve team's productivity",
      "Created design system's documentation using DocC (Documentation Catalog)",
    ],
  },
  {
    title: "iOS Engineer",
    company: "Algostudio",
    location: "Indonesia | Remote",
    period: "Mar 2021 - Dec 2021",
    description: [
      "Worked and trusted by big brands like Phillips Indonesia",
      "Built and maintained existing features in-app based on given requirements",
      "Refactored and added unit testing in the existing codebase",
      "Improved app performance by eliminating memory leaks up to 40%",
    ],
  },
  {
    title: "External Code Reviewer",
    company: "Dicoding Indonesia",
    location: "Indonesia | Remote",
    period: "Aug 2020 - Dec 2021",
    description: [
      "Checked and reviewed academy submissions from participants on iOS classes (Beginner, Fundamental, and Expert)",
      "Provided code suggestions on what needed to be improved",
    ],
  },
  {
    title: "iOS Developer Intern",
    company: "Apple Developer Academy",
    location: "Batam, Indonesia",
    period: "Mar 2020 - Dec 2020",
    description: [
      "Explored Apple APIs and native frameworks for development projects",
      "Designed iOS apps based on Human Interface Guidelines using Sketch & Figma",
      "Conducted deep investigations with the CBL framework to identify problems and solutions",
      "Performed User Research using User Persona, UserFlow, Empathy Map, Journey Map, and User Testing with Marvel",
    ],
  },
];

export const projects = [
  {
    title: "Azyanna",
    category: "mobile",
    link: "https://apps.apple.com/sa/app/azyanna-buy-sell-fashion/id6654900680",
    problem:
      "A fashion resale startup in Saudi Arabia needed a native buy/sell marketplace fast, with real payments and delivery, before their funding runway closed.",
    solution:
      "Built the app solo end-to-end in SwiftUI + SwiftData (MVVM), wired to a Spring Boot backend, shipping content discovery, payments, and delivery API integration in one release cycle.",
    description:
      "E-Commerce app focusing on branded items in Saudi Arabia. Created using SwiftUI, SwiftData, MVVM with backend integration using Spring Boot.",
    technologies: [
      "SwiftUI",
      "SwiftData",
      "MVVM",
      "Spring Boot",
      "Payment Integration",
    ],
    period: "Oct 2024 - Feb 2025",
    highlights: [
      "Content discovery feature",
      "Payment integration",
      "Delivery API integration",
    ],
  },
  {
    title: "Swipe Photo",
    category: "mobile",
    link: "https://apps.apple.com/us/app/swipe-photo/id6477829631",
    problem:
      "Users wanted a faster, more tactile way to declutter thousands of camera-roll photos than the stock Photos app allowed.",
    solution:
      "Designed a gesture-first swipe interface with custom image caching and SwiftData for offline-first persistence, making bulk cleanup feel instant even on large libraries.",
    description:
      "Photo management app with gesture-based UI, image caching, and SwiftData integration for offline persistence.",
    technologies: [
      "SwiftUI",
      "SwiftData",
      "Image Caching",
      "Gesture Recognition",
    ],
    period: "Mar 2024 - Jul 2024",
    highlights: [
      "Modern, immersive experience with smooth transitions",
      "Layered depth effects",
      "Offline-first architecture",
    ],
  },
  {
    title: "Air Traffic Control Tools",
    category: "mobile",
    link: "https://apps.apple.com/us/app/air-traffic-control-tools/id6476047950",
    problem:
      "FAA controllers and NATCA members needed fast, offline-reliable access to the full slate contract and FAA Order 7110.65, plus a way to turn calendar screenshots into real events without manual re-entry.",
    solution:
      "Shipped a reference app with iCloud-synced bookmarks and an OCR pipeline (VisioKit) that converts screenshots directly into iOS calendar events, saving controllers manual data entry.",
    description:
      "ATC Tools is a reference app designed for FAA controllers and NATCA members. It provides access to the full NATCA slate contract and FAA Order 7110.65, along with features like OCR for converting calendar screenshots to iOS events, iCloud sync for bookmarks, and productivity tools to manage ATC resources efficiently.",
    technologies: [
      "SwiftUI",
      "SwiftData",
      "MVVM",
      "VisioKit",
      "OCR",
      "EventKit",
    ],
    period: "Jun 2024 - Jul 2024",
    highlights: [
      "iCloud sync across all iOS devices",
      "OCR tool to convert calendar screenshots into iOS calendar events",
    ],
  },
  {
    title: "Kink Mobile",
    category: "mobile",
    link: "https://github.com/windywu812/Kink",
    description:
      "Kink is an app where couples can play card game together. Some features like Gaming Card feature & Menstrual Tracker",
    technologies: ["React Native", "Express JS"],
    period: "Jan 2020 - Mar 2020",
    highlights: [
      "API integration with Express JS backend",
      "Interactive and engaging card game experience",
    ],
  },
  {
    title: "Picho",
    category: "mobile",
    link: "https://github.com/windywu812/Picho",
    description:
      "Picho is an iOS app that keep track of user calorie intake everyday",
    technologies: ["SwiftUI", "CoreData", "HealthKit", "REST API", "Laravel"],
    period: "Oct 2020 - Dec 2020",
    highlights: [
      "HealthKit integration for tracking nutrition data",
      "REST API integration with Laravel backend",
    ],
  },
  {
    title: "Batikin",
    category: "mobile",
    link: "https://github.com/windywu812/batikin",
    description:
      "App that enables users to create custom unique Batik with full control over design elements.",
    technologies: ["UIKit", "CoreData", "Custom Drawing"],
    period: "Jun 2020 - Aug 2020",
    highlights: [
      "Custom Batik pattern creation",
      "Persistent data storage with CoreData",
    ],
  },
  {
    title: "Fleet",
    category: "mobile",
    link: "https://github.com/windywu812/Fleet",
    description:
      "Fleet is an iOS app that help tracking amount of steps everyday. To keep motivate users, Fleet provides an random interesting fact and keep user's achievement",
    technologies: [
      "SwiftUI",
      "CoreData",
      "HealthKit",
      "CoreLocation",
      "MapKit",
    ],
    period: "Apr 2020 - May 2020",
    highlights: [
      "HealthKit integration for tracking step data",
      "CoreData for offline persistence",
    ],
  },
  {
    title: "KartuKu",
    category: "website",
    link: "https://kartuku.tw/home",
    problem:
      "Indonesian migrant workers in Taiwan lacked an easy, trustworthy way to buy digital products (credit, data, vouchers) in their own currency and language.",
    solution:
      "Built the platform's frontend in React, TypeScript, and Tailwind on a Go backend, focused on a fast, low-friction checkout for a mobile-first, non-native-speaker audience.",
    description:
      "E-Commerce platform for digital products in Taiwan for Indonesia's workers",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "GoLang"],
    period: "Sep 2025 - Oct 2025",
  },
  {
    title: "NoLimitClass",
    category: "website",
    link: "https://www.nolimitclass.com/",
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    period: "May 2025 - May 2025",
  },
  {
    title: "Decorient",
    category: "website",
    link: "https://decorient.com/",
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    period: "Aug 2025 - Aug 2025",
  },
  {
    title: "Fortis",
    category: "website",
    link: "https://fortiscircle.id/",
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    period: "Jun 2025 - Jul 2025",
  },
];

export const testimonials = [
  {
    name: "Daniel Adetunji",
    role: "Azyanna, The Fashion Platform, UK",
    text: "Windy has been an absolutely fantastic iOS developer. He is fast, reliable, worked well with our team and is a good problem solver. Recommend him for any iOS projects.",
  },
  {
    name: "Oleks",
    role: "Germany",
    text: "I had a great experience collaborating with Windy. His code is of excellent quality, highly testable, and he communicates clearly throughout the development process. Highly recommended!",
  },
  {
    name: "Spencer Shwetz",
    role: "US",
    text: "Incredible developer that I would love to work again",
  },
];
