# BlokesTrips Block Theme

A modern, dark-themed WordPress Block Theme for BlokesTrips group trip planning service. This theme leverages Full Site Editing (FSE) capabilities, featuring a tactical sports brand aesthetic with amber accents, responsive design, and comprehensive WordPress integration.

## Features

- **Full Site Editing (FSE)**: Utilizes `theme.json` for global styles, block patterns, and HTML templates for full site control.
- **Dark Theme Design**: Bold tactical sports brand aesthetic with near-black charcoal (#111111) and warm amber (#E8920A) accents.
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices.
- **Custom Post Types**: Built-in support for Packages and Testimonials.
- **Custom Taxonomies**: Package Categories taxonomy for organizing trip types.
- **Barlow Font Family**: Uses Barlow and Barlow Condensed fonts for authentic branding.
- **Sharp Design**: No rounded corners, angular dividers, and ghost step numbers.
- **Accessibility**: WCAG compliant with proper semantic HTML.
- **SEO Optimized**: Proper heading hierarchy, meta tags, and structured data support.
- **Mobile Menu**: Responsive navigation with mobile-friendly dropdown menus.
- **Contact Form Ready**: Compatible with Contact Form 7 and other popular form plugins.

## Installation

1. Download the theme folder and extract it to `/wp-content/themes/`.
2. Log in to your WordPress admin dashboard.
3. Go to **Appearance > Themes**.
4. Find "BlokesTrips Block Theme" and click **Activate**.

## Theme Setup

### 1. Global Styles (theme.json)

This theme uses `theme.json` to manage all global styles, including colors, typography, and spacing. You can customize these settings via **Appearance > Editor** in your WordPress admin.

### 2. Create Navigation Menus

1. Go to **Appearance > Editor**.
2. Navigate to "Navigation" and create your primary and footer menus.
3. Assign menu items as needed.

### 3. Set Front Page

1. Go to **Settings > Reading**.
2. Select "A static page" for your homepage.
3. Choose or create a page to use as your front page (e.g., a page using the `front-page` template).
4. Optionally set a blog page.

### 4. Create Package Post Type

Packages are automatically available after theme activation:

1. Go to **Packages** in the admin sidebar.
2. Click **Add New Package**.
3. Fill in the package details:
   - Title: Package name
   - Content: Package description
   - Featured Image: Package image
   - Package Price (custom field): e.g., "$499pp"
4. Assign to a Package Category.
5. Publish.

### 5. Add Package Categories

1. Go to **Packages > Package Categories**.
2. Click **Add New Package Category**.
3. Create categories like:
   - Golf Weekends
   - Fishing Trips
   - Sailing Adventures
   - Diving Expeditions
   - Beer & Whiskey Tours
   - Custom Escapes

### 6. Install Contact Form Plugin

1. Go to **Plugins > Add New**.
2. Search for "Contact Form 7".
3. Click **Install Now** and **Activate**.
4. Create a contact form.
5. Add the shortcode to the front page contact section using a Shortcode block.

## Customization

All global styles (colors, typography, spacing) can be customized directly within the WordPress Site Editor (**Appearance > Editor**).

### Homepage

The homepage uses the `front-page.html` template. You can customize its content and layout using the Site Editor.

### Logo

1. Go to **Appearance > Editor**.
2. Select the Header template part.
3. Replace the Site Title block with a Site Logo block and upload your logo.

## File Structure

```
blokestrips-block-theme/
├── style.css                 # Theme metadata
├── functions.php             # Theme functions and hooks (CPTs, Taxonomies)
├── theme.json                # Global styles and settings for FSE
├── index.html                # Main template fallback
├── templates/
│   ├── front-page.html       # Homepage template
│   ├── single.html           # Single post template
│   ├── single-package.html   # Single package template
│   └── 404.html              # 404 error template
├── parts/
│   ├── header.html           # Header template part
│   └── footer.html           # Footer template part
├── patterns/                 # Block patterns (optional)
├── assets/
│   ├── css/                  # Additional stylesheets (if any)
│   ├── js/                   # JavaScript files
│   └── images/               # Theme images
└── screenshot.png            # Theme screenshot
```

## Template Hierarchy

This theme follows the WordPress Block Theme template hierarchy:

- **Home Page**: `templates/front-page.html` (if static front page is set)
- **Blog/Posts Page**: `index.html`
- **Single Post**: `templates/single.html`
- **Single Package**: `templates/single-package.html`
- **Page**: `templates/page.html` (if created, otherwise `index.html`)
- **404 Error**: `templates/404.html`

## Custom Post Types

### Package

Displays trip packages with:
- Title
- Description
- Featured image
- Price (custom field: `_package_price`)
- Category

**Access**: Admin > Packages

### Testimonial

Displays customer testimonials with:
- Title
- Quote/content
- Featured image (customer photo)

**Access**: Admin > Testimonials

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Use a Caching Plugin**: Install WP Super Cache or similar.
2. **Optimize Images**: Use an image optimization plugin.
3. **CDN**: Consider using a CDN for static assets.

## SEO

The theme includes:
- Proper heading hierarchy (h1, h2, h3, etc.).
- Meta descriptions support.
- Structured data ready.
- XML sitemap support (with Yoast SEO or similar).
- Open Graph tags support.

## Support

For issues or questions:
1. Check the WordPress documentation.
2. Review the theme code comments.
3. Contact BlokesTrips support.

## License

This theme is licensed under the GPL v2 or later. See `style.css` for details.

## Changelog

### Version 1.0.0
- Initial release of Block Theme.
- Full Site Editing support.
- Dark theme design.
- Custom post types (Package, Testimonial).
- Responsive navigation.
- Homepage template.
- Contact section.
- Footer with social links.

---

**Theme Name**: BlokesTrips Block Theme  
**Version**: 1.0.0  
**Author**: BlokesTrips  
**Author URI**: https://blokestrips.com.au  
**Theme URI**: https://blokestrips.com.au  
**License**: GPL v2 or later
