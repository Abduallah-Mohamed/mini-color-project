import React, { Component } from "react";
import Box from "./Box";
import "./BoxsContainer.css";

export default class BoxsContainer extends Component {
    static defaultProps = {
        numOfBoxes: 18,
        colors: [
            "black",
            "PeachPuff",
            "MintCream",
            "SlateBlue",
            "Khaki",
            "OliveDrab",
            "BurlyWood",
            "LightSalmon",
            "Coral",
            "HotPink",
            "LemonChiffon",
            "AliceBlue",
            "LightGrey",
            "MediumTurquoise",
            "DarkSeaGreen",
            "Peru",
            "Tomato",
        ],
    };
    render() {
        const boxes = Array.from({ length: this.props.numOfBoxes }).map((n) => {
            return <Box colors={this.props.colors} />;
        });
        return <div className="BoxContainer">{boxes}</div>;
    }
}
