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
            unitsDetail: [],
            units: []
        }
        this.unitsDetails = this.unitsDetails.bind(this);
        this.unitTypeDetails = this.unitTypeDetails.bind(this);
        this.next = this.next.bind(this)
    }

    componentDidMount() {
        this.unitTypeDetails()
        this.unitsDetails()
    }


    async unitTypeDetails() {
        var business = await axios.get("http://localhost:3003/unitType/")
        var unitsD = business.data.rows;
        this.setState({ unitTypeDetail: unitsD })
    }
    async unitsDetails() {
        var details = await axios.get("http://localhost:3003/units/")
        var unitDetail = details.data.rows;
        this.setState({ unitsDetail: unitDetail })
        console.log('what is details', unitDetail)
    }
    next(e) {
        e.preventDefault()
        var findTheItem = this.props.unitType.split(" ")
        console.log(findTheItem);

        var unitType = this.state.unitTypeDetail
        var results = unitType.find(item => {
            var returningObjects = item.name === findTheItem[0] && item.length === findTheItem[1] && item.width === findTheItem[2] && item.height === findTheItem[3]
            return returningObjects
        })
        var allUnitTypes = this.state.unitsDetail.map(item => {
            console.log('item',item);
            
            var foundId = item.unit_type_id
            if (foundId === results.id)
                return item.name

        })
        this.setState({ units: allUnitTypes })
        console.log('whatever', allUnitTypes);
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
                    <p>your unit is:{this.state.units}</p>
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