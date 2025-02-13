import { _ as __astro_tag_component__, b as createVNode, F as Fragment } from './astro/server_L_530bJq.mjs';
import 'clsx';

const frontmatter = {};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "personal-profile",
    "text": "Personal Profile"
  }, {
    "depth": 2,
    "slug": "technical-skills",
    "text": "Technical Skills"
  }, {
    "depth": 3,
    "slug": "frontend-development",
    "text": "Frontend Development"
  }, {
    "depth": 3,
    "slug": "backend-development",
    "text": "Backend Development"
  }, {
    "depth": 3,
    "slug": "styling--ui",
    "text": "Styling & UI"
  }, {
    "depth": 3,
    "slug": "cms--frameworks",
    "text": "CMS & Frameworks"
  }, {
    "depth": 3,
    "slug": "tools--version-control",
    "text": "Tools & Version Control"
  }, {
    "depth": 3,
    "slug": "other",
    "text": "Other"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    meta: "meta",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.meta, {
      charset: "utf-8"
    }), createVNode(_components.h2, {
      id: "personal-profile",
      children: createVNode(_components.strong, {
        children: "Personal Profile"
      })
    }), "\n", createVNode(_components.p, {
      children: "I’m a web developer with over 25 years of work experience.\nI’m an analytical person with a creative touch. I can develop systems independently, but I also enjoy working together with other developers and designers.\nI am a serious worker, but also a nice colleague. I gained my work experience both as a freelancer and as an employee in various companies."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "technical-skills",
      children: createVNode(_components.strong, {
        children: "Technical Skills"
      })
    }), "\n", createVNode(_components.h3, {
      id: "frontend-development",
      children: createVNode(_components.strong, {
        children: "Frontend Development"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "JavaScript / TypeScript, HTML, CSS / Tailwind, React / NextJs, Angular, Astro, Stencil, Lit, Web Components"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "backend-development",
      children: createVNode(_components.strong, {
        children: "Backend Development"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Node, NextJs, PHP"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "styling--ui",
      children: createVNode(_components.strong, {
        children: "Styling & UI"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Css / Tailwind, SASS, SVG, Sketch"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "cms--frameworks",
      children: createVNode(_components.strong, {
        children: "CMS & Frameworks"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "WordPress, Drupal, Astro"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "tools--version-control",
      children: createVNode(_components.strong, {
        children: "Tools & Version Control"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Git, npm"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "other",
      children: createVNode(_components.strong, {
        children: "Other"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "REST APIs, CI/CD, Performance Optimization"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "/about/about";
const file = "/Users/bobstoute/Git/@bsmp/astro-sphere/src/pages/about/about.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/bobstoute/Git/@bsmp/astro-sphere/src/pages/about/about.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { Content as C, _page as _ };
