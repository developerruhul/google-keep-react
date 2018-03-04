import React from 'react';
import { connect } from "react-redux";
import { Checkbox } from "material-ui";






class HeaderActions extends React.Component {
    resetAndCancel = () => {
        this.props.toggleEditMode();
        this.props.resetNote();
    }

    category = () => {
        let keys = Object.keys(this.props.checkedNotesId);

        if (keys.some(item => this.props.checkedNotesId[item] === true)) {
            this.props.changeCategoryInterfaceMode()
        } else if (this.props.categoryEditMode) {
            this.props.changeCategoryInterfaceMode()
        } else {
            alert("No note is selected")
        }
    }

    deleteNoteWithNoti = () => {
        this.props.deleteNote();
        this.props.showSnack()
    }

    render() {
        const { onChange, checked } = this.props;

        return (
            <div className="js-notes-selected-actions">

                <label role="button" className="o-notes-header-btn c-notes-select-toggle">
                    <span>All</span>
                    <Checkbox
                        classes={{
                            default: "o-samsung-checkbox",
                            checked: "checked"
                        }}
                        onChange={onChange}
                        checked={checked}
                    />
                </label>

                <div onClick={this.category} role="button" className="o-notes-header-btn">MOVE</div>
                <div onClick={this.deleteNoteWithNoti} role="button" className="o-notes-header-btn">DELETE</div>
                <div onMouseDown={this.resetAndCancel} role="button" className="o-notes-header-btn">CANCEL</div>

            </div>
        )
    }

}

const mapDispatch = d => ({
    showSnack: _ => d({ type: "MODIFY_SNACK", bool: true, message: <b>DELETED SUCCESSFULLY</b> })
})

export default connect(undefined, mapDispatch)(HeaderActions);
