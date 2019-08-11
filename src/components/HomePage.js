import React, { Component } from "react";

import { CardGroup, Card, Container, Col, Button } from "react-bootstrap";

import SearchBar from "./SearchBar";
import {
  POPULAR_MOVIES_URL,
  SEARCH_MOVIES_URL,
  SEARCH_QUERY,
  PAGE_NUM,
  API_KEY,
  IMG_BASE_URL,
  POSTER_SIZE
} from "../API";

export default class HomePage extends Component {
  state = {
    movies: [],
    isLoading: true,
    searchQuery: "",
    pageNum: 1
  };

  componentDidMount() {
    const { movies } = this.state;

    fetch(`${POPULAR_MOVIES_URL}${API_KEY}${PAGE_NUM}${this.state.pageNum}`)
      .then(data => data.json())
      .then(jsondata => {
        this.setState({
          isLoading: false,
          movies: [...movies, ...jsondata.results]
        });
      })
      .catch(err => console.error(err));
    // this.renderMovies();
  }

  searchMovies = e => {
    // const { movies } = this.state;

    console.log(e.target.value);

    let searchVariable = e.target.value;

    if (searchVariable === "") {
      fetch(`${POPULAR_MOVIES_URL}${API_KEY}`)
        .then(data => data.json())
        .then(jsondata => {
          this.setState({
            movies: jsondata.results
          });
        })
        .catch(err => console.error(err));
    } else {
      fetch(`${SEARCH_MOVIES_URL}${API_KEY}${SEARCH_QUERY}${searchVariable}`)
        .then(data => data.json())
        .then(jsondata => {
          this.setState({
            movies: jsondata.results
          });
        })
        .catch(err => console.error(err));
    }

    // set page num to 1 in setState
  };

  fetchMoreMovies = () => {
    // fix image not found error later

    const { movies, pageNum } = this.state;

    fetch(`${POPULAR_MOVIES_URL}${API_KEY}${PAGE_NUM}${pageNum + 1}`)
      .then(data => data.json())
      .then(jsondata => {
        this.setState({
          movies: [...movies, ...jsondata.results],
          pageNum: jsondata.page
        });
      })
      .catch(err => console.error(err));
  };

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
          Search
        </h2>
        <SearchBar onChange={this.searchMovies} />
        <h2
          style={{
            margin: "1rem"
          }}
        >
          Popular Movies
        </h2>

        <CardGroup>{renderedMoviesList}</CardGroup>

        <Button
          onClick={this.fetchMoreMovies}
          variant="success"
          size="lg"
          block
        >
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
