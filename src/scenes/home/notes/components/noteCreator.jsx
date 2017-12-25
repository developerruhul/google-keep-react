import React from 'react';
import Note from '../note/note';
import { Utils } from "../../../index";
import Masonry from "react-masonry-component";


class NoteCreator extends React.Component {
    render() {
        const { data, ...other } = this.props;

        const items = Utils.objToArray(data).map(item => (
            <Note
                key={item.id}
                title={item.title}
                note={item.note}
                modified={item.modified}
                filter={item.filter}
                id={item.id}
                {...other}
            />
        ));


        return (
            <Masonry
                className={"o-notes-wrapper"}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
            >
                {items}
            </Masonry>
        )
    }

}

export default NoteCreator;
