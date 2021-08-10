import React from "react";
import Note from "./Note.js";

const NoteList = (props) => {
    const keepSearchMatches = (note) => note.doesMatchSearch;
    const searchMatches = props.notes.filter(keepSearchMatches);
    const renderNotes = (note) => (
        <Note 
            key={note.id} 
            note={note} 
            onType={props.onType} 
            remove = {props.remove}
        />
    );
    const noteElementLists = searchMatches.map(renderNotes);
    return <ul className="notes-list">
        {noteElementLists}
    </ul>;
}

export default NoteList;
