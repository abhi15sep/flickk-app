import React, { Component } from "react";

import {
  MOVIE_CREDITS_URL,
  IMG_BASE_URL,
  BACKDROP_SIZE,
  APPEND_CREDITS,
  API_KEY
} from "../API";

import { Card, Container, Col, Button } from "react-bootstrap";

export default class MovieCard extends Component {
  state = {
    title: "",
    actors: [],
    backdrop: "",
    budget: "",
    genres: [],
    homepage: "",
    overview: "",
    release: "",
    runtime: "",
    status: "",
    tagline: "",
    vote: ""
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    // fetch(`${MOVIE_CREDITS_URL}${movieId}${APPEND_CREDITS}${API_KEY}`)

    fetch(`${MOVIE_CREDITS_URL}${movieId}?api=${API_KEY}`)
      .then(data => data.json())
      .then(json =>
        this.setState({
          title: json.title,
          backdrop: json.backdrop_path,
          budget: json.budget,
          genres: json.genres,
          homepage: json.homepage,
          overview: json.overview,
          release: json.release_date,
          runtime: json.runtime,
          status: json.status,
          tagline: json.tagline,
          vote: json.vote_average
        })
      );
  }

  render() {
    const {
      title,
      backdrop,
      budget,
      genres,
      homepage,
      overview,
      release,
      runtime,
      status,
      tagline,
      vote
    } = this.state;

    console.log(
      title,
      backdrop,
      budget,
      genres,
      homepage,
      overview,
      release,
      runtime,
      status,
      tagline,
      vote
    );

    return (
      <Container>
        <Card className="bg-dark text-white">
          <Card.Img
            src={IMG_BASE_URL + BACKDROP_SIZE + "/" + backdrop}
            alt={title}
          />
          <Card.ImgOverlay>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{overview}</Card.Text>
            <Card.Text>
              Status: {status} | Release: {release} | Runtime: {runtime}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>
    );
  }
}
