import React, { Component } from "react";
import Header from "./components/Header.js";
import NoteList from "./components/NoteList.js";
import "./App.css";

class App extends Component {
    state = {
        notes: [
          {
            id: 0,
            title: "eat",
            description: "reese peanut butter cups",
            doesMatchSearch: false
          },
          {
            id: 1,
            title: "sleep",
            description: "eight hours",
            doesMatchSearch: true
          },
          {
            id: 2,
            title: "code",
            description: "buil an awesome ui",
            doesMatchSearch: true
          }
        ],
        searchText: "search for me"
      };
    render() {
        return (
            <div>
                <Header searchText={this.state.searchText} />
                <NoteList notes={this.state.notes} />
            </div>
        );
    }
}

export default App;
