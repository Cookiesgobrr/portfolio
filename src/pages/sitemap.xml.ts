import type { APIRoute } from "astro";
import { projects, url } from "../data/site";
export const GET: APIRoute = () => {
  const paths = [
    "",
    "about/",
    "lab/",
    ...projects.map((project) => `work/${project.slug}/`),
  ];
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>https://cookiesgobrr.github.io${url(path)}</loc></url>`).join("")}</urlset>`,
    { headers: { "Content-Type": "application/xml" } },
  );
};
