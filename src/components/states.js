import React from "react";
import logo from "../logo.svg";
import "../App.css";
import District from "./district.js";
import ModalCard from "./card.js";
import NestedModal from "./userForm.js";
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
  Table
} from "semantic-ui-react";
import Constituency from "./acs.js";

export default class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_districts: false
    };
  }

  showDistricts() {
    console.log(this.state.show_districts);
    this.setState({
      show_districts: !this.state.show_districts
    });
  }

  render() {
    return (
      <List.Item>
        <List.Icon />
        <List.Content>
          <List.Header>
            <div style={{ margin: "0 auto" }}>
              <Label as="a" className="list_header">
                <div className="state" onClick={() => this.showDistricts()}>
                  {this.props.state.state_name}
                </div>
              </Label>
              <Modal
                trigger={
                  <Button color="green" style={{ marginTop: "20px" }}>
                    View
                  </Button>
                }
                size="fullscreen"
              >
                <Modal.Header>Users</Modal.Header>
                <Modal.Content>
                  {this.props.state.volunteers.map((person, index) => {
                    return <ModalCard volunteer={person} />;
                  })}
                </Modal.Content>
                <Modal.Actions>
                  <NestedModal Id={this.props.state.id} />
                </Modal.Actions>
              </Modal>
            </div>
          </List.Header>
          <List.Description />

          {this.state.show_districts ? (
            <h1 className="underline">DISTRICTS</h1>
          ) : (
            console.log("false")
          )}
          {this.state.show_districts
            ? this.props.state.districts.map((el, index) => {
                return <District district={el} key={index} />;
              })
            : console.log("false")}
        </List.Content>
      </List.Item>
    );
  }
}
