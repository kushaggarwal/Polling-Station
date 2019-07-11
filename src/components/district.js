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
import Constituency from "./acs.js";
export default class District extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      show_acs: false
    };
  }
  showAcs() {
    this.setState({
      show_acs: !this.state.show_acs
    });
  }

  render() {
    return (
      <List.List>
        <List.Item>
          <List.Content>
            <List.Header as="a">
              <div className="list_element" onClick={() => this.showAcs()}>
                {this.props.district.district_name}

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
            {this.state.show_acs ? (
              <h1 className="underline">AC'S</h1>
            ) : (
              console.log("false")
            )}
            {this.state.show_acs
              ? this.props.district.acs.map((acs, index) => {
                  return <Constituency acsName={acs} key={index} />;
                })
              : console.log("false")}
          </List.Content>
        </List.Item>
      </List.List>
    );
  }
}
