# Kai's Portfolio

A stylish, production-ready portfolio site built with Next.js, TypeScript, and Tailwind CSS. Features a hacker/cyber aesthetic with neon green and cyan accents.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Edit Content

All content is stored in JSON files for easy editing:

- **Site Config**: `data/site.config.json` - Navigation links, social media, etc.
- **Projects**: `data/projects.json` - All project information

### Add a New Project

1. Open `data/projects.json`
2. Add a new project object:

\`\`\`json
{
  "id": "project-4",
  "title": "Your Project Title",
  "slug": "your-project-slug",
  "summary": "One-line summary",
  "description": "Detailed description",
  "image": "/path/to/image.jpg",
  "thumbnail": "/path/to/thumbnail.jpg",
  "technologies": ["React", "TypeScript"],
  "features": ["Feature 1", "Feature 2"],
  "links": {
    "github": "https://github.com/...",
    "live": "https://your-project.com"
  },
  "date": "2024-04",
  "featured": true
}
\`\`\`

3. The project detail page will be generated automatically at `/projects/your-project-slug`

### Replace Placeholder Images

1. Add your images to the `public/` folder
2. Update the `image` and `thumbnail` fields in `data/projects.json`

### Customize Colors

Edit the CSS variables in `app/globals.css`:

\`\`\`css
--accent-green: #00ff9f;  /* Primary accent */
--accent-cyan: #00d1ff;   /* Secondary accent */
--background: #0a0e1a;    /* Dark background */
\`\`\`

### Update Personal Info

Edit `data/site.config.json`:

\`\`\`json
{
  "name": "Your Name",
  "title": "Your Title",
  "tagline": "Your tagline",
  "description": "Your description",
  "socialLinks": [
    { "name": "GitHub", "url": "https://github.com/yourprofile", "icon": "github" }
  ]
}
\`\`\`

## 🛠 Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter (UI), JetBrains Mono (code)
- **Image Optimization**: Next.js Image
- **Deployment**: Vercel

## 📦 Build & Deploy

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Your portfolio will be live in seconds!

Alternatively, use the Vercel CLI:

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## 📄 File Structure

\`\`\`
project-root/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── globals.css         # Theme and global styles
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx       # About page
│   ├── contact/page.tsx     # Contact page
│   └── projects/[slug]/page.tsx  # Project detail pages (dynamic)
├── components/
│   ├── navigation.tsx      # Top navigation
│   ├── hero.tsx           # Hero section
│   └── project-card.tsx   # Project card component
├── data/
│   ├── site.config.json   # Site configuration
│   └── projects.json      # All projects data
├── lib/
│   └── types.ts           # TypeScript types
├── public/                # Static assets
└── README.md             # This file
\`\`\`

## 🎨 Design Features

- **Dark-first design** with deep charcoal background
- **Neon accents** - bright green and cyan highlights
- **Subtle animations** - smooth transitions on hover
- **Responsive** - mobile-first, works on all devices
- **Accessible** - semantic HTML, ARIA labels, keyboard navigation
- **Performance** - optimized images, minimal bundle size

## 📱 Responsive Design

The portfolio is fully responsive:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## ⚡ Performance Tips

- Images are optimized with Next.js Image component
- CSS is tree-shaken by Tailwind
- No external dependencies beyond React and Next.js
- Static site generation for fast load times

## 🔧 Troubleshooting

**Images not loading?**
- Ensure images are in the `public/` folder
- Update paths in `data/projects.json` to match your image locations

**Styling not applying?**
- Make sure you've run `npm install`
- Clear `.next` folder and rebuild: `rm -rf .next && npm run dev`

**Build errors?**
- Delete `node_modules` and `.next`
- Run `npm install && npm run build`

## 📄 License

Feel free to use this as a template for your own portfolio!

## 💡 Tips

- Keep project descriptions concise
- Use high-quality thumbnail images (300x200px recommended)
- Update the hero text to match your personality
- Add more projects as you build them
- Monitor your site's performance on [PageSpeed Insights](https://pagespeed.web.dev/)

---

Built with ❤️ and cyberpunk vibes 🌌
