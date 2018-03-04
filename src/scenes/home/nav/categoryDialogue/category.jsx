import React from "react";

export default class Category extends React.Component {
    state = {
        input: this.props.input,
        editMode: true,
        editIcon: "edit"
    }

    render() {
        return (
            <div className="category_in_dialogue">

                <i onClick={this.props.delete} className="material-icons">delete</i>

                <input
                    disabled={this.state.editMode}
                    type="text"
                    value={this.state.input}
                    onChange={this.onInputChange}
                />

                <i
                    onClick={_ => this.editMode(this.state.editIcon)}
                    className="material-icons">{this.state.editIcon}</i>

            </div>
        )
    }

    editMode = (e) => {
        this.setState(prev => ({
            editMode: !prev.editMode,
            editIcon: prev.editMode ? "done" : "edit"
        }));

        if (e === "done") this.props.update(this.state.input);
    }

    onInputChange = (e) => {
        this.setState({
            input: e.currentTarget.value
        })
    }

}