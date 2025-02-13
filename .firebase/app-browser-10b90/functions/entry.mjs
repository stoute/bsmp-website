import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CXdvTAFt.mjs';
import { manifest } from './manifest_BeHsNK32.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about/about.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/legal/_---slug_.astro.mjs');
const _page7 = () => import('./pages/music.astro.mjs');
const _page8 = () => import('./pages/projects.astro.mjs');
const _page9 = () => import('./pages/projects/_---slug_.astro.mjs');
const _page10 = () => import('./pages/robots.txt.astro.mjs');
const _page11 = () => import('./pages/rss.xml.astro.mjs');
const _page12 = () => import('./pages/search.astro.mjs');
const _page13 = () => import('./pages/work.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.2.6_jiti@1.21.0_rollup@4.34.6_typescript@5.4.2_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about/about.mdx", _page1],
    ["src/pages/about/index.astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/blog/[...slug].astro", _page4],
    ["src/pages/contact/index.astro", _page5],
    ["src/pages/legal/[...slug].astro", _page6],
    ["src/pages/music/index.astro", _page7],
    ["src/pages/projects/index.astro", _page8],
    ["src/pages/projects/[...slug].astro", _page9],
    ["src/pages/robots.txt.ts", _page10],
    ["src/pages/rss.xml.ts", _page11],
    ["src/pages/search/index.astro", _page12],
    ["src/pages/work/index.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "middleware",
    "client": "file:///Users/bobstoute/Git/@bsmp/astro-sphere/dist/client/",
    "server": "file:///Users/bobstoute/Git/@bsmp/astro-sphere/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
