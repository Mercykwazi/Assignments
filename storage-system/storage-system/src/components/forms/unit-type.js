import React from 'react';
import { Provider } from 'react-redux';
import * as actions from '../../actions/unit-type';
import { connect } from 'react-redux';


class UnitType extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            length: this.props.length,
            width: this.props.width,
            height: this.props.height
        }
        this.locationName = this.locationName.bind(this)
        this.length = this.length.bind(this)
        this.width = this.width.bind(this)
        this.height = this.height.bind(this)
        this.submit = this.submit.bind(this)
    }

    length(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.updateLength(e.target.value)
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


    submit() {
        this.setState({ input: this.state.value })
    }

    render() {
        console.log("dd", this.props);
        console.log("s", this.state);

        return (<div>
            <h1>Specify your unit type</h1>
            <form>
                <div className="business">
                    <div >
                        <label htmlFor="name">Unit type:</label>
                        <input name="name" type="text" onChange={this.locationName} value={this.state.name} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="lenght">Length:</label>
                        <input name="length" type="text" onChange={this.length} value={this.state.length} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="width">Width:</label>
                        <input name="width" type="tel" onChange={this.width} value={this.state.width} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="height">height:</label>
                        <input name="height" type="email" onChange={this.height} value={this.state.height} />
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
        width: state.business.width,
        height: state.business.height,
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitType)

