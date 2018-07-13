// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getAPIData,
  fetchProjects,
  updateCurrentPage
} from '../redux/actionCreators';

type Props = {
  parent: HTMLElement,
  projects: Object,
  totalProjects: number,
  projectPages: number,
  currentPage: number,
  getProjects: Function,
  updatePage: Function
};

class Pagination extends Component<Props> {
  getPreviousPage = () => {
    const { projects, currentPage, getProjects, updatePage } = this.props,
      updatedPage = currentPage - 1;

    if (projects[updatedPage] === undefined) {
      getProjects(updatedPage);
    } else {
      updatePage(updatedPage);
    }

    this.goToTop();
  };

  getNextPage = () => {
    const { projects, currentPage, getProjects, updatePage } = this.props,
      updatedPage = currentPage + 1;

    if (projects[updatedPage] === undefined) {
      getProjects(updatedPage);
    } else {
      updatePage(updatedPage);
    }

    this.goToTop();
  };

  goToTop = () => {
    const { parent } = this.props,
      offset = parent.getBoundingClientRect().top;

    window.scrollBy({ left: 0, top: offset - 100, behavior: 'smooth' });
  };

  render() {
    const { currentPage, projectPages } = this.props;

    return (
      <div className="pagination">
        {1 < currentPage && (
          <button
            className="button button--previous"
            onClick={this.getPreviousPage}
          >
            Previous
          </button>
        )}
        {currentPage < projectPages && (
          <button className="button button--next" onClick={this.getNextPage}>
            Next
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects,
    totalProjects: state.totalProjects,
    projectPages: state.projectPages,
    currentPage: state.currentPage
  };
};

const mapDispatchToProps = (dispatch: Function) => ({
  getProjects(page) {
    dispatch(
      getAPIData(`wp/v2/portfolio?per_page=5&page=${page}`, fetchProjects, page)
    );
  },
  updatePage(page) {
    dispatch(updateCurrentPage(page));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
