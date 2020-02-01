import React, { Component } from "react";
import { Link } from "react-router-dom";
import movie404img from "../assets/movie404.jpg";
import cast404img from "../assets/404cast.webp";

import {
  MOVIE_CREDITS_URL,
  IMG_BASE_URL,
  BACKDROP_SIZE,
  APPEND_CREDITS,
  API_KEY
} from "../API";

import { Card, Container, CardDeck } from "react-bootstrap";
// import CastList from "./CastList";

// let castsArray = [];
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
    vote: "",
    numOfCastItemsToShow: 10
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);

    const { movieID } = this.props.match.params;

    fetch(`${MOVIE_CREDITS_URL}${movieID}${APPEND_CREDITS}${API_KEY}`)
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw Error(response.statusText, "failed to fetch cast");
        }
      })
      .then(json =>
        this.setState({
          // destructured to store only required info
          cast: json.cast.map(({ id, name, profile_path }) => ({
            id,
            name,
            profile_path
          }))
        })
      )
      .catch(err => console.log(err));
    // changed to console.log from error to fix audit scores
    // besides, its just to log that image wasn't available in tmdb anyway

    fetch(`${MOVIE_CREDITS_URL}${movieID}?api_key=${API_KEY}`)
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw Error(response.statusText, "failed to fetch movie details");
        }
      })
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

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  onScroll = () => {
    // console.log("window.innerHeight", window.innerHeight);
    // console.log("window.scrollY", window.scrollY);
    // console.log("document.body.offsetHeight", document.body.offsetHeight);

    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      this.state.cast.length
    ) {
      this.loadCastOnScroll();
    }
  };

  addDefaultSrcToImg = e => {
    // prevent infinite callbacks when image404 fails
    e.target.onError = null;
    e.target.src = movie404img;
    console.log("Movie poster image not found!");
  };

  addDefaultSrcToCastImg = e => {
    // prevent infinite callbacks when image404 fails
    for (let i = 0; i < 2; i++) {}
    // e.preventDefault();
    e.target.onError = null;
    e.target.src = cast404img;
    console.log("Cast image not found!");
  };

  loadCastOnScroll = () => {
    this.setState(prevState => ({
      numOfCastItemsToShow: prevState.numOfCastItemsToShow + 10
    }));
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
      cast,
      numOfCastItemsToShow
    } = this.state;

    // console.log(cast);

    const gen = genres.map(genre => genre.name);
    const genresArr = gen.join(", ");

    const newCastArray = cast
      .slice(0, numOfCastItemsToShow)
      .map(({ id, name, profile_path }) => {
        return (
          <Link key={id} to={"/cast/" + id}>
            <Card>
              <Card.Img
                variant="top"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w154${profile_path}`
                    : cast404img
                }
                width="154px"
                height="auto"
                style={{
                  width: "154px",
                  height: "auto"
                }}
                alt={name}
                loading="lazy"
                onError={this.addDefaultSrcToCastImg}
                className="cast-images"
              />
              <Card.Body>
                <Card.Text>{name}</Card.Text>
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
          <Card
            className="bg-dark text-white make-text-selectable"
            style={{
              border: "none"
            }}
          >
            <Card.Title
              style={{
                fontSize: "1.5rem",
                background: "rgba(0, 0, 0, 0.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#01D277"
              }}
              className="align-middle text-center p-3 m-0"
            >
              {title}
            </Card.Title>
            {tagline && (
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
            )}

            <Card.Img
              src={
                BACKDROP_SIZE
                  ? `${IMG_BASE_URL + BACKDROP_SIZE}/${backdrop}`
                  : movie404img
              }
              alt={title}
              onError={this.addDefaultSrcToImg}
            />

            <Card.ImgOverlay />
            <Card.Body style={{ backgroundColor: "#121212" }}>
              <Card.Text className="overview-text">{overview}</Card.Text>
            </Card.Body>
            <Card.Body>
              {
                (status,
                release,
                runtime ? (
                  <Card.Text className="green-text">
                    {/* Status: {status} | Release: {release} | Runtime: {runtime}{" "} */}
                    Status: {status}
                    <span aria-hidden="true" className="circle">
                      &#9900;
                    </span>
                    Release Date: {release}
                    <span aria-hidden="true" className="circle">
                      &#9900;
                    </span>
                    Runtime: {runtime} mins
                  </Card.Text>
                ) : (
                  <Card.Text className="green-text">
                    Status: Unkown
                    <span aria-hidden="true" className="circle">
                      &#9900;
                    </span>
                    Release Date: Unknown
                    <span aria-hidden="true" className="circle">
                      &#9900;
                    </span>
                    Runtime: Unknown
                  </Card.Text>
                ))
              }
              {genresArr ? (
                <Card.Text className="green-text">
                  Genres: {genresArr}
                </Card.Text>
              ) : (
                <Card.Text className="green-text">Genres: Unknown</Card.Text>
              )}
              {budget ? (
                <Card.Text className="green-text">Budget: ${budget}</Card.Text>
              ) : (
                <Card.Text className="green-text">Budget: Unknown</Card.Text>
              )}
              {vote ? (
                <Card.Text className="green-text">Rating: {vote}</Card.Text>
              ) : (
                <Card.Text className="green-text">Rating: Unknown</Card.Text>
              )}
            </Card.Body>
          </Card>

          <Card.Body>
            <p id="cast-heading">Cast</p>
            <CardDeck id="cast-list">{newCastArray}</CardDeck>
          </Card.Body>

          {homepage && (
            <a
              className="visit-movie-website"
              target="_blank"
              rel="noopener noreferrer"
              href={homepage}
            >
              Visit Movie Website
            </a>
          )}
        </Container>
      </div>
    );
  }
}

// export default withRouter(MovieCard);
export default MovieCard;
