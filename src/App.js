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

    render() {
        return (
            <div>
                <Header searchText={this.state.searchText} addNote={this.addNote} />
                <NoteList notes={this.state.notes} />
            </div>
        );
    }
}

export default App;
