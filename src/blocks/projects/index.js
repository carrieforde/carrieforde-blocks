const { registerBlockType } = wp.blocks,
  { withAPIData, CheckboxControl, SelectControl } = wp.components,
  { InspectorControls } = wp.editor,
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
    html: false,
    multiple: false
  },
  attributes: {
    categories: {
      type: 'array'
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
  edit: withAPIData(() => {
    return {
      projects: '/wp/v2/portfolio',
      categories: '/wp/v2/project-category'
    };
  })(({ projects, categories, className, setAttributes, attributes }) => {
    const onCategoryChange = categories => setAttributes({ categories });

    if (!projects.data || !categories.data) {
      return <Icon icon={spinner} className="icon-spinner" />;
    }

    if (0 === projects.data.length) {
      return 'Sorry, no projects.';
    }

    return (
      <div className={className}>
        <InspectorControls>
          <SelectControl
            multiple
            label={__('Select categories to display')}
            value={attributes.categories} // e.g: value = [ 'a', 'c' ]
            onChange={onCategoryChange}
            options={categories.data.map(category => ({
              value: category.id,
              label: category.name
            }))}
          />
        </InspectorControls>
        {projects.data
          .filter(function(project) {
            if (0 <= this.indexOf(project['project-category'].toString())) {
              return project;
            }
          }, attributes.categories)
          .map(project => <Project key={project.id} {...project} />)}
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
