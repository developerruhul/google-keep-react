import { Utils } from "../../../index";


export default class Editor {
    static processNote() {
        const note = {
            category: 'uncategorized',
            id: Utils.createID(),
            data: {
                title: this.refs.title.value,
                note: this.refs.note.value,
                filter: false,
                modified: Utils.Date()
            }
        };
        this.props.dispatch({ type: "addNote", ...note });

        this.refs.title.value = "";
        this.refs.note.value = "";
    }
}