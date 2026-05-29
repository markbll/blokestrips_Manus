<?php
/**
 * The front page template
 *
 * @package blokestrips
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<!-- Hero Section -->
<section class="relative pt-20 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
    <img
        src="<?php echo get_template_directory_uri(); ?>/assets/images/hero-golf.webp"
        alt="Golf sunset"
        class="absolute inset-0 w-full h-full object-cover"
    />

    <div class="container relative z-20 py-32 flex flex-col justify-center min-h-[90vh]">
        <!-- Trust Badge -->
        <div class="mb-12 inline-flex items-center gap-2 w-fit px-4 py-2 border border-amber-500/50 bg-black/50">
            <span class="text-amber-500 text-sm font-bold">★</span>
            <span class="text-xs font-bold text-amber-500 tracking-wider"><?php esc_html_e( "AUSTRALIA'S #1 GROUP TRIP ORGANISER", 'blokestrips' ); ?></span>
        </div>

        <!-- Hero Headline -->
        <h1 class="text-5xl md:text-7xl font-black italic leading-tight mb-6 max-w-3xl text-white">
            <?php esc_html_e( 'Golf weekends, fishing adventures & epic group getaways — planned for you.', 'blokestrips' ); ?>
        </h1>

        <!-- Hero Subheading -->
        <p class="text-xl text-foreground/90 max-w-2xl mb-12 leading-relaxed font-light">
            <?php esc_html_e( 'No chasing accommodation. No organising mates. No hassle. We build unforgettable weekends for your crew.', 'blokestrips' ); ?>
        </p>

        <!-- Hero CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 max-w-md mb-16">
            <a href="#contact" class="btn-amber py-4 px-8 text-lg text-center">
                <?php esc_html_e( 'Get a Fast Quote', 'blokestrips' ); ?>
            </a>
            <a href="#packages" class="btn-outline-white py-4 px-8 text-lg text-center">
                <?php esc_html_e( 'Browse Packages', 'blokestrips' ); ?>
            </a>
        </div>

        <!-- Trust Strip -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-amber-500/20">
            <div class="space-y-1">
                <div class="text-3xl font-black text-amber-500">500+</div>
                <div class="text-sm text-foreground/70 font-medium"><?php esc_html_e( 'Trips Organised', 'blokestrips' ); ?></div>
            </div>
            <div class="space-y-1">
                <div class="text-3xl font-black text-amber-500">4,800+</div>
                <div class="text-sm text-foreground/70 font-medium"><?php esc_html_e( 'Happy Blokes', 'blokestrips' ); ?></div>
            </div>
            <div class="space-y-1">
                <div class="text-3xl font-black text-amber-500">98%</div>
                <div class="text-sm text-foreground/70 font-medium"><?php esc_html_e( 'Would Book Again', 'blokestrips' ); ?></div>
            </div>
            <div class="space-y-1">
                <div class="text-3xl font-black text-amber-500">24hr</div>
                <div class="text-sm text-foreground/70 font-medium"><?php esc_html_e( 'Response Time', 'blokestrips' ); ?></div>
            </div>
        </div>
    </div>
</section>

<!-- Trip Types Section -->
<section class="py-16 bg-black/50 border-y border-amber-500/20">
    <div class="container">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div class="flex flex-col items-center gap-3">
                <div class="w-10 h-10 text-amber-500 text-2xl font-bold">⛳</div>
                <span class="text-sm font-bold text-foreground/80"><?php esc_html_e( 'Golf Trips', 'blokestrips' ); ?></span>
            </div>
            <div class="flex flex-col items-center gap-3">
                <div class="w-10 h-10 text-amber-500 text-2xl font-bold">🎣</div>
                <span class="text-sm font-bold text-foreground/80"><?php esc_html_e( 'Fishing', 'blokestrips' ); ?></span>
            </div>
            <div class="flex flex-col items-center gap-3">
                <div class="w-10 h-10 text-amber-500 text-2xl font-bold">🏆</div>
                <span class="text-sm font-bold text-foreground/80"><?php esc_html_e( 'Bucks Parties', 'blokestrips' ); ?></span>
            </div>
            <div class="flex flex-col items-center gap-3">
                <div class="w-10 h-10 text-amber-500 text-2xl font-bold">⚡</div>
                <span class="text-sm font-bold text-foreground/80"><?php esc_html_e( 'AFL / NRL', 'blokestrips' ); ?></span>
            </div>
            <div class="flex flex-col items-center gap-3">
                <div class="w-10 h-10 text-amber-500 text-2xl font-bold">🍺</div>
                <span class="text-sm font-bold text-foreground/80"><?php esc_html_e( 'Brewery Tours', 'blokestrips' ); ?></span>
            </div>
        </div>
    </div>
</section>

<!-- How It Works Section -->
<section id="how-it-works" class="py-24 bg-black">
    <div class="container">
        <div class="text-center mb-16">
            <h2 class="text-5xl md:text-6xl font-black italic mb-6">
                <?php esc_html_e( 'How It Works', 'blokestrips' ); ?>
            </h2>
            <p class="text-lg text-foreground/80 max-w-2xl mx-auto">
                <?php esc_html_e( 'From idea to unforgettable weekend in three simple steps.', 'blokestrips' ); ?>
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-12">
            <!-- Step 1 -->
            <div class="relative">
                <div class="absolute -top-8 left-0 text-6xl font-black text-amber-500/20">01</div>
                <div class="relative z-10 pt-8">
                    <h3 class="text-2xl font-black italic mb-4"><?php esc_html_e( 'Tell Us Your Trip', 'blokestrips' ); ?></h3>
                    <p class="text-foreground/80 leading-relaxed">
                        <?php esc_html_e( 'Share your dates, location, group size, and what you\'re after. We handle all the research.', 'blokestrips' ); ?>
                    </p>
                </div>
            </div>

            <!-- Step 2 -->
            <div class="relative">
                <div class="absolute -top-8 left-0 text-6xl font-black text-amber-500/20">02</div>
                <div class="relative z-10 pt-8">
                    <h3 class="text-2xl font-black italic mb-4"><?php esc_html_e( 'We Build the Itinerary', 'blokestrips' ); ?></h3>
                    <p class="text-foreground/80 leading-relaxed">
                        <?php esc_html_e( 'Custom itinerary, accommodation, activities, and pricing. Everything locked in and ready to go.', 'blokestrips' ); ?>
                    </p>
                </div>
            </div>

            <!-- Step 3 -->
            <div class="relative">
                <div class="absolute -top-8 left-0 text-6xl font-black text-amber-500/20">03</div>
                <div class="relative z-10 pt-8">
                    <h3 class="text-2xl font-black italic mb-4"><?php esc_html_e( 'Confirm & Enjoy', 'blokestrips' ); ?></h3>
                    <p class="text-foreground/80 leading-relaxed">
                        <?php esc_html_e( 'Your crew confirms attendance, pays deposits, and we handle everything else. Just show up.', 'blokestrips' ); ?>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Packages Section -->
<section id="packages" class="py-24 bg-black">
    <div class="container">
        <div class="text-center mb-16">
            <h2 class="text-5xl md:text-6xl font-black italic mb-6">
                <?php esc_html_e( 'Choose Your Legend', 'blokestrips' ); ?>
            </h2>
            <p class="text-lg text-foreground/80 max-w-2xl mx-auto">
                <?php esc_html_e( 'Every package includes full organisation, custom gear, and cold beer waiting in your room.', 'blokestrips' ); ?>
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
            <?php
            $packages = get_posts( array(
                'post_type'      => 'package',
                'posts_per_page' => 3,
                'orderby'        => 'date',
                'order'          => 'DESC',
            ) );

            if ( $packages ) {
                foreach ( $packages as $package ) {
                    setup_postdata( $package );
                    ?>
                    <div class="border border-amber-500/30 bg-black/50 overflow-hidden hover:border-amber-500 transition-colors">
                        <?php
                        if ( has_post_thumbnail( $package->ID ) ) {
                            ?>
                            <div class="overflow-hidden h-48">
                                <?php echo get_the_post_thumbnail( $package->ID, 'medium', array( 'class' => 'w-full h-full object-cover' ) ); ?>
                            </div>
                            <?php
                        }
                        ?>
                        <div class="p-8">
                            <h3 class="text-2xl font-black italic mb-2"><?php echo esc_html( $package->post_title ); ?></h3>
                            <p class="text-amber-500 font-bold mb-4">
                                <?php
                                $price = get_post_meta( $package->ID, '_package_price', true );
                                if ( $price ) {
                                    echo 'From ' . esc_html( $price );
                                } else {
                                    esc_html_e( 'Enquiry', 'blokestrips' );
                                }
                                ?>
                            </p>
                            <p class="text-foreground/80 mb-6 text-sm leading-relaxed">
                                <?php echo wp_kses_post( wp_trim_words( $package->post_content, 20 ) ); ?>
                            </p>
                            <a href="<?php echo esc_url( get_permalink( $package->ID ) ); ?>" class="btn-amber w-full text-center block">
                                <?php esc_html_e( 'View Packages', 'blokestrips' ); ?>
                            </a>
                        </div>
                    </div>
                    <?php
                }
                wp_reset_postdata();
            } else {
                ?>
                <p class="text-center text-foreground/80 col-span-3">
                    <?php esc_html_e( 'No packages available yet. Check back soon!', 'blokestrips' ); ?>
                </p>
                <?php
            }
            ?>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-24 bg-black/50">
    <div class="container max-w-2xl">
        <div class="text-center mb-12">
            <h2 class="text-5xl md:text-6xl font-black italic mb-6">
                <?php esc_html_e( 'Get Your Fast Quote', 'blokestrips' ); ?>
            </h2>
            <p class="text-lg text-foreground/80">
                <?php esc_html_e( 'Tell us about your trip and we\'ll get back to you within 24 hours.', 'blokestrips' ); ?>
            </p>
        </div>

        <?php
        // Display contact form using WordPress contact form plugin or custom form
        if ( function_exists( 'do_shortcode' ) ) {
            // If using Contact Form 7 or similar, add shortcode here
            // Example: echo do_shortcode( '[contact-form-7 id="123"]' );
            ?>
            <div class="bg-black border border-amber-500/30 p-8">
                <p class="text-foreground/80 text-center">
                    <?php esc_html_e( 'Contact form will be displayed here. Install Contact Form 7 or similar plugin and add the shortcode.', 'blokestrips' ); ?>
                </p>
                <p class="text-center mt-6">
                    <strong><?php esc_html_e( 'Or call us:', 'blokestrips' ); ?></strong> <a href="tel:1300256537" class="text-amber-500 hover:text-amber-600">1300 BLOKES</a>
                </p>
            </div>
            <?php
        }
        ?>
    </div>
</section>

<?php
get_footer();
