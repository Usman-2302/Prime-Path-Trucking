import { EQUIPMENT_TYPES } from "@/lib/constants";

const BASE = "https://primepathtucking.com";

const PAGES = [
  { url: BASE,                    priority: "1.0", changefreq: "weekly",  section: "Core" },
  { url: `${BASE}/services`,      priority: "0.9", changefreq: "monthly", section: "Core" },
  { url: `${BASE}/pricing`,       priority: "0.9", changefreq: "monthly", section: "Core" },
  { url: `${BASE}/contact`,       priority: "0.9", changefreq: "monthly", section: "Core" },
  { url: `${BASE}/about`,         priority: "0.7", changefreq: "monthly", section: "Core" },
  { url: `${BASE}/team`,          priority: "0.6", changefreq: "monthly", section: "Core" },
  ...EQUIPMENT_TYPES.map((eq) => ({
    url: `${BASE}/equipment/${eq.slug}`,
    priority: "0.8",
    changefreq: "monthly",
    section: "Equipment",
  })),
];

const now = new Date().toISOString().split("T")[0];

export async function GET() {
  const rows = PAGES.map(
    (p, i) => `
      <tr>
        <td class="num">${i + 1}</td>
        <td><a href="${p.url}">${p.url}</a></td>
        <td>${p.section === "Core"
          ? `<span class="badge badge-high">${p.priority}</span>`
          : `<span class="badge">${p.priority}</span>`
        }</td>
        <td class="freq">${p.changefreq}</td>
        <td class="date">${now}</td>
      </tr>`
  ).join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Sitemap — Prime Path Trucking</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#F8F9FA;color:#1E293B}
    header{background:linear-gradient(135deg,#F97316,#EA580C);padding:36px 40px;color:#fff}
    header h1{font-size:1.75rem;font-weight:800;letter-spacing:-0.02em}
    header p{font-size:.875rem;opacity:.8;margin-top:6px}
    .container{max-width:960px;margin:0 auto;padding:36px 24px}
    .stats{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:28px}
    .stat{background:#fff;border:1px solid #E2E8F0;border-radius:12px;padding:16px 22px;flex:1;min-width:130px;box-shadow:0 1px 3px rgba(15,23,42,.06)}
    .stat-val{font-size:1.6rem;font-weight:800;color:#F97316;letter-spacing:-.03em;line-height:1}
    .stat-label{font-size:.7rem;color:#94A3B8;margin-top:4px;font-weight:600;text-transform:uppercase;letter-spacing:.08em}
    table{width:100%;border-collapse:collapse;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(15,23,42,.07)}
    thead tr{background:linear-gradient(135deg,#0F172A,#1E293B)}
    th{padding:14px 18px;text-align:left;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.7)}
    td{padding:13px 18px;font-size:.875rem;border-bottom:1px solid #F1F5F9;vertical-align:middle}
    tr:last-child td{border-bottom:none}
    tbody tr:hover td{background:#FFF7ED}
    td a{color:#F97316;text-decoration:none;font-weight:500;word-break:break-all}
    td a:hover{text-decoration:underline}
    .num{color:#CBD5E1;font-size:.75rem}
    .badge{display:inline-block;padding:3px 9px;border-radius:999px;font-size:.7rem;font-weight:700;background:rgba(249,115,22,.1);color:#EA580C;border:1px solid rgba(249,115,22,.25)}
    .badge-high{background:rgba(16,185,129,.1);color:#059669;border-color:rgba(16,185,129,.25)}
    .freq{color:#64748B;font-size:.8rem}
    .date{color:#94A3B8;font-size:.8rem;font-variant-numeric:tabular-nums}
    footer{text-align:center;padding:28px;font-size:.75rem;color:#94A3B8;border-top:1px solid #E2E8F0;margin-top:32px}
    footer a{color:#F97316;text-decoration:none}
    @media(max-width:640px){
      header{padding:24px 20px}
      .container{padding:24px 16px}
      th:nth-child(4),td:nth-child(4),th:nth-child(5),td:nth-child(5){display:none}
    }
  </style>
</head>
<body>
  <header>
    <h1>🗺 Prime Path Trucking — Sitemap</h1>
    <p>All indexed pages · primepathtucking.com</p>
  </header>
  <div class="container">
    <div class="stats">
      <div class="stat"><div class="stat-val">${PAGES.length}</div><div class="stat-label">Total URLs</div></div>
      <div class="stat"><div class="stat-val">HTML</div><div class="stat-label">Format</div></div>
      <div class="stat"><div class="stat-val">Auto</div><div class="stat-label">Generated</div></div>
      <div class="stat"><div class="stat-val">Daily</div><div class="stat-label">Cache TTL</div></div>
    </div>
    <table>
      <thead>
        <tr>
          <th>#</th><th>URL</th><th>Priority</th><th>Frequency</th><th>Last Modified</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  </div>
  <footer>
    Generated automatically ·
    <a href="https://primepathtucking.com">Prime Path Trucking</a> ·
    <a href="/sitemap.xml">Raw XML</a> ·
    Submit to <a href="https://search.google.com/search-console" target="_blank">Google Search Console</a>
  </footer>
</body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
