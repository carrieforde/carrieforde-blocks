// @flow
import { FETCH_PROJECTS, CURRENT_PAGE } from './actions';

const DEFAULT_STATE = {
  projects: {},
  totalProjects: 0,
  projectPages: 0,
  currentPage: 0
};

const fetchProjects = (state, action) =>
  Object.assign({}, state, {
    projects: {
      ...state.projects,
      [action.payload.currentPage]: action.payload.projects
    },
    totalProjects: parseInt(action.payload.totalProjects),
    projectPages: parseInt(action.payload.projectPages),
    currentPage: parseInt(action.payload.currentPage)
  });

const updateCurrentPage = (state, action) =>
  Object.assign({}, state, { currentPage: parseInt(action.payload.currentPage) });

const rootReducer = (state: Object = DEFAULT_STATE, action: Object) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return fetchProjects(state, action);
    case CURRENT_PAGE:
      return updateCurrentPage(state, action);
    default:
      return state;
  }
};

export default rootReducer;
