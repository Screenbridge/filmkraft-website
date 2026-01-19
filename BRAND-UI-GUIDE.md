# Filmkraft Brand UI Guide

## 🎨 Color Palette

### Primary Colors
```css
--color-primary: #FF2D7A;      /* Hot Pink - Primary CTA buttons */
--color-secondary: #2B3990;    /* Navy Blue - Headings and important text */
--color-yellow: #FFD200;       /* Bright Yellow - Featured sections */
```

### Secondary Colors
```css
--color-purple: #8B5CF6;       /* Purple - Tags/badges */
--color-teal: #0EA5E9;         /* Teal - Tags/badges */
--color-green: #10B981;        /* Green - Tags/badges */
```

### Neutral Colors
```css
--color-dark: #000000;         /* Black - Primary text */
--color-gray: #6B7280;         /* Gray - Secondary text */
--color-light-gray: #F8F7F4;   /* Off-white - Backgrounds */
--color-white: #FFFFFF;        /* White */
```

## 📝 Typography

### Font Family
- **Primary**: Inter (all weights)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

### Font Weights
- **Regular (400)**: Body text
- **Medium (500)**: Navigation, links
- **Semibold (600)**: Subheadings, emphasis
- **Bold (700)**: H3-H6 headings
- **Extrabold (800)**: H1-H2 headings, hero titles

### Type Scale
```css
h1: clamp(2.5rem, 5vw, 4rem)    /* 40-64px */
h2: clamp(2rem, 4vw, 3rem)      /* 32-48px */
h3: clamp(1.5rem, 3vw, 2rem)    /* 24-32px */
Body: 1.125rem (18px)
Small: 0.875rem-0.938rem (14-15px)
```

### Heading Colors
- Default: `var(--color-dark)` - Black
- Hero/Section Headers: `var(--color-secondary)` - Navy Blue

## 🎯 Components

### Buttons

