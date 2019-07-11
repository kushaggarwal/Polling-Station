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
              />
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="Contact"
                placeholder="Contact"
              />
            </Form.Group>
            <Form.Field>
              <label>Email</label>
              <input placeholder="Email.." />
            </Form.Field>
            <Form.Field>
              <label>Address</label>
              <input placeholder="Address" />
            </Form.Field>
            <Form.Field style={{ marginTop: "5px" }}>
              <label>Post</label>
              <Dropdown
                placeholder="Choose Post"
                fluid
                selection
                options={options}
              />
            </Form.Field>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Image</label>
                <Button>Upload</Button>
              </Form.Field>
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button icon="check" content="All Done" onClick={this.close} />
        </Modal.Actions>
      </Modal>
    );
  }
}
