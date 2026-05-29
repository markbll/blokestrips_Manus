<?php
/**
 * BlokesTrips Theme Functions
 *
 * @package blokestrips
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Set up theme defaults and register support for various WordPress features.
 */
function blokestrips_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title.
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support( 'post-thumbnails' );

    // Register navigation menus.
    register_nav_menus( array(
        'primary' => esc_html__( 'Primary Menu', 'blokestrips' ),
        'footer'  => esc_html__( 'Footer Menu', 'blokestrips' ),
    ) );

    // Add support for core custom logo.
    add_theme_support( 'custom-logo', array(
        'height'      => 250,
        'width'       => 250,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    // Add support for responsive embedded content.
    add_theme_support( 'responsive-embeds' );

    // Add support for block styles.
    add_theme_support( 'wp-block-styles' );

    // Add support for full and wide align images.
    add_theme_support( 'align-wide' );

    // Add support for editor styles.
    add_theme_support( 'editor-styles' );
}
add_action( 'after_setup_theme', 'blokestrips_setup' );

/**
 * Register widget area.
 */
function blokestrips_widgets_init() {
    register_sidebar( array(
        'name'          => esc_html__( 'Primary Sidebar', 'blokestrips' ),
        'id'            => 'primary-sidebar',
        'description'   => esc_html__( 'Main sidebar', 'blokestrips' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
}
add_action( 'widgets_init', 'blokestrips_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function blokestrips_scripts() {
    // Enqueue main stylesheet.
    wp_enqueue_style( 'blokestrips-style', get_stylesheet_uri(), array(), wp_get_theme()->get( 'Version' ) );

    // Enqueue Google Fonts.
    wp_enqueue_style( 'blokestrips-fonts', 'https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700&family=Barlow+Condensed:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&display=swap', array(), null );

    // Enqueue main JavaScript.
    wp_enqueue_script( 'blokestrips-script', get_template_directory_uri() . '/assets/js/main.js', array(), wp_get_theme()->get( 'Version' ), true );

    // Localize script for AJAX.
    wp_localize_script( 'blokestrips-script', 'blokestrips', array(
        'ajaxurl' => admin_url( 'admin-ajax.php' ),
        'nonce'   => wp_create_nonce( 'blokestrips_nonce' ),
    ) );

    // Dequeue WordPress default styles if not needed.
    wp_dequeue_style( 'wp-block-library' );
}
add_action( 'wp_enqueue_scripts', 'blokestrips_scripts' );

/**
 * Register Custom Post Types.
 */
function blokestrips_register_cpts() {
    // Register Package CPT.
    register_post_type( 'package', array(
        'labels'             => array(
            'name'               => esc_html__( 'Packages', 'blokestrips' ),
            'singular_name'      => esc_html__( 'Package', 'blokestrips' ),
            'add_new'            => esc_html__( 'Add New Package', 'blokestrips' ),
            'add_new_item'       => esc_html__( 'Add New Package', 'blokestrips' ),
            'edit_item'          => esc_html__( 'Edit Package', 'blokestrips' ),
            'new_item'           => esc_html__( 'New Package', 'blokestrips' ),
            'view_item'          => esc_html__( 'View Package', 'blokestrips' ),
            'search_items'       => esc_html__( 'Search Packages', 'blokestrips' ),
            'not_found'          => esc_html__( 'No packages found', 'blokestrips' ),
            'not_found_in_trash' => esc_html__( 'No packages found in trash', 'blokestrips' ),
        ),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'show_in_rest'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'packages' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-suitcase',
        'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
    ) );

    // Register Testimonial CPT.
    register_post_type( 'testimonial', array(
        'labels'             => array(
            'name'               => esc_html__( 'Testimonials', 'blokestrips' ),
            'singular_name'      => esc_html__( 'Testimonial', 'blokestrips' ),
            'add_new'            => esc_html__( 'Add New Testimonial', 'blokestrips' ),
            'add_new_item'       => esc_html__( 'Add New Testimonial', 'blokestrips' ),
            'edit_item'          => esc_html__( 'Edit Testimonial', 'blokestrips' ),
            'new_item'           => esc_html__( 'New Testimonial', 'blokestrips' ),
            'view_item'          => esc_html__( 'View Testimonial', 'blokestrips' ),
            'search_items'       => esc_html__( 'Search Testimonials', 'blokestrips' ),
            'not_found'          => esc_html__( 'No testimonials found', 'blokestrips' ),
            'not_found_in_trash' => esc_html__( 'No testimonials found in trash', 'blokestrips' ),
        ),
        'public'             => false,
        'publicly_queryable' => false,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'show_in_rest'       => true,
        'query_var'          => false,
        'capability_type'    => 'post',
        'has_archive'        => false,
        'hierarchical'       => false,
        'menu_position'      => 6,
        'menu_icon'          => 'dashicons-format-quote',
        'supports'           => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
    ) );
}
add_action( 'init', 'blokestrips_register_cpts' );

/**
 * Register Package Categories Taxonomy.
 */
function blokestrips_register_taxonomies() {
    register_taxonomy( 'package_category', 'package', array(
        'labels'            => array(
            'name'              => esc_html__( 'Package Categories', 'blokestrips' ),
            'singular_name'     => esc_html__( 'Package Category', 'blokestrips' ),
            'search_items'      => esc_html__( 'Search Package Categories', 'blokestrips' ),
            'all_items'         => esc_html__( 'All Package Categories', 'blokestrips' ),
            'parent_item'       => esc_html__( 'Parent Package Category', 'blokestrips' ),
            'parent_item_colon' => esc_html__( 'Parent Package Category:', 'blokestrips' ),
            'edit_item'         => esc_html__( 'Edit Package Category', 'blokestrips' ),
            'update_item'       => esc_html__( 'Update Package Category', 'blokestrips' ),
            'add_new_item'      => esc_html__( 'Add New Package Category', 'blokestrips' ),
            'new_item_name'     => esc_html__( 'New Package Category Name', 'blokestrips' ),
            'menu_name'         => esc_html__( 'Package Categories', 'blokestrips' ),
        ),
        'hierarchical'      => true,
        'public'            => true,
        'publicly_queryable' => true,
        'show_ui'           => true,
        'show_in_menu'      => true,
        'show_in_rest'      => true,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'package-category' ),
    ) );
}
add_action( 'init', 'blokestrips_register_taxonomies' );

/**
 * Custom template tags for the theme.
 */
function blokestrips_posted_on() {
    $time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
    if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
        $time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
    }

    printf(
        wp_kses_post( $time_string ),
        esc_attr( get_the_date( 'c' ) ),
        esc_html( get_the_date() ),
        esc_attr( get_the_modified_date( 'c' ) ),
        esc_html( get_the_modified_date() )
    );
}

/**
 * Get the theme's logo.
 */
function blokestrips_get_logo() {
    if ( has_custom_logo() ) {
        return get_custom_logo();
    }
    return '<span class="bt-display-normal text-2xl"><span class="text-white">BLOKES</span><span class="text-amber-500">TRIPS</span></span>';
}

/**
 * Sanitize and output logo.
 */
function blokestrips_the_logo() {
    echo wp_kses_post( blokestrips_get_logo() );
}

/**
 * Get primary navigation menu.
 */
function blokestrips_primary_menu() {
    wp_nav_menu( array(
        'theme_location' => 'primary',
        'menu_class'     => 'primary-menu',
        'container'      => 'nav',
        'container_class' => 'primary-navigation',
        'fallback_cb'    => 'wp_page_menu',
        'depth'          => 2,
    ) );
}

/**
 * Get footer navigation menu.
 */
function blokestrips_footer_menu() {
    wp_nav_menu( array(
        'theme_location' => 'footer',
        'menu_class'     => 'footer-menu',
        'container'      => 'nav',
        'container_class' => 'footer-navigation',
        'fallback_cb'    => false,
        'depth'          => 1,
    ) );
}

/**
 * Add custom body classes.
 */
function blokestrips_body_classes( $classes ) {
    if ( is_home() || is_front_page() ) {
        $classes[] = 'is-home';
    }
    if ( is_archive() ) {
        $classes[] = 'is-archive';
    }
    if ( is_single() ) {
        $classes[] = 'is-single';
    }
    return $classes;
}
add_filter( 'body_class', 'blokestrips_body_classes' );

/**
 * Customize excerpt length.
 */
function blokestrips_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'blokestrips_excerpt_length' );

/**
 * Customize excerpt more text.
 */
function blokestrips_excerpt_more( $more ) {
    return ' ...';
}
add_filter( 'excerpt_more', 'blokestrips_excerpt_more' );

/**
 * Add theme support for editor color palette.
 */
function blokestrips_editor_color_palette() {
    add_theme_support( 'editor-color-palette', array(
        array(
            'name'  => esc_html__( 'Black', 'blokestrips' ),
            'slug'  => 'black',
            'color' => '#111111',
        ),
        array(
            'name'  => esc_html__( 'Amber', 'blokestrips' ),
            'slug'  => 'amber',
            'color' => '#E8920A',
        ),
        array(
            'name'  => esc_html__( 'White', 'blokestrips' ),
            'slug'  => 'white',
            'color' => '#ffffff',
        ),
        array(
            'name'  => esc_html__( 'Dark Gray', 'blokestrips' ),
            'slug'  => 'dark-gray',
            'color' => '#2a2a2a',
        ),
    ) );
}
add_action( 'after_setup_theme', 'blokestrips_editor_color_palette' );

/**
 * Add theme support for font sizes.
 */
function blokestrips_editor_font_sizes() {
    add_theme_support( 'editor-font-sizes', array(
        array(
            'name'      => esc_html__( 'Small', 'blokestrips' ),
            'slug'      => 'small',
            'size'      => 12,
        ),
        array(
            'name'      => esc_html__( 'Normal', 'blokestrips' ),
            'slug'      => 'normal',
            'size'      => 16,
        ),
        array(
            'name'      => esc_html__( 'Large', 'blokestrips' ),
            'slug'      => 'large',
            'size'      => 24,
        ),
        array(
            'name'      => esc_html__( 'Extra Large', 'blokestrips' ),
            'slug'      => 'extra-large',
            'size'      => 32,
        ),
    ) );
}
add_action( 'after_setup_theme', 'blokestrips_editor_font_sizes' );
