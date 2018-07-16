import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import FormGroup from "react-bootstrap/lib/FormGroup";
import Button from "react-bootstrap/lib/Button";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";

class ModalForEdits extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            toShowModal: false,
            recipeName: this.props.name,
            ingredients: this.props.ingredients,
        }
        this.editRecipe = this.editRecipe.bind(this);
    }

    edit(e) {
        var change = {}
        change[e.target.name] = e.target.value;
        this.setState(change)
    }

    editRecipe() {
        this.setState({ toShowModal: true })
    }
    render() {
        return (
            <div>
                 <button className="button2"  onClick={() => this.props.delete({ Name: this.props.name, Ingredients: this.props.ingredients })}>delete </button>  
                <Button className="button3"  onClick={e => this.editRecipe(e)}>
                    Edit
        </Button>

                <Modal
                    show={this.state.toShowModal}
                    onHide={""}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                  
                        <Modal.Title >
                            edit your recipe below
            </Modal.Title>
                   
                    <Modal.Body>
                        <input
                            name="recipeName"
                            value={this.state.recipeName}
                            onChange={this.edit.bind(this)}

                            type="text"
                        />
                        <FormGroup >
                            <ControlLabel />
                            <FormControl
                                name="ingredients"
                                onChange={this.edit.bind(this)}
                                value={this.state.ingredients}
                            />
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.props.replacer(this.props.name, this.state.recipeName, this.state.ingredients)} >Save </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ModalForEdits;