const { registerBlockType } = wp.blocks,
  { InnerBlocks } = wp.editor,
  __ = wp.i18n.__;

import logo from '../../icons/carrieforde_logo-color.svg';
import Icon from '../../components/icon';
import './style';

/**
 * Every block starts by registering a new block type definition.
 * @see https://wordpress.org/gutenberg/handbook/block-api/
 */
registerBlockType('carrieforde-blocks/grid-list', {
  title: __('Grid List'),
  icon: <Icon icon={logo} className="icon-logo" />,
  category: 'widgets',
  supports: {
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   * @return {Element}       Element to render.
   */
  edit: ({ className }) => (
    <div className={className}>
      <InnerBlocks />
    </div>
  ),

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into `post_content`.
   * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
   *
   * @return {Element}       Element to render.
   */
  save: () => (
    <div className="wp-block-carrieforde-blocks">
      <InnerBlocks.Content />
    </div>
  )
});
