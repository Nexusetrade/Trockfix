const fs = require('fs');
const path = require('path');

const publicDir = 'c:\\Users\\davin\\Desktop\\BM\\Client Work\\Website\\Trockfix\\horizons-export-91b7b105-0d69-4c5d-a724-d11e33552206\\public';

if (!fs.existsSync(publicDir)){
    fs.mkdirSync(publicDir);
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://trockfix.de/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
`;

const routes = [
    '/',
    '/leistungen',
    '/legal',
    '/wasserschadensanierung',
    '/bautrocknung',
    '/wasserschadensanierung/wasserschadenbeseitigung',
    '/wasserschadensanierung/schimmelsanierung',
    '/wasserschadensanierung/notdienst-24h',
    '/wasserschadensanierung/leckortung',
    '/wasserschadensanierung/kellerwasserschaden',
    '/wasserschadensanierung/hochwasserschaden',
    '/wasserschadensanierung/geruchsneutralisation',
    '/bautrocknung/estrichtrocknung',
    '/bautrocknung/wandtrocknung',
    '/bautrocknung/daemmschichttrocknung',
    '/bautrocknung/neubautrocknung',
    '/bautrocknung/flachdachtrocknung',
    '/bautrocknung/bautrocknerverleih',
    '/bautrocknung/baubeheizung',
    '/einzugsgebiet',
    '/einzugsgebiet/gaimersheim',
    '/einzugsgebiet/koesching',
    '/einzugsgebiet/manching',
    '/einzugsgebiet/neuburg-donau',
    '/einzugsgebiet/pfaffenhofen',
    '/einzugsgebiet/haunwoehr',
    '/einzugsgebiet/kothau',
    '/einzugsgebiet/ringsee',
    '/einzugsgebiet/friedrichshofen',
    '/kontakt',
    '/impressum',
    '/datenschutz'
];

for (let r of routes) {
    if (r === '/') continue;
    xml += `  <url>
    <loc>https://trockfix.de${r}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
}

xml += `</urlset>`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);

const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://trockfix.de/sitemap.xml
`;
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
console.log('Sitemap and robots.txt generated successfully!');
