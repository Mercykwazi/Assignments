import React from 'react';
import { Provider } from 'react-redux';
import * as actions from '../../actions/unit-type';
import { connect } from 'react-redux';
import axios from 'axios';

class UnitType extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            length: this.props.length,
            width: this.props.width,
            height: this.props.height,
            storageName: this.props.storageName
        }
        this.locationName = this.locationName.bind(this)
        this.length = this.length.bind(this)
        this.width = this.width.bind(this)
        this.height = this.height.bind(this)
        this.submit = this.submit.bind(this)
        this.storageName = this.storageName.bind(this)
    }

    length(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.updateLength(e.target.value)
        this.setState(change);
    }
    storageName(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.updateStorageName(e.target.value);
        this.setState(change);
    }
    locationName(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.updateName(e.target.value)
        this.setState(change);
    }
    width(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.updateWidth(e.target.value)
        this.setState(change);
    }
    height(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.updateHeight(e.target.value)
        this.setState(change);
    }


    async submit(e) {
        e.preventDefault()
        await axios.post("http://localhost:3003/unitType", { storageType: this.props.name, length: this.props.length, width: this.props.width, height: this.props.height, storageName: this.props.storageName })

    }

    render() {


        return (<div>
            <h1>Specify your unit type</h1>
            <form>
                <div className="unit-type">
                    <div >
                        <label htmlFor="name">Storage type:</label><br />
                        <input name="name" placeholder="garage/warehouse" type="text" onChange={this.locationName} value={this.state.name} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="lenght">Length:</label><br />
                        <input name="length" placeholder="1400m" type="number" onChange={this.length} value={this.state.length} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="width">Width:</label><br />
                        <input name="width" placeholder="1400m" type="number" onChange={this.width} value={this.state.width} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="height">height:</label><br />
                        <input name="height" placeholder="1400m" type="number" onChange={this.height} value={this.state.height} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="height">Storage name:</label><br />
                        <input name="storageName" placeholder="Room2" type="text" onChange={this.storageName} value={this.state.storageName} />
                    </div>
                    <br />
                    <button onClick={this.submit}>submit</button>
                </div>
            </form>

        </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        name: state.unitType.name,
        length: state.unitType.length,
        width: state.unitType.width,
        height: state.unitType.height,
        storageName: state.unitType.storageName,
        state: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateName: name => {
            dispatch(actions.name(name))
        },
        updateLength: length => {
            dispatch(actions.length(length))
        },
        updateWidth: width => {
            dispatch(actions.width(width))
        }, updateHeight: height => {
            dispatch(actions.height(height))
        }, updateStorageName: type => {
            dispatch(actions.storageType(type))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitType)

