import React, { Component } from "react";
import { getRandomIndex } from "./helpers";
import "./Box.css";

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: getRandomIndex(this.props.colors),
        };
        this.handleClick = this.handleClick.bind(this);
    }

    change() {
        let randomColor;

        // To Prevent that Box give the same color more than once
        do {
            randomColor = getRandomIndex(this.props.colors);
        } while (randomColor === this.state.color);

        this.setState({ color: randomColor });
    }

    handleClick() {
        this.change();
    }

    render() {
        return (
            <div
                className="Box"
                style={{ backgroundColor: this.state.color }}
                onClick={this.handleClick}
                name="Pick New Color"
            ></div>
        );
    }
}
