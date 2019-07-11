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
  Icon
} from "semantic-ui-react";

export default class ModalCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Post 1</h1>
        <Card.Group>
          <Card className="post1">
            <Card.Content>
              <Icon
                name="remove circle"
                className="right floated"
                size="large"
              />
              <Image
                floated="right"
                size="mini"
                src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
              />
              <Card.Header>Name</Card.Header>
              <Card.Description>Contact</Card.Description>
              <Card.Description>Email</Card.Description>
              <Card.Description>Address</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
        <h1>Post 2</h1>
        <Card.Group className="post2">
          <Card>
            <Card.Content>
              <Icon
                name="remove circle"
                className="right floated"
                size="large"
              />
              <Image
                floated="right"
                size="mini"
                src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
              />
              <Card.Header>Name</Card.Header>
              <Card.Description>Contact</Card.Description>
              <Card.Description>Email</Card.Description>
              <Card.Description>Address</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Icon
                name="remove circle"
                className="right floated"
                size="large"
              />
              <Image
                floated="right"
                size="mini"
                src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
              />
              <Card.Header>Name</Card.Header>
              <Card.Description>Contact</Card.Description>
              <Card.Description>Email</Card.Description>
              <Card.Description>Address</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
        <h1>Post 3</h1>
        <Card.Group className="post3">
          <Card>
            <Card.Content>
              <Icon
                name="remove circle"
                className="right floated"
                size="large"
              />
              <Image
                floated="right"
                size="mini"
                src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
              />
              <Card.Header>Name</Card.Header>
              <Card.Description>Contact</Card.Description>
              <Card.Description>Email</Card.Description>
              <Card.Description>Address</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Icon
                name="remove circle"
                className="right floated"
                size="large"
              />
              <Image
                floated="right"
                size="mini"
                src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
              />
              <Card.Header>Name</Card.Header>
              <Card.Description>Contact</Card.Description>
              <Card.Description>Email</Card.Description>
              <Card.Description>Address</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Icon
                name="remove circle"
                className="right floated"
                size="large"
              />
              <Image
                floated="right"
                size="mini"
                src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
              />
              <Card.Header>Name</Card.Header>
              <Card.Description>Contact</Card.Description>
              <Card.Description>Email</Card.Description>
              <Card.Description>Address</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}
