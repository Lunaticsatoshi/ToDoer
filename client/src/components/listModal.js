import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

//reactstrap
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

class ListModal extends Component {
    state = {
        modal: false,
        name: '',
        description: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            name: this.state.name,
            description: this.state.description
        }
        //Add Item via add Item Action
        this.props.addItem(newItem);
        this.toggle();
    }
    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >Add Item
            </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add Item To The List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input 
                                type="text" 
                                name="name" 
                                id="item" 
                                placeholder="Add an Item To List"
                                onChange={this.onChange}
                                ></Input>
                                <Label for="item">Description</Label>
                                <Input 
                                type="text" 
                                name="description" 
                                id="item" 
                                placeholder="Add a Description"
                                onChange={this.onChange}
                                ></Input>
                                <Button
                                    color="warning"
                                    style={{marginTop: '3rem'}}
                                    block
                                >Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, {addItem})(ListModal);
