const { registerBlockType } = wp.blocks,
  { getColorClassName, RichText } = wp.editor,
  __ = wp.i18n.__;

import classnames from 'classnames';
import edit from './edit';
import logo from '../../icons/carrieforde_logo-color.svg';
import Icon from '../../components/icon';
import './editor';

/**
 * Every block starts by registering a new block type definition.
 * @see https://wordpress.org/gutenberg/handbook/block-api/
 */
registerBlockType('carrieforde-blocks/hero-heading', {
  title: __('Hero Heading'),
  icon: <Icon icon={logo} className="icon-logo" />,
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
      selector:
        '.wp-block-carrieforde-blocks-hero-heading .wp-block-carrieforde-blocks__title'
    },
    content: {
      type: 'array',
      source: 'children',
      selector:
        '.wp-block-carrieforde-blocks-hero-heading .wp-block-carrieforde-blocks__content'
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
      backgroundClass = getColorClassName('background-color', backgroundColor),
      textClass = getColorClassName('color', textColor),
      classes = classnames('wp-block-carrieforde-blocks full-width', {
        'has-background-color': backgroundClass,
        [backgroundClass]: backgroundClass,
        'has-text-color': textClass,
        [textClass]: textClass
      });

    return (
      <section className={classes}>
        <div className="wp-block-carrieforde-blocks__wrapper">
          <h2 className="wp-block-carrieforde-blocks__title">{title}</h2>
          <RichText.Content
            className="wp-block-carrieforde-blocks__content"
            tagName="div"
            value={content}
          />
        </div>
      </section>
    );
  }
});
