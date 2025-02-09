import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import SportsDetails from "./SportsDetails";
function AllEvents() {
  const [skill, setSkill] = useState("");

  const [query, setQuery] = useState("");

  const iconStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "2em", // Increase the size of the icon
  };
  const logoStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
    fontSize: "1.5em", // Increase the size of the icon
  };
  const searchBarContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "70px",
  };
  const searchBarStyle = {
    width: "800px",
    padding: "10px", // Add padding for gap between placeholder and border
    fontSize: "1em",
    boxSizing: "border-box", // Ensure padding doesn't affect the width
    backgroundColor: "white",
    color: "black",
    borderRadius: "10px",
  };

  const searchIconContainerStyle = {
    marginLeft: "10px",
    cursor: "pointer",
    backgroundColor: "lightgray",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    border: "1px solid black",
    // Adjust the margin to center the icon
  };

  const searchIconStyle = {
    fontSize: "1.5em", // Adjust the size of the icon
    paddingright: "50px",
  };

  const handleSearchClick = () => {
    const searchValue = document.querySelector(".searchbar input").value;
    console.log("Searching for:", searchValue);
    setQuery(searchValue);
  };
  const stylebutton = {
    marginTop: "20px",
    padding: "10px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    borderRadius: "30px",
  };
  const Clickchat = () => {
    window.location.href = "https://e2ee-chatapp.vercel.app/";
  };
  return (
    <>
      <FontAwesomeIcon icon={faUser} style={iconStyle} />
      <h3 style={logoStyle}>KickIt</h3>
      <div className="searchbar" style={searchBarContainerStyle}>
        <input type="text" placeholder="Search" style={searchBarStyle} />
        <div style={searchIconContainerStyle} onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={searchIconStyle} />
        </div>
        <div class="dropdown ">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Skill
          </button>
          <ul className="dropdown-menu">
            <li>
              <a class="dropdown-item" onClick={() => setSkill("beginner")}>
                Beginner
              </a>
            </li>
            <li>
              <a class="dropdown-item" onClick={() => setSkill("intermediate")}>
                Intermediate
              </a>
            </li>
            <li>
              <a class="dropdown-item" onClick={() => setSkill("advanced")}>
                Advanced
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="buttons"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      ></div>

      <SportsDetails name={query} details="/allAboutEvent" skill={skill} />
      <div className="fixed bottom-6 right-6">
        <button
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "60px",
            height: "60px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.5s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1.1)")}
          onClick={Clickchat}
        >
          💬
        </button>
      </div>
    </>
  );
}

export default AllEvents;
