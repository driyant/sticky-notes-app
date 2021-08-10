import React from "react";

const Note = (props) => {
    const updateTitle = (e) => {
        // console.log(e.target.value);
        const updatedValue = e.target.value;
        const editId = props.note.id;
        props.onType(editId, "title", updatedValue);
    }
    const updateDescription = (e) => {
        // console.log(e.target.value)
        const updatedValue = e.target.value;
        const editId = props.note.id;
        props.onType(editId,"description",updatedValue);
    }
    return (
        <li className="note">
            <input 
                type="text" 
                placeholder="Title" 
                className="note__title" 
                value={props.note.title}
                onChange={updateTitle}
            />
            <textarea
                placeholder="Description..."
                className="note__description"
                value={props.note.description}
                onChange={updateDescription}
            />
            <span className="note__delete">X</span>
        </li>
    );
}

export default Note;
