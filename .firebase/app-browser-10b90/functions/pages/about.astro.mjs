import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_L_530bJq.mjs';
import { g as getCollection } from '../chunks/_astro_content_CVsRcgip.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_DE8aaVdV.mjs';
import { $ as $$TopLayout } from '../chunks/TopLayout_DLuDQ_vj.mjs';
import { $ as $$BottomLayout } from '../chunks/BottomLayout_CKdcdOcQ.mjs';
import { C as Content } from '../chunks/about_RMMzLPKA.mjs';
import { S as SEARCH } from '../chunks/consts_CTx5aLnM.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  (await getCollection("projects")).filter(
    (post) => !post.data.draft
  );
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": SEARCH.TITLE, "description": SEARCH.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-subwayDark background-image "> ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` <div class="animate page-heading text-center flex flex-col items-center justify-center"> <img src="/images/about.svg"> </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <article class="prose dark:prose-invert"> ${renderComponent($$result3, "About", Content, {})} </article> ` })} </div>` })}`;
}, "/Users/bobstoute/Git/@bsmp/astro-sphere/src/pages/about/index.astro", void 0);

const $$file = "/Users/bobstoute/Git/@bsmp/astro-sphere/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
