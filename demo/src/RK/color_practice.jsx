import React, {Component} from "react";

class Color extends Component {
    constructor () {
        super();
        this.state = {
            isOn : true,
        };
    }
    change = () => {
        this.setState({isOn : !this.state.isOn})
    }
    render() {
        return (
            <div>
                <h2> The light is : {this.state.isOn ? "ON" : "OFF"}</h2>
                <button onClick={this.change}>{this.state.isOn ? "inactive" : "Active"}</button>
            </div>
        )
    }
}

export default Color;