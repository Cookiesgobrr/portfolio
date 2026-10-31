export const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const url = (path = "") => `${base}/${path.replace(/^\//, "")}`;
export const email = "tarun.jacob2927@gmail.com";
export const linkedin = "https://www.linkedin.com/in/tarnu/";
export const github = "https://github.com/Cookiesgobrr";
export const talk = "https://www.youtube.com/watch?v=JCxpD2Mlkg8";

interface CaseSection {
  id?: string;
  anchors?: string[];
  title: string;
  body: string[];
  diagram?: boolean;
}

interface Project {
  slug: string;
  number: string;
  name: string;
  category: string;
  status: string;
  year: string;
  image: string;
  alt: string;
  line: string;
  intro: string;
  role: string;
  stack: string;
  contribution: string;
  built: string[];
  link: string;
  linkLabel: string;
  repo: string;
  sections: CaseSection[];
}

export const projects: Project[] = [
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
      "I had already started working on a football game engine for the browser when I found the Microsoft × Premier League developer hackathon. I realised I could reuse it for something closer to an intelligent broadcast or match-analysis system.",
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
        title: "Why I built it",
        body: [
          "TacticLens came from the Microsoft × Premier League developer hackathon. A few days before discovering the challenge, I had already been experimenting with making something similar to a football game that could run in the browser. I’d started working on a match engine.",
          "When I found the hackathon, I realised I could reuse that engine for something different. Instead of making a football video game, I wanted to make something closer to an intelligent broadcast or match-analysis system.",
          "The basic idea was that events in a football match, like passes, shots, movement and decisions, could become information that different people could understand differently. A fan might want one explanation. An analyst might want something else. Someone following one player might care about completely different moments. That became TacticLens.",
        ],
      },
      {
        title: "How I built it",
        body: [
          "The match engine is written in TypeScript. It simulates a fictional 11-a-side match and uses a seed so the same inputs produce the same match. The pitch, clock, score, statistics and explanations all use a shared event log, with IDs for individual events.",
          "I built 2D and 3D replay views in React, SVG and Three.js. They show the same simulation frames, so switching views doesn’t mean switching to a different match. The interface includes replay controls, player focus and highlights that link back to the events behind them.",
          "This was also my first time properly working with Microsoft Azure and Microsoft Foundry. I set up my first Azure account while building this. I was even nervous about putting my credit card into Azure because I’d never set up a cloud account like that before and didn’t fully understand how the charging worked.",
          "I then had to learn how Azure worked, how to access a model through Foundry, how to send it match information, and how to control what it returned. The Foundry workflow selects, reviews and composes evidence for different audiences. Separate checks in Python and TypeScript verify the facts against the match data.",
          "The public demo uses precomputed Foundry compositions for selected moments, rather than making a live model call on every click. A deterministic fallback provides explanations when there isn’t an approved composition. I also added exports for the evidence and captions at the current replay time.",
        ],
      },
      {
        title: "What was difficult",
        body: [
          "I initially assumed AI commentary would be one of the easier parts. It wasn’t. Getting a model to produce commentary is easy. Getting it to produce the right commentary consistently was much harder.",
          "I had to work out how to give it the correct match information and instructions, and how to stop it drifting away from what actually happened. This pushed the project towards having evidence tied to match events rather than simply letting a model freely generate commentary.",
          "I built most of TacticLens in roughly one to two weeks. That meant I had to make compromises. If I restarted it, I’d spend much more time improving the underlying football simulation, how realistic player movement and decisions are, the AI commentary, and the connection between the simulation and explanations.",
        ],
      },
      {
        title: "What I learned",
        body: [
          "The biggest thing I learned was probably that connecting AI to a system is not simply “send data, get an intelligent answer.” A lot of the work is deciding what information the model receives, what it’s allowed to say, and how you verify that what it says is actually supported by the system.",
        ],
      },
      {
        title: "Where it stands",
        body: [
          "TacticLens is a working prototype for Inside the Game: Developer Hackathon, presented by Microsoft and the Premier League. The demo and source are linked below.",
          "The teams, players and events are fictional. The simulation simplifies football movement and decisions, and its expected-goals model is a simplified synthetic model. There’s still a lot I’d like to improve, especially in the simulation and commentary.",
        ],
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
    line: "A Google Sheets-based system for conference logistics.",
    intro:
      "Our logistics team spent a lot of time turning registration spreadsheets into usable delegate records. I wanted to make this easier for everyone, so I started looking into using a Google Sheet as a central database for the conference.",
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
    repo: "https://github.com/Cookiesgobrr/admun-logistics-demo/",
    sections: [
      {
        id: "problem",
        title: "Why I built it",
        body: [
          "Before admunOS, our logistics team received conference registration data from the school IT department as a large Excel sheet. It contained a lot of information in a format that wasn’t particularly useful for conference operations.",
          "Our team then had to spend a lot of time manually turning that information into something we could actually use: compiling delegate information, creating new spreadsheets, handling allocations and preparing records for the conference. Conference-day operations were also very manual. Food coupons were literally paper coupons that had to be distributed and torn when delegates collected meals.",
          "I felt that a lot of this could be simplified and digitized. The question I started with was basically: could we use a Google Sheet as one central database for the conference and connect everything else to it?",
          "As Director of Logistics for ADMUN 2.7, I wanted to make this easier for everyone and reduce the amount of repetitive manual work. Instead of rebuilding delegate spreadsheets every time information arrives, I wanted us to be able to import it and let the system process it into the structure we need.",
        ],
      },
      {
        id: "system",
        anchors: ["payments", "architecture", "staff-workflow"],
        diagram: true,
        title: "How I built it",
        body: [
          "I started researching how this could work and discovered Google Apps Script. I hadn’t really used Apps Script in this way before. From there, I started experimenting with connecting Google Sheets to scripts and then to a front-end dashboard. I also used Codex while developing the system.",
          "Google Sheets is the main operational data store. Apps Script handles registration imports, payment reconciliation, permanent delegate IDs, attendance and meals. The staff interface is a browser app served over HTTPS. Its requests go through a Netlify Function to Apps Script, which checks the records and writes back to the Sheet.",
          "One important part is separating registration from finalized delegates. Imported registrations enter a signup database without a Delegate ID or QR code. A signup only becomes a finalized delegate after its payment record has been uniquely matched and verified. That’s when it receives a permanent ID. Reimporting registration information preserves operational fields such as committee allocation and portfolio.",
          "The registration files have different internal and external layouts, so the import maps them into a common structure. External payments are matched using the source registration number; internal payments use the normalized name and configured school. Ambiguous matches and duplicate payment rows go into a review sheet. Held, cancelled or refunded payments don’t create new delegates; an existing finalized match is kept as withdrawn for audit and hidden from app lookups.",
          "Staff enter an access code, choose attendance or meal mode, select the session or meal, and identify their scanning station. They can scan with the rear camera, read a QR image, enter the Delegate ID manually, or use the directory to look someone up. The interface distinguishes an approval from a duplicate, an unknown or inactive delegate, and a connection failure. Reading the QR itself is not approval; that response has to come from the server.",
        ],
      },
      {
        id: "reliability",
        anchors: ["privacy"],
        title: "What was difficult",
        body: [
          "I initially thought about stopping repeated scans in the scanner itself. But that doesn’t solve the case where two different phones scan the same delegate at almost the same time. That’s why the duplicate check happens where the record is written on the backend.",
          "Attendance uses a key made from the Delegate ID and session. Meals use the Delegate ID and meal code. The backend takes a script-wide lock, checks whether that key already exists, writes the record and flushes it before releasing the lock. A repeated scan returns an already-recorded result with the previous timestamp. Checking in to one session doesn’t block a different session, and collecting one meal doesn’t block another meal.",
          "I also had to think about what information staff should actually be allowed to see. The QR contains only the Delegate ID, not someone’s name, school, contact details or food preference. Search, scan results and the details view return different sets of fields. Search omits contact and food information; the details view permits selected operational fields, including food preference and mobile number. Payment data, email, school GR numbers and source registration numbers are excluded from that response.",
          "The Netlify proxy keeps the backend URL and API credential out of the browser’s configuration. Protected actions require the correct, non-empty staff code. The code is held in session storage without persisting delegate records. It’s shared-code access, not individual staff accounts or per-person permissions.",
          "Another problem is what happens when the internet stops responding. The app caches its static shell, but it doesn’t cache delegate responses or queue unconfirmed writes as successful check-ins. A timeout can also happen after a record has reached the server, so a retry needs to go through the same duplicate check. The fallback procedure is to keep a protected paper record and have one administrator reconcile entries through the normal server workflow when the connection returns.",
        ],
      },
      {
        id: "learning",
        title: "What I learned",
        body: [
          "This project taught me that the visible interface is only a small part of building an operational system. A scanner can look finished while the harder problems are mismatched records, duplicate entries, payment ambiguity, two devices doing something at once, or what happens when the internet stops responding.",
          "It also taught me how Google Apps Script works and how something as ordinary as a Google Sheet can be used as the centre of a much larger workflow.",
        ],
      },
      {
        id: "status",
        anchors: ["verification"],
        title: "Where it stands",
        body: [
          "admunOS is in development and being prepared for ADMUN 2.7. The conference is still forthcoming.",
          "The repository includes automated tests for import normalization, payment matching, ambiguous and duplicate rows, staff access, API validation, response-field filtering and upstream failures. An Apps Script self-check also looks for configuration problems, duplicate IDs, invalid payment states, QR formula issues and duplicate attendance or meal keys. Controlled demo records use fictional signups, including paid and unpaid cases.",
          "Preparation still includes testing the actual scanning phones and camera permissions, venue Wi-Fi and mobile-data fallback, simultaneous scans from two devices, backups and the fallback procedure.",
        ],
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
      "This was my first real Swift project. I wanted to make an interactive app that helped people understand epilepsy, brain activity, and what to do if someone has a seizure.",
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
        title: "Why I built it",
        body: [
          "I have epilepsy. I wanted to create something that could help people understand what epilepsy is, what can contribute to seizures, what brain activity can look like, and what someone should do if another person has a seizure. The intention was awareness and education.",
        ],
      },
      {
        title: "Learning Swift",
        body: [
          "When I started EpilEducate, my knowledge of Swift, and honestly programming in general, was fairly limited. This project forced me to learn a lot very quickly.",
          "I spent a lot of time using Gemini as a learning tool while working through Swift, SwiftUI, different frameworks, how views fit together, Canvas, SpriteKit and interactive elements. A major part of the project was me learning how to build it while I was building it.",
        ],
      },
      {
        title: "What I built",
        body: [
          "I used SwiftUI to put together the learning flow, connecting explanations of epilepsy with interactive exercises. I learned to use Canvas for a brain-wave visualization, added controls to explore triggers, and included haptic feedback alongside the visual experience.",
          "For the first-aid part, I learned to use SpriteKit to make an interactive scenario. It has a briefing, choices about how to respond when someone has a seizure, and a results screen. That meant working out how to connect a SpriteKit scene to the rest of the SwiftUI app.",
        ],
      },
      {
        title: "The result and what I learned",
        body: [
          "I submitted EpilEducate to the 2026 Apple Swift Student Challenge. I wasn’t selected as a winner.",
          "The project still mattered because it was my first experience building a complete Swift application. I went from knowing very little Swift to being able to build an interactive project with multiple frameworks and submit it.",
          "I’m now carrying some of what I learned into another Swift project I’m working on. EpilEducate’s source and demo are available in the public repository below.",
        ],
      },
    ],
  },
];
