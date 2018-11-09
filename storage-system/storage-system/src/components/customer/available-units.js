import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/selectUnits';
import axios from 'axios';
import { log } from 'util';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router'


class ViewUnits extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            unitTypeDetail: [],
            redirect: false,
            selectedUnitType: this.props.unitType,

        }
        this.unitsDetails = this.unitsDetails.bind(this)
    }

    componentDidMount() {
        this.unitsDetails()
    }

    async unitsDetails() {
        var business = await axios.get("http://localhost:3003/unitType")
        var unitsD = business.data.rows;
        this.setState({ unitTypeDetail: unitsD })
    }

    render() {
        console.log("what is selected", this.props.unitType)
        return (<div>
            <h1>Available unit/(s)</h1>
            <form >
                <div className="blocks">
                    <select onChange={(e) => this.props.selectedUnitType(e.target.value)}>
                        <option value="Select unit type">Select Unit type:</option>
                        {this.state.unitTypeDetail.length > 0 ? this.state.unitTypeDetail.map(item => {
                            return <option key={this.state.unitTypeDetail.indexOf(item)} value={item.business_name}> {item.name} {item.length} {item.width} {item.height} </option>
                        }) : null}
                    </select>
                    <br />
                    <button className="next" onClick={this.next}>next</button>

                </div>
            </form>

        </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        units: state.units.unitName,
        business: state.viewBusiness.selectedBusiness,
        unitType: state.selectUnitType.selectUnit,
        state: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        selectedUnitType: unit => {
            dispatch(actions.selectedUnits(unit))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewUnits)