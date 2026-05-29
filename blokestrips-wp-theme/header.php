<?php
/**
 * The header for our theme
 *
 * @package blokestrips
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/95 backdrop-blur-sm shadow-lg">
        <div class="container flex items-center justify-between h-16">
            <!-- Logo -->
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="font-black text-xl italic tracking-tight flex-shrink-0 hover:opacity-80 transition">
                <span class="text-white">BLOKES</span><span class="text-amber-500">TRIPS</span>
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center gap-8">
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'menu_class'     => 'flex gap-8',
                    'container'      => false,
                    'fallback_cb'    => 'blokestrips_default_menu',
                    'depth'          => 2,
                ) );
                ?>
            </nav>

            <!-- Desktop CTA -->
            <a href="#contact" class="hidden md:inline-block px-6 py-2 bg-amber-500 hover:bg-amber-600 text-black font-bold text-sm transition">
                PLAN MY TRIP
            </a>

            <!-- Mobile Menu Button -->
            <button class="md:hidden p-2 hover:bg-muted rounded transition mobile-menu-toggle">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden border-t border-border bg-black/98 py-4 mobile-menu hidden">
            <div class="container space-y-2">
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'menu_class'     => 'space-y-2',
                    'container'      => false,
                    'fallback_cb'    => 'blokestrips_default_mobile_menu',
                    'depth'          => 2,
                ) );
                ?>
                <a href="#contact" class="block px-4 py-2 text-sm font-medium text-amber-500 border-t border-foreground/10 mt-2 hover:bg-muted rounded transition">
                    PLAN MY TRIP
                </a>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main id="main" class="pt-16">
