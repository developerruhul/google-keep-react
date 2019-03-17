import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import EditorDialogue from "./categoryDialogue/index";
import "./nav.css";

class Nav extends React.Component {
  render() {
    return (
      <nav
        onTransitionEnd={this.display}
        ref="mainNav"
        className="app__main__nav"
      >
        <Link to={`/dashboard`} className="all__notes nav__link">
          <svg
            className="link-icon"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            viewBox="0 0 24 24"
            height="24px"
          >
            <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          <p>All</p>
        </Link>

        <div className="link__category">
          <h3>Filter</h3>

          <Link to={`/dashboard/filter/star`} className="all__notes nav__link">
            <i className="material-icons">star</i>
            <p>Favorites</p>
          </Link>

          <Link to={`/dashboard/filter/lock`} className="nav__link">
            <i className="material-icons">lock</i>
            <p>Locked Notes</p>
          </Link>
        </div>

        <EditorDialogue {...this.props} />
      </nav>
    );
  }

  display = e => {
    this.refs.mainNav.style.display = "none";
  };
}

const mapStateToProps = ({ category }) => ({ category });
const mapDispatch = d => ({
  categoryUpdate: (a, b) => d({ type: "UPDATE_CATEGORY", index: a, data: b }),
  categoryDelete: index => d({ type: "DELETE_CATEGORY", index }),
  addCategory: item => d({ type: "CATEGORY_ADD", category: item })
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatch
  )(Nav)
);
