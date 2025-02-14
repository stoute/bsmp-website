import { b as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, f as renderScript, a as renderComponent, m as maybeRenderHead, e as renderSlot, g as renderHead } from './astro/server_BPTSoEb2.mjs';
/* empty css                         */
import { clsx } from 'clsx';
import { a as SOCIALS, b as SITE, L as LINKS } from './consts_CNykIgmw.mjs';
import { twMerge } from 'tailwind-merge';

const $$Astro$5 = createAstro("https://astro-sphere-demo.vercel.app");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/bobstoute/Git/@bsmp/bsmp-website/node_modules/.pnpm/astro@5.2.6_jiti@1.21.0_rollup@4.34.6_typescript@5.4.2_yaml@2.7.0/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/bobstoute/Git/@bsmp/bsmp-website/node_modules/.pnpm/astro@5.2.6_jiti@1.21.0_rollup@4.34.6_typescript@5.4.2_yaml@2.7.0/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$4 = createAstro("https://astro-sphere-demo.vercel.app");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/open-graph.jpg" } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/OpenSans-Regular.ttf" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/OpenSans-Bold.ttf" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Sitemap --><link rel="sitemap" href="/sitemap-index.xml"><!-- RSS Feed --><link rel="alternate" type="application/rss+xml"', "", '><!-- Global Scripts --><script src="/js/theme.js"><\/script><script src="/js/scroll.js"><\/script><script src="/js/animate.js"><\/script><script defer src="/js/copy.js"><\/script>', "<!-- <ViewTransitions /> -->", ""])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(title, "title"), addAttribute(`${Astro2.site}rss.xml`, "href"), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderScript($$result, "/Users/bobstoute/Git/@bsmp/bsmp-website/src/components/BaseHead.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/bobstoute/Git/@bsmp/bsmp-website/src/components/BaseHead.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function formatDate(date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}
function readingTime(html) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}
function parseLinks(links) {
  console.log("NODE_ENV=" + process.env.NODE_ENV);
  let arr = [];
  links.map((link) => {
    if (process.env.NODE_ENV === "production" && !link["DISABLED"]) {
      arr.push(link);
    } else {
      arr.push(link);
    }
  });
  return arr;
}

