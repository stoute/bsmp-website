import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_L_530bJq.mjs';
import { g as getCollection } from '../../chunks/_astro_content_CVsRcgip.mjs';
import { $ as $$PageLayout } from '../../chunks/PageLayout_DE8aaVdV.mjs';
import { $ as $$TopLayout } from '../../chunks/TopLayout_DLuDQ_vj.mjs';
import { $ as $$BottomLayout } from '../../chunks/BottomLayout_CKdcdOcQ.mjs';
import { $ as $$ArticleTopLayout, a as $$ArticleBottomLayout } from '../../chunks/ArticleBottomLayout_tGRFIWRK.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro-sphere-demo.vercel.app");
async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: project
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const project = Astro2.props;
  const { title, summary } = project.data;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": summary }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result3, "ArticleTopLayout", $$ArticleTopLayout, { "entry": project })} </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <div class="animate"> ${renderComponent($$result3, "ArticleBottomLayout", $$ArticleBottomLayout, { "entry": project })} </div> ` })} ` })}`;
}, "/Users/bobstoute/Git/@bsmp/astro-sphere/src/pages/projects/[...slug].astro", void 0);

const $$file = "/Users/bobstoute/Git/@bsmp/astro-sphere/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
