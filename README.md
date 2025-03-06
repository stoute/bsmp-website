# Bob Stoute - Personal Website

A modern, performant personal website and portfolio built with Astro, featuring a blog, project showcase, and work history. The site achieves perfect Lighthouse scores while maintaining a lightweight footprint (under 100kb per page including fonts).

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: Tailwind CSS
- **Languages**: TypeScript, JavaScript
- **Components**: SolidJS (for interactive elements)
- **Content**: MDX/Markdown
- **Deployment**: Firebase supported

## ✨ Features

- **Performance**
  - 100/100 Lighthouse scores
  - Pages under 100kb (including fonts)
  - ~40ms render time on localhost
  - Static Site Generation (SSG)

- **Content Management**
  - Blog posts with MDX support
  - Project portfolio
  - Work history
  - Type-safe content schemas using Zod

- **Developer Experience**
  - TypeScript support
  - ESLint integration
  - Network development mode
  - Hot module reloading

- **User Experience**
  - Responsive design
  - Light/Dark theme
  - Animated UI elements
  - Accessible
  - SEO optimized
  - Auto-generated sitemap
  - RSS feed
  - Search functionality
  - Code block copying

## 🛠️ Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   For network access:
   ```bash
   npm run dev:network
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run dev:network` - Start development server with network access
- `npm run build` - Build production site
- `npm run preview` - Preview production build
- `npm run preview:network` - Preview with network access
- `npm run deploy-firebase` - Deploy to Firebase
- `npm run deploy-vercel` - Deploy to Vercel
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Auto-fix ESLint issues

## 📁 Project Structure

```
/
├── public/           # Static assets
├── src/
│   ├── components/   # Astro/SolidJS components
│   ├── content/      # Content collections
│   │   ├── blog/    # Blog posts
│   │   ├── projects/# Project showcases
│   │   ├── work/    # Work history
│   │   └── legal/   # Legal documents
│   ├── layouts/     # Page layouts
│   ├── pages/       # Route components
│   ├── styles/      # Global styles
│   └── lib/         # Utility functions
```

## 📚 Content Management

Content is managed through Astro's content collections, with strict typing via Zod schemas:

- **Blog Posts**: Articles with title, summary, date, and tags
- **Projects**: Portfolio items with optional demo/repo links
- **Work History**: Professional experience entries
- **Legal**: Terms, privacy policy, etc.

## 🚀 Deployment

The site supports multiple deployment platforms:

- **Firebase**: `npm run deploy-firebase`
- **Vercel**: `npm run deploy-vercel`

## 📄 License

MIT License

## 🔗 Links

- Live Site: [bob-stoute.firebaseapp.com](https://bob-stoute.firebaseapp.com)
- GitHub: [github.com/stoute/webcomponents](https://github.com/stoute/webcomponents)