#### Primary CTA Button
```html
<a href="#" class="btn btn-primary">Get in Touch</a>
```
- **Background**: Hot Pink (#FF2D7A)
- **Text**: White
- **Hover**: Darker pink (#E6196A) with lift effect
- **Border Radius**: 12px
- **Padding**: 0.875rem 2rem (large: 1.125rem 2.5rem)

#### Secondary Button
```html
<a href="#" class="btn btn-secondary">Learn More</a>
```
- **Background**: Transparent
- **Border**: 2px solid black
- **Hover**: Black background, white text

### Badges/Tags

Multiple color variants for categorization:

```html
<span class="badge badge-yellow">TV/CTV</span>
<span class="badge badge-purple">High Concept</span>
<span class="badge badge-teal">B2B</span>
<span class="badge badge-green">Animation/3D</span>
<span class="badge badge-pink">Social</span>
<span class="badge badge-blue">Photography</span>
```

**Styles**:
- **Shape**: Pill (fully rounded)
- **Padding**: 0.5rem 1.25rem
- **Font**: 600 weight, 0.875rem size
- **Text Transform**: Capitalize

### Filter Pills

For work/portfolio filtering:

```html
<div class="filter-pills">
    <button class="filter-pill active">Featured</button>
    <button class="filter-pill">TV/CTV</button>
    <button class="filter-pill">Social</button>
</div>
```

**Active State**: Black background, white text
**Inactive State**: White background, gray border, black text
**Hover**: Darker border

### Cards

#### Basic Work Card
```html
<div class="work-card">
    <img src="image.jpg" alt="Project name">
    <span class="badge badge-purple work-card-badge">High Concept</span>
    <div class="work-card-content">
        <h3 class="work-card-title">Project Name</h3>
        <p class="work-card-description">Brief description...</p>
    </div>
</div>
```

**Features**:
- Rounded corners (16px)
- Shadow on hover
- Badge positioned absolute top-right
- Clean content padding

### Testimonial/Quote Block

```html
<blockquote class="testimonial-quote">
    Working with Filmkraft has been truly a gift. The team was attentive, 
    responsive, and clearly passionate not only for their work, but for their clients.
    <div class="testimonial-author">
        <div class="name">Tania Nemaric</div>
        <div class="title">1-800-Flowers, VP, Brand Marketing</div>
    </div>
</blockquote>
```

**Features**:
- Large navy blue text (2.5rem)
- Yellow quotation mark accent
- Right-aligned attribution
- Generous line height (1.4)

## 📐 Layout

### Section Backgrounds

Alternate between white and yellow for visual rhythm:

```html
<section class="section-yellow">
    <!-- Yellow background section -->
</section>

<section class="bg-light">
    <!-- Off-white background section -->
</section>

<section>
    <!-- White background (default) -->
</section>
```

### Container
- **Max Width**: 1280px
- **Padding**: 2rem (mobile: 1rem)
- **Centered**: margin 0 auto

### Section Spacing
- **Default**: 5rem top/bottom padding
- **Mobile**: 3rem top/bottom padding

## 🎨 Brand Usage Examples

### Hero Section
```html
<section class="hero">
    <div class="container">
        <h1>We create engaging ads across all platforms.</h1>
        <h1>Emotion. Action. Conversion.</h1>
        <p class="hero-description">
            Filmkraft helps growing brands scale on TV, CTV and social media...
        </p>
        <a href="/contact/" class="btn btn-primary btn-lg">Get in Touch</a>
    </div>
</section>
```

### Featured Work Section (Yellow Background)
```html
<section class="section-yellow">
    <div class="container">
        <h2>Featured Work</h2>
        <div class="filter-pills">
            <button class="filter-pill active">Featured</button>
            <button class="filter-pill badge-yellow">TV/CTV</button>
            <button class="filter-pill badge-purple">Social</button>
        </div>
        <!-- Work cards grid -->
    </div>
</section>
```

### Testimonial Section
```html
<section>
    <div class="container">
        <blockquote class="testimonial-quote">
            Working with Filmkraft has been truly a gift...
            <div class="testimonial-author">
                <div class="name">Client Name</div>
                <div class="title">Company, Position</div>
            </div>
        </blockquote>
    </div>
</section>
```

## 🎭 Visual Principles

### 1. Bold & Direct
- Use large, bold headings in navy blue
- Clear, concise messaging
- Strong visual hierarchy

### 2. High Contrast
- Black text on white/yellow backgrounds
- White text on colored badges
- Ensure WCAG AA accessibility

### 3. Playful Accents
- Yellow backgrounds for featured content
- Colorful badges for categorization
- Hot pink for CTAs (sparingly)

### 4. Clean & Modern
- Generous white space
- Rounded corners (12-16px)
- Subtle shadows
- Smooth transitions (0.3s)

### 5. Mobile-First
- Responsive typography using clamp()
- Flexible layouts
- Touch-friendly button sizes (min 44px)

## 📱 Responsive Breakpoints

```css
Desktop: 1280px and above
Tablet: 968px - 1279px
Mobile: 640px - 967px
Small Mobile: below 640px
```

## ♿ Accessibility

- Minimum contrast ratio: 4.5:1 for text
- Focus states on all interactive elements
- Semantic HTML structure
- Alt text for all images
- Keyboard navigation support

## 🚀 Implementation Checklist

- [ ] Update primary color to hot pink (#FF2D7A)
- [ ] Update secondary color to navy blue (#2B3990)
- [ ] Add yellow background sections
- [ ] Implement badge component system
- [ ] Add testimonial quote styling
- [ ] Create filter pill component
- [ ] Update button hover states
- [ ] Add work card badge overlays
- [ ] Test all color combinations for accessibility
- [ ] Verify responsive behavior across devices

---

**Brand Assets Location**: `/assets/`
**CSS Variables**: `/css/main.css`
**Last Updated**: January 2026
