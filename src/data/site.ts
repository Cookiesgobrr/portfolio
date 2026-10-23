export const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const url = (path = "") => `${base}/${path.replace(/^\//, "")}`;
export const email = "tarun.jacob2927@gmail.com";
export const linkedin = "https://www.linkedin.com/in/tarnu/";
export const github = "https://github.com/Cookiesgobrr";
export const talk = "https://www.youtube.com/watch?v=JCxpD2Mlkg8";

export const projects = [
  {
    slug: "tacticlens",
    number: "01",
    name: "TacticLens Live",
    category: "Football × explainable AI",
    status: "Working hackathon prototype",
    year: "2026",
    image: "tacticlens.webp",
    alt: "TacticLens match studio showing a fictional football match and source-linked match intelligence",
    line: "A football broadcast you can question.",
    intro:
      "The same match can mean something different to a fan, an analyst, or someone following one player. I’m building a match studio that makes those perspectives visible, while keeping every explanation tied to the action.",
    role: "Developer · simulation, interface & intelligence",
    stack: "TypeScript / React / Python / Microsoft Foundry",
    link: "https://cookiesgobrr.github.io/tacticlens-live/?seed=82",
    linkLabel: "Open the match studio",
    repo: "https://github.com/Cookiesgobrr/tacticlens-live",
    sections: [
      {
        label: "The question",
        title: "Can a broadcast show its working?",
        body: "AI commentary is easy to generate. Making it accountable is the harder part. TacticLens starts with one fictional 11-a-side match: the pitch, clock, score, shots, and explanations all share the same event log.",
      },
      {
        label: "The build",
        title: "One match. Different ways to see it.",
        body: "The studio offers 2D and 3D views of the same replay, player focus, a shot map, and audience-specific intelligence. Microsoft Foundry agents select, review, and compose evidence for key moments. Independent code checks the facts, and the interface lets you follow an explanation back to its events.",
      },
      {
        label: "A deliberate constraint",
        title: "Evidence before eloquence.",
        body: "Foundry compositions are precomputed for selected moments. The public replay needs no live model call. A deterministic fallback keeps the match usable when no approved composition is available, and evidence exports preserve the current replay time.",
      },
      {
        label: "Where it stands",
        title: "Playable, inspectable, still developing.",
        body: "This is a working prototype for Microsoft’s Inside the Game hackathon. The teams, players, and events are synthetic. The expected-goals model is simplified, and this is not a claim of professional predictive accuracy.",
      },
    ],
  },
  {
    slug: "epileducate",
    number: "02",
    name: "EpilEducate",
    category: "Swift × interactive learning",
    status: "2026 Swift Student Challenge submission",
    year: "2026",
    image: "epileducate.webp",
    alt: "Original EpilEducate iPad screenshot showing its First Aid learning interface and brain-wave visualization",
    line: "Making the unfamiliar a little more understandable.",
    intro:
      "My first Swift app is an interactive playground about epilepsy. It brings together explanations, a visualization of brain activity, and a scenario about responding when someone has a seizure.",
    role: "Developer · concept, learning experience & Swift app",
    stack: "Swift / SwiftUI / Canvas / SpriteKit",
    link: "https://github.com/Cookiesgobrr/EpilEducate",
    linkLabel: "Explore the source",
    repo: "",
    sections: [
      {
        label: "The starting point",
        title: "Understanding through interaction.",
        body: "I wanted to explore how an app could teach a subject through doing. EpilEducate connects an introduction to epilepsy with visual explanations of EEGs and a first-aid scenario.",
      },
      {
        label: "The experience",
        title: "From a waveform to a decision.",
        body: "A SwiftUI Canvas visualizes patterns of brain activity. Interactive controls explore factors such as stress and sleep deprivation, while haptic feedback adds another way to experience the visualization. The simulator turns the first-aid section into a sequence of choices.",
      },
      {
        label: "The learning",
        title: "My first Swift app, end to end.",
        body: "This project brought interface design, custom drawing, scene-based interaction, and learning content into one playground. The challenge was to make the parts feel like a coherent experience instead of separate demonstrations.",
      },
      {
        label: "Where it stands",
        title: "Submitted for the 2026 challenge.",
        body: "EpilEducate was submitted to Apple’s 2026 Swift Student Challenge. It is an educational student project, not a clinical tool. Its source and demo are available in the public repository.",
      },
    ],
  },
  {
    slug: "margin",
    number: "03",
    name: "Margin",
    category: "iPad × learning tools",
    status: "In development",
    year: "2026 → 2027",
    image: "",
    alt: "",
    line: "A little more room to think.",
    intro:
      "Margin is my next iPad app project, being developed with the 2027 Swift Student Challenge in mind. I’m exploring a notebook that gives students different ways to capture and work through an idea.",
    role: "Developer · ongoing personal project",
    stack: "Swift / iPadOS",
    link: "",
    linkLabel: "",
    repo: "",
    sections: [
      {
        label: "The direction",
        title: "Start with the way students think.",
        body: "Notes do not always begin as neat paragraphs. The direction for Margin is to make room for written, drawn, and spoken ideas inside a study experience.",
      },
      {
        label: "The constraint",
        title: "Useful without a connection.",
        body: "Offline use is a design priority. I’m exploring what can happen on the device and how the experience should behave when a capability is unavailable. This remains development work, not a promise of a finished feature set.",
      },
      {
        label: "Where it stands",
        title: "An open project, not a launch.",
        body: "Margin is in development. The 2027 challenge is the intended destination; it has not been submitted. There is no public download yet.",
      },
    ],
  },
];
