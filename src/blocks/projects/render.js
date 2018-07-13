import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Projects from '../../components/Projects';

const Portfolio = () => <Projects />;

if (document.querySelector('.wp-block-carrieforde-blocks-projects')) {
  render(
    <Provider store={store}>
      <Portfolio />
    </Provider>,
    document.querySelector('.wp-block-carrieforde-blocks-projects')
  );
}
