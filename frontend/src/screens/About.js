import React from "react";
import MainScreen from "../components/MainScreen";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainScreen title="About the developer">
        <p style={{ marginTop: "20%" }}>
          Hi, I'm Akhil Pundir.
          <br /> <br />
          I code and create things for the people.
          <br /> <br />
          As a student, I've been working on several web projects, of both
          personal and community scope.
          <br /> <br />
          
        </p>
        <br />
        <h6>
          Checkout more about me{" "}
          <a
            href="https://akhilpundir.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </h6>
      </MainScreen>
      <a
        style={{ textDecoration: "none", color: "green" }}
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          <strong>Privacy policy</strong>
        </p>
      </a>
    </div>
  );
};

export default About;
