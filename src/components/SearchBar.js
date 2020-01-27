import React, { Component } from "react";
// import { SearchAlt } from "styled-icons/boxicons-regular";

export default class SearchBar extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <input
          aria-label="Search Movies"
          style={{
            padding: "0.5rem 1rem",
            display: "block",
            width: "100%",
            background: "rgba(0, 0, 0, 0.9)",
            outline: "none",
            border: "2px solid #339933",
            color: "#bbbbbb"
          }}
          onChange={onChange}
          type="text"
          placeholder="Search..."
        />
      </div>
    );
  }
}
