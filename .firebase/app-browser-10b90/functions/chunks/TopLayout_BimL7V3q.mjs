import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, e as renderSlot } from './astro/server_BPTSoEb2.mjs';
import { a as $$Container } from './PageLayout_Be2zWfzu.mjs';

const $$TopLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="pt-20 pb-5"> ${renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div>`;
}, "/Users/bobstoute/Git/@bsmp/bsmp-website/src/layouts/TopLayout.astro", void 0);

export { $$TopLayout as $ };
