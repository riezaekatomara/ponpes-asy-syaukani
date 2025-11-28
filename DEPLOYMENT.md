# 🚀 Deployment Guide - Pesantren Ulul Albaab Sukabumi

Complete guide untuk deploy website ke production.

---

## 📋 **Pre-Deployment Checklist**

Sebelum deploy, pastikan:

### ✅ **Code Quality**
- [ ] Semua halaman berfungsi dengan baik
- [ ] Tidak ada console errors
- [ ] Responsive di semua device (mobile, tablet, desktop)
- [ ] All links tested dan working
- [ ] Forms validation working
- [ ] Images optimized

### ✅ **Content**
- [ ] Semua text sudah real data Pesantren Ulul Albaab
- [ ] Contact information correct (phone, email, address)
- [ ] Social media links updated
- [ ] WhatsApp numbers correct

### ✅ **SEO**
- [ ] Meta tags di index.html sudah benar
- [ ] robots.txt sudah dibuat
- [ ] sitemap.xml sudah dibuat
- [ ] Structured data (Schema.org) complete

### ✅ **Assets**
- [ ] Logo file ada di /public/
- [ ] Favicon.ico ada
- [ ] OG image untuk social sharing

---

## 🌐 **Deployment Options**

### **OPTION 1: Vercel (RECOMMENDED)** ⭐⭐⭐⭐⭐

**Keuntungan:**
- ✅ Free untuk personal/small projects
- ✅ Automatic deployments dari GitHub
- ✅ Custom domain support
- ✅ SSL certificate otomatis
- ✅ Fast CDN global
- ✅ Easy rollback
- ✅ Preview deployments untuk PR

**Steps:**

#### **A. Via Vercel Dashboard (Easiest)**

1. **Sign up/Login**
   ```
   https://vercel.com/signup
   ```

2. **Connect GitHub**
   - Link your GitHub account
   - Import repository: `pesantren-ulul-albaab-sukabumi`

3. **Configure Project**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Environment Variables (if needed)**
   ```
   VITE_API_URL=your_api_url
   VITE_GOOGLE_MAPS_API_KEY=your_key
   ```

5. **Deploy!**
   - Click "Deploy"
   - Wait ~2 minutes
   - Done! ✅

#### **B. Via Vercel CLI**

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy to preview
vercel

# 4. Deploy to production
vercel --prod

# 5. Configure custom domain (optional)
vercel domains add yourdomain.com
```

**Post-Deployment:**
- Vercel akan provide URL: `https://pesantren-ulul-albaab.vercel.app`
- Setup custom domain jika punya
- Update sitemap.xml dengan URL baru

---

### **OPTION 2: Netlify** ⭐⭐⭐⭐

**Keuntungan:**
- ✅ Free tier generous
- ✅ Drag & drop deployment
- ✅ Form handling built-in
- ✅ Functions support
- ✅ Custom domain + SSL

**Steps:**

#### **A. Via Netlify Drop (Simplest)**

1. Build project locally:
   ```bash
   npm run build
   ```

2. Go to:
   ```
   https://app.netlify.com/drop
   ```

3. Drag & drop folder `dist/`

4. Done! Site is live

#### **B. Via GitHub Integration**

1. Login: `https://app.netlify.com`

2. Click "New site from Git"

3. Connect GitHub repository

4. Configure:
   ```
   Build command: npm run build
   Publish directory: dist
   ```

5. Click "Deploy site"

**Post-Deployment:**
- URL: `https://your-site-name.netlify.app`
- Setup custom domain
- Configure redirects if needed

---

### **OPTION 3: GitHub Pages** ⭐⭐⭐

**Keuntungan:**
- ✅ Completely free
- ✅ Built-in with GitHub
- ✅ Easy to setup

**Limitations:**
- ⚠️ Public repos only (unless paid)
- ⚠️ Static sites only
- ⚠️ No server-side rendering

**Steps:**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/pesantren-ulul-albaab-sukabumi",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/pesantren-ulul-albaab-sukabumi/',
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Repo Settings → Pages
   - Source: gh-pages branch
   - Save

**Post-Deployment:**
- URL: `https://yourusername.github.io/pesantren-ulul-albaab-sukabumi`
- Setup custom domain via CNAME file

---

### **OPTION 4: Traditional Hosting (cPanel/FTP)** ⭐⭐

For shared hosting dengan cPanel:

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Upload via FTP**
   - Connect to FTP: FileZilla, WinSCP, etc
   - Upload contents of `dist/` to `public_html/`

3. **Configure .htaccess** (untuk React Router)
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 🔧 **Post-Deployment Configuration**

### **1. Update URLs**

Update di file-file ini:
- `sitemap.xml` → Update all URLs
- `.env.production` → Update API URLs
- `index.html` → Update canonical URL
- `robots.txt` → Update sitemap location

