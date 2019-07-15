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
        <h1>{this.props.volunteer.Post.title}</h1>
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
              <Card.Header>{this.props.volunteer.name}</Card.Header>
              <Card.Description>
                {this.props.volunteer.contact}
              </Card.Description>

              <Card.Description>
                {this.props.volunteer.address}
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}
