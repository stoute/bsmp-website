import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_L_530bJq.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_DE8aaVdV.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "contact", "description": "contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-subwayDark background-image "> <div class="animate absolute h-screen w-full flex-col flex items-center justify-center"> <div class="flex flex-wrap gap-1 flex-col items-center justify-center"> <img class="scale-50" src="/images/contact@2x.png"> <!--{--> <!--  SOCIALS.map((SOCIAL) => (--> <!--      <a--> <!--          href={SOCIAL.HREF}--> <!--          target="_blank"--> <!--          aria-label={\`\${SITE.TITLE} on \${SOCIAL.NAME}\`}--> <!--          class="group size-10 rounded-full p-2 items-center justify-center hover:bg-black/5 dark:hover:bg-white/20  blend"--> <!--      >--> <!--        <svg class="size-full fill-current group-hover:fill-black group-hover:dark:fill-white blend">--> <!--          <use href={\`/social.svg#\${SOCIAL.ICON}\`} />--> <!--        </svg>--> <!--      </a>--> <!--  ))--> <!--}--> </div> </div> </div>` })}`;
}, "/Users/bobstoute/Git/@bsmp/astro-sphere/src/pages/contact/index.astro", void 0);

const $$file = "/Users/bobstoute/Git/@bsmp/astro-sphere/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
