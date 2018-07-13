// @flow
import React from 'react';

const Term = (props: { name: string }) => {
  const { name } = props;

  return <span className="term">{name}</span>;
};

export default Term;
