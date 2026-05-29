<?php
/**
 * The template for displaying single posts
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
            <article id="post-<?php the_ID(); ?>" <?php post_class( 'mb-12' ); ?>>
                <!-- Featured Image -->
                <?php
                if ( has_post_thumbnail() ) {
                    ?>
                    <div class="mb-8 overflow-hidden">
                        <?php the_post_thumbnail( 'large', array( 'class' => 'w-full h-auto object-cover' ) ); ?>
                    </div>
                    <?php
                }
                ?>

                <!-- Post Header -->
                <header class="mb-8">
                    <h1 class="text-5xl md:text-6xl font-black italic mb-4">
                        <?php the_title(); ?>
                    </h1>
                    <div class="flex items-center gap-4 text-foreground/70">
                        <span><?php blokestrips_posted_on(); ?></span>
                        <span>•</span>
                        <span><?php esc_html_e( 'By', 'blokestrips' ); ?> <?php the_author(); ?></span>
                    </div>
                </header>

                <!-- Post Content -->
                <div class="prose prose-invert max-w-none mb-12">
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

                <!-- Post Meta -->
                <footer class="border-t border-amber-500/20 pt-8">
                    <div class="flex flex-wrap gap-4">
                        <?php
                        $categories = get_the_category();
                        if ( $categories ) {
                            echo '<div class="flex gap-2">';
                            foreach ( $categories as $category ) {
                                echo '<a href="' . esc_url( get_category_link( $category->term_id ) ) . '" class="inline-block px-3 py-1 bg-amber-500/20 text-amber-500 text-sm rounded hover:bg-amber-500/30 transition">' . esc_html( $category->name ) . '</a>';
                            }
                            echo '</div>';
                        }
                        ?>
                    </div>
                </footer>
            </article>

            <!-- Navigation -->
            <nav class="mt-16 pt-8 border-t border-amber-500/20 flex justify-between">
                <div>
                    <?php
                    $prev_post = get_previous_post();
                    if ( $prev_post ) {
                        ?>
                        <a href="<?php echo esc_url( get_permalink( $prev_post->ID ) ); ?>" class="btn-outline-white">
                            ← <?php esc_html_e( 'Previous', 'blokestrips' ); ?>
                        </a>
                        <?php
                    }
                    ?>
                </div>
                <div>
                    <?php
                    $next_post = get_next_post();
                    if ( $next_post ) {
                        ?>
                        <a href="<?php echo esc_url( get_permalink( $next_post->ID ) ); ?>" class="btn-outline-white">
                            <?php esc_html_e( 'Next', 'blokestrips' ); ?> →
                        </a>
                        <?php
                    }
                    ?>
                </div>
            </nav>

            <!-- Related Posts -->
            <?php
            $related_posts = get_posts( array(
                'post_type'      => get_post_type(),
                'posts_per_page' => 3,
                'post__not_in'   => array( get_the_ID() ),
                'orderby'        => 'rand',
            ) );

            if ( $related_posts ) {
                ?>
                <section class="mt-16 pt-8 border-t border-amber-500/20">
                    <h2 class="text-3xl font-black italic mb-8">
                        <?php esc_html_e( 'Related Posts', 'blokestrips' ); ?>
                    </h2>
                    <div class="grid md:grid-cols-3 gap-8">
                        <?php
                        foreach ( $related_posts as $related_post ) {
                            setup_postdata( $related_post );
                            ?>
                            <article class="border border-amber-500/30 bg-black/50 overflow-hidden hover:border-amber-500 transition-colors">
                                <?php
                                if ( has_post_thumbnail( $related_post->ID ) ) {
                                    ?>
                                    <div class="overflow-hidden h-48">
                                        <?php echo get_the_post_thumbnail( $related_post->ID, 'medium', array( 'class' => 'w-full h-full object-cover' ) ); ?>
                                    </div>
                                    <?php
                                }
                                ?>
                                <div class="p-6">
                                    <h3 class="text-xl font-black italic mb-2">
                                        <a href="<?php echo esc_url( get_permalink( $related_post->ID ) ); ?>" class="hover:text-amber-500 transition">
                                            <?php echo esc_html( $related_post->post_title ); ?>
                                        </a>
                                    </h3>
                                    <p class="text-foreground/80 mb-4 text-sm leading-relaxed">
                                        <?php echo wp_kses_post( wp_trim_words( $related_post->post_content, 15 ) ); ?>
                                    </p>
                                    <a href="<?php echo esc_url( get_permalink( $related_post->ID ) ); ?>" class="btn-amber text-sm">
                                        <?php esc_html_e( 'Read More', 'blokestrips' ); ?>
                                    </a>
                                </div>
                            </article>
                            <?php
                        }
                        wp_reset_postdata();
                        ?>
                    </div>
                </section>
                <?php
            }
            ?>
            <?php
        }
        ?>
    </div>
</section>

<?php
get_footer();
