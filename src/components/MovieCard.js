import React, { Component } from "react";

import { Card, Container, Col, Button } from "react-bootstrap";

export default class MovieCard extends Component {
  state = {
    movie: null,
    actors: null
  };

  render() {
    return (
      <Container>
        <Card />
      </Container>
    );
  }
}
