export interface Credential {
  name: string;
  issuer: string;
  date: string;
  discipline: string;
  kind: "Badge" | "Simulation";
  verification: string | null;
  proofLabel: string;
}

export const credentials: Credential[] = [
  {
    name: "Internal Audit Job Simulation",
    issuer: "Goldman Sachs · Forage",
    date: "August 2025",
    discipline: "Internal audit · professional simulation",
    kind: "Simulation",
    verification: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/dC4ChhAkhpgB7QvGd_MBA4MnZTNFEoJZGnk_9R7jx3kHJqRRK8Eab_1754315392712_completion_certificate.pdf",
    proofLabel: "View issuer-hosted certificate",
  },
  {
    name: "Get Started with Cloud Storage",
    issuer: "Google",
    date: "July 2024",
    discipline: "Cloud storage",
    kind: "Badge",
    verification: "https://www.credly.com/badges/46b8cb20-8ef1-47bc-839a-d6a8a42939b5",
    proofLabel: "View digital badge",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "December 2023",
    discipline: "Cybersecurity · network security",
    kind: "Badge",
    verification: "https://www.credly.com/badges/6589aea4-ced8-4ece-a129-be3112ffd6d6",
    proofLabel: "Verify digital badge",
  },
  {
    name: "Explore Emerging Tech",
    issuer: "IBM SkillsBuild",
    date: "August 2023",
    discipline: "Emerging technologies",
    kind: "Badge",
    verification: "https://www.credly.com/org/ibm-skillsbuild/badge/explore-emerging-tech.1",
    proofLabel: "View issuer badge description",
  },
  {
    name: "Cybersecurity Job Simulation",
    issuer: "Mastercard · Forage",
    date: "June 2023",
    discipline: "Cybersecurity · network security",
    kind: "Simulation",
    verification: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mastercard/vcKAB5yYAgvemepGQ_Mastercard_9R7jx3kHJqRRK8Eab_1688117718463_completion_certificate.pdf",
    proofLabel: "View issuer-hosted certificate",
  },
  {
    name: "AI Foundations",
    issuer: "IBM SkillsBuild",
    date: "March 2023",
    discipline: "Artificial intelligence",
    kind: "Badge",
    verification: "https://www.credly.com/badges/7dbc5728-9358-4226-aa91-81cf464d39ba/public_url",
    proofLabel: "Verify digital badge",
  },
  {
    name: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "April 2022",
    discipline: "Cybersecurity",
    kind: "Badge",
    verification: "https://www.credly.com/badges/c14140ff-cd5c-4175-a898-7fb6ec05991c",
    proofLabel: "Verify digital badge",
  },
  {
    name: "Working in a Digital World: Professional Skills",
    issuer: "IBM SkillsBuild",
    date: "February 2022",
    discipline: "Digital communication · professional skills",
    kind: "Badge",
    verification: "https://www.credly.com/badges/2bbefb4d-d10b-407d-badd-aa408749eb9f",
    proofLabel: "Verify digital badge",
  },
];
