//@ts-check
import React from "react";
import Editor from "draft-js-plugins-editor";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import { TitleInput } from "../../../../../components/Titleinput/app";
import { MainCategory } from "../../../../../components/MainCategory/app";


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
    }




    render() {
        const props = this.props;

        return (
            <main className="o-editor-body">
                <section className="editor-section">

                    <MainCategory {...props} />

                    {/* Title Input */}
                    <TitleInput {...props} />


                    {/* Description input */}
                    <section className="note_desc_editor">
                        <Editor
                            onFocus={props.openEditor}
                            onChange={e => props.setNote(e, 'note')}
                            editorState={props.note}
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
        this.CategoryRef = document.getElementById('category_editor_ref');
        this.checkOutsideClick();
    }


    checkOutsideClick = () => {
        document.addEventListener('mousedown', e => {
            if (!this.CategoryRef.contains(e.target) && this.props.categoryEditMode) {
                this.props.changeCategoryEditMode();
            }
        });
    }
}



export default Main;
