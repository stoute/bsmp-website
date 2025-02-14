import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BPTSoEb2.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DuTYth8C.mjs';
import { $ as $$PageLayout } from '../../chunks/PageLayout_Be2zWfzu.mjs';
import { $ as $$TopLayout } from '../../chunks/TopLayout_BimL7V3q.mjs';
import { $ as $$BottomLayout } from '../../chunks/BottomLayout_DcReYWMS.mjs';
import { $ as $$ArticleTopLayout, a as $$ArticleBottomLayout } from '../../chunks/ArticleBottomLayout_Dp6gxwxA.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro-sphere-demo.vercel.app");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { title, summary } = post.data;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": summary }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result3, "ArticleTopLayout", $$ArticleTopLayout, { "entry": post })} </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <div class="animate"> ${renderComponent($$result3, "ArticleBottomLayout", $$ArticleBottomLayout, { "entry": post })} </div> ` })} ` })}`;
}, "/Users/bobstoute/Git/@bsmp/bsmp-website/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/bobstoute/Git/@bsmp/bsmp-website/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
