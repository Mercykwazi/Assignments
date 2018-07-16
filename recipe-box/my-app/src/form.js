import React from 'react';


export default class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            lastName: "",
            email: "",
            telephone: "",
        }
    }
    handleChange(item) {
        let change = this.state;
        change[item.target.name] = item.target.value;
        this.setState({ change })
    }
    render() {
        return (

            <div>
                <h2>Please enter your details below</h2>
                <div class="col-md-6">Name: </div>
                <div class="col-md-6">
                    <input type="text" onChange={this.handleChange.bind(this)} name="name" id="name" placeholder="Joe"></input>
                </div>


                <div class="col-md-6"> Last name: </div>
                <div class="col-md-6">
                    <input type="text" onChange={this.handleChange.bind(this)} name="lastname" id="lastname" placeholder="Doe"></input>
                </div>


                <div class="row">
                    <div class="col-md-6"> Cell number: </div>
                    <div class="col-md-6">
                        <input type="text" onChange={this.handleChange.bind(this)} name="cellnumber" id="cellnumber" placeholder="0784561239" /></div></div>

                <div class="row">
                    <div class="col-md-6"> Email: </div>
                    <div class="col-md-6">
                        <input type="text" onChange={this.handleChange.bind(this)} name="email" id="email" placeholder="example@gmail.com" /></div><br />
                </div>
                <button>Submit  </button>
            </div>
        )


    }

}