import React ,{Component}from "react";  

class StateCounter extends Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            counter: 10
        };
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }
    clear = () => {
        this.setState({ count: 0 });
    }
    render() {
        return (
            <div>
                <h2>Counter: {this.state.count}</h2>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.clear}>Clear</button>
            </div>
        );
    }
}

/* class StateCounter extends Component{

    constructor(props){
        super(props);
        this.state = {
            count : 0,
            counter : 10
        };
    }
    increment = () => {
        this.state({count: this.state.count + 1});
    }
    decrement = () => {
        this.state ({count: this.state.count - 1});
    }
    clear = () => {
        this.state ({count : 0});
    }
    render(){
        return(
            <div>
                <h2>counter : {this.state.count}</h2>
                <Button onClick={this.increment} >Increment</Button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.clear}>Clear</button>
            </div>
        );
    }
} */


export default StateCounter;