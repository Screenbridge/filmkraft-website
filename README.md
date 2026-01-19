# Filmkraft Website

Modern, SEO-optimized website for Filmkraft video production agency. Built with clean HTML5, CSS3, and vanilla JavaScript for optimal performance on GitHub Pages.

## 🚀 Quick Start

### Deploy to GitHub Pages

1. **Create a new GitHub repository**
   ```bash
   # Initialize git (if not already done)
   cd filmkraft-website
   git init
   git add .
   git commit -m "Initial commit: Filmkraft website"
   ```

2. **Connect to GitHub**
   ```bash
   # Create a new repository on GitHub, then:
   git remote add origin https://github.com/YOUR-USERNAME/filmkraft-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"
   - Your site will be live at `https://YOUR-USERNAME.github.io/filmkraft-website/`

### Custom Domain Setup (filmkraft.tv)

1. **Add CNAME file** (already included in this project at `/CNAME`)

2. **Configure DNS at your domain registrar**:
   ```
   Type: A Record
   Name: @
   Value: 185.199.108.153
   
   Type: A Record  
   Name: @
   Value: 185.199.109.153
   
   Type: A Record
   Name: @
   Value: 185.199.110.153
   
   Type: A Record
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   ```

3. **Enable custom domain in GitHub**:
   - Go to repository Settings → Pages
   - Under "Custom domain", enter: `filmkraft.tv`
   - Check "Enforce HTTPS"

## 📁 Project Structure

```
filmkraft-website/
├── index.html              # Homepage
├── css/
│   ├── main.css           # Main styles
│   └── service.css        # Service page styles
├── js/
│   └── main.js            # Interactive functionality
├── services/
│   ├── index.html         # Services hub page
│   ├── tv-commercial-production/
│   ├── ctv-ad-production/
│   ├── testimonial-video-production/
│   ├── explainer-video-production/
│   ├── product-lifestyle-photography/
│   └── animation-video-production/
├── work/
│   ├── index.html         # Portfolio overview
│   └── [case-studies]/
├── guides/
│   ├── index.html         # Guides hub
│   └── [guide-articles]/
├── nyc-video-production/
│   └── index.html         # NYC local SEO page
├── contact/
│   └── index.html         # Contact form
├── 404.html               # Custom 404 with redirects
├── sitemap.xml            # XML sitemap
├── robots.txt             # Search engine directives
├── CNAME                  # Custom domain configuration
└── README.md              # This file
```

## 🎯 SEO Implementation

This website implements comprehensive SEO strategies including:

### 1. **Technical SEO**
- ✅ Clean, semantic HTML5
- ✅ Fast load times (no frameworks)
- ✅ Mobile-responsive design
- ✅ Structured data (Schema.org)
- ✅ Proper heading hierarchy
- ✅ Meta descriptions for all pages
- ✅ Open Graph tags
- ✅ XML sitemap
- ✅ Robots.txt configuration

### 2. **On-Page SEO**
- ✅ Keyword-optimized page titles
- ✅ Descriptive URLs
- ✅ Internal linking strategy
- ✅ Alt text for images
- ✅ Canonical URLs
- ✅ Breadcrumb navigation

### 3. **Content Structure**
- ✅ Service landing pages (targeting specific intents)
- ✅ Case studies with FAQs
- ✅ Guide articles with CTAs
- ✅ Category hub pages
- ✅ Local SEO pages (NYC-focused)

### 4. **Schema Markup**
- ✅ LocalBusiness schema (sitewide)
- ✅ Service schema (service pages)
- ✅ FAQPage schema (FAQs)
- ✅ VideoObject schema (case studies)

### 5. **Legacy URL Handling**
- ✅ 404 page with smart redirects
- ✅ Handles /old-home, /workold, etc.

## 📝 Content Guidelines

### Adding New Service Pages

1. Copy a template from `/services/tv-commercial-production/`
2. Update all meta tags (title, description, keywords)
3. Modify Schema.org structured data
4. Write unique, keyword-optimized content
5. Add FAQ section with Schema markup
6. Link to related services and guides
7. Add to `/services/index.html` hub

### Adding New Case Studies

1. Create new folder in `/work/`
2. Include VideoObject schema
3. Structure: Problem → Solution → Results
4. Add FAQ section
5. Link to related services
6. Link to related guides
7. Add to portfolio page

### Adding New Guides

1. Create in `/guides/` with descriptive URL
2. Add clear "Hire Filmkraft" CTA block
3. Link to relevant service pages
4. Add to category hub pages
5. Include FAQs when applicable

## 🔧 Local Development

No build process required! Simply open `index.html` in your browser, or use a local server:

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 🎨 Customization

### Colors
Edit CSS variables in `/css/main.css`:
```css
:root {
    --color-primary: #FF6B35;
    --color-secondary: #004E89;
    --color-dark: #1A1A1A;
    /* ... */
}
```

### Fonts
Currently using Inter from Google Fonts. To change:
1. Update the `<link>` tag in HTML files
2. Update `--font-primary` in CSS

### Logo
Replace the SVG text logo in navigation with your own logo file.

## 📊 Analytics Setup

Add your analytics tracking code before the closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔍 SEO Checklist

Before launching:

- [ ] Update all placeholder content
- [ ] Replace placeholder images
- [ ] Test all internal links
- [ ] Verify Schema.org markup with Google Rich Results Test
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile
- [ ] Configure redirects for legacy URLs
- [ ] Test mobile responsiveness
- [ ] Run Lighthouse audit
- [ ] Test page load speed
- [ ] Verify custom domain and HTTPS

## 📈 Performance

- Vanilla JavaScript (no frameworks = smaller bundle)
- CSS optimized for speed
- Images should use lazy loading
- Minimal external dependencies
- Target: 90+ Lighthouse score

## 🤝 Support

For questions about deployment or customization:
- Email: hello@filmkraft.tv
- GitHub Issues: Create an issue in this repository

## 📄 License

© 2026 Filmkraft. All rights reserved.

---

Built with ❤️ for Filmkraft by AI-powered development
