<?php
/**
 * The template for displaying pages
 *
 * @package blokestrips
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<section class="py-24 bg-black">
    <div class="container max-w-4xl">
        <?php
        while ( have_posts() ) {
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <!-- Page Header -->
                <header class="mb-12">
                    <h1 class="text-5xl md:text-6xl font-black italic mb-4">
                        <?php the_title(); ?>
                    </h1>
                </header>

                <!-- Featured Image -->
                <?php
                if ( has_post_thumbnail() ) {
                    ?>
                    <div class="mb-12 overflow-hidden">
                        <?php the_post_thumbnail( 'large', array( 'class' => 'w-full h-auto object-cover' ) ); ?>
                    </div>
                    <?php
                }
                ?>

                <!-- Page Content -->
                <div class="prose prose-invert max-w-none">
                    <?php
                    the_content();
                    wp_link_pages( array(
                        'before' => '<div class="page-links"><span class="page-links-title">' . esc_html__( 'Pages:', 'blokestrips' ) . '</span>',
                        'after'  => '</div>',
                        'link_before' => '<span>',
                        'link_after'  => '</span>',
                    ) );
                    ?>
                </div>
            </article>
            <?php
        }
        ?>
    </div>
</section>

<?php
get_footer();
