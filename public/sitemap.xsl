<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>Sitemap — Prime Path Trucking</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #F8F9FA; color: #1E293B; }

          header {
            background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
            padding: 36px 40px;
            color: #fff;
          }
          header h1 { font-size: 1.75rem; font-weight: 800; letter-spacing: -0.02em; }
          header p { font-size: 0.875rem; opacity: 0.8; margin-top: 6px; }

          .container { max-width: 960px; margin: 0 auto; padding: 36px 24px; }

          .stats {
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
            margin-bottom: 28px;
          }
          .stat {
            background: #fff;
            border: 1px solid #E2E8F0;
            border-radius: 12px;
            padding: 16px 22px;
            flex: 1;
            min-width: 130px;
            box-shadow: 0 1px 3px rgba(15,23,42,0.06);
          }
          .stat-val {
            font-size: 1.6rem;
            font-weight: 800;
            color: #F97316;
            letter-spacing: -0.03em;
            line-height: 1;
          }
          .stat-label {
            font-size: 0.7rem;
            color: #94A3B8;
            margin-top: 4px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            background: #fff;
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(15,23,42,0.07);
          }
          thead tr {
            background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          }
          th {
            padding: 14px 18px;
            text-align: left;
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: rgba(255,255,255,0.7);
          }
          td {
            padding: 13px 18px;
            font-size: 0.875rem;
            border-bottom: 1px solid #F1F5F9;
            vertical-align: middle;
          }
          tr:last-child td { border-bottom: none; }
          tbody tr:hover td { background: #FFF7ED; }

          td a {
            color: #F97316;
            text-decoration: none;
            font-weight: 500;
            word-break: break-all;
          }
          td a:hover { text-decoration: underline; }

          .num { color: #CBD5E1; font-size: 0.75rem; }

          .badge {
            display: inline-block;
            padding: 3px 9px;
            border-radius: 999px;
            font-size: 0.7rem;
            font-weight: 700;
            background: rgba(249,115,22,0.1);
            color: #EA580C;
            border: 1px solid rgba(249,115,22,0.25);
          }
          .badge-high {
            background: rgba(16,185,129,0.1);
            color: #059669;
            border-color: rgba(16,185,129,0.25);
          }
          .freq { color: #64748B; font-size: 0.8rem; }
          .date { color: #94A3B8; font-size: 0.8rem; font-variant-numeric: tabular-nums; }

          footer {
            text-align: center;
            padding: 28px;
            font-size: 0.75rem;
            color: #94A3B8;
            border-top: 1px solid #E2E8F0;
            margin-top: 32px;
          }
          footer a { color: #F97316; text-decoration: none; }

          @media (max-width: 640px) {
            header { padding: 24px 20px; }
            .container { padding: 24px 16px; }
            th:nth-child(4), td:nth-child(4),
            th:nth-child(5), td:nth-child(5) { display: none; }
          }
        </style>
      </head>
      <body>
        <header>
          <h1>&#x1F5FA; Prime Path Trucking — Sitemap</h1>
          <p>All indexed pages · primepathtucking.com</p>
        </header>

        <div class="container">
          <div class="stats">
            <div class="stat">
              <div class="stat-val">
                <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
              </div>
              <div class="stat-label">Total URLs</div>
            </div>
            <div class="stat">
              <div class="stat-val">XML</div>
              <div class="stat-label">Format</div>
            </div>
            <div class="stat">
              <div class="stat-val">Auto</div>
              <div class="stat-label">Generated</div>
            </div>
            <div class="stat">
              <div class="stat-val">Daily</div>
              <div class="stat-label">Cache TTL</div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>URL</th>
                <th>Priority</th>
                <th>Frequency</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:sort select="sitemap:priority" order="descending" data-type="number"/>
                <tr>
                  <td class="num"><xsl:value-of select="position()"/></td>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <xsl:choose>
                      <xsl:when test="sitemap:priority &gt;= 0.9">
                        <span class="badge badge-high">
                          <xsl:value-of select="sitemap:priority"/>
                        </span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="badge">
                          <xsl:value-of select="sitemap:priority"/>
                        </span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                  <td class="freq"><xsl:value-of select="sitemap:changefreq"/></td>
                  <td class="date"><xsl:value-of select="sitemap:lastmod"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>

        <footer>
          Generated automatically ·
          <a href="https://primepathtucking.com">Prime Path Trucking</a>
          · Submit to
          <a href="https://search.google.com/search-console" target="_blank">Google Search Console</a>
        </footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
