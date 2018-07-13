import React from 'react';

const Icon = props => {
  const { icon, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon ${className}`}
      viewBox={icon.viewBox}
    >
      <use xlinkHref={`#${icon.id}`} />
    </svg>
  );
};

export default Icon;
