import React, { Component } from "react";
// import { SearchAlt } from "styled-icons/boxicons-regular";

export default class SearchBar extends Component {
  state = {
    value: ""
  };

  render() {
    return (
      <div>
        <input
          style={{
            padding: "0.5rem 1rem",
            display: "block",
            width: "100%",
            background: "rgba(0, 0, 0, 0.9)",
            outline: "none",
            border: "2px solid black",
            color: "#bbbbbb"
          }}
          onChange={this.props.searchMovies}
          type="text"
          placeholder="Search..."
        />
      </div>
    );
  }
}
