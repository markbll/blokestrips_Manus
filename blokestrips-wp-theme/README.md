# BlokesTrips WordPress Theme

A modern, dark-themed WordPress theme for BlokesTrips group trip planning service. This theme features a tactical sports brand aesthetic with amber accents, responsive design, and comprehensive WordPress integration.

## Features

- **Dark Theme Design**: Bold tactical sports brand aesthetic with near-black charcoal (#111111) and warm amber (#E8920A) accents
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Custom Post Types**: Built-in support for Packages and Testimonials
- **Custom Taxonomies**: Package Categories taxonomy for organizing trip types
- **Barlow Font Family**: Uses Barlow and Barlow Condensed fonts for authentic branding
- **Sharp Design**: No rounded corners, angular dividers, and ghost step numbers
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Optimized**: Proper heading hierarchy, meta tags, and structured data support
- **Mobile Menu**: Responsive navigation with mobile-friendly dropdown menus
- **Contact Form Ready**: Compatible with Contact Form 7 and other popular form plugins

## Installation

1. Download the theme folder and extract it to `/wp-content/themes/`
2. Log in to your WordPress admin dashboard
3. Go to **Appearance > Themes**
4. Find "BlokesTrips" and click **Activate**

## Theme Setup

### 1. Create Navigation Menus

1. Go to **Appearance > Menus**
2. Create a new menu called "Primary Menu"
3. Add your pages and links
4. Assign it to the "Primary Menu" location
5. Create another menu called "Footer Menu" (optional)
6. Assign it to the "Footer Menu" location

### 2. Set Front Page

1. Go to **Settings > Reading**
2. Select "A static page" for your homepage
3. Choose or create a page to use as your front page
4. Optionally set a blog page

### 3. Create Package Post Type

Packages are automatically available after theme activation:

1. Go to **Packages** in the admin sidebar
2. Click **Add New Package**
3. Fill in the package details:
   - Title: Package name
   - Content: Package description
   - Featured Image: Package image
   - Package Price (custom field): e.g., "$499pp"
4. Assign to a Package Category
5. Publish

### 4. Add Package Categories

1. Go to **Packages > Package Categories**
2. Click **Add New Package Category**
3. Create categories like:
   - Golf Weekends
   - Fishing Trips
   - Sailing Adventures
   - Diving Expeditions
   - Beer & Whiskey Tours
   - Custom Escapes

### 5. Install Contact Form Plugin

1. Go to **Plugins > Add New**
2. Search for "Contact Form 7"
3. Click **Install Now** and **Activate**
4. Create a contact form
5. Add the shortcode to the front page contact section

## Customization

### Colors

Edit the CSS variables in `style.css`:

```css
:root {
  --background: #111111;
  --foreground: #f2f2f2;
  --accent: #E8920A;
  /* ... more colors ... */
}
```

### Fonts

Fonts are loaded from Google Fonts in `header.php`:
- **Barlow**: Body text and labels
- **Barlow Condensed**: Display headings

### Homepage

The homepage uses `front-page.php`. You can customize:
- Hero section background image
- Trust statistics
- Package display
- Contact section

### Logo

1. Go to **Appearance > Customize**
2. Click **Site Identity**
3. Upload your logo under "Logo"
4. The default logo will be replaced with your custom logo

## File Structure

```
blokestrips-wp-theme/
├── style.css                 # Theme metadata and styles
├── functions.php             # Theme functions and hooks
├── header.php                # Header template
├── footer.php                # Footer template
├── index.php                 # Main template fallback
├── front-page.php            # Homepage template
├── page.php                  # Page template
├── single.php                # Single post/package template
├── 404.php                   # 404 error template
├── README.md                 # This file
└── assets/
    ├── css/                  # Additional stylesheets
    ├── js/
    │   └── main.js           # Main JavaScript file
    ├── images/               # Theme images
    └── fonts/                # Custom fonts (if needed)
```

## Template Hierarchy

This theme follows the standard WordPress template hierarchy:

- **Home Page**: `front-page.php` (if static front page is set)
- **Blog**: `index.php`
- **Single Post/Package**: `single.php`
- **Page**: `page.php`
- **Archive**: `index.php` (with archive-specific classes)
- **404 Error**: `404.php`

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

## Hooks and Filters

### Custom Functions

- `blokestrips_setup()`: Theme setup and support
- `blokestrips_scripts()`: Enqueue scripts and styles
- `blokestrips_register_cpts()`: Register custom post types
- `blokestrips_register_taxonomies()`: Register taxonomies
- `blokestrips_get_logo()`: Get theme logo
- `blokestrips_the_logo()`: Output theme logo
- `blokestrips_primary_menu()`: Output primary menu
- `blokestrips_footer_menu()`: Output footer menu

### Filters

- `body_class`: Add custom body classes
- `excerpt_length`: Customize excerpt length (20 words)
- `excerpt_more`: Customize excerpt "more" text

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Use a Caching Plugin**: Install WP Super Cache or similar
2. **Optimize Images**: Use an image optimization plugin
3. **Minify CSS/JS**: Use a minification plugin
4. **CDN**: Consider using a CDN for static assets
5. **Lazy Loading**: The theme supports lazy loading for images

## SEO

The theme includes:
- Proper heading hierarchy (h1, h2, h3, etc.)
- Meta descriptions support
- Structured data ready
- XML sitemap support (with Yoast SEO or similar)
- Open Graph tags support

## Support

For issues or questions:
1. Check the WordPress documentation
2. Review the theme code comments
3. Contact BlokesTrips support

## License

This theme is licensed under the GPL v2 or later. See `style.css` for details.

## Changelog

### Version 1.0.0
- Initial release
- Dark theme design
- Custom post types (Package, Testimonial)
- Responsive navigation
- Homepage template
- Contact section
- Footer with social links

## Credits

- **Design**: BlokesTrips brand guidelines
- **Fonts**: Google Fonts (Barlow, Barlow Condensed)
- **Icons**: Lucide React icons (converted to SVG)
- **Framework**: WordPress 6.0+

---

**Theme Name**: BlokesTrips  
**Version**: 1.0.0  
**Author**: BlokesTrips  
**Author URI**: https://blokestrips.com.au  
**Theme URI**: https://blokestrips.com.au  
**License**: GPL v2 or later
