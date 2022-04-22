import React from "react";

const About = () => {
  return (
    <div>
      <div className="container">
        <div
          style={{
            padding: "3rem 0rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "flex-start",
          }}
          className="about-content"
        >
          <h1>About of this institute</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid
            debitis nihil, distinctio optio nam impedit natus repellendus odit
            voluptas ducimus pariatur, iusto minima ipsam provident commodi
            molestiae cupiditate quibusdam!
          </p>
          <button className="btn btn-primary">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default About;
