import React, { Component } from "react";

import { CardGroup, Card, Container, Col, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import image404 from "../assets/404.jpg";

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

    if (sessionStorage.getItem("BaseState")) {
      let state = JSON.parse(sessionStorage.getItem("BaseState"));
      this.setState({ ...state });
      console.log("from session storage");
    } else {
      fetch(`${POPULAR_MOVIES_URL}${API_KEY}${PAGE_NUM}${this.state.pageNum}`)
        .then(data => data.json())
        .then(jsondata => {
          this.setState(
            {
              isLoading: false,
              movies: [...movies, ...jsondata.results]
            },
            () => {
              // Remember state for the next mount if we´re not in a search view
              sessionStorage.setItem("BaseState", JSON.stringify(this.state));
              console.log("saved data to session storage");
            }
          );
        })
        .catch(err => console.error(err));
    }
  }

  searchMovies = e => {
    // const { movies } = this.state;

    // console.log(e.target.value);

    let searchVariable = e.target.value.trim();

    if (searchVariable === "") {
      document.getElementById("popular-or-results").innerText =
        "Popular Movies";

      document.getElementById("load-more-btn").style.display = "block";

      if (sessionStorage.getItem("BaseState")) {
        let state = JSON.parse(sessionStorage.getItem("BaseState"));
        this.setState({ ...state });
        console.log("from session storage");
      } else {
        fetch(`${POPULAR_MOVIES_URL}${API_KEY}`)
          .then(data => data.json())
          .then(jsondata => {
            this.setState(
              {
                movies: jsondata.results
              },
              () => {
                // Remember state for the next mount if we are not in a search view
                if (searchVariable === "") {
                  sessionStorage.setItem(
                    "BaseState",
                    JSON.stringify(this.state)
                  );
                  console.log("saved data to session storage");
                }
              }
            );
          })
          .catch(err => console.error(err));
      }
    } else {
      fetch(`${SEARCH_MOVIES_URL}${API_KEY}${SEARCH_QUERY}${searchVariable}`)
        .then(data => data.json())
        .then(jsondata => {
          this.setState({
            movies: jsondata.results,
            pageNum: 1
          });
        })
        .catch(err => console.error(err));

      document.getElementById("popular-or-results").innerText = "Results";

      document.getElementById("load-more-btn").style.display = "none";
    }
  };

  fetchMoreMovies = () => {
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

    // console.log(this.state.pageNum);
  };

  addDefaultSrcToImg = e => {
    e.target.src = image404;
  };

  render() {
    const { movies } = this.state;
    const renderedMoviesList = movies.map(movie => {
      return (
        <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
          {/* <Link to={{ pathname: `/${movie.id}`, movieName: `${movie.title}` }}> */}
          <Link to={"/movie/" + movie.id}>
            <Card bg="dark" text="white" className="mb-3">
              <Card.Img
                variant="top"
                alt={movie.title}
                src={`${IMG_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
                onError={this.addDefaultSrcToImg}
              />

              <Card.Body>
                <Card.Title style={{ fontSize: "1rem" }}>
                  {movie.title}
                </Card.Title>
                {/* <Card.Text>{movie.release_date}</Card.Text> */}
                <Card.Text>Rating: {movie.vote_average}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
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
          id="popular-or-results"
          style={{
            margin: "1rem"
          }}
        >
          Popular Movies
        </h2>

        <CardGroup>{renderedMoviesList}</CardGroup>

        <Button
          id="load-more-btn"
          onClick={this.fetchMoreMovies}
          variant="success"
          size="lg"
          block
        >
          Load More Movies
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
