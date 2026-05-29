<?php
/**
 * The footer for our theme
 *
 * @package blokestrips
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
    </main><!-- #main -->

    <footer class="bg-[#0a0a0a] border-t border-white/10">
        <div class="container py-16 lg:py-20">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                <!-- Brand Column -->
                <div class="lg:col-span-1">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="bt-display-normal text-2xl">
                        <span class="text-white">BLOKES</span><span class="text-amber-500">TRIPS</span>
                    </a>
                    <p class="mt-4 text-white/50 text-sm leading-relaxed">
                        <?php bloginfo( 'description' ); ?>
                    </p>
                    <div class="flex gap-3 mt-6">
                        <?php
                        $social_links = array(
                            'instagram' => 'https://instagram.com/blokestrips',
                            'facebook'  => 'https://facebook.com/blokestrips',
                        );
                        foreach ( $social_links as $platform => $url ) {
                            ?>
                            <a href="<?php echo esc_url( $url ); ?>" target="_blank" rel="noopener noreferrer" class="w-9 h-9 bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors" aria-label="<?php echo esc_attr( ucfirst( $platform ) ); ?>">
                                <?php if ( 'instagram' === $platform ) : ?>
                                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/></svg>
                                <?php elseif ( 'facebook' === $platform ) : ?>
                                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                <?php endif; ?>
                            </a>
                            <?php
                        }
                        ?>
                    </div>
                </div>

                <!-- Trips Column -->
                <div>
                    <h4 class="bt-label text-amber-500 mb-5"><?php esc_html_e( 'Trips', 'blokestrips' ); ?></h4>
                    <ul class="space-y-3">
                        <?php
                        $trips_links = array(
                            array( 'label' => 'Golf Weekends', 'url' => '/packages/?package_category=golf' ),
                            array( 'label' => 'Fishing Trips', 'url' => '/packages/?package_category=fishing' ),
                            array( 'label' => 'Custom Trips', 'url' => '/packages/?package_category=custom' ),
                            array( 'label' => 'All Packages', 'url' => '/packages/' ),
                            array( 'label' => 'Add-Ons & Extras', 'url' => '/add-ons/' ),
                        );
                        foreach ( $trips_links as $link ) {
                            ?>
                            <li>
                                <a href="<?php echo esc_url( home_url( $link['url'] ) ); ?>" class="text-white/50 hover:text-white text-sm transition-colors">
                                    <?php echo esc_html( $link['label'] ); ?>
                                </a>
                            </li>
                            <?php
                        }
                        ?>
                    </ul>
                </div>

                <!-- Company Column -->
                <div>
                    <h4 class="bt-label text-amber-500 mb-5"><?php esc_html_e( 'Company', 'blokestrips' ); ?></h4>
                    <ul class="space-y-3">
                        <?php
                        $company_links = array(
                            array( 'label' => 'How It Works', 'url' => '/how-it-works/' ),
                            array( 'label' => 'For Organisers', 'url' => '/for-organisers/' ),
                            array( 'label' => 'Testimonials', 'url' => '/testimonials/' ),
                            array( 'label' => 'FAQ', 'url' => '/faq/' ),
                            array( 'label' => 'Franchise', 'url' => '/franchise/' ),
                        );
                        foreach ( $company_links as $link ) {
                            ?>
                            <li>
                                <a href="<?php echo esc_url( home_url( $link['url'] ) ); ?>" class="text-white/50 hover:text-white text-sm transition-colors">
                                    <?php echo esc_html( $link['label'] ); ?>
                                </a>
                            </li>
                            <?php
                        }
                        ?>
                    </ul>
                </div>

                <!-- Contact Column -->
                <div>
                    <h4 class="bt-label text-amber-500 mb-5"><?php esc_html_e( 'Contact', 'blokestrips' ); ?></h4>
                    <ul class="space-y-4">
                        <li class="flex items-start gap-3">
                            <svg class="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            <span class="text-white/50 text-sm">1300 BLOKES</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <svg class="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <a href="mailto:info@blokestrips.com.au" class="text-white/50 hover:text-white text-sm transition-colors">
                                info@blokestrips.com.au
                            </a>
                        </li>
                        <li class="flex items-start gap-3">
                            <svg class="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <span class="text-white/50 text-sm"><?php esc_html_e( 'Serving all of Australia', 'blokestrips' ); ?></span>
                        </li>
                    </ul>
                    <div class="mt-6">
                        <a href="#contact" class="btn-amber text-sm py-2.5 px-5 w-full text-center block">
                            <?php esc_html_e( 'Start Planning', 'blokestrips' ); ?>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p class="text-white/30 text-xs">
                    © <?php echo esc_html( gmdate( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?> — <?php esc_html_e( 'All rights reserved.', 'blokestrips' ); ?>
                </p>
                <div class="flex gap-6">
                    <?php
                    $footer_links = array(
                        'Terms & Conditions',
                        'Privacy Policy',
                        'Cancellation Policy',
                    );
                    foreach ( $footer_links as $link ) {
                        ?>
                        <a href="#" class="text-white/30 hover:text-white/60 text-xs transition-colors">
                            <?php echo esc_html( $link ); ?>
                        </a>
                        <?php
                    }
                    ?>
                </div>
            </div>
        </div>
    </footer>

    <?php wp_footer(); ?>
</body>
</html>
