import React, { Component } from "react";
import { Link } from "react-router-dom";
import image404 from "../assets/404.jpg";
import image404cast from "../assets/404cast.webp";

import {
  MOVIE_CREDITS_URL,
  IMG_BASE_URL,
  BACKDROP_SIZE,
  APPEND_CREDITS,
  API_KEY
} from "../API";

import { Card, Container, CardDeck } from "react-bootstrap";

class MovieCard extends Component {
  state = {
    title: "",
    cast: [],
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
    const { movieID } = this.props.match.params;

    fetch(`${MOVIE_CREDITS_URL}${movieID}${APPEND_CREDITS}${API_KEY}`)
      .then(data => data.json())
      .then(json =>
        this.setState({
          cast: json.cast
        })
      )
      .catch(err => console.error(err));

    fetch(`${MOVIE_CREDITS_URL}${movieID}?api_key=${API_KEY}`)
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

  addDefaultSrcToImg = e => {
    // prevent infinite callbacks when image404 fails
    e.target.onError = null;
    e.target.src = image404;
    console.log("Image not found!");
  };

  addDefaultSrcToCastImg = e => {
    // prevent infinite callbacks when image404 fails
    e.target.onError = null;
    e.target.src = image404cast;
    console.log("Cast image not found!");
  };

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
      vote,
      cast
    } = this.state;

    console.log(cast);

    const gen = genres.map(genre => genre.name);
    const genresArr = gen.join(", ");

    const castArray = cast.map(item => {
      return (
        <Link key={item.id} to={"/cast/" + item.id}>
          {/* <img
            src={`https://image.tmdb.org/t/p/w45/${item.profile_path}`}
            alt={item.name}
          />
          <p>{item.name}</p> */}
          <Card>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w154${item.profile_path}`}
              loading="lazy"
              onError={this.addDefaultSrcToCastImg}
              className="cast-images"
            />
            <Card.Body>
              <Card.Text>{item.name}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      );
    });

    return (
      <div
        className="container-div"
        id="movie-card-div"
        style={{
          padding: "2rem 1rem",
          background: "#222222",
          borderRadius: 0
        }}
      >
        <Container
          id="movie-card-container"
          style={{
            background: "#222222",
            borderRadius: 0
          }}
        >
          <Card className="bg-dark text-white make-text-selectable">
            <Card.Title
              style={{
                fontSize: "1.5rem",
                background: "rgba(0, 0, 0, 0.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // color: "#cccccc",
                color: "#01D277",
                margin: 0,
                paddingTop: "0.5rem"
              }}
              className="align-middle text-center pb-2 m-0"
            >
              {title}
            </Card.Title>
            <Card.Text
              style={{
                color: "#cccccc",
                background: "rgba(0, 0, 0, 0.8)",
                fontSize: "1rem"
              }}
              className="m-0 pb-2"
            >
              {tagline}
            </Card.Text>

            <Card.Img
              src={IMG_BASE_URL + BACKDROP_SIZE + "/" + backdrop}
              alt={title}
              onError={this.addDefaultSrcToImg}
            />

            <Card.ImgOverlay />
            <Card.Body>
              <Card.Text className="overview-text">{overview}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text className="green-text">
                Status: {status} | Release: {release} | Runtime: {runtime} mins
              </Card.Text>
              <Card.Text className="green-text">
                Rating: {vote} | Genres: {genresArr}
              </Card.Text>
              <Card.Text className="green-text">Budget: ${budget}</Card.Text>
            </Card.Body>
          </Card>

          <Card.Body>
            <p id="cast-heading">Cast</p>
            {/* <ul id="cast-list">{castArray}</ul> */}
            <CardDeck id="cast-list">{castArray}</CardDeck>
          </Card.Body>
          <a target="_blank" rel="noopener noreferrer" href={homepage}>
            Visit Movie Website
          </a>
        </Container>
      </div>
    );
  }
}

// export default withRouter(MovieCard);
export default MovieCard;
