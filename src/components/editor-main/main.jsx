import React from "react";
import './style/style.css';
import 'draft-js/dist/Draft.css';
import Editor from "draft-js-plugins-editor";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import CategoryEditor from "../CategoryEditor/App";
import { connect } from "react-redux";
import { changeEditMode, categoryChange } from "../../services/editor/actions";



// editor's inline styling toolbar
const inlineToolBarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolBarPlugin;




class Main extends React.Component {
    render() {
        const props = this.props;

        return (
            <main className="o-editor-body">
                <section className={`editor-section ${props.className || ''}`}>

                    <div className="category-editor">

                        <span
                            onClick={_ => props.changeEditMode()}>
                            {props.category}
                        </span>

                        <CategoryEditor
                            editMode={props.categoryEditMode}
                            onChange={props.onCategoryChange}
                        />

                    </div>

                    <section className="note_title_editor">
                        <Editor
                            placeholder="Title"
                            onChange={e => props.setNote(e, 'title')}
                            editorState={props.state.title}
                        />
                    </section>


                    <section className="note_desc_editor">
                        <Editor
                            onFocus={props.openEditor || (e => null)}
                            onChange={e => props.setNote(e, 'note')}
                            editorState={props.state.note}
                            handleKeyCommand={props.handleKeyCommand || (e => null)}
                            placeholder="Take a note..."
                            plugins={[inlineToolBarPlugin]}
                        />
                        <InlineToolbar />
                    </section>

                </section>
            </main >
        )
    }

}



const mapStateToProps = ({
    Editor: {
        ui: {
            categoryEditMode, category
        }
    }
}) => ({ categoryEditMode, category })

const mapDispatchToProps = dispatch => ({
    onCategoryChange: category => dispatch(categoryChange(category)),
    changeEditMode: oldMode => dispatch(changeEditMode(oldMode))
})


export default connect(mapStateToProps, mapDispatchToProps)(Main);
