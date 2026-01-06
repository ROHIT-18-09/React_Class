import React,{Component } from "react";
class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            inputvalue: "",
        };
    }
    handleinput =(e) => {
        this.setState({
            inputvalue: e.target.value,
            inputvalue1: e.target.value,
            inputvalue2: e.target.value,
        });
    };
    addtodo = () => {
        if (this.state.inputvalue.trim() == "" ) return;
        const newtodo = {
            id: Date.now(),
            text: this.state.inputvalue,
            completed: false,
        };
        this.setState((prevState) => ({
            todos: [...prevState.todos, newtodo],
            inputvalue: "",
        }));
        console.log(this.state.todos);
    };

    deletetodos = (id) => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter((todo) => todo.id !== id),
        }));
    }

    render(){
        const { todos, inputvalue, } = this.state;
        return (
            <>
            <input type="text" value={inputvalue}  onChange={this.handleinput}/>
            {/* <input type="text" value={inputvalue1}  onChange={this.handleinput}/> */}
            {/* <input type="text" value={inputvalue2}  onChange={this.handleinput}/> */}
            <br />
            <button onClick={this.addtodo}> Add</button>
            <br />
                <ul>
                    {
                        todos.map((x)=> (
                            <li key={x.id}>
                                <input type="checkbox"
                                value={x.completed} />
                                {x.text}
                                <button onClick={() => this.deletetodos(x.id)}> Delete</button>
                            </li>
                        ))
                    }
                </ul>

            </>
        );
    }
}
export default TodoList;