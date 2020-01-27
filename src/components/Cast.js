import React, { Component, Fragment } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import image404 from "../assets/404.jpg";

import { PERSON_URL, ORIGINAL_IMG_URL, API_KEY } from "../API";
export default class App extends Component {
  state = {
    name: "",
    birth: "",
    dept: "",
    img: "",
    bio: "",
    movies: []
  };

  addDefaultSrcToImg = e => {
    // prevent infinite callbacks when image404 fails
    e.target.onError = null;
    e.target.src = image404;
    console.log("Image not found!");
  };

  componentDidMount() {
    // fetch actors
    const { personID } = this.props.match.params;

    // fetch personal details
    fetch(`${PERSON_URL}${personID}?api_key=${API_KEY}`)
      .then(data => data.json())
      .then(json =>
        // console.log(json)
        this.setState({
          name: json.name,
          birth: json.birthday || "Unknown",
          dept: json.known_for_department || "Unknown",
          bio: json.biography || "Information unavailable.",
          img: json.profile_path
        })
      )
      .catch(err => console.error(err));

    // fetch movies they have worked in

    fetch(`${PERSON_URL}${personID}/movie_credits?api_key=${API_KEY}`)
      .then(data => data.json())
      .then(json =>
        this.setState({
          // get only title and id fields from cast array
          movies: json.cast.map(({ title, id }) => ({ title, id }))
        })
      )
      .catch(err => console.error(err));
  }

  render() {
    // const { personID } = this.props.match.params;
    const { name, birth, dept, img, bio, movies } = this.state;

    const moviesLen = movies.length;

    const moviesArr = movies.map((movie, index) => {
      // add a period after last movie
      if (index === moviesLen - 1) {
        return (
          <Link className="mmm" key={movie.id} to={"/movie/" + movie.id}>
            <span>{movie.title}.</span>
          </Link>
        );
      }
      return (
        <Link className="mmm" key={movie.id} to={"/movie/" + movie.id}>
          <span>{movie.title},&nbsp;</span>
        </Link>
      );
    });

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
                maxWidth: "500px",
                background: "#000000",
                display: "block",
                margin: "auto",
                border: "2px solid black"
              }}
            >
              <Card.Img
                style={{
                  borderRadius: 0,
                  height: "auto",
                  width: "100%",
                  maxWidth: "300px"
                }}
                src={`${ORIGINAL_IMG_URL}${img}`}
                alt={name}
                onError={this.addDefaultSrcToImg}
              />
              <Card.Body style={{ border: "2px solid #cccccc" }}>
                <Card.Title>
                  <span className="green-text">{name}</span>
                </Card.Title>

                <Card.Text>
                  <span className="green-text">Birthday:</span> {birth}
                </Card.Text>
                <Card.Text>
                  <span className="green-text">Work:</span> {dept}
                </Card.Text>
                <Card.Text>
                  <span className="green-text">Biography:</span> {bio}
                </Card.Text>
              </Card.Body>
              <Card.Body
                style={{ border: "2px solid #cccccc", borderTop: "none" }}
              >
                <span className="green-text">Movies:</span> {moviesArr}
              </Card.Body>
            </Card>
          </Container>
        </div>
      </Fragment>
    );
  }
}
