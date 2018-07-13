// @flow
import axios from 'axios';
import { ROOT_URL, FETCH_PROJECTS, CURRENT_PAGE } from './actions';

export function fetchProjects(response: Object, page: number) {
  return {
    type: FETCH_PROJECTS,
    payload: {
      projects: response.data,
      totalProjects: response.headers['x-wp-total'],
      projectPages: response.headers['x-wp-totalpages'],
      currentPage: page
    }
  };
}

export function updateCurrentPage(page: number) {
  return {
    type: CURRENT_PAGE,
    payload: {
      currentPage: page
    }
  };
}

export function getAPIData(endpoint: string, cb: Function, page: number) {
  return (dispatch: Function) => {
    axios
      .get(`${ROOT_URL}wp-json/${endpoint}`)
      .then(response => {
        dispatch(cb(response, page));
      })
      .catch(error => console.error('axios error', error)); // eslint-disable-line no-console
  };
}
