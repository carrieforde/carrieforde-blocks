const {
    InspectorControls,
    PlainText,
    RichText,
    PanelColorSettings,
    withColors
  } = wp.editor,
  __ = wp.i18n.__;

import classnames from 'classnames';

const HeroHeadingEdit = props => {
  const {
      className,
      attributes,
      setAttributes,
      textColor,
      setTextColor,
      backgroundColor,
      setBackgroundColor
    } = props,
    { title, content } = attributes,
    onTitleChange = text => setAttributes({ title: text }),
    onContentChange = text => setAttributes({ content: text }),
    classes = classnames(className, {
      [backgroundColor.class]: backgroundColor.class,
      [textColor.class]: textColor.class
    });

  return (
    <div className={classes}>
      <InspectorControls>
        <PanelColorSettings
          title={__('Color Settings')}
          colorSettings={[
            {
              value: backgroundColor.color,
              onChange: setBackgroundColor,
              label: __('Background Color')
            },
            {
              value: textColor.color,
              onChange: setTextColor,
              label: __('Text Color')
            }
          ]}
        />
      </InspectorControls>
      <PlainText
        className={`${className}__title`}
        value={title}
        onChange={onTitleChange}
        placeholder={__(`Title`)}
      />
      <RichText
        className={`${className}__content`}
        value={content}
        onChange={onContentChange}
        multiline="p"
        placeholder={__(`Content...`)}
      />
    </div>
  );
};

export default withColors('backgroundColor', { textColor: 'color' })(
  HeroHeadingEdit
);
