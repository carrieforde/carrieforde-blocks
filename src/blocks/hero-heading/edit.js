const {
    InspectorControls,
    PlainText,
    RichText,
    PanelColor,
    withColors
  } = wp.editor,
  __ = wp.i18n.__;

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
    onContentChange = text => setAttributes({ content: text });

  let classes;

  if (backgroundColor.class !== undefined) {
    classes = `${backgroundColor.class}`;
  }

  if (textColor.class !== undefined) {
    classes += ` ${textColor.class}`;
  }

  return (
    <div className={`${className} ${classes}`}>
      <InspectorControls>
        <PanelColor
          colorValue={backgroundColor.value}
          title={__(`Background Color`)}
          onChange={setBackgroundColor}
        />
        <PanelColor
          colorValue={textColor.value}
          title={__(`Text Color`)}
          onChange={setTextColor}
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
