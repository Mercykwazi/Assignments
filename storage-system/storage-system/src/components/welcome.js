import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { log } from 'util';
import { Redirect } from 'react-router';

class Welcome extends React.Component {
    constructor(){
        super()
        this.state={
            redirect:false
        }
        this.getStarted=this.getStarted.bind(this)
    }

  getStarted() {
        this.setState({redirect:true})
    }


    render() {
        if(this.state.redirect){
            return <Redirect to='/business' />
        }
        return (
            <div>
                <h1 className="storage">Welcome to storage facility </h1>
                <div>  <button className="getStarted" onClick={this.getStarted}>Get Started</button></div>
            </div>
        )
    }
}
export default (Welcome)