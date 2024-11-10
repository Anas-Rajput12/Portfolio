import Heading from "@/component/Heading";
import React from "react";

function Projects() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Click Project Name and Open Project Github Link Or Vercel Link
      </h1>

      <div style={{
        display: "flex",
        gap: "50px",  // Adds gap of 20px between each project
        flexWrap: "wrap", // Ensures that projects wrap when space is tight
        justifyContent: "center", // Centers the items horizontally
        marginTop: "20px"
      }}>
        {/* Project 1 */}
        <div
          style={{
            textDecoration: "none",
            color: "White",
            backgroundColor: "brown",
            padding: "4%",  // Adds padding for a more consistent layout
            maxWidth: "300px",  // Keeps the size of each card consistent
            borderRadius: "8px",  // Optional: Adds rounded corners to the card
          }}
        >
          <a
            href="https://github.com/Anas-Rajput12/Cli-Calculators"
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "30px",
            }}
          >
            Simple Calculator
          </a>
          <p style={{ marginTop: "5px", color: "Black", fontSize: "20px" }}>
            Using Typescript
          </p>
        </div>

        {/* Project 2 */}
        <div
          style={{
            textDecoration: "none",
            color: "White",
            backgroundColor: "brown",
            padding: "4%",  // Adds padding for a more consistent layout
            maxWidth: "300px",  // Keeps the size of each card consistent
            borderRadius: "8px",  // Optional: Adds rounded corners to the card
          }}
        >
          <a
            href="https://github.com/Anas-Rajput12/CountDown-Timer"
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "30px",
            }}
          >
           Countdown Timer
          </a>
          <p style={{ marginTop: "5px", color: "Black", fontSize: "20px" }}>
            Using Typescript
          </p>
        </div>
        {/* Project 3 */}
        <div
          style={{
            textDecoration: "none",
            color: "White",
            backgroundColor: "brown",
            padding: "4%",  // Adds padding for a more consistent layout
            maxWidth: "300px",  // Keeps the size of each card consistent
            borderRadius: "8px",  // Optional: Adds rounded corners to the card
          }}
        >
          <a
            href="https://github.com/Anas-Rajput12/numberGuessGame"
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "30px",
            }}
          >
           Number Guessing Game
          </a>
          <p style={{ marginTop: "5px", color: "Black", fontSize: "20px" }}>
            Using Typescript
          </p>
        </div>
        {/* Project 4 */}
        <div
          style={{
            textDecoration: "none",
            color: "White",
            backgroundColor: "brown",
            padding: "4%",  // Adds padding for a more consistent layout
            maxWidth: "300px",  // Keeps the size of each card consistent
            borderRadius: "8px",  // Optional: Adds rounded corners to the card
          }}
        >
          <a
            href="https://hackathon-milestone-ten.vercel.app/"
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "30px",
            }}
          >
           Resume
          </a>
          <p style={{ marginTop: "5px", color: "Black", fontSize: "20px" }}>
            Using HTML,CSS,TYPESCRIPT
          </p>
        </div>
        {/* Project 5 */}
        <div
          style={{
            textDecoration: "none",
            color: "White",
            backgroundColor: "brown",
            padding: "4%",  // Adds padding for a more consistent layout
            maxWidth: "300px",  // Keeps the size of each card consistent
            borderRadius: "8px",  // Optional: Adds rounded corners to the card
          }}
        >
          <a
            href="https://milestone5-three-chi.vercel.app/"
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "30px",
            }}
          >
           Build Your Resume
          </a>
          <p style={{ marginTop: "5px", color: "Black", fontSize: "20px" }}>
            Using HTML,CSS,TYPESCRIPT
          </p>
        </div>
        {/* Project 6 */}
        <div
          style={{
            textDecoration: "none",
            color: "White",
            backgroundColor: "brown",
            padding: "4%",  // Adds padding for a more consistent layout
            maxWidth: "300px",  // Keeps the size of each card consistent
            borderRadius: "8px",  // Optional: Adds rounded corners to the card
          }}
        >
          <a
            href="https://github.com/Anas-Rajput12/Html-Css-Assignment/tree/main/assignment%209"
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "30px",
            }}
          >
           Panacloud Website
          </a>
          <p style={{ marginTop: "5px", color: "Black", fontSize: "20px" }}>
            Using HTML,CSS
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;


