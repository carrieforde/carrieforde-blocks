// @flow
import React from 'react';
import Links from './Links';
import Term from './Term';

const Project = (props: {
  id: number,
  title: Object,
  content: Object,
  portfolio_meta: Object,
  project_tags: Array<Object>
}) => {
  const { id, title, content, portfolio_meta, project_tags } = props;

  let tags;

  if (0 < project_tags.length) {
    tags = (
      <div className="post-tags">
        {project_tags.map(tag => <Term key={tag.term_id} {...tag} />)}
      </div>
    );
  }

  return (
    <article id={`post-${id}`} className="project">
      <header className="entry-header">
        <h2 className="entry-title">{title.rendered}</h2>
      </header>

      <div
        className="entry-content"
        dangerouslySetInnerHTML={{ __html: content.rendered }}
      />

      <footer className="entry-footer">
        <Links {...portfolio_meta} />
        {tags}
      </footer>
    </article>
  );
};

export default Project;
