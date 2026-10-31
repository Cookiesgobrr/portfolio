export const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const url = (path = "") => `${base}/${path.replace(/^\//, "")}`;
export const email = "tarun.jacob2927@gmail.com";
export const linkedin = "https://www.linkedin.com/in/tarnu/";
export const github = "https://github.com/Cookiesgobrr";
export const talk = "https://www.youtube.com/watch?v=JCxpD2Mlkg8";

interface CaseSection {
  id?: string;
  label: string;
  title: string;
  body: string | string[];
  list?: string[];
  table?: {
    caption: string;
    rows: { layer: string; responsibility: string }[];
  };
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
        id: "problem",
        label: "The problem",
        title: "One delegate, several separate lists.",
        body: [
          "Becoming Director of Logistics for ADMUN 2.7 meant thinking beyond the registration form. A delegate needs to be registered, have their payment confirmed, receive an identity, enter the right sessions, and collect the right meals. Each step depends on something decided earlier.",
          "Handling those as separate lists would leave staff reconciling answers at the door. A name on a registration sheet does not prove payment; a badge does not tell a meal desk whether it has already been used. I began building admunOS to connect those decisions around one delegate record.",
          "The scope is conference operations: importing registrations, reconciling payment records, and giving staff a way to act on the confirmed information. It does not collect or process payments itself.",
        ],
      },
      {
        id: "system",
        label: "The system",
        title: "Registration is a starting point, not an admission pass.",
        body: [
          "The backend keeps signups and finalized delegates separate. Registration imports enter the signup database without a Delegate ID or QR code. Only a uniquely matched, verified payment promotes a signup into the operational delegate database and issues a permanent ID.",
          "That ID then connects directory lookup, the badge QR, attendance sessions, and meal records. Reimporting registration data preserves operational fields such as committee allocation and portfolio. A held, cancelled, or refunded payment prevents a new delegate from being finalized; an existing finalized match is retained as withdrawn for audit and hidden from app lookups.",
          "This separation matters at a desk: staff work from the finalized records, rather than having to interpret an unverified signup or a payment spreadsheet themselves.",
        ],
      },
      {
        id: "payments",
        label: "Imports & payment review",
        title: "A plausible match is not enough.",
        body: [
          "The source registration files have different internal and external layouts. The import layer maps them into a common signup structure while retaining the original data in staging. If a populated column is unfamiliar, the system reports it rather than silently discarding its contents.",
          "Payment matching follows the identifiers available in each source. External payments use the student number against the source registration number. Internal payments use the normalized name and configured school. School GR numbers are informational, not payment-matching or scanner identifiers.",
          "Ambiguous matches and duplicate payment rows go into a review sheet instead of automatically creating delegates. The import also distinguishes adding information from replacing the current paid list:",
        ],
        list: [
          "Additive import adds or updates verified payments. A delegate is not removed just because they are absent from that file.",
          "Sync import also removes finalized delegates missing from the verified list and clears their signup payment state. It requires an extra confirmation, and removed Delegate IDs are never reused.",
        ],
      },
      {
        id: "architecture",
        label: "The architecture",
        title: "The phone asks. The backend decides.",
        body: [
          "The staff interface is a browser app served over HTTPS so phones can use their cameras. Its requests go through a Netlify Function to Google Apps Script, which owns the record checks and writes in Google Sheets.",
          "Decoding a QR only supplies an ID. Approval has to come back from the server after the requested attendance or meal action has been checked and recorded.",
        ],
        table: {
          caption: "How a scan moves through admunOS",
          rows: [
            {
              layer: "Staff browser",
              responsibility:
                "Reads the QR or manual ID, collects the station and session or meal selection, and displays the server’s result.",
            },
            {
              layer: "Netlify Function",
              responsibility:
                "Validates the request, adds the private backend credential on the server, forwards the action, and limits the returned fields.",
            },
            {
              layer: "Google Apps Script",
              responsibility:
                "Checks staff access, delegate eligibility, the session or meal, and whether the action has already been recorded. Writes approved records.",
            },
            {
              layer: "Google Sheets",
              responsibility:
                "Holds signups, finalized delegates, payment review, configuration, and separate attendance and meal logs.",
            },
          ],
        },
      },
      {
        id: "staff-workflow",
        label: "At the desk",
        title: "Give staff an answer they can act on.",
        body: [
          "Staff enter an access code, choose attendance or meal mode, select the relevant session or meal, and identify their scanning station. The directory can find finalized delegates by ID, name, school, or committee, with a separate details view.",
          "Scanning supports the rear camera, a QR image, and manual Delegate ID entry. The manual route stays available when a camera permission, damaged printout, or particular phone gets in the way.",
          "The interface distinguishes an approval from an already-recorded action, an unknown ID, an inactive or withdrawn delegate, and a connection failure. Duplicate responses include the previous recording time. Text and symbols accompany the visual result, with optional sound and vibration. The browser also prevents overlapping scan requests and briefly pauses repeated QR decoding.",
        ],
      },
      {
        id: "reliability",
        label: "A technical decision",
        title: "Two phones. One meal record.",
        body: [
          "A camera cooldown helps on one phone. It cannot stop two desks from scanning the same badge at nearly the same time. I put the duplicate check where the record is written, rather than relying on what an individual browser remembers.",
          "An attendance record is keyed by Delegate ID plus session; a meal record by Delegate ID plus meal code. The backend takes a script-wide lock, rechecks that key, appends the record, and flushes the write before releasing the lock. If the key already exists, it returns an already-recorded result and the earlier timestamp. The lock is released even when the operation fails.",
          "The two keys also keep the rules separate. Attending one session should not block another session, and collecting one meal should not block a different meal.",
          "Connectivity has a deliberate limit. The app caches its static shell, but API responses are not cached and unconfirmed writes are not queued as successful check-ins. A timeout can leave a write’s outcome uncertain; retrying through the same duplicate check can reveal a record that reached the server before the response was lost.",
          "The documented outage fallback is operational: keep a protected paper record of the ID, time, station, session or meal, and operator. One administrator reconciles it through the normal server workflow once connectivity returns. That procedure still needs to be rehearsed with staff before the event.",
        ],
      },
      {
        id: "privacy",
        label: "Staff access & privacy",
        title: "The badge carries an ID, not a profile.",
        body: [
          "The QR contains only the Delegate ID. It does not carry a name, school, contact details, food preference, or credentials. The browser decodes it locally, then requests the information needed for the selected staff action.",
          "Search, scan results, and delegate details have different allowed fields. Search results omit contact and food information; the details view permits selected operational fields, including food preference and mobile number. Payment data, email, school GR numbers, and source registration numbers are excluded from the staff detail response.",
          "The Netlify proxy keeps the backend URL and API credential out of browser configuration. Protected actions require a non-empty, correct staff code; the browser keeps that code in session storage without persisting delegate records. This is shared-code staff access, not individual staff accounts or per-person permissions. Station names identify scanning locations, not authenticated staff identities.",
        ],
      },
      {
        id: "verification",
        label: "Checking the system",
        title: "Test the decisions, including the awkward ones.",
        body: [
          "The repository includes automated tests for import normalization, payment matching, ambiguous and duplicate rows, mandatory staff access, API validation, response-field filtering, and upstream failures.",
          "An Apps Script self-check looks for configuration problems, duplicate Delegate IDs, invalid finalized payment states, QR formula issues, and duplicate attendance or meal keys. Controlled demo records include paid and unpaid fictional signups, so the distinction between registration and scanner visibility can be checked without exposing real delegates.",
        ],
      },
      {
        id: "status",
        label: "Where it stands",
        title: "Built for a conference still ahead.",
        body: [
          "admunOS is in development and being prepared for the forthcoming ADMUN 2.7. The repository contains the registration and payment workflow, staff interface, server proxy, and attendance and meal services.",
          "Preparation still includes testing the actual scanning phones and camera permissions, checking venue Wi-Fi and mobile-data fallback, rehearsing simultaneous scans from two devices, and arranging backups and a recovery procedure. These are the practical checks between implemented code and something staff can depend on at the door.",
          "The project started with a responsibility I had taken on. Building it has meant following that responsibility through the less visible parts: mismatched records, repeat scans, missing responses, and what someone should do when the screen cannot give them an answer.",
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
