<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package blokestrips
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<section class="py-24 bg-black min-h-screen flex items-center">
    <div class="container text-center">
        <div class="mb-8">
            <h1 class="text-9xl font-black italic text-amber-500 mb-4">404</h1>
            <h2 class="text-5xl md:text-6xl font-black italic mb-6">
                <?php esc_html_e( 'Page Not Found', 'blokestrips' ); ?>
            </h2>
        </div>

        <p class="text-xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            <?php esc_html_e( 'Sorry, the page you\'re looking for doesn\'t exist. It might have been moved or deleted. Let\'s get you back on track.', 'blokestrips' ); ?>
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn-amber py-4 px-8 text-lg">
                <?php esc_html_e( 'Back to Home', 'blokestrips' ); ?>
            </a>
            <a href="<?php echo esc_url( home_url( '/packages/' ) ); ?>" class="btn-outline-white py-4 px-8 text-lg">
                <?php esc_html_e( 'Browse Packages', 'blokestrips' ); ?>
            </a>
        </div>

        <!-- Suggested Links -->
        <div class="mt-16 pt-12 border-t border-amber-500/20">
            <h3 class="text-2xl font-black italic mb-8">
                <?php esc_html_e( 'Popular Pages', 'blokestrips' ); ?>
            </h3>
            <div class="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <?php
                $popular_pages = array(
                    array( 'label' => 'How It Works', 'url' => '/how-it-works/' ),
                    array( 'label' => 'Golf Trips', 'url' => '/packages/?package_category=golf' ),
                    array( 'label' => 'Fishing Trips', 'url' => '/packages/?package_category=fishing' ),
                );

                foreach ( $popular_pages as $page ) {
                    ?>
                    <a href="<?php echo esc_url( home_url( $page['url'] ) ); ?>" class="p-6 border border-amber-500/30 bg-black/50 hover:border-amber-500 transition-colors">
                        <span class="text-foreground hover:text-amber-500 transition">
                            <?php echo esc_html( $page['label'] ); ?> →
                        </span>
                    </a>
                    <?php
                }
                ?>
            </div>
        </div>
    </div>
</section>

<?php
get_footer();
