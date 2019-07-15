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
  Dropdown,
  Input
} from "semantic-ui-react";

export default class NestedModal extends React.Component {
  state = { open: false };
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contact: "",
      post: "",
      add: "",
      image: "",
      Id: "",
      url: ""
    };
  }
  sendData = data => {
    fetch(this.state.url, {
      method: "POST",
      body: JSON.stringify(data)
    }).then(
      function(response) {
        console.log(response);
      },
      function(error) {}
    );
  };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { Name } = this.state;
    const { open } = this.state;
    const options = [
      { key: 1, text: "Mentor", value: 1 },
      { key: 2, text: "Intern", value: 2 },
      { key: 3, text: "Admin", value: 3 }
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
                onChange={e => {
                  this.setState({ name: e.target.value });
                }}
              />
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="Contact"
                placeholder="Contact"
                onChange={e => {
                  this.setState({ contact: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Field>
              <label>Address</label>
              <input
                placeholder="Address"
                onChange={e => {
                  this.setState({ add: e.target.value });
                }}
              />
            </Form.Field>

            <Form.Field style={{ marginTop: "5px" }}>
              <label>Post</label>
              <select
                className="ui dropdown"
                id="inputDept"
                onChange={e => {
                  this.setState({ post: e.target.value });
                }}
              >
                <option value="">Select Post</option>
                <option value="1">Mentor</option>
                <option value="2">Intern</option>
                <option value="3">Admin</option>
              </select>
            </Form.Field>
            {/*<Form.Group widths="equal">
              <Form.Field>
                <label>Image</label>
                <Button>Upload</Button>
              </Form.Field>
              </Form.Group>*/}
            <Button
              icon="check"
              className="right floated"
              content="All Done"
              style={{ marginBottom: "15px" }}
              onClick={() => {
                this.close();

                var data = {
                  name: this.state.name,
                  contact: this.state.contact,
                  address: this.state.add,
                  post: this.state.post,
                  Id: this.props.Id
                };
                console.log(data);
                //this.sendData(data);
              }}
            />
          </Form>
        </Modal.Content>
        <Modal.Actions />
      </Modal>
    );
  }
}
