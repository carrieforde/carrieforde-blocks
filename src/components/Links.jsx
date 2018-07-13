// @flow
import React from 'react';

const Links = (props: {
  github_url: string,
  live_url: string,
  other_url: Object
}) => {
  const { github_url, live_url, other_url } = props;

  let github, live, other;

  if (github_url) {
    github = (
      <a href={github_url} className="project-link">
        Github
      </a>
    );
  }

  if (live_url) {
    live = (
      <a href={live_url} className="project-link">
        Live Site
      </a>
    );
  }

  if (other_url.name && other_url.url) {
    other = (
      <a href={other_url.url} className="project-link">
        {other_url.name}
      </a>
    );
  }

  return (
    <div className="project-links">
      {github}
      {live}
      {other}
    </div>
  );
};

export default Links;
