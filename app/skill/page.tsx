import Heading from "@/component/Heading";
import React from "react";

function Projects() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
            Skills!
      </h1>

      <div style={{
        display: "flex",
        gap: "70px",  // Adds gap of 20px between each project
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
            borderRadius: "8px",
            textAlign:"center"  // Optional: Adds rounded corners to the card
          }}
        >
          <h1
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "30px",
            }}
          >
            HTML,CSS
          </h1>
          <p style={{ marginTop: "5px", color: "Black", fontSize: "20px" }}>
            Expert
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
            borderRadius: "8px",  
            textAlign:"center"  // Optional: Adds rounded corners to the card
            // Optional: Adds rounded corners to the card
          }}
        >
          <h1
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "30px",
            }}
          >
           JavaScript,Typescript
          </h1>
          <p style={{ marginTop: "5px", color: "Black", fontSize: "20px" }}>
            Expert
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
            borderRadius: "8px", 
            textAlign:"center"  // Optional: Adds rounded corners to the card
             // Optional: Adds rounded corners to the card
          }}
        >
          <h1
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "30px",
            }}
          >
           C, C++,c#
          </h1>
          <p style={{ marginTop: "5px", color: "Black", fontSize: "20px" }}>
            Expert
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
            borderRadius: "8px", 
            textAlign:"center"  // Optional: Adds rounded corners to the card
             // Optional: Adds rounded corners to the card
          }}

        >
          <h1
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "30px",
            }}
          >
           Python
          </h1>
          <p style={{ marginTop: "5px", color: "Black", fontSize: "20px" }}>
            Competent
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
            borderRadius: "8px", 
            textAlign:"center"  // Optional: Adds rounded corners to the card
             // Optional: Adds rounded corners to the card
          }}
        >
          <h1
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "30px",
            }}
          >
           React, Nextjs
          </h1>
          <p style={{ marginTop: "5px", color: "Black", fontSize: "20px" }}>
            Competent
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;


