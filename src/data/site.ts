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
    status: "Prototype · Microsoft × Premier League hackathon",
    year: "2026",
    image: "tacticlens-match.webp",
    alt: "TacticLens match studio showing a fictional football match and source-linked match intelligence",
    line: "Beyond the Score. Every Moment Explained.",
    intro:
      "The same match can mean something different to a fan, an analyst, or someone following one player. I’m building a match studio that makes those perspectives visible, while keeping every explanation tied to the action.",
    role: "Developer · simulation, interface & intelligence",
    stack: "TypeScript / React / Python / Microsoft Foundry",
    contribution:
      "The match simulation, replay interface, and evidence checks behind the commentary.",
    built: [
      "A seeded TypeScript engine for a fictional 11-a-side match, with stable event IDs and a shared replay timeline.",
      "React/SVG and Three.js views, replay controls, player focus, and source-linked highlights drawn from that same timeline.",
      "A Microsoft Foundry evidence-selection workflow, independent checks in Python and TypeScript, and replay-time JSON and caption exports.",
    ],
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
        body: "This is a working prototype for Inside the Game: Developer Hackathon, presented by Microsoft and the Premier League. The teams, players, and events are synthetic. The expected-goals model is simplified, and this is not a claim of professional predictive accuracy.",
      },
    ],
  },
  {
    slug: "admunos",
    number: "02",
    name: "admunOS",
    category: "Conference logistics × connected workflows",
    status: "In development · preparing for ADMUN 2.7",
    year: "2026",
    image: "admunos-interface.webp",
    alt: "admunOS staff directory interface showing a fictional Sample Delegate at Test School, with attendance and meal scanner modes",
    line: "The conference I’m helping run. The system I’m building for it.",
    intro:
      "I became Director of Logistics for ADMUN 2.7 and needed to connect registration, payment checks, and what happens at the door. I began building admunOS so the same delegate record could connect a verified payment to check-in and meal collection.",
    role: "Developer · system design, backend & staff interface; Director of Logistics, ADMUN 2.7",
    stack:
      "JavaScript / Google Apps Script / Google Sheets / Netlify Functions",
    contribution:
      "The registration-to-delegate workflow, staff scanner, and backend record checks.",
    built: [
      "Registration imports and payment reconciliation in Google Apps Script, with a review step before paid delegates receive permanent IDs.",
      "A browser-based staff directory and QR scanner with attendance and meal modes, manual ID entry, and clear approval, duplicate, and connection-error responses.",
      "A server-side proxy and backend checks for staff access, limited response fields, and duplicate attendance and meal records.",
    ],
    link: "",
    linkLabel: "",
    repo: "",
    sections: [
      {
        label: "The problem",
        title: "One delegate, several separate lists.",
        body: "Registration, payment verification, badges, attendance, and meals all depend on knowing who someone is and what has been confirmed. As I prepared for the logistics role, I wanted those steps to use the same record. Otherwise, every desk would have its own version of the answer.",
      },
      {
        label: "The system",
        title: "A permanent ID connects the steps.",
        body: "Registration exports enter a signup database. A separate payment import is reviewed before uniquely matched, paid signups become operational delegate records. Only then does the system issue a permanent Delegate ID. Staff use that ID for directory lookup, QR check-in, attendance sessions, and meal collection. Reimports preserve logistics fields such as committee allocation and portfolio.",
      },
      {
        label: "A technical decision",
        title: "Two phones. One meal record.",
        body: "A camera cooldown can stop repeat scans on one phone, but it cannot coordinate two desks. For attendance and meals, the backend takes a script-wide lock, rechecks the delegate-and-session or delegate-and-meal key, and writes and flushes the record before releasing the lock. A repeat returns an already-recorded result. The duplicate rule belongs where the record is written.",
      },
      {
        label: "Staff access & privacy",
        title: "The badge carries an ID.",
        body: "The QR contains only the Delegate ID. Staff authenticate with a shared access code, and the server confirms each scan. A server-side proxy keeps backend credentials out of the browser, while responses limit fields to the particular staff workflow. The app caches its static shell, but does not cache delegate responses or queue unconfirmed writes as successful check-ins.",
      },
      {
        label: "Where it stands",
        title: "Built for a conference still ahead.",
        body: "I’m preparing admunOS for the forthcoming ADMUN 2.7. The repository includes automated tests and a controlled workflow using fictional delegates. Venue-network, phone-camera, and multi-device checks are part of preparation before event-day use.",
      },
    ],
  },
  {
    slug: "epileducate",
    number: "03",
    name: "EpilEducate",
    category: "Swift × interactive learning",
    status: "2026 Swift Student Challenge submission",
    year: "2026",
    image: "epileducate.webp",
    alt: "Original EpilEducate iPad screenshot showing its First Aid learning interface and brain-wave visualization",
    line: "An educational playground about epilepsy, brain activity, and seizure first aid.",
    intro:
      "My first Swift app is an interactive playground about epilepsy. It brings together explanations, a visualization of brain activity, and a scenario about responding when someone has a seizure.",
    role: "Developer · concept, learning experience & Swift app",
    stack: "Swift / SwiftUI / Canvas / SpriteKit",
    contribution:
      "The SwiftUI learning flow, brain-wave visualization, and SpriteKit first-aid scenario.",
    built: [
      "The SwiftUI app and learning flow, connecting explanations of epilepsy with interactive exercises.",
      "A custom Canvas brain-wave visualization, trigger controls, and haptic feedback alongside the visual experience.",
      "A SpriteKit first-aid scenario with a briefing, interactive choices, and a results screen.",
    ],
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
];
