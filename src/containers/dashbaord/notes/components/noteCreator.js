import React from "react";
import Note from "../note/note";
import { Util } from "../../../../util/index";
import Macy from "macy";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class NoteCreator extends React.Component {
  render() {
    let itemsArray = Util.objToArray(this.props.notes);

    if (this.props.filter.filter === "category") {
      itemsArray = itemsArray.filter(
        item => item.category.toLowerCase() === this.props.filter.name
      );
    } else if (this.props.filter.filter === "filter") {
      itemsArray = itemsArray.filter(item => item[this.props.filter.name]);
    }

    let items = itemsArray.map(item => (
      <Note key={item.id} {...item} {...this.props} />
    ));

    if (items.length === 0) {
      items = <h1>Nothing here :)</h1>;
    }

    return (
      <div id="macy-container" className="o-notes-wrapper">
        {items}
      </div>
    );
  }

  componentWillReceiveProps({ filter }) {
    if (this.props.filter !== filter) {
      this.props.storeRoute({
        ...filter
      });
    }
  }

  componentDidMount() {
    // initiate Macy
    this.initiateMacy();
  }

  componentDidUpdate() {
    this.initiateMacy();
  }

  initiateMacy = () => {
    Macy({
      container: "#macy-container",
      trueOrder: false,
      waitForImages: false,
      margin: 24,
      columns: 3,
      breakAt: {
        940: 2,
        400: 1
      }
    });
  };
}

const mapDispatchToProps = d => ({
  storeRoute: _ => d({ type: "ROUTE_CHANGE", route: _ })
});

export default withRouter(
  connect(
    undefined,
    mapDispatchToProps
  )(NoteCreator)
);
