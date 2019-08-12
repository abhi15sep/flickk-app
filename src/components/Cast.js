import React, { Component, Fragment } from "react";
import { CardGroup, Card, Container } from "react-bootstrap";

import { PERSON_URL, API_KEY } from "../API";
export default class App extends Component {
  state = {
    name: "",
    birth: "",
    dept: "",
    img: ""
  };

  componentDidMount() {
    // fetch actors
    const { personID } = this.props.match.params;

    fetch(`${PERSON_URL}${personID}?api_key=${API_KEY}`)
      .then(data => data.json())
      .then(json =>
        this.setState({
          name: json.name,
          birth: json.birthday || "Unknown",
          dept: json.known_for_department || "Unknown",
          img: json.profile_path
        })
      )
      .catch(err => console.error(err));
  }

  render() {
    const { personID } = this.props.match.params;
    const { name, birth, dept, img } = this.state;
    return (
      <Fragment>
        <Container>
          <Card>
            <Card.Img
              src={`${PERSON_URL}${personID}/images?api_key=${API_KEY}`}
            />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>Birthday: {birth}</Card.Text>
              <Card.Text>Works In: {dept}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Fragment>
    );
  }
}
