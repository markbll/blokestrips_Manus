<?php
/**
 * BlokesTrips Block Theme Functions
 *
 * @package blokestrips-block
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Set up theme defaults and register support for various WordPress features.
 */
function blokestrips_block_theme_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title.
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support( 'post-thumbnails' );

    // Add support for responsive embedded content.
    add_theme_support( 'responsive-embeds' );

    // Add support for block styles.
    add_theme_support( 'wp-block-styles' );

    // Add support for full and wide align images.
    add_theme_support( 'align-wide' );

    // Add support for editor styles.
    add_theme_support( 'editor-styles' );

    // Add support for custom units.
    add_theme_support( 'custom-units' );

    // Add support for custom line height.
    add_theme_support( 'custom-line-height' );

    // Add support for custom spacing.
    add_theme_support( 'custom-spacing' );

    // Add support for custom typography.
    add_theme_support( 'custom-typography' );

    // Add support for custom color palettes.
    add_theme_support( 'editor-color-palette' );

    // Add support for custom font sizes.
    add_theme_support( 'editor-font-sizes' );

    // Add support for custom templates.
    add_theme_support( 'block-templates' );

    // Add support for HTML5 markup.
    add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption', 'style', 'script' ) );

    // Add support for custom logo.
    add_theme_support( 'custom-logo', array(
        'height'      => 250,
        'width'       => 250,
        'flex-height' => true,
        'flex-width'  => true,
    ) );
}
add_action( 'after_setup_theme', 'blokestrips_block_theme_setup' );

/**
 * Enqueue scripts and styles.
 */
function blokestrips_block_theme_scripts() {
    // Enqueue Google Fonts.
    wp_enqueue_style( 'blokestrips-block-fonts', 'https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700&family=Barlow+Condensed:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&display=swap', array(), null );

    // Enqueue main JavaScript.
    wp_enqueue_script( 'blokestrips-block-script', get_template_directory_uri() . '/assets/js/main.js', array(), wp_get_theme()->get( 'Version' ), true );

    // Localize script for AJAX.
    wp_localize_script( 'blokestrips-block-script', 'blokestrips_block', array(
        'ajaxurl' => admin_url( 'admin-ajax.php' ),
        'nonce'   => wp_create_nonce( 'blokestrips_block_nonce' ),
    ) );
}
add_action( 'wp_enqueue_scripts', 'blokestrips_block_theme_scripts' );

/**
 * Register Custom Post Types.
 */
function blokestrips_block_theme_register_cpts() {
    // Register Package CPT.
    register_post_type( 'package', array(
        'labels'             => array(
            'name'               => esc_html__( 'Packages', 'blokestrips-block' ),
            'singular_name'      => esc_html__( 'Package', 'blokestrips-block' ),
            'add_new'            => esc_html__( 'Add New Package', 'blokestrips-block' ),
            'add_new_item'       => esc_html__( 'Add New Package', 'blokestrips-block' ),
            'edit_item'          => esc_html__( 'Edit Package', 'blokestrips-block' ),
            'new_item'           => esc_html__( 'New Package', 'blokestrips-block' ),
            'view_item'          => esc_html__( 'View Package', 'blokestrips-block' ),
            'search_items'       => esc_html__( 'Search Packages', 'blokestrips-block' ),
            'not_found'          => esc_html__( 'No packages found', 'blokestrips-block' ),
            'not_found_in_trash' => esc_html__( 'No packages found in trash', 'blokestrips-block' ),
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
            'name'               => esc_html__( 'Testimonials', 'blokestrips-block' ),
            'singular_name'      => esc_html__( 'Testimonial', 'blokestrips-block' ),
            'add_new'            => esc_html__( 'Add New Testimonial', 'blokestrips-block' ),
            'add_new_item'       => esc_html__( 'Add New Testimonial', 'blokestrips-block' ),
            'edit_item'          => esc_html__( 'Edit Testimonial', 'blokestrips-block' ),
            'new_item'           => esc_html__( 'New Testimonial', 'blokestrips-block' ),
            'view_item'          => esc_html__( 'View Testimonial', 'blokestrips-block' ),
            'search_items'       => esc_html__( 'Search Testimonials', 'blokestrips-block' ),
            'not_found'          => esc_html__( 'No testimonials found', 'blokestrips-block' ),
            'not_found_in_trash' => esc_html__( 'No testimonials found in trash', 'blokestrips-block' ),
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
add_action( 'init', 'blokestrips_block_theme_register_cpts' );

/**
 * Register Package Categories Taxonomy.
 */
function blokestrips_block_theme_register_taxonomies() {
    register_taxonomy( 'package_category', 'package', array(
        'labels'            => array(
            'name'              => esc_html__( 'Package Categories', 'blokestrips-block' ),
            'singular_name'     => esc_html__( 'Package Category', 'blokestrips-block' ),
            'search_items'      => esc_html__( 'Search Package Categories', 'blokestrips-block' ),
            'all_items'         => esc_html__( 'All Package Categories', 'blokestrips-block' ),
            'parent_item'       => esc_html__( 'Parent Package Category', 'blokestrips-block' ),
            'parent_item_colon' => esc_html__( 'Parent Package Category:', 'blokestrips-block' ),
            'edit_item'         => esc_html__( 'Edit Package Category', 'blokestrips-block' ),
            'update_item'       => esc_html__( 'Update Package Category', 'blokestrips-block' ),
            'add_new_item'      => esc_html__( 'Add New Package Category', 'blokestrips-block' ),
            'new_item_name'     => esc_html__( 'New Package Category Name', 'blokestrips-block' ),
            'menu_name'         => esc_html__( 'Package Categories', 'blokestrips-block' ),
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
add_action( 'init', 'blokestrips_block_theme_register_taxonomies' );

/**
 * Custom template tags for the theme.
 */
function blokestrips_block_theme_posted_on() {
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
function blokestrips_block_theme_get_logo() {
    if ( has_custom_logo() ) {
        return get_custom_logo();
    }
    return '<span class="bt-display-normal text-2xl"><span class="text-white">BLOKES</span><span class="text-amber-500">TRIPS</span></span>';
}

/**
 * Sanitize and output logo.
 */
function blokestrips_block_theme_the_logo() {
    echo wp_kses_post( blokestrips_block_theme_get_logo() );
}

/**
 * Add custom body classes.
 */
function blokestrips_block_theme_body_classes( $classes ) {
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
add_filter( 'body_class', 'blokestrips_block_theme_body_classes' );

/**
 * Customize excerpt length.
 */
function blokestrips_block_theme_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'blokestrips_block_theme_excerpt_length' );

/**
 * Customize excerpt more text.
 */
function blokestrips_block_theme_excerpt_more( $more ) {
    return ' ...';
}
add_filter( 'excerpt_more', 'blokestrips_block_theme_excerpt_more' );
