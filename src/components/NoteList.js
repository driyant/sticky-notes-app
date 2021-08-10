import React from "react";
import Note from "./Note.js";

const NoteList = (props) => {
    const renderNotes = (note) => <Note key={note.id} note={note} />;
    const noteElementLists = props.notes.map(renderNotes);
    return <ul className="notes-list">
        {noteElementLists}
    </ul>;
}

export default NoteList;
