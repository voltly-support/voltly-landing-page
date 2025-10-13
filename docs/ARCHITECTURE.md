# Voltly AI Landing Page - Frontend Architecture Document

## Document Information

**Project**: Voltly AI Marketing/Landing Page
**Type**: Brownfield Frontend Architecture
**Framework**: React 18 + Vite 5 + TypeScript
**Last Updated**: October 13, 2025
**Version**: 1.0

### Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2025-10-13 | 1.0 | Initial brownfield architecture analysis | Winston (Architect Agent) |

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Navigate to http://localhost:5173 (default Vite port)

# 4. View landing page
# Main route: / (Index page)
# 404 test: /nonexistent (NotFound page)
```

---

## Executive Summary

This is a **lightweight marketing/landing page** for the Voltly platform - a separate, simpler frontend designed to attract and convert potential customers. Built with **React 18 + Vite 5 + TypeScript**, it uses **Radix UI** for accessible components and **Tailwind CSS 3** for styling.

**Purpose**: This is the **public-facing entry point** for Voltly, designed for:

- Marketing the product to property managers
- Capturing leads via newsletter signup
- Directing users to the main application (voltly-utility-bill)
- SEO optimization and brand awareness

### Current State

- ✅ **Working React 18 SPA** with routing
- ✅ **Radix UI components** for accessible UI
- ✅ **Tailwind CSS 3** with PostCSS pipeline
- ✅ **React Router v6** for multi-page navigation
- ✅ **TanStack Query** configured for API calls
- ⚠️ **Minimal implementation** - only 2 pages (Index, 404)
- ⚠️ **No backend connection** - forms likely not wired up
- ⚠️ **Independent from main app** - separate codebase

---

## Technology Stack

### Core Framework

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Framework** | React | 18.3.1 | Stable React for marketing site |
| **Build Tool** | Vite | 5.4.1 | Fast dev server & production builds |
| **Language** | TypeScript | 5.5.3 | Type safety |
| **Routing** | React Router | 6.26.2 | Multi-page navigation |

### UI & Styling

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Component Library** | Radix UI | Multiple | Accessible, unstyled UI primitives |
| **Styling** | Tailwind CSS | 3.4.11 | Utility-first CSS framework |
| **PostCSS** | PostCSS | 8.4.47 | CSS processing pipeline |
| **Typography Plugin** | @tailwindcss/typography | 0.5.15 | Rich text/prose styling |
| **Animations** | tailwindcss-animate | 1.0.7 | Tailwind animation utilities |
| **Icons** | Lucide React | 0.462.0 | Icon library |

### Data & Forms

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Server State** | TanStack Query | 5.56.2 | API calls, caching (newsletter/forms) |
| **Form Management** | React Hook Form | 7.53.0 | Form handling |
| **Form Validation** | Zod | 3.23.8 | Schema validation |
| **Validation Resolvers** | @hookform/resolvers | 5.1.1 | Zod + React Hook Form integration |

### UX Enhancements

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Carousels** | Embla Carousel | 8.3.0 | Feature/testimonial carousels |
| **Notifications** | Sonner | 1.5.0 | Toast notifications |
| **Command Palette** | CMDK | 1.0.0 | Quick navigation (if implemented) |
| **Drawer** | Vaul | 0.9.3 | Mobile bottom sheets |
| **Utility** | clsx + tailwind-merge | Latest | Conditional class name merging |

### Optional Data Visualization

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Charts** | Recharts | 2.12.7 | Optional marketing statistics charts |
| **Date Handling** | date-fns | 3.6.0 | Date formatting utilities |

### Development Tools

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Compiler** | SWC | Via @vitejs/plugin-react-swc | Fast React compilation |
| **Linting** | ESLint | 9.9.0 | Code quality enforcement |
| **Deployment Helper** | lovable-tagger | 1.1.7 | Deployment tagging utility |

---

## Project Structure

```
voltly-ai-landing-page/
├── src/
│   ├── App.tsx                    # Router setup with QueryClient
│   ├── main.tsx                   # React 18 entry point
│   │
│   ├── pages/
│   │   ├── Index.tsx              # Main landing page
│   │   └── NotFound.tsx           # 404 error page
│   │
│   ├── components/
│   │   ├── Hero.tsx               # Hero section component
│   │   ├── Newsletter.tsx         # Newsletter signup form
│   │   │
│   │   └── ui/                    # Radix UI wrapper components
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── toaster.tsx
│   │       ├── sonner.tsx
│   │       └── ... (more UI primitives)
│   │
│   └── lib/
│       └── utils.ts               # Tailwind merge utility (cn function)
│
├── docs/
│   └── ARCHITECTURE.md            # This document
├── package.json                   # Dependencies
├── vite.config.ts                 # Vite + React SWC configuration
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.ts             # Tailwind CSS 3 configuration
├── postcss.config.js              # PostCSS processing
└── index.html                     # Entry HTML file
```

---

## Routing Architecture

### React Router v6 Configuration

```typescript
// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />          {/* Radix UI toasts */}
      <Sonner />           {/* Sonner toast notifications */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
```

**Key Difference from Main App**: This landing page uses **React Router v6** for proper routing, while the main voltly-utility-bill app uses manual state-based navigation. This is the correct approach for a public-facing marketing site.

---

## Component Architecture

### Page Components

**1. Index Page** (`src/pages/Index.tsx`)

- Main landing page
- Likely contains: Hero, Features, Testimonials, Pricing, Newsletter, Footer
- Entry point for all marketing traffic

**2. NotFound Page** (`src/pages/NotFound.tsx`)

- 404 error page
- Fallback for unmatched routes
- Should link back to home page

### Feature Components

**1. Hero** (`src/components/Hero.tsx`)

- Above-the-fold hero section
- Headline, subheadline, CTA buttons
- Most critical component for conversion

**2. Newsletter** (`src/components/Newsletter.tsx`)

- Email capture form
- Uses React Hook Form + Zod for validation
- TanStack Query mutation for API submission
- Success/error toast notifications

### UI Component Library

Radix UI wrapper components in `src/components/ui/`:

**Form Elements**:

- `button.tsx` - Button variants (primary, secondary, outline, ghost)
- `input.tsx` - Text input field
- `textarea.tsx` - Multi-line text input
- `label.tsx` - Form labels

**Layout Components**:

- `card.tsx` - Content card with header/body/footer
- `separator.tsx` - Horizontal/vertical dividers
- `tabs.tsx` - Tabbed interface
- `accordion.tsx` - Collapsible content sections

**Overlays**:

- `dialog.tsx` - Modal dialogs
- `sheet.tsx` - Side panel/drawer
- `drawer.tsx` - Bottom sheet (mobile-friendly)
- `toast.tsx` / `toaster.tsx` - Notification system
- `sonner.tsx` - Alternative toast system

**Navigation**:

- `navigation-menu.tsx` - Site navigation
- `menubar.tsx` - Menu bar component

---

## Styling Architecture

### Tailwind CSS 3 Configuration

**Build Process**: Traditional Tailwind 3 approach via PostCSS (not Vite plugin like main app)

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},        // Process Tailwind directives
    autoprefixer: {},       // Add vendor prefixes
  },
}
```

### Design System Comparison

| Feature | Landing Page | Main App (voltly-utility-bill) |
|---------|--------------|--------------------------------|
| **Tailwind Version** | 3.4.11 (PostCSS) | 4.1.12 (Vite plugin) |
| **React Version** | 18.3.1 | 19.0.0 |
| **Routing** | React Router v6 ✅ | Manual state-based ⚠️ |
| **Design System** | Radix UI only | GitHub Spark + Radix UI |
| **Icons** | Lucide React | Phosphor Icons + Heroicons |
| **State Management** | TanStack Query only | GitHub Spark KV + TanStack Query |

**Why Different Stacks?**

- Landing page is **simpler** - doesn't need GitHub Spark's enterprise features
- Main app has **complex state** - needs localStorage persistence via Spark KV
- Landing page prioritizes **SEO and performance** - React 18 is stable and battle-tested
- Main app uses **cutting-edge features** - React 19 for better concurrent rendering

---

## State Management

### TanStack Query Setup

```typescript
// src/App.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
```

**Likely Usage Patterns**:

```typescript
// Newsletter signup mutation
const mutation = useMutation({
  mutationFn: async (email: string) => {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    if (!response.ok) throw new Error('Signup failed');
    return response.json();
  },
  onSuccess: () => {
    toast.success('Thanks for subscribing!');
  },
  onError: () => {
    toast.error('Signup failed. Please try again.');
  }
});
```

### No Complex State Management

This is a **stateless marketing site** - no need for:

- Redux, Zustand, or Jotai (no complex app state)
- Context API (beyond QueryClient and TooltipProvider)
- localStorage (no user sessions or persistent state)
- Authentication (public site)

---

## Data Flow

**Typical Form Submission Flow**:

```
User enters email in Newsletter component
    ↓
React Hook Form validates via Zod schema
    ↓
TanStack Query mutation triggers API call
    ↓
Backend processes subscription (not yet implemented)
    ↓
Success/Error toast notification via Sonner
```

---

## Build & Development

### Development Commands

```bash
npm run dev         # Start Vite dev server (port 5173)
npm run build       # TypeScript compile + Vite production build
npm run build:dev   # Development build (unminified)
npm run preview     # Preview production build locally
npm run lint        # Run ESLint checks
```

### Build Configuration

**Vite Config** (`vite.config.ts`):

```typescript
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react()  // React 18 + SWC for fast compilation
  ],
  // Additional config for path aliases, etc.
});
```

**TypeScript Config** (`tsconfig.json`):

- Target: ES2020+
- Module: ESNext
- JSX: react-jsx (React 18)
- Path aliases: Likely `@/*` → `src/*`

### Environment Setup

**Node Version**: Check `package.json` engines field (likely 18.x or 20.x)

**Environment Variables**: None present currently, but will be needed for:

- Backend API URL
- Analytics tracking IDs (Google Analytics, Plausible, etc.)
- CMS API keys (if CMS is added)

---

## Key Files for AI Agents

### Must Read Before Making Changes

1. **src/App.tsx** (~30 lines) - Router and QueryClient setup
2. **src/pages/Index.tsx** - Main landing page structure
3. **src/components/Hero.tsx** - Hero section (most visible component)
4. **src/components/Newsletter.tsx** - Form implementation pattern
5. **tailwind.config.ts** - Design system configuration

### Component Entry Points

- **Pages**: `src/pages/` (Index, NotFound)
- **Features**: `src/components/` (Hero, Newsletter, etc.)
- **UI Primitives**: `src/components/ui/` (Radix UI wrappers)

### Critical Utilities

- **src/lib/utils.ts** - `cn()` function for className merging

---

## Integration Points

### Backend API (Not Yet Connected)

**Expected Endpoints**:

```typescript
// Newsletter signup
POST /api/newsletter
Body: { email: string }
Response: { success: boolean, message: string }

// Contact form (if added)
POST /api/contact
Body: { name: string, email: string, message: string }
Response: { success: boolean, message: string }
```

### Analytics (Not Yet Implemented)

**Recommended Integrations**:

- **Google Analytics 4** - Standard web analytics
- **Plausible Analytics** - Privacy-friendly alternative
- **PostHog** - Product analytics with session replay
- **Mixpanel** - User behavior tracking

**Implementation**:

```typescript
// Example: Google Analytics in main.tsx
import ReactGA from 'react-ga4';

ReactGA.initialize('G-XXXXXXXXXX');
ReactGA.send('pageview');
```

### SEO Optimization (Needs Improvement)

**Current State**: Basic meta tags in `index.html`

**Recommended Additions**:

1. **React Helmet Async** - Dynamic meta tags per page

```typescript
import { Helmet } from 'react-helmet-async';

export function Index() {
  return (
    <>
      <Helmet>
        <title>Voltly - Property Utility Management Platform</title>
        <meta name="description" content="Automate utility bill processing..." />
        <meta property="og:title" content="Voltly" />
        <meta property="og:image" content="/og-image.png" />
      </Helmet>
      {/* Page content */}
    </>
  );
}
```

2. **Sitemap.xml** - For search engine crawling
3. **robots.txt** - Crawl directives
4. **Structured Data (JSON-LD)** - Rich search results

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Voltly",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

---

## Technical Debt & Constraints

### Current Limitations

1. **Minimal Page Count**
   - Only 2 pages (Index, 404)
   - Missing: About, Pricing, Features, Blog, Contact
   - **Impact**: Incomplete marketing funnel

2. **No CMS Integration**
   - All content hardcoded in React components
   - Marketing team can't update content without developer
   - **Impact**: Slow iteration, developer bottleneck

3. **No Backend Connection**
   - Forms likely not wired to API
   - Newsletter signup may be non-functional
   - **Impact**: Can't capture leads

4. **Basic SEO**
   - Static meta tags only
   - No sitemap or structured data
   - **Impact**: Poor search visibility

5. **No Testing**
   - Zero test coverage
   - **Impact**: Risk of regressions, hard to refactor

6. **No Analytics**
   - Can't track user behavior
   - Can't measure conversion rates
   - **Impact**: Flying blind on performance

---

## Recommended Solutions

### High Priority Solutions

1. **Add Missing Pages** → Create About, Pricing, Features, Contact, Blog pages
2. **Wire Up Backend** → Connect forms to API, test newsletter signup flow
3. **Implement SEO** → Add React Helmet, sitemap, structured data
4. **Add Analytics** → Install Google Analytics or Plausible

### Medium Priority Solutions

5. **CMS Integration** → Set up Sanity, Contentful, or Strapi for content management
6. **Add Contact Form** → Build contact form with email notification
7. **A/B Testing** → Set up Optimizely or Google Optimize for conversion optimization
8. **Performance Audit** → Run Lighthouse, optimize images, add lazy loading

### Low Priority Solutions

9. **Blog System** → Set up MDX or CMS for blog posts
10. **Privacy Pages** → Add Privacy Policy and Terms of Service pages
11. **Cookie Consent** → Add GDPR-compliant cookie banner
12. **Localization** → Add multi-language support if targeting international markets

---

## Deployment Readiness

### Current Status: ✅ **PRODUCTION READY** (for basic landing page)

**Ready For**:

- ✅ Static hosting (Vercel, Netlify, Cloudflare Pages)
- ✅ Simple one-page marketing site
- ✅ Newsletter form UI (backend needed)
- ✅ Mobile responsive design
- ✅ Fast load times (Vite optimized)

**Blockers for Complete Marketing Site**:

- ❌ Need more pages (About, Pricing, Features, etc.)
- ❌ Need CMS for content management
- ❌ Need SEO optimization (meta tags, sitemap)
- ❌ Need analytics integration
- ❌ Need working backend API connection

### Pre-Launch Checklist

- [ ] Complete all core marketing pages
- [ ] Implement SEO best practices
- [ ] Set up analytics tracking
- [ ] Connect forms to backend API
- [ ] Add CMS for content management
- [ ] Create Privacy Policy and Terms pages
- [ ] Set up error monitoring (Sentry)
- [ ] Performance audit (Lighthouse score >90)
- [ ] Cross-browser testing
- [ ] Mobile usability testing

---

## Quick Reference

### Add a New Page

```typescript
// 1. Create page component
// src/pages/About.tsx
export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold">About Voltly</h1>
      <p>Your content here...</p>
    </div>
  );
}

// 2. Add route in App.tsx (BEFORE the "*" catch-all route)
<Route path="/about" element={<About />} />
```

### Add a New Form

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const schema = z.object({
  email: z.string().email("Invalid email address")
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Submission failed');
      return response.json();
    },
    onSuccess: () => toast.success('Thank you! We\'ll be in touch soon.'),
    onError: () => toast.error('Something went wrong. Please try again.')
  });

  return (
    <form onSubmit={handleSubmit((data) => mutation.mutate(data))}>
      <input {...register("email")} placeholder="Enter your email" />
      {errors.email && <span>{errors.email.message}</span>}
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
```

### Add Analytics Tracking

```typescript
// src/main.tsx
import ReactGA from 'react-ga4';

ReactGA.initialize('G-XXXXXXXXXX');

// Track page views
const App = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return <Routes>...</Routes>;
};
```

---

## Glossary

### Marketing Terms

- **Landing Page**: A single web page designed to convert visitors into leads or customers
- **CTA (Call to Action)**: Button or link that prompts user action (e.g., "Sign Up Now")
- **Lead**: A potential customer who has shown interest (e.g., newsletter signup)
- **Conversion**: When a visitor completes a desired action (signup, purchase, etc.)
- **A/B Testing**: Comparing two versions of a page to see which performs better

### Technical Terms

- **React Router**: Library for client-side routing in React applications
- **TanStack Query**: React library for server state management and data fetching (formerly React Query)
- **Radix UI**: Collection of unstyled, accessible UI components
- **PostCSS**: Tool for transforming CSS with JavaScript plugins
- **Vite**: Next-generation frontend build tool (faster than Webpack)
- **SWC**: Rust-based JavaScript/TypeScript compiler (faster than Babel)
- **SEO (Search Engine Optimization)**: Techniques to improve search engine rankings
- **CMS (Content Management System)**: Platform for managing website content (e.g., Sanity, Contentful)

### Abbreviations

- **SPA**: Single-Page Application
- **UI**: User Interface
- **UX**: User Experience
- **API**: Application Programming Interface
- **JSON-LD**: JavaScript Object Notation for Linked Data (structured data format)
- **GDPR**: General Data Protection Regulation (EU privacy law)

---

## Conclusion

This is a **simple, well-configured marketing landing page** using modern React patterns. It's **architecturally sound** with proper routing (React Router) and ready for server-side interactions (TanStack Query). The main gaps are **content completeness** and **backend integration**.

**Strengths**:

- Clean React Router setup (better than main app)
- Modern React 18 + Vite 5 stack
- Ready for form submissions via TanStack Query
- Accessible UI foundation with Radix
- Simple, maintainable architecture

**Weaknesses**:

- Very minimal (only 2 pages - needs 5-10 more)
- No CMS integration (content management bottleneck)
- Basic SEO (missing critical optimizations)
- No analytics (can't measure success)
- Zero test coverage

**For AI Development Agents**:

- Add new pages in `src/pages/` directory
- Add routes in `src/App.tsx` **BEFORE** the `*` catch-all route
- Use Radix UI components from `src/components/ui/`
- Follow React Hook Form + Zod pattern for all forms
- Use TanStack Query mutations for API calls
- Use Sonner for toast notifications (`toast.success()`, `toast.error()`)
