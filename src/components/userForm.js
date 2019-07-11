import React from "react";
import logo from "../logo.svg";
import "../App.css";
import District from "./district.js";
import {
  List,
  ListItem,
  Statistic,
  Image,
  Label,
  Popup,
  Button,
  Header,
  Modal,
  Form,
  ModalDescription,
  ModalHeader,
  ModalContent,
  Table,
  Card,
  Icon,
  Menu,
  Dropdown
} from "semantic-ui-react";

export default class NestedModal extends React.Component {
  state = { open: false };
constructor(props){
  super(props)
  this.state={
    name:'',
    address:'',
    Image:'',
    psot:''
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}
  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });
  
  render() {
    const { open } = this.state;
    const options = [
      { key: 1, text: "Choice 1", value: 1 },
      { key: 2, text: "Choice 2", value: 2 },
      { key: 3, text: "Choice 3", value: 3 }
    ];
    return (
      <Modal
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size="small"
        trigger={
          <Button primary icon>
            Edit User Here <Icon name="right chevron" />
          </Button>
        }
      >
        <Modal.Header>Fill the Details </Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-first-name"
                label="Name"
                placeholder="Name"
                value={this.state.name} onChange={this.handleChange}
              />
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="Contact"
                placeholder="Contact"
                value={this.state.contact} onChange={this.handleChange} 
              />
            </Form.Group>
            
            <Form.Field>
              <label>Address</label>
              <input placeholder="Address" value={this.state.address} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field style={{ marginTop: "5px" }}>
              <label>Post</label>
              <Dropdown
                placeholder="Choose Post"
                fluid
                selection
                options={options}
                value={this.state.post} onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Group widths="equal">
              {/*<Form.Field>
                <label>Image</label>
                <Button>Upload</Button>
              </Form.Field>*/}
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button icon="check" type="submit" value="Submit" onClick={
            const data = {
              state_id = this.props.state_id,
              
            }
          } />
        </Modal.Actions>
      </Modal>
    );
  }
}
