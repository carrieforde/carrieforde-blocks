// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAPIData, fetchProjects } from '../redux/actionCreators';
import Icon from './Icon';
import Project from './Project';
import Pagination from './Pagination';
import spinner from '../icons/spinner-third-regular.svg';

type Props = {
  projects: Object,
  totalProjects: number,
  projectPages: number,
  currentPage: number,
  getProjects: Function
};

class Projects extends Component<Props> {
  componentDidMount() {
    const { projects, getProjects } = this.props;

    if (0 === Object.keys(projects).length) {
      getProjects(1);
    }
  }

  render() {
    const { projects, currentPage } = this.props;

    let portfolio;

    if (projects[currentPage] !== undefined) {
      portfolio = projects[currentPage].map(project => (
        <Project key={project.id} {...project} />
      ));
    } else {
      portfolio = <Icon icon={spinner} className="icon-spinner" />;
    }
    return (
      <div ref={node => (this.el = node)} className="projects">
        {portfolio}
        <Pagination parent={this.el} />
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
    dispatch(getAPIData(`wp/v2/portfolio?per_page=5`, fetchProjects, page));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
