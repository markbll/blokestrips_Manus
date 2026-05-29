<?php
/**
 * The main template file
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
    <div class="container">
        <?php
        if ( have_posts() ) {
            ?>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                while ( have_posts() ) {
                    the_post();
                    ?>
                    <article class="border border-amber-500/30 bg-black/50 overflow-hidden hover:border-amber-500 transition-colors">
                        <?php
                        if ( has_post_thumbnail() ) {
                            ?>
                            <div class="overflow-hidden h-48">
                                <?php the_post_thumbnail( 'medium', array( 'class' => 'w-full h-full object-cover' ) ); ?>
                            </div>
                            <?php
                        }
                        ?>
                        <div class="p-8">
                            <h3 class="text-2xl font-black italic mb-2">
                                <a href="<?php the_permalink(); ?>" class="hover:text-amber-500 transition">
                                    <?php the_title(); ?>
                                </a>
                            </h3>
                            <p class="text-amber-500 font-bold mb-4">
                                <?php
                                $price = get_post_meta( get_the_ID(), '_package_price', true );
                                if ( $price ) {
                                    echo 'From ' . esc_html( $price );
                                } else {
                                    esc_html_e( 'Enquiry', 'blokestrips' );
                                }
                                ?>
                            </p>
                            <p class="text-foreground/80 mb-6 text-sm leading-relaxed">
                                <?php the_excerpt(); ?>
                            </p>
                            <a href="<?php the_permalink(); ?>" class="btn-amber w-full text-center block">
                                <?php esc_html_e( 'View Details', 'blokestrips' ); ?>
                            </a>
                        </div>
                    </article>
                    <?php
                }
                ?>
            </div>

            <!-- Pagination -->
            <div class="mt-12 flex justify-center gap-2">
                <?php
                the_posts_pagination( array(
                    'mid_size'           => 2,
                    'prev_text'          => esc_html__( '← Previous', 'blokestrips' ),
                    'next_text'          => esc_html__( 'Next →', 'blokestrips' ),
                    'before_page_number' => '<span class="page-number">',
                    'after_page_number'  => '</span>',
                ) );
                ?>
            </div>
            <?php
        } else {
            ?>
            <div class="text-center py-12">
                <h2 class="text-3xl font-black italic mb-4">
                    <?php esc_html_e( 'Nothing Found', 'blokestrips' ); ?>
                </h2>
                <p class="text-foreground/80 mb-6">
                    <?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'blokestrips' ); ?>
                </p>
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn-amber">
                    <?php esc_html_e( 'Back to Home', 'blokestrips' ); ?>
                </a>
            </div>
            <?php
        }
        ?>
    </div>
</section>

<?php
get_footer();
