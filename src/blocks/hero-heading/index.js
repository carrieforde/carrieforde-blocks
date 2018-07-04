const { registerBlockType } = wp.blocks,
  { getColorClass, RichText } = wp.editor,
  __ = wp.i18n.__;

import edit from './edit';

/**
 * Every block starts by registering a new block type definition.
 * @see https://wordpress.org/gutenberg/handbook/block-api/
 */
registerBlockType('carrieforde-blocks/hero-heading', {
  title: __('Hero Heading'),
  icon: 'heart',
  category: 'widgets',
  supports: {
    html: false,
    multiple: false
  },
  attributes: {
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    title: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-carrieforde-blocks-hero-heading__title'
    },
    content: {
      type: 'array',
      source: 'children',
      selector: '.wp-block-carrieforde-blocks-hero-heading__content'
    }
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   * @return {Element}       Element to render.
   */
  edit,

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into `post_content`.
   * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
   *
   * @return {Element}       Element to render.
   */
  save: ({ attributes }) => {
    const { backgroundColor, textColor, title, content } = attributes,
      backgroundClass = getColorClass('background-color', backgroundColor),
      textClass = getColorClass('color', textColor);

    let classes = 'wp-block-carrieforde-blocks-hero-heading full-width';

    if (backgroundClass !== undefined) {
      classes += ` has-background-color ${backgroundClass}`;
    }

    if (textClass !== undefined) {
      classes += ` has-text-color ${textClass}`;
    }

    return (
      <section className={classes}>
        <div className="wp-block-carrieforde-blocks-hero-heading__wrapper">
          <h2 className="wp-block-carrieforde-blocks-hero-heading__title">
            {title}
          </h2>
          <RichText.Content
            className="wp-block-carrieforde-blocks-hero-heading__content"
            tagName="div"
            value={content}
          />
        </div>
      </section>
    );
  }
});
