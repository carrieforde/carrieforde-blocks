import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Projects from '../../components/Projects';

const Portfolio = props => <Projects {...props} />;

if (document.querySelector('.wp-block-carrieforde-blocks-projects')) {
  const categories = document.querySelector(
    '.wp-block-carrieforde-blocks-projects'
  ).dataset.categories;

  render(
    <Provider store={store}>
      <Portfolio categories={JSON.parse(categories)} />
    </Provider>,
    document.querySelector('.wp-block-carrieforde-blocks-projects')
  );
}
