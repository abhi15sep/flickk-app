import React, { Component } from "react";
import { Link } from "react-router-dom";
import image404 from "../assets/404.jpg";

import {
  MOVIE_CREDITS_URL,
  IMG_BASE_URL,
  BACKDROP_SIZE,
  APPEND_CREDITS,
  API_KEY
} from "../API";

import { Card, Container } from "react-bootstrap";

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
    e.target.src = image404;
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

    const gen = genres.map(genre => genre.name);
    const genresArr = gen.join(", ");

    const castArray = cast.map(item => {
      return (
        <Link key={item.id} to={"/cast/" + item.id}>
          <span>{item.name},&nbsp;</span>
        </Link>
      );
    });

    return (
      <div
        className="container-div"
        style={{
          padding: "2rem 1rem",
          background: "#222222",
          borderRadius: 0
        }}
      >
        <Container
          style={{
            background: "#222222",
            borderRadius: 0
          }}
        >
          <Card className="bg-dark text-white">
            <Card.Title
              style={{
                fontSize: "1.5rem",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#cccccc",
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
                background: "rgba(0, 0, 0, 0.5)",
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
              <Card.Text>{overview}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text>
                Status: {status} | Release: {release} | Runtime: {runtime}
              </Card.Text>
              <Card.Text>
                Rating: {vote} | Genres: {genresArr}
              </Card.Text>
              <Card.Text>Budget: {budget}</Card.Text>
            </Card.Body>
          </Card>

          <Card.Body>Cast: {castArray}</Card.Body>
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
