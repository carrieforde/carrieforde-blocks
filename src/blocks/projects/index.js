const { registerBlockType } = wp.blocks,
  { withAPIData } = wp.components,
  __ = wp.i18n.__;

import Project from '../../components/Project';
import spinner from '../../icons/spinner-third-regular.svg';
import logo from '../../icons/carrieforde_logo-color.svg';
import Icon from '../../components/icon';
import './editor';

/**
 * Every block starts by registering a new block type definition.
 * @see https://wordpress.org/gutenberg/handbook/block-api/
 */
registerBlockType('carrieforde-blocks/projects', {
  title: __('Projects'),
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
  edit: withAPIData(() => {
    return {
      projects: '/wp/v2/portfolio'
    };
  })(({ projects, className }) => {
    if (!projects.data) {
      return <Icon icon={spinner} className="icon-spinner" />;
    }

    if (0 === projects.data.length) {
      return 'Sorry, no projects.';
    }

    return (
      <div className={className}>
        {projects.data.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    );
  }),

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into `post_content`.
   * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
   *
   * @return {Element}       Element to render.
   */
  save: () => null
});
