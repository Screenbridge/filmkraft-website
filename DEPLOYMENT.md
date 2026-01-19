# Deployment Instructions for GitHub Pages

## Option 1: Quick Deploy (Command Line)

1. Navigate to the project directory:
```bash
cd /tmp/filmkraft-website
```

2. Initialize git and push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: SEO-optimized Filmkraft website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/filmkraft-website.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from branch → main → / (root)
   - Save

4. Your site will be live at: `https://YOUR-USERNAME.github.io/filmkraft-website/`

## Option 2: Custom Domain Setup (filmkraft.tv)

### Step 1: Configure DNS at Your Domain Registrar

Add these DNS records:

**A Records (for apex domain @):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record (for www subdomain):**
```
www.filmkraft.tv → YOUR-USERNAME.github.io
```

### Step 2: Enable Custom Domain in GitHub

1. Go to repository Settings → Pages
2. Enter custom domain: `filmkraft.tv`
3. Check "Enforce HTTPS" (wait for SSL certificate)
4. GitHub Pages will automatically use the CNAME file

### Step 3: Verify Setup

- Test DNS propagation: `dig filmkraft.tv`
- Check HTTPS certificate status in GitHub Pages settings
- Visit https://filmkraft.tv (may take a few minutes to propagate)

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Check all internal links
- [ ] Replace placeholder images with actual photos
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (add tracking code to all pages)
- [ ] Test contact form functionality
- [ ] Run Lighthouse audit (aim for 90+ score)
- [ ] Verify Schema.org markup with Google Rich Results Test
- [ ] Set up 301 redirects for old URLs in 404.html

## Monitoring & Maintenance

### Weekly:
- Check Google Search Console for errors
- Monitor page load times
- Review analytics for user behavior

### Monthly:
- Update content (new case studies, guides)
- Check for broken links
- Review and improve underperforming pages
- Update sitemap.xml with new pages

### Quarterly:
- Full SEO audit
- Competitor analysis
- Content refresh for high-traffic pages
- Update year references (currently 2026)

## Need Help?

Contact: hello@filmkraft.tv
