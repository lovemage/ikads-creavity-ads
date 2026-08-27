/** 靜態 sitemap。新增頁面時把路徑加進 pages 陣列，文章自動從 notes.ts 展開。 */
import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { notes } from '../data/notes';

interface Entry {
  path: string;
  changefreq: string;
  priority: string;
  lastmod?: string;
}

const latest = notes.reduce((a, n) => (n.date > a ? n.date : a), notes[0].date);

const pages: Entry[] = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
  { path: '/notes', changefreq: 'weekly', priority: '0.8', lastmod: latest },
  ...notes.map((n) => ({
    path: `/notes/${n.slug}`,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: n.date,
  })),
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((p) => {
    const lastmod = p.lastmod ? `\n    <lastmod>${p.lastmod}</lastmod>` : '';
    return `  <url>
    <loc>${new URL(p.path, site.url).href}</loc>${lastmod}
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
