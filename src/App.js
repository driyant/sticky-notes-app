import React, { Component } from "react";
import Header from "./components/Header.js";
import NoteList from "./components/NoteList.js";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <NoteList /> 
            </div>
        );
    }
}

export default App;
