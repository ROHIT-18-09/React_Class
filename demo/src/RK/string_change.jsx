import React, {Component} from "react";

class StringChange extends Component {

    constructor (){
        super();
        this.state = {
            name : "",
            email : "",
            age : ""
        };
    }

    changename = (e) => {
        this.setState({name: e.target.value})
    }
    changeemail = (e) => {
        this.setState({email: e.target.value})
    }
    changeage = (e) => {
        this.setState({age: e.target.value})
    }
    render() {
        return (
            <div>
                <h2> Name : {this.state.name} </h2>
                <h2> Email : {this.state.email} </h2>
                <h2> Age : {this.state.age} </h2>

                <input type="text" placeholder="Enter your name" onChange={this.changename} /> <br /><br />
                <input type="text" placeholder="Enter your email" onChange={this.changeemail} /> <br /><br />
                <input type="number" placeholder="Enter your age" onChange={this.changeage} /> <br /><br />
            </div>
        );
    }
}

export default StringChange;