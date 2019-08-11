import React, { Component } from "react";
import tmdblogo from "../assets/tmdb.svg";
import { Movie } from "styled-icons/boxicons-solid";

export default class Header extends Component {
  render() {
    return (
      <nav
        className=""
        style={{
          background: "rgba(0, 0, 0, 0.9)",
          color: "#eeeeee"
        }}
      >
        <header
          className="App-header"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto"
            // gridTemplateRows: "auto auto"
          }}
        >
          <h1
            style={{
              fontSize: "1.75rem",
              textAlign: "left",
              display: "inline-block",
              margin: "0.5rem 1rem",
              userSelect: "none"
            }}
            id="title"
          >
            <span>
              <Movie
                id="flickk-icon"
                style={{
                  height: "2rem",
                  verticalAlign: "bottom"
                }}
              />
            </span>
            Flickk
          </h1>
          <span
            style={{
              textAlign: "right",
              verticalAlign: "super",
              margin: "0.5rem 1rem",
              fontWeight: "bold"
            }}
            id="tmdb-logo"
          >
            <a
              style={{
                textDecoration: "none",
                color: "#eeeeee",
                userSelect: "none"
              }}
              href="http://www.themoviedb.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              <img
                src={tmdblogo}
                alt="www.themoviedb.org"
                style={{
                  height: "2.5rem",
                  verticalAlign: "middle"
                }}
              />
            </a>
          </span>
        </header>
      </nav>
    );
  }
}
