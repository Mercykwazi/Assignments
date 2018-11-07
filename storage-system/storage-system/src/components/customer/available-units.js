import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import axios from 'axios';
import { log } from 'util';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router'


class ViewUnits extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            unitsDetail: [],
            redirect: false,
        }
        this.unitsDetails = this.unitsDetails.bind(this)
    }


    componentDidMount() {
        this.unitsDetails()
    }

    async unitsDetails() {
        var business = await axios.get("http://localhost:3003/units").then(results => {
            console.log('what', results);
            var businessD = results.data.rows;
            this.setState({ unitsDetail: businessD })
        })
    }

    render() {
        return (<div>
            <h1>Available unit/(s)</h1>
            <form >
                <div className="blocks">
                    <div >
                    </div>
                    <br />
                    <div> </div><br />
                    <button className="next" onClick={this.next}>next</button>

                </div>
            </form>

        </div>
        )
    }

}

export default (ViewUnits)