// Keep factual copy here. See docs/CONTENT-SOURCES.md before adding claims.
export const profile = {
  name: "Md Ashraful Islam",
  email: "emon78697@gmail.com",
  github: "https://github.com/Emon-Ashraf",
  linkedin: "https://www.linkedin.com/in/md-ashraful-islam-emon",
  // Replace with /documents/md-ashraful-islam-cv.pdf when an approved CV is available.
  cv: {
    href: "/documents/cv-placeholder.pdf",
    label: "Download CV placeholder",
    ready: false,
  },
};

export const projects = [
  {
    id: "team-work-tracker",
    number: "02",
    name: "Team Work Tracker",
    category: "ANDROID · COLLABORATION",
    description:
      "A shared workspace for teams, projects, and tasks. An Android client that brings task details, comments, and attachments into one workflow.",
    tags: ["Kotlin", "Jetpack Compose", "Retrofit", "DataStore"],
    repo: "https://github.com/Emon-Ashraf/Team-Work-Tracker-Android-App",
    details:
      "The source includes team creation and joining, project creation, task creation and editing, comments, and file or link attachment flows. ViewModels expose UI state and call remote repositories.",
    icon: "team",
    placeholder: "Team Work Tracker screenshot",
  },
  {
    id: "halfood",
    number: "03",
    name: "HalFood",
    category: "ANDROID · FOOD DELIVERY CONCEPT",
    description:
      "An Android application for a halal food delivery concept, with a Compose-based introduction, onboarding, and account access screens.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3", "Navigation"],
    repo: "https://github.com/Emon-Ashraf/HalFood-Delivery-Application",
    details:
      "The checked-in Android source contains welcome, onboarding, login, and registration screens. The README describes a broader delivery platform; end-to-end ordering and backend functionality are not claimed here.",
    icon: "food",
    placeholder: "HalFood screenshot",
  },
];

export const skillGroups = [
  {
    number: "01",
    title: "Android development",
    description: "My primary development focus.",
    items: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "ViewModel",
      "Coroutines",
      "Compose Navigation",
    ],
  },
  {
    number: "02",
    title: "Backend & data",
    description: "Connecting applications to structured data.",
    items: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "PostgreSQL",
      "REST APIs",
      "JWT authentication",
    ],
  },
  {
    number: "03",
    title: "Application architecture",
    description: "Keeping UI, state, and data concerns clear.",
    items: [
      "MVVM",
      "Repository pattern",
      "Retrofit",
      "OkHttp",
      "DataStore",
      "Git & GitHub",
    ],
  },
];
