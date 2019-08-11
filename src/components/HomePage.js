import React, { Component } from "react";

import { CardGroup, Card, Container, Col, Button } from "react-bootstrap";

import { POPULAR_MOVIES_URL, API_KEY, IMG_BASE_URL, POSTER_SIZE } from "../API";

export default class HomePage extends Component {
  state = {
    movies: [],
    searchQuery: ""
  };

  componentDidMount() {
    fetch(`${POPULAR_MOVIES_URL}${API_KEY}`)
      .then(data => data.json())
      .then(jsondata => {
        this.setState({
          movies: jsondata.results
        });
      })
      .catch(err => console.error(err));
    // this.renderMovies();
  }

  render() {
    const { movies } = this.state;
    const renderedMoviesList = movies.map(movie => {
      return (
        <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
          <Card bg="dark" text="white" className="mb-3">
            <Card.Img
              variant="top"
              alt={movie.title}
              src={`${IMG_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
            />

            <Card.Body>
              <Card.Title style={{ fontSize: "1rem" }}>
                {movie.title}
              </Card.Title>
              {/* <Card.Text>{movie.release_date}</Card.Text> */}
              <Card.Text>Ratings: {movie.vote_average}/10</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });

    return (
      <Container>
        <h2
          style={{
            margin: "1rem"
          }}
        >
          Popular Movies
        </h2>

        <CardGroup>{renderedMoviesList}</CardGroup>

        <Button variant="success" size="lg" block>
          Load More...
        </Button>
      </Container>
    );
  }
}

/*

<li
          key={movie.id}
          style={{
            listStyle: "none"
          }}
        >
          <img
            alt={movie.title}
            src={`${IMG_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
          />

          <div>
            <p className="movie-title">{movie.title}</p>
            <p className="overview">{movie.overview}</p>
          </div>
        </li>

*/
