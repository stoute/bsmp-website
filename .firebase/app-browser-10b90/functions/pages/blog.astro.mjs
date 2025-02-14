import { c as createComponent$1, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BPTSoEb2.mjs';
import { g as getCollection } from '../chunks/_astro_content_DuTYth8C.mjs';
import { c as cn, $ as $$PageLayout } from '../chunks/PageLayout_Be2zWfzu.mjs';
import { $ as $$TopLayout } from '../chunks/TopLayout_BimL7V3q.mjs';
import { $ as $$BottomLayout } from '../chunks/BottomLayout_DcReYWMS.mjs';
import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { createSignal, createEffect, For } from 'solid-js';
import { A as ArrowCard } from '../chunks/ArrowCard_DTGIlLJ6.mjs';
import { B as BLOG } from '../chunks/consts_CNykIgmw.mjs';
export { renderers } from '../renderers.mjs';

var _tmpl$ = ["<div", ' class="grid grid-cols-1 sm:grid-cols-3 gap-6"><div class="col-span-3 sm:col-span-1"><div class="sticky top-24"><div class="text-sm font-semibold uppercase mb-2 text-black dark:text-white">Filter</div><ul class="flex flex-wrap sm:flex-col gap-1.5">', '</ul></div></div><div class="col-span-3 sm:col-span-2"><div class="flex flex-col"><div class="text-sm uppercase mb-2">SHOWING <!--$-->', "<!--/--> OF <!--$-->", '<!--/--> POSTS</div><ul class="flex flex-col gap-3">', "</ul></div></div></div>"], _tmpl$2 = ["<li", "><button", "><svg", '><use href="', '"', '></use><use href="', '"', "></use></svg><!--$-->", "<!--/--></button></li>"], _tmpl$3 = ["<li", ">", "</li>"];
function Blog({
  data,
  tags
}) {
  const [filter, setFilter] = createSignal(/* @__PURE__ */ new Set());
  const [posts, setPosts] = createSignal([]);
  createEffect(() => {
    setPosts(data.filter((entry) => Array.from(filter()).every((value) => entry.data.tags.some((tag) => tag.toLowerCase() === String(value).toLowerCase()))));
  });
  return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(For, {
    each: tags,
    children: (tag) => ssr(_tmpl$2, ssrHydrationKey(), ssrAttribute("class", escape(cn("w-full px-2 py-1 rounded", "whitespace-nowrap overflow-hidden overflow-ellipsis", "flex gap-2 items-center", "bg-black/5 dark:bg-white/10", "hover:bg-black/10 hover:dark:bg-white/15", "transition-colors duration-300 ease-in-out", filter().has(tag) && "text-black dark:text-white"), true), false), ssrAttribute("class", escape(cn("size-5 fill-black/50 dark:fill-white/50", "transition-colors duration-300 ease-in-out", filter().has(tag) && "fill-black dark:fill-white"), true), false), `/ui.svg#square`, ssrAttribute("class", escape(cn(!filter().has(tag) ? "block" : "hidden"), true), false), `/ui.svg#square-check`, ssrAttribute("class", escape(cn(filter().has(tag) ? "block" : "hidden"), true), false), escape(tag))
  })), escape(posts().length), escape(data.length), escape(posts().map((post) => ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(ArrowCard, {
    entry: post
  }))))));
}

const $$Index = createComponent$1(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const tags = [...new Set(posts.flatMap((post) => post.data.tags))].sort((a, b) => a.localeCompare(b));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": BLOG.TITLE, "description": BLOG.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate page-heading"> ${BLOG.TITLE} </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <div class="animate"> ${renderComponent($$result3, "Blog", Blog, { "client:load": true, "tags": tags, "data": posts, "client:component-hydration": "load", "client:component-path": "@components/Blog", "client:component-export": "default" })} </div> ` })} ` })}`;
}, "/Users/bobstoute/Git/@bsmp/bsmp-website/src/pages/blog/index.astro", void 0);

const $$file = "/Users/bobstoute/Git/@bsmp/bsmp-website/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
