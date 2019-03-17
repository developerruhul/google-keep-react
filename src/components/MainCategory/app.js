import React from "react";
import CategoryEditor from "../CategoryEditor/App";
import "./style.css";

export default class MainCategory extends React.Component {
  componentDidMount() {
    document.addEventListener("mousedown", this.checkOutsideClick);
  }

  componentWillUnmount() {
    document.addEventListener("mousedown", this.checkOutsideClick);
  }

  checkOutsideClick = e => {
    if (
      this.CategoryRef &&
      !this.CategoryRef.contains(e.target) &&
      this.props.categoryEditMode
    ) {
      this.props.changeCategoryEditMode();
    }
  };

  render() {
    let props = this.props;

    return (
      <div ref={e => (this.CategoryRef = e)} className="editor-category">
        <span
          onClick={_ => props.changeCategoryEditMode(props.categoryEditMode)}
        >
          {props.category}
        </span>

        <CategoryEditor
          editMode={props.categoryEditMode}
          onChange={props.onCategoryChange}
          categories={props.categories}
          addCategory={props.addCategory}
        />
      </div>
    );
  }
}