const $$Astro$3 = createAstro("https://astro-sphere-demo.vercel.app");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Container;
  const { size } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "w-full h-full mx-auto px-5",
    size === "sm" && "max-w-screen-sm",
    size === "md" && "max-w-screen-md",
    size === "lg" && "max-w-screen-lg",
    size === "xl" && "max-w-screen-xl",
    size === "2xl" && "max-w-screen-2xl"
  ), "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/bobstoute/Git/@bsmp/bsmp-website/src/components/Container.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://astro-sphere-demo.vercel.app");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^/]+/g);
  const EMAIL = SOCIALS.find((SOCIAL) => SOCIAL.NAME === "Email");
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header id="header" class="fixed top-0 w-full h-16 z-50 " data-astro-cid-3ef6ksr2> ', ' </header>  <script>\n  function toggleDrawer() {\n    const drawer = document.getElementById("drawer")\n    const drawerButton = document.getElementById("header-drawer-button")\n    drawer?.classList.toggle("open")\n    drawerButton?.classList.toggle("open")\n  }\n\n  function initializeDrawerButton() {\n    const drawerButton = document.getElementById("header-drawer-button")\n    drawerButton?.addEventListener("click", toggleDrawer)\n  }\n\n  document.addEventListener("astro:after-swap", initializeDrawerButton)\n  initializeDrawerButton()\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Container", $$Container, { "size": "md", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <div class="relative h-full w-full" data-astro-cid-3ef6ksr2> <div class="absolute left-0 top-1/2 -translate-y-1/2 flex gap-1 font-semibold" data-astro-cid-3ef6ksr2> <a href="/" class="flex gap-1 text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out" data-astro-cid-3ef6ksr2> <!--<svg class="size-6 fill-current">--> <!--  <use href="/brand.svg#brand"></use>--> <!--</svg>--> <img src="/brand.svg"${addAttribute(SITE.TITLE, "alt")} class="h-8 w-auto" data-astro-cid-3ef6ksr2> <div class="pl-3 pt-1" data-astro-cid-3ef6ksr2> ${SITE.TITLE} </div> </a> </div> <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" data-astro-cid-3ef6ksr2> <nav class="hidden md:flex items-center justify-center text-sm gap-1" data-astro-cid-3ef6ksr2> ${parseLinks(LINKS).map((LINK) => renderTemplate`<a${addAttribute(LINK.HREF, "href")}${addAttribute(cn("h-8 rounded-full px-3 text-current", "flex items-center justify-center", "transition-colors duration-300 ease-in-out", pathname === LINK.HREF || "/" + subpath?.[0] === LINK.HREF ? "bg-black dark:bg-white text-white dark:text-black" : "hover:bg-black/5 dark:hover:bg-white/20 hover:text-black dark:hover:text-white"), "class")} data-astro-cid-3ef6ksr2> ${LINK.TEXT} </a>`)} </nav> </div> <div class="buttons absolute right-0 top-1/2 -translate-y-1/2 flex gap-1" data-astro-cid-3ef6ksr2> <a${addAttribute(EMAIL.HREF, "href")} target="_blank"${addAttribute(`${SITE.TITLE} on ${EMAIL.NAME}`, "aria-label")} class="hidden md:flex group size-10 rounded-full p-2 items-center justify-center hover:bg-black/5 dark:bg-white/20  blend" data-astro-cid-3ef6ksr2> <svg class="scale-90 fill-current group-hover:fill-black group-hover:dark:fill-white blend" data-astro-cid-3ef6ksr2> <use${addAttribute(`/social.svg#${EMAIL.ICON}`, "href")} data-astro-cid-3ef6ksr2></use> </svg> </a> <!--<a href="/search" aria-label={\`Search blog posts and projects on \${SITE.TITLE}\`} class={cn("hidden md:flex", "size-9 rounded-full p-2 items-center justify-center", "bg-transparent hover:bg-black/5 dark:hover:bg-white/20", "stroke-current hover:stroke-black hover:dark:stroke-white", "border border-black/10 dark:border-white/25", "transition-colors duration-300 ease-in-out", pathname === "/search" || "/" + subpath?.[0] === "/search" ? "pointer-events-none bg-black dark:bg-white text-white dark:text-black" : "")}>--> <!--  <svg class="size-full">--> <!--    <use href="/ui.svg#search"></use>--> <!--  </svg>--> <!--</a>--> <!--<a href="/rss.xml" target="_blank" aria-label={\`Rss feed for \${SITE.TITLE}\`} class={cn("hidden md:flex", "size-9 rounded-full p-2 items-center justify-center", "bg-transparent hover:bg-black/5 dark:hover:bg-white/20", "stroke-current hover:stroke-black hover:dark:stroke-white", "border border-black/10 dark:border-white/25", "transition-colors duration-300 ease-in-out")}>--> <!--  <svg class="size-full">--> <!--    <use href="/ui.svg#rss"></use>--> <!--  </svg>--> <!--</a>--> <!--<button id="header-theme-button" aria-label={\`Toggle light and dark theme\`} class={cn("hidden md:flex", "size-9 rounded-full p-2 items-center justify-center", "bg-transparent hover:bg-black/5 dark:hover:bg-white/20", "stroke-current hover:stroke-black hover:dark:stroke-white", "border border-black/10 dark:border-white/25", "transition-colors duration-300 ease-in-out")}>--> <!--  <svg class="size-full block dark:hidden">--> <!--    <use href="/ui.svg#sun"></use>--> <!--  </svg>--> <!--  <svg class="size-full hidden dark:block">--> <!--    <use href="/ui.svg#moon"></use>--> <!--  </svg>--> <!--</button>--> <button id="header-drawer-button"${addAttribute(`Toggle drawer open and closed`, "aria-label")}${addAttribute(cn("flex md:hidden", "size-9 rounded-full p-2 items-center justify-center", "bg-transparent hover:bg-black/5 dark:hover:bg-white/20", "stroke-current hover:stroke-black hover:dark:stroke-white", "border border-black/10 dark:border-white/25", "transition-colors duration-300 ease-in-out"), "class")} data-astro-cid-3ef6ksr2> <svg id="drawer-open" class="size-full" data-astro-cid-3ef6ksr2> <use href="/ui.svg#menu" data-astro-cid-3ef6ksr2></use> </svg> <svg id="drawer-close" class="size-full" data-astro-cid-3ef6ksr2> <use href="/ui.svg#x" data-astro-cid-3ef6ksr2></use> </svg> </button> </div> </div> ` }));
}, "/Users/bobstoute/Git/@bsmp/bsmp-website/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<footer class="relative bg-white dark:bg-black"> <div class="animate"> <!--<section class=" py-5 overflow-hidden whitespace-nowrap border-t border-black/10 dark:border-white/25">--> <!--  <Container size="md">--> <!--    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">--> <!--      <div class="flex flex-col items-center sm:items-start">--> <!--        <a href="/" class="flex gap-1 w-fit font-semibold text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out">--> <!--          <svg class="size-6 fill-current">--> <!--            <use href="/brand.svg#brand"/>--> <!--          </svg>--> <!--          {SITE.TITLE}--> <!--        </a>--> <!--      </div>--> <!--      &lt;!&ndash;<div class="flex gap-2 justify-center sm:justify-end items-center">&ndash;&gt;--> <!--      &lt;!&ndash;  <span class="relative flex h-3 w-3">&ndash;&gt;--> <!--      &lt;!&ndash;    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300"></span>&ndash;&gt;--> <!--      &lt;!&ndash;    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>&ndash;&gt;--> <!--      &lt;!&ndash;  </span>&ndash;&gt;--> <!--      &lt;!&ndash;  All systems normal&ndash;&gt;--> <!--      &lt;!&ndash;</div>&ndash;&gt;--> <!--    </div>--> <!--  </Container>--> <!--</section>--> <section class=" py-5 overflow-hidden whitespace-nowrap border-t border-black/10 dark:border-white/25"> ', '</section></div> </footer> <section class="py-5"> ', ' </section> <script>\n  function goBackToTop(event) {\n    event.preventDefault()\n    window.scrollTo({\n        top: 0,\n        behavior: "smooth"\n    })\n  }\n\n  function inintializeBackToTop() {\n    const backToTop = document.getElementById("back-to-top")\n    backToTop?.addEventListener("click", goBackToTop)\n  }\n\n  document.addEventListener("astro:after-swap", inintializeBackToTop)\n  inintializeBackToTop()\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate`                <div class="order-1 sm:order-2 flex justify-center"> <div class="flex flex-wrap gap-1 items-center justify-center"> ${SOCIALS.map((SOCIAL) => renderTemplate`<a${addAttribute(SOCIAL.HREF, "href")} target="_blank"${addAttribute(`${SITE.TITLE} on ${SOCIAL.NAME}`, "aria-label")} class="group size-10 rounded-full p-2 items-center justify-center hover:bg-black/5 dark:hover:bg-white/20  blend"> <svg class="size-full fill-current group-hover:fill-black group-hover:dark:fill-white blend"> <use${addAttribute(`/social.svg#${SOCIAL.ICON}`, "href")}></use> </svg> </a>`)} </div> </div> ` }), renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate`  <div class="flex items-center justify-center"> <button id="back-to-top" aria-label="Back to top of page" class="group flex w-fit p-1.5 gap-1.5 text-sm items-center border rounded hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white rotate-90"> <line x1="19" y1="12" x2="5" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></line> <polyline points="12 19 5 12 12 5" class="translate-x-1 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></polyline> </svg> <div class="w-full group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out">
Back to top
</div> </button> </div> ` }));
}, "/Users/bobstoute/Git/@bsmp/bsmp-website/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://astro-sphere-demo.vercel.app");
const $$Drawer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Drawer;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^/]+/g);
  const EMAIL = SOCIALS.find((SOCIAL) => SOCIAL.NAME === "Email");
  return renderTemplate`${maybeRenderHead()}<div id="drawer" class="fixed inset-0 h-0 z-40 overflow-hidden flex flex-col items-center justify-center md:hidden bg-neutral-100 dark:bg-neutral-900 transition-[height] duration-300 ease-in-out" data-astro-cid-hxtyo74s> <nav class="flex flex-col items-center space-y-2" data-astro-cid-hxtyo74s> ${LINKS.map((LINK) => renderTemplate`<a${addAttribute(LINK.HREF, "href")}${addAttribute(cn("flex items-center justify-center px-3 py-1 rounded-full", "text-current hover:text-black dark:hover:text-white", "hover:bg-black/5 dark:hover:bg-white/20", "transition-colors duration-300 ease-in-out", pathname === LINK.HREF || "/" + subpath?.[0] === LINK.HREF ? "pointer-events-none bg-black dark:bg-white text-white dark:text-black" : ""), "class")} data-astro-cid-hxtyo74s> ${LINK.TEXT} </a>`)} </nav> <div class="flex gap-1 mt-5" data-astro-cid-hxtyo74s> <a${addAttribute(EMAIL.HREF, "href")} target="_blank"${addAttribute(`${SITE.TITLE} on ${EMAIL.NAME}`, "aria-label")} class="group size-10 rounded-full p-2 items-center justify-center hover:bg-black/5 dark:bg-white/20  blend" data-astro-cid-hxtyo74s> <svg class="scale-90 fill-current group-hover:fill-black group-hover:dark:fill-white blend" data-astro-cid-hxtyo74s> <use${addAttribute(`/social.svg#${EMAIL.ICON}`, "href")} data-astro-cid-hxtyo74s></use> </svg> </a> <!--<a href="/search" aria-label={\`Search blog posts and projects on \${SITE.TITLE}\`} class={cn("size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out", pathname === "/search" || "/" + subpath?.[0] === "search" ? "pointer-events-none bg-black dark:bg-white text-white dark:text-black" : "")}>--> <!--  <svg class="size-full">--> <!--    <use href="/ui.svg#search"></use>--> <!--  </svg>--> <!--</a>--> <!--<a href="/rss.xml" target="_blank" aria-label={\`Rss feed for \${SITE.TITLE}\`} class="size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out">--> <!--  <svg class="size-full">--> <!--    <use href="/ui.svg#rss"></use>--> <!--  </svg>--> <!--</a>--> <!--<button id="drawer-theme-button" aria-label={\`Toggle light and dark theme\`} class="size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out">--> <!--  <svg class="block dark:hidden size-full">--> <!--    <use href="/ui.svg#sun"></use>--> <!--  </svg>--> <!--  <svg class="hidden dark:block size-full">--> <!--    <use href="/ui.svg#moon"></use>--> <!--  </svg>--> <!--</button>--> </div> </div> `;
}, "/Users/bobstoute/Git/@bsmp/bsmp-website/src/components/Drawer.astro", void 0);

const $$Astro = createAstro("https://astro-sphere-demo.vercel.app");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${title} | ${SITE.TITLE}`, "description": description })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Drawer", $$Drawer, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/bobstoute/Git/@bsmp/bsmp-website/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $, $$Container as a, cn as c, formatDate as f, readingTime as r };
