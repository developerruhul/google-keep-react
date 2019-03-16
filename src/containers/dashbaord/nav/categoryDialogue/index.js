import React from "react";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import Category from "./category";
import "./style.css";

class EditorDialogue extends React.Component {
  state = {
    open: false
  };

  render() {
    return (
      <div className="link__category">
        <div className="js-category">
          <h3>Catergories</h3>
          <div
            onClick={_ => this.onChangeDialogue(true)}
            className="js-catergory-editbtn"
          >
            EDIT
          </div>
        </div>

        <Dialog
          open={this.state.open}
          onClose={_ => this.onChangeDialogue(false)}
        >
          <div className="categoryDialogue">
            <header>Edit category</header>

            <form onSubmit={this.addCategory}>
              <input
                ref={e => (this.input = e)}
                type="text"
                placeholder="Add a category"
              />
              <button type="submit">Add</button>
            </form>

            <div className="categoryList">
              {this.props.category.map((item, index) => (
                <Category
                  key={`index${Math.random()}`}
                  input={item}
                  update={_ => this.props.categoryUpdate(index, _)}
                  delete={_ => this.props.categoryDelete(index)}
                />
              ))}
            </div>
          </div>
        </Dialog>

        {[...this.props.category, "UNCATEGORIZED"].map(item => (
          <Link
            to={`/dashboard/category/${item.toLowerCase()}`}
            key={item}
            className="nav__link"
          >
            <i className="material-icons">label</i>
            <p>{item}</p>
          </Link>
        ))}
      </div>
    );
  }

  onChangeDialogue = _ => {
    this.setState({ open: _ });
  };

  addCategory = e => {
    e.preventDefault();
    this.props.addCategory(this.input.value);
    this.input.value = "";
  };
}

export default EditorDialogue;
