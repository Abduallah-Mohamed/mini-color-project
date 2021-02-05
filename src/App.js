import React, { Component } from "react";
import BoxsContainer from "./BoxsContainer";
import "./App.css";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Render the parent of the color Boxes */}
                <BoxsContainer />
            </div>
        );
    }
}
