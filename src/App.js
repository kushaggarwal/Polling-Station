import React from "react";
import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Card,
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
  Icon,
  Dropdown,
  Menu,
  Segment,
  Dimmer,
  Loader
} from "semantic-ui-react";
import District from "./components/district.js";
import Constituency from "./components/acs.js";
import Stations from "./components/stations.js";
import States from "./components/states.js";
import ModalCard from "./components/card.js";
import NestedModal from "./components/userForm.js";
class Structure extends React.Component {
  state = {
    user: [],
    show_districts: false
  };

  componentDidMount() {
    fetch("http://127.0.0.1:5000/api/v1/states")
      .then(response => response.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            stateData: result.result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  showDistricts() {
    console.log(this.state.show_districts);
    this.setState({
      show_districts: !this.state.show_districts
    });
  }

  render() {
    const { open } = this.state;
    const { error, isLoaded, stateData } = this.state;
    if (error) {
      return <div>Error in loading</div>;
    } else if (!isLoaded) {
      return (
        <div style={{ marginTop: "300px" }}>
          <Dimmer active inverted>
            <Loader inverted content="Loading" />
          </Dimmer>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <div className="heading">
              <h1>AAP Volunteer Web</h1>
            </div>

            <div className="Listing">
              <List>
                <List.Item>
                  <List.Content>
                    <List.List>
                      {stateData.map((state, index) => {
                        return (<States state={state} key={index} />
                      )})}
                    </List.List>
                  </List.Content>
                </List.Item>
              </List>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Structure;
