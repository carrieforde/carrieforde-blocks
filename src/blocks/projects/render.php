<?php

function carrieforde_blocks_projects( $attributes ) {

	$categories = wp_json_encode( $attributes['categories'] );

	ob_start();
	?>

	<div data-categories="<?php echo esc_attr( $categories ); ?>" class="wp-block-carrieforde-blocks-projects"></div>

	<?php
	return ob_get_clean();
}

add_action( 'init', 'register_projects_block' );
/**
 * Register the block PHP.
 */
function register_projects_block() {

	register_block_type( 'carrieforde-blocks/projects', array(
		'render_callback' => 'carrieforde_blocks_projects',
	) );
}
