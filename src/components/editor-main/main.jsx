import React from "react";
import './style/style.css';
import 'draft-js/dist/Draft.css';
import Editor from "draft-js-plugins-editor";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import CategoryEditor from "../CategoryEditor/App";



// editor's inline styling toolbar
const inlineToolBarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolBarPlugin;




class Main extends React.Component {

    static defaultProps = {
        className: '',
        changeCategoryEditMode: (categoryEditMode) => null,
        categoryEditMode: false,
        categories: [],
        onCategoryChange: () => null,
        addCategory: () => null,
        setNote: (e, inputField) => null,
        openEditor: () => null,
        handleKeyCommand: () => null,
        state: {}
    }




    render() {
        const props = this.props;

        return (
            <main className="o-editor-body">
                <section className={`editor-section ${props.className}`}>


                    <div ref={e => this.category = e} className="editor-category">
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



                    {/* Title Input */}
                    <section className="note_title_editor">
                        <Editor
                            placeholder="Title"
                            onChange={e => props.setNote(e, 'title')}
                            editorState={props.state.title}
                        />
                    </section>




                    {/* Description input */}
                    <section className="note_desc_editor">
                        <Editor
                            onFocus={props.openEditor}
                            onChange={e => props.setNote(e, 'note')}
                            editorState={props.state.note}
                            handleKeyCommand={props.handleKeyCommand}
                            placeholder="Take a note..."
                            plugins={[inlineToolBarPlugin]}
                        />

                        {/* floating action toolbar onSelect */}
                        <InlineToolbar />
                    </section>


                </section>
            </main >
        )
    }

    componentDidMount() {
        this.checkOutsideClick();
    }


    checkOutsideClick = () => {
        document.addEventListener('click', e => {
            if (!this.category.contains(e.target) && this.props.categoryEditMode) {
                this.props.changeCategoryEditMode();
            }
        });
    }
}



export default Main;
