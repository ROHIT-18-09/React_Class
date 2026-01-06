import React, { Component } from "react";

class ContactBook extends Component {
    constructor(props) {
        super(props);
        this.state = { contacts: [], fname: "", lname: "", phone: "" };
    }

    handlefnamechange =(e) => {
        this.setState({fname: e.target.value,});
    };

    handlelnamechange =(e) => {
        this.setState({lname: e.target.value,});
    };

    handlephonechange =(e) => {
        this.setState({phone: e.target.value,});
    };

    addtocontact = () => {
        if(this.state.fname.trim() === "" || this.state.lname.trim() === "" || this.state.phone.trim() === "")
            return;
        const newContact = {
            id: Date.now(),
            fname: this.state.fname,
            lname: this.state.lname,
            phone: this.state.phone,
            visible: false,
        };
        this.setState((prevState) => ({
            contacts: [newContact, ...prevState.contacts],
            fname: "",
            lname: "",
            phone: "",
        }));
    }

    deletecontact = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter((c) => c.id !== id),
        }))
    };


    render() {
        const { contacts, fname, lname, phone } = this.state;
        return <>
        <input type="text" value={fname} placeholder="First Name" onChange={this.handlefnamechange}/>
        <input type="text" value={lname} placeholder="Last Name" onChange={this.handlelnamechange} />
        <input type="text" value={phone} placeholder="Phone Number" onChange={this.handlephonechange} />
        <br />
        <button onClick={this.addtocontact} >Add Contact</button>
        <br />
        <ul>
            {
                contacts.map((c) => (
                    <li key= {c.id} >
                        {c.fname} <button>View</button> <button onClick={this.deletecontact }>Delete</button>
                        <div style={{display: c.visible ? "" : "None"}}>
                            {" "}
                            {c.lname} {""} {c.phone}
                        </div>
                    </li>
                ))
            }
        </ul>
        </>;
    }
}

export default ContactBook;