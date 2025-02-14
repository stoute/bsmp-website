import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BPTSoEb2.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DuTYth8C.mjs';
import { $ as $$PageLayout, f as formatDate } from '../../chunks/PageLayout_Be2zWfzu.mjs';
import { $ as $$TopLayout } from '../../chunks/TopLayout_BimL7V3q.mjs';
import { $ as $$BottomLayout } from '../../chunks/BottomLayout_DcReYWMS.mjs';
import { b as SITE } from '../../chunks/consts_CNykIgmw.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro-sphere-demo.vercel.app");
async function getStaticPaths() {
  const docs = await getCollection("legal");
  return docs.map((doc) => ({
    params: { slug: doc.slug },
    props: doc
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const doc = Astro2.props;
  const { title, date } = doc.data;
  const { Content } = await doc.render();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": `${title} for ${SITE.TITLE}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> <div class="page-heading"> ${title} </div> <p class="font-normal opacity-75">
Last updated: ${formatDate(date)} </p> </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <article class="animate"> ${renderComponent($$result3, "Content", Content, {})} </article> ` })} ` })}`;
}, "/Users/bobstoute/Git/@bsmp/bsmp-website/src/pages/legal/[...slug].astro", void 0);

const $$file = "/Users/bobstoute/Git/@bsmp/bsmp-website/src/pages/legal/[...slug].astro";
const $$url = "/legal/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
