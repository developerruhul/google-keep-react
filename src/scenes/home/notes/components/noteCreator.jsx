import React from 'react';
import Note from '../note/note';
import { Utils } from "../../../index";
import Macy from "macy";


class NoteCreator extends React.Component {
    render() {
        const items = Utils.objToArray(this.props.notes).map(item => (
            <Note
                key={item.id}
                {...item}
                {...this.props}
            />
        ));


        return (
            <div id="macy-container" className="o-notes-wrapper">
                {items}
            </div>
        )
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
            container: '#macy-container',
            trueOrder: false,
            waitForImages: false,
            margin: 24,
            columns: 3,
            breakAt: {
                940: 3,
                520: 2,
                400: 1
            }
        });
    }
}

export default NoteCreator;
