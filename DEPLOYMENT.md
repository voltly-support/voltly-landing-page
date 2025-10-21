# Voltly Landing Page - Vercel Deployment Guide

**Quick reference for deploying the Voltly landing page to Vercel**

---

## 🚀 Quick Start (First Time Setup)

### Prerequisites
- GitHub account with access to the `voltly` repository
- Vercel account (sign up at https://vercel.com)

### Step 1: Import Project to Vercel

1. Go to https://vercel.com/new
2. Select "Import Git Repository"
3. Choose your GitHub account and the `voltly` repository
4. **IMPORTANT**: Configure the following settings:

```
Framework Preset: Vite
Root Directory: voltly-ai-landing-page  ⚠️ CRITICAL FOR MONOREPO
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node.js Version: 18.x
```

5. Click "Deploy" and wait for the first build to complete

### Step 2: Verify Configuration

After deployment, verify these settings in the Vercel dashboard:

**Settings → General:**
- Root Directory: `voltly-ai-landing-page`
- Framework Preset: Vite

**Settings → Git:**
- Production Branch: `main`
- Deploy Hooks: Enabled

### Step 3: Test Deployment

1. Visit your production URL (e.g., `your-project.vercel.app`)
2. Test all routes:
   - `/` - Homepage
   - `/nonexistent` - Should show 404 page
3. Refresh browser on each route to verify SPA routing works

---

## 📝 Configuration File

The `vercel.json` file in this directory contains:

- **SPA Routing**: All routes redirect to `index.html`
- **Build Optimization**: Auto-cancel outdated builds
- **Security Headers**: XSS, clickjacking, content security
- **Asset Caching**: Long-term cache for hashed assets
- **Branch Rules**: Control which branches trigger deployments

**Key Features:**
- ✅ React Router support (no 404s on direct URL access)
- ✅ Automatic job cancellation for faster iteration
- ✅ Security headers for production best practices
- ✅ Optimized asset caching (1 year for `/assets/*`)

---

## 🔄 Deployment Workflows

### Deploy to Production (main branch)

```bash
# Make your changes
git checkout main
git pull origin main

# Test locally first
npm run build
npm run preview
# Visit http://localhost:4173

# Deploy to production
git add .
git commit -m "Your commit message"
git push origin main

# ✅ Automatic deployment triggered
# Visit your production URL to verify
```

### Create Preview Deployment (feature branch)

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "Add new feature"
git push origin feature/your-feature-name

# Create PR on GitHub
# ✅ Vercel automatically creates preview deployment
# ✅ Vercel bot comments on PR with preview URL
```

### Manual Deployment

From Vercel Dashboard:
1. Go to Deployments tab
2. Click "Redeploy" on any previous deployment
3. Or use "Deploy Hooks" for custom triggers

---

## 🌿 Branch Deployment Rules

Configured in `vercel.json`:

| Branch Pattern | Deployment | URL Pattern |
|---------------|------------|-------------|
| `main` | Production | `your-project.vercel.app` |
| `feature/*` | Preview | `your-project-git-feature-xyz.vercel.app` |
| `internal-*` | ❌ Ignored | None |
| Pull Requests | Preview | `your-project-pr-123.vercel.app` |

**To modify branch rules:**
Edit the `git.deploymentEnabled` section in `vercel.json`

---

## 🔧 Environment Variables (Future Use)

When backend integration is ready, add these in Vercel Dashboard:

**Settings → Environment Variables:**

| Variable | Value | Environment |
|----------|-------|-------------|
| `VITE_API_URL` | Backend API URL | Production, Preview |
| `VITE_GA_TRACKING_ID` | Google Analytics ID | Production only |
| `NODE_ENV` | `production` | Auto-set by Vercel |

**How to add:**
1. Vercel Dashboard → Settings → Environment Variables
2. Add variable name and value
3. Select environments (Production, Preview, Development)
4. Redeploy to apply changes

---

## 📊 Monitoring & Debugging

### View Deployment Logs

1. Vercel Dashboard → Deployments
2. Click on any deployment
3. View "Build Logs" tab for detailed output

### Common Issues

**Issue 1: 404 on routes when refreshing**
- ✅ **Fixed by**: `vercel.json` rewrites configuration
- Verify: `vercel.json` exists and contains rewrites

**Issue 2: Build fails with "command not found"**
- Check: Build Command in settings = `npm run build`
- Check: Install Command = `npm install`
- Check: Node.js version matches your local version

**Issue 3: Wrong directory being built**
- Check: Root Directory = `voltly-ai-landing-page`
- Verify in build logs: Working directory should show `/vercel/path0/voltly-ai-landing-page`

**Issue 4: Builds are slow (> 3 minutes)**
- ✅ **Fixed by**: `github.autoJobCancelation: true` in `vercel.json`
- Cancels outdated builds when new commits arrive

### Rollback a Deployment

1. Vercel Dashboard → Deployments
2. Find the last known good deployment
3. Click "⋯" menu → "Promote to Production"
4. Confirm rollback

---

## 🎯 Performance Optimization

### Current Optimizations

**Vite Build** (automatic):
- Code splitting
- Asset hashing for cache busting
- Minification and tree-shaking
- SWC compiler for fast builds

**Vercel CDN** (automatic):
- Global edge network (150+ locations)
- Automatic compression (Brotli, gzip)
- HTTP/2 and HTTP/3
- Smart routing to nearest edge location

**Custom Headers** (in `vercel.json`):
- Long-term caching for assets (1 year)
- Security headers for protection
- Optimized for Core Web Vitals

### Expected Performance

- **Build Time**: < 2 minutes
- **First Load**: < 3 seconds (3G network)
- **Lighthouse Score**: 90+ (all categories)
- **Uptime**: 99.9%+ (Vercel SLA)

### Performance Monitoring

**Enable Vercel Analytics** (recommended):
1. Vercel Dashboard → Analytics tab
2. Click "Enable Analytics"
3. View real-time performance metrics

**Enable Speed Insights** (optional):
1. Vercel Dashboard → Speed Insights tab
2. View Core Web Vitals data
3. Get performance recommendations

---

## 🔐 Security

### Automatic Security Features

**Vercel Platform:**
- ✅ SSL/HTTPS (Let's Encrypt, auto-renewal)
- ✅ DDoS protection
- ✅ Secure headers by default

**Custom Headers** (in `vercel.json`):
- `X-Content-Type-Options: nosniff` - Prevent MIME sniffing
- `X-Frame-Options: DENY` - Prevent clickjacking
- `X-XSS-Protection: 1; mode=block` - XSS protection

### Security Best Practices

1. **Never commit secrets** to Git
2. **Use environment variables** for API keys
3. **Review Vercel logs** for suspicious activity
4. **Keep dependencies updated** (run `npm audit`)

---

## 🌐 Custom Domain (Optional)

### Add Custom Domain

1. Vercel Dashboard → Settings → Domains
2. Add your domain (e.g., `voltly.com`)
3. Configure DNS records (Vercel provides instructions)
4. Wait for SSL certificate (automatic, ~5 minutes)

### DNS Configuration

**For apex domain** (`voltly.com`):
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel's IP)
```

**For subdomain** (`www.voltly.com`):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 📚 Additional Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Vite Deployment Guide**: https://vitejs.dev/guide/static-deploy.html
- **Project Architecture**: `docs/ARCHITECTURE.md`
- **Vercel Support**: https://vercel.com/support

---

## 🎉 Deployment Checklist

Before deploying to production:

- [ ] Test production build locally (`npm run build && npm run preview`)
- [ ] All routes work correctly
- [ ] No console errors
- [ ] Mobile responsive verified
- [ ] Environment variables configured (if needed)
- [ ] `vercel.json` committed to repository
- [ ] Build succeeds in Vercel dashboard
- [ ] SSL/HTTPS verified
- [ ] Performance acceptable (Lighthouse > 90)
- [ ] Deployment URL documented

---

**Questions or Issues?**
- Check Vercel Dashboard → Deployments → Build Logs
- Review this guide's "Monitoring & Debugging" section
- Contact Vercel Support if build issues persist

**Happy Deploying! 🚀**
