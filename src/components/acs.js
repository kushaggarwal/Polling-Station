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
import Stations from "./stations.js";

export default class Constituency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      show_stations: false
    };
  }
  showStations() {
    this.setState({
      show_stations: !this.state.show_stations
    });
  }

  render() {
    return (
      <div className="stations_list">
        <List.List>
          <List.Item>
            <List.Content>
              <List.Header>
                <div
                  className="list_item cursor"
                  onClick={() => this.showStations()}
                >
                  {this.props.acsName.ac_name}
                  <div className="right floated">
                    <Modal
                      trigger={<Button color="green">View</Button>}
                      size="fullscreen"
                    >
                      <Modal.Header>Users</Modal.Header>
                      <Modal.Content>
                        {this.props.acsName.volunteers.map((person, index) => {
                          return <ModalCard volunteer={person} />;
                        })}
                      </Modal.Content>
                      <Modal.Actions>
                        <NestedModal Id={this.props.acsName.id} />
                      </Modal.Actions>
                    </Modal>
                  </div>
                </div>
              </List.Header>
              <List.Description />
              {this.state.show_stations ? (
                <h1 className="underline">STATIONS</h1>
              ) : (
                console.log("false")
              )}
              {this.state.show_stations
                ? this.props.acsName.stations.map((stations, index) => {
                    return <Stations stations={stations} key={index} />;
                  })
                : console.log("false")}
            </List.Content>
          </List.Item>
        </List.List>
      </div>
    );
  }
}
