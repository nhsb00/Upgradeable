import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchAllProjects } from "../../actions/project_actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mapDispatchToProps = dispatch => ({
  fetchAllProjects: projects => dispatch(fetchAllProjects(projects))
});

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
      e.preventDefault();
    this.props.history.push(`/search/${this.state.search}`);
    this.setState({ search: ""} );
  }

  render() {
    return (
      <form  className="search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.update("search")}
          placeholder="Let's Make ..."
          name="search"
          value={this.state.searchString}
        />
        <i className="fas fa-search"></i>
      </form>
    );
  }
} 

export default withRouter(connect(null, mapDispatchToProps)(SearchContainer)
);
