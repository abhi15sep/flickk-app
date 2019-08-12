import React, { Component, Fragment } from "react";
import { CardGroup, Card, Container } from "react-bootstrap";

import { PERSON_URL, ORIGINAL_IMG_URL, API_KEY } from "../API";
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
    // const { personID } = this.props.match.params;
    const { name, birth, dept, img } = this.state;
    return (
      <Fragment>
        <div
          className="container-div"
          style={{
            padding: "1rem 0",
            background: "#222222",
            borderRadius: 0
          }}
        >
          <Container>
            <Card
              style={{
                maxWidth: "300px",
                display: "block",
                margin: "auto",
                border: "2px solid black"
              }}
            >
              <Card.Img
                style={{
                  borderRadius: 0,
                  height: "auto",
                  width: "100%"
                }}
                src={`${ORIGINAL_IMG_URL}${img}`}
              />
              <Card.Body style={{ border: "2px solid #cccccc" }}>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Birthday: {birth}</Card.Text>
                <Card.Text>Work: {dept}</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </Fragment>
    );
  }
}
