//@ts-check
import React from "react";
import CategoryEditor from "../CategoryEditor/App";


export const MainCategory = (props) => {
    return (
        <div id="category_editor_ref" className="editor-category">
            <span
                onClick={_ => props.changeCategoryEditMode(props.categoryEditMode)}>
                {props.category}
            </span>

            <CategoryEditor
                editMode={props.categoryEditMode}
                onChange={props.onCategoryChange}
                categories={props.categories}
                addCategory={props.addCategory}
            />
        </div>

    )
}
