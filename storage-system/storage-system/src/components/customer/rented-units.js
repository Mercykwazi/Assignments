import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { Redirect } from 'react-router';

class RentedUnites extends React.Component {
    constructor() {
        super()
        this.state = {
            reservedRoomDetails: [],

        }
        this.reservedDetailsOfRoom = this.reservedDetailsOfRoom.bind(this);
    }


    async reservedDetailsOfRoom() {
        var token = sessionStorage.getItem('jwtToken');
        const decodedToken = jwtDecode(token)
        var decodedEmail = decodedToken.email
        console.log("decoded", decodedToken.email)
        var reservedDetails = await axios.get("http://localhost:3003/reserved/" + decodedEmail)
        var results = reservedDetails.data
        console.log("reserved", results)
        this.setState({ reservedRoomDetails: results })
    }
    componentDidMount() {
        this.reservedDetailsOfRoom()
    }

    render() {
        return (
            <div>
                <h1 className="storage">your ranted unites </h1>
                <table >
                    <thead>
                        <tr>
                            <th>Name</th>


                        </tr>
                    </thead>
                    <tbody>
                        {this.state.reservedRoomDetails.map(singleUser => {
                            console.log("single", singleUser)
                            return <tr name={`row-${singleUser.id}`} key={this.state.reservedRoomDetails.indexOf(singleUser)}>
                                <td>{singleUser.name === "undefined" ? "" : singleUser.name}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default (RentedUnites)