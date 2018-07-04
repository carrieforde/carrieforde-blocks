<?php
/**
 * Plugin Name:     Carrie Forde Blocks
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     PLUGIN DESCRIPTION HERE
 * Author:          Carrie Forde
 * Author URI:      YOUR SITE HERE
 * Text Domain:     carrieforde-blocks
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Carrieforde_Blocks
 */

// Your code starts here.
define( 'CARRIEFORDE_BLOCKS_VERSION', '1.0.0' );
define( 'CARRIEFORDE_BLOCKS_PATH', plugin_dir_path( __FILE__ ) );
define( 'CARRIEFORDE_BLOCKS_URL', plugin_dir_url( __FILE__ ) );

add_action( 'init', 'blocks_init' );
/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/#enqueuing-block-scripts
 */
function blocks_init() {

	wp_register_script(
		'block-js',
		CARRIEFORDE_BLOCKS_URL . 'dist/editor-bundle.js',
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		null
	);

	wp_register_style(
		'block-editor-styles',
		CARRIEFORDE_BLOCKS_URL . 'dist/editor.css',
		array(
			'wp-blocks',
		),
		null
	);

	wp_register_style(
		'block-styles',
		CARRIEFORDE_BLOCKS_URL . 'dist/main.css',
		array(
			'wp-blocks',
		),
		null
	);

	register_block_type( 'carrieforde-blocks/blocks', array(
		'editor_script' => 'block-js',
		'editor_style'  => 'block-editor-styles',
		'style'         => 'block-styles',
	) );
}
