<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>
          <xsl:choose>
            <xsl:when test="sitemap:sitemapindex">Sitemap Index — webskeet.com</xsl:when>
            <xsl:otherwise>Sitemap — webskeet.com</xsl:otherwise>
          </xsl:choose>
        </title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; color: #1e293b; padding: 2rem; }
          h1 { font-size: 1.5rem; margin-bottom: 0.5rem; color: #0E6BA8; }
          p.info { color: #64748b; margin-bottom: 1.5rem; font-size: 0.875rem; }
          table { width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
          th { background: #0E6BA8; color: white; text-align: left; padding: 0.75rem 1rem; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; }
          td { padding: 0.6rem 1rem; border-bottom: 1px solid #e2e8f0; font-size: 0.85rem; }
          tr:hover td { background: #f1f5f9; }
          a { color: #0E6BA8; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .badge { display: inline-block; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.7rem; font-weight: 600; }
          .badge-daily { background: #dcfce7; color: #166534; }
          .badge-weekly { background: #dbeafe; color: #1e40af; }
          .badge-monthly { background: #fef3c7; color: #92400e; }
          .badge-yearly { background: #f3e8ff; color: #6b21a8; }
          .hreflang { font-size: 0.75rem; color: #94a3b8; margin-top: 0.25rem; }
          .count { color: #64748b; font-size: 0.875rem; }
        </style>
      </head>
      <body>
        <xsl:apply-templates/>
      </body>
    </html>
  </xsl:template>

  <!-- Sitemap Index -->
  <xsl:template match="sitemap:sitemapindex">
    <h1>Sitemap Index</h1>
    <p class="info">
      This sitemap index contains <strong><xsl:value-of select="count(sitemap:sitemap)"/></strong> sitemaps.
    </p>
    <table>
      <tr>
        <th>Sitemap</th>
        <th>Last Modified</th>
      </tr>
      <xsl:for-each select="sitemap:sitemap">
        <tr>
          <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
          <td><xsl:value-of select="sitemap:lastmod"/></td>
        </tr>
      </xsl:for-each>
    </table>
  </xsl:template>

  <!-- URL Set -->
  <xsl:template match="sitemap:urlset">
    <h1>Sitemap</h1>
    <p class="info">
      This sitemap contains <strong><xsl:value-of select="count(sitemap:url)"/></strong> URLs.
    </p>
    <table>
      <tr>
        <th>URL</th>
        <th>Last Modified</th>
        <th>Change Freq</th>
        <th>Priority</th>
      </tr>
      <xsl:for-each select="sitemap:url">
        <tr>
          <td>
            <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
            <xsl:if test="xhtml:link[@hreflang]">
              <div class="hreflang">
                <xsl:for-each select="xhtml:link[@hreflang]">
                  <xsl:if test="position() > 1"> · </xsl:if>
                  <xsl:value-of select="@hreflang"/>
                </xsl:for-each>
              </div>
            </xsl:if>
          </td>
          <td><xsl:value-of select="sitemap:lastmod"/></td>
          <td>
            <xsl:variable name="freq" select="sitemap:changefreq"/>
            <span>
              <xsl:attribute name="class">
                badge badge-<xsl:value-of select="$freq"/>
              </xsl:attribute>
              <xsl:value-of select="$freq"/>
            </span>
          </td>
          <td><xsl:value-of select="sitemap:priority"/></td>
        </tr>
      </xsl:for-each>
    </table>
  </xsl:template>

</xsl:stylesheet>
