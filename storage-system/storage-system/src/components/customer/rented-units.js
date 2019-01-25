import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import history from "../../history"

import { Redirect } from 'react-router';

class RentedUnites extends React.Component {
    constructor() {
        super()
        this.state = {
            reservedRoomDetails: [],

        }
        this.reservedDetailsOfRoom = this.reservedDetailsOfRoom.bind(this);
        this.next=this.next.bind(this)
    }


    async reservedDetailsOfRoom() {
        var token = sessionStorage.getItem('jwtToken');
        const decodedToken = jwtDecode(token)
        var decodedEmail = decodedToken.email
        var reservedDetails = await axios.get("http://localhost:3003/reserved/" + decodedEmail)
        console.log("res", reservedDetails)
        var results = reservedDetails.data
        this.setState({ reservedRoomDetails: results })
    }
    componentDidMount() {
        this.reservedDetailsOfRoom()
    }
    next(e) {
        e.preventDefault()
        history.push('/view-location')
    }


    render() {
        return (    
            <div>
                <h1 className="storage">your ranted unites </h1>
                <table >
                    <thead>
                        <tr>
                            <th>Physical Address</th>
                            <th>Region/Province</th>
                            <th>Country</th>
                            <th>Name</th>
                            <th>Length</th>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.reservedRoomDetails.map(room => {
                            return <tr name={`row-${room.id}`} key={this.state.reservedRoomDetails.indexOf(room)}>
                                <td>{room.address1}</td>
                                <td>{room.address2}</td>
                                <td>{room.country}</td>
                                <td>{room.name}</td>
                                <td>{room.length}</td>
                                <td>{room.width}</td>
                                <td>{room.height}</td>

                            </tr>
                        })}
                    </tbody>
                </table>
                <button onClick={this.next} className="Done">Done</button>
            </div>
        )
    }
}
export default (RentedUnites)