### **2. Setup Custom Domain**

#### **Vercel:**
```bash
vercel domains add alandalus-ululalbaab.com
```

Point DNS records:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### **Netlify:**
```
Netlify Dashboard → Domain Settings → Add custom domain
```

Point DNS:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME  
Name: www
Value: your-site.netlify.app
```

### **3. SSL Certificate**

- **Vercel/Netlify**: Automatic SSL (Let's Encrypt)
- **cPanel**: Use Let's Encrypt via cPanel interface
- **Cloudflare**: Free SSL + CDN

### **4. SEO Setup**

#### **Google Search Console**
1. Go to: `https://search.google.com/search-console`
2. Add property: `https://www.alandalus-ululalbaab.com`
3. Verify ownership (DNS/HTML file)
4. Submit sitemap: `https://www.alandalus-ululalbaab.com/sitemap.xml`

#### **Google Analytics** (Optional)
1. Create GA4 property
2. Get tracking ID
3. Add to `.env.local`:
   ```
   VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   ```
4. Add tracking script to `index.html`

#### **Bing Webmaster Tools**
1. Go to: `https://www.bing.com/webmasters`
2. Add site
3. Verify
4. Submit sitemap

---

## 📊 **Performance Optimization**

### **1. Image Optimization**

```bash
# Install image optimizer
npm install --save-dev vite-plugin-image-optimizer

# Add to vite.config.js
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer()
  ]
})
```

### **2. Bundle Analysis**

```bash
# Install analyzer
npm install --save-dev rollup-plugin-visualizer

# Build with stats
npm run build

# View bundle size
```

### **3. Lazy Loading**

Already implemented via React.lazy() in router

### **4. CDN for Static Assets** (Optional)

Use Cloudflare CDN:
1. Add site to Cloudflare
2. Update nameservers
3. Enable Auto Minify
4. Enable Brotli compression

---

## 🔍 **Testing After Deployment**

### **Functionality Tests**
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms submit successfully
- [ ] WhatsApp button works
- [ ] All external links work
- [ ] Back to top button works
- [ ] Mobile menu works

### **Performance Tests**
- [ ] Google PageSpeed Insights: https://pagespeed.web.dev/
- [ ] GTmetrix: https://gtmetrix.com/
- [ ] WebPageTest: https://www.webpagetest.org/

**Target Scores:**
- PageSpeed: 90+ (Mobile), 95+ (Desktop)
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

### **SEO Tests**
- [ ] Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- [ ] Structured Data Test

### **Security Tests**
- [ ] SSL Labs Test: https://www.ssllabs.com/ssltest/
- [ ] Security Headers: https://securityheaders.com/

---

## 🐛 **Troubleshooting**

### **Issue: 404 on Page Refresh**

**Solution:** Configure server redirects

**Vercel:** Create `vercel.json`
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Netlify:** Create `_redirects` in `/public/`
```
/*    /index.html   200
```

### **Issue: Environment Variables Not Working**

- Ensure variables start with `VITE_`
- Rebuild after changing `.env`
- Check Vercel/Netlify dashboard for env vars

### **Issue: Slow Loading**

- Enable compression (Gzip/Brotli)
- Use CDN
- Optimize images
- Lazy load components
- Enable caching headers

---

## 📧 **Continuous Deployment**

### **Setup Automatic Deployments**

**Vercel/Netlify:**
- Automatic from `main` branch
- Preview deployments from PRs
- Rollback via dashboard

**GitHub Actions:** (Optional)
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm ci
      - run: npm run build
      - run: npm run deploy
```

---

## ✅ **Post-Launch Checklist**

- [ ] Website accessible from domain
- [ ] SSL certificate active
- [ ] All pages tested
- [ ] Google Search Console verified
- [ ] Google Analytics working
- [ ] Sitemap submitted
- [ ] robots.txt accessible
- [ ] Social media links updated
- [ ] WhatsApp numbers tested
- [ ] Contact form tested
- [ ] Mobile responsive confirmed
- [ ] Page speed optimized
- [ ] Backup of code in GitHub

---

## 📞 **Support**

Jika ada masalah deployment:

1. **Check Documentation:**
   - Vercel: https://vercel.com/docs
   - Netlify: https://docs.netlify.com
   - Vite: https://vitejs.dev/guide/

2. **Community Support:**
   - Stack Overflow
   - GitHub Discussions
   - Discord communities

3. **Contact Developer:**
   - Email: riezaekatomara@gmail.com
   - WhatsApp: 0858-8887-1997

---

## 🎉 **Congratulations!**

Website Pesantren Ulul Albaab Sukabumi is now LIVE! 🚀

**Next Steps:**
1. Monitor analytics
2. Collect user feedback
3. Iterate and improve
4. Market the website
5. Update content regularly

---

**Made with ❤️ by Rieza Eka Tomara**