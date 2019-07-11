import React from "react";
import logo from "../logo.svg";
import "../App.css";
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

export default class Stations extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      user: []
    };
  }

  render() {
    return (
      <div className="stations_list">
        <List.List>
          <List.Item>
            <List.Content>
              <List.Header>
                <div className="list_item2">
                  {this.props.stations.station_name}
                  <div className="right floated">
                    <Modal
                      trigger={<Button color="green">View</Button>}
                      size="fullscreen"
                    >
                      <Modal.Header>Users</Modal.Header>
                      <Modal.Content>
                        <ModalCard />
                      </Modal.Content>
                      <Modal.Actions>
                        <NestedModal />
                      </Modal.Actions>
                    </Modal>
                  </div>
                </div>
              </List.Header>
              <List.Description />
            </List.Content>
          </List.Item>
        </List.List>
      </div>
    );
  }
}
