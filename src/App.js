import React, { Component } from "react";
import Header from "./components/Header.js";
import NoteList from "./components/NoteList.js";
import "./App.css";

class App extends Component {
    state = [
        {
            id: 0,
            title: "eat",
            description: "reese peanut butter cups",
            doesMatchSearch: true,
        },
        {
            id: 1,
            title: "sleep",
            description: "eight hours",
            doesMatchSearch: true,
        },
        {
            id: 2,
            title: "code",
            description: "build an awesome ui",
            doesMatchSearch: true,
        },
    ];
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
