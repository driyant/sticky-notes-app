import React, { Component } from "react";
import Header from "./components/Header.js";
import NoteList from "./components/NoteList.js";
import "./App.css";

class App extends Component {
    state = {
        notes: [
          {
            id: Date.now(),
            title: "",
            description: "",
            doesMatchSearch: true
          }
        ],
        searchText: ""
      };
    
    // This is for add a new note
    addNote = () => {
        // console.log("Clicked!");
        const newNote = {
            id: Date.now(),
            title: "",
            description: "",
            doesMatchSearch:true
        };
        const neweNotes = [newNote,...this.state.notes];
        this.setState({notes:neweNotes});
    }

    // This function for edit note
    onType = (editId,updatedKey,updatedValue) => {
        const updateIdMatch = (note) => {
            if(note.id !== editId) {
                return note;
            } else {
                if(updatedKey === "title") {
                    note.title = updatedValue;
                    return note;
                } else {
                    note.description = updatedValue;
                    return note;
                }
            }
        };
        const updatedNotes = this.state.notes(updateIdMatch);
        this.setState({notes:updatedNotes});
    }

    render() {
        return (
            <div>
                <Header searchText={this.state.searchText} addNote={this.addNote} />
                <NoteList notes={this.state.notes} onType={this.onType} />
            </div>
        );
    }
}

export default App;
