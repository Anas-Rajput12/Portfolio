import Heading from "@/component/Heading";
import React from "react";

function Projects() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Education!
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
          <h1
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "30px",
            }}
          >
            Fsc:
          </h1>
          <p style={{ marginTop: "5px", color: "Black", fontSize: "20px" }}>
          Govt. Degree College Nawabshah is a public educational institution located in Nawabshah, Sindh, Pakistan. It offers various undergraduate programs, and students from different educational streams, including Pre-Engineering, typically pursue their higher education here.
          </p>
        </div>

        {/* Project 2 */}
        <div
          style={{
            textDecoration: "none",
            color: "White",
            backgroundColor: "brown",
            padding: "4%",  // Adds padding for a more consistent layout
            maxWidth: "500px",  // Keeps the size of each card consistent
            borderRadius: "8px",  // Optional: Adds rounded corners to the card
          }}
        >
          <h1
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "30px",
            }}
          >
           Degree:
          </h1>
          <p style={{ marginTop: "5px", color: "Black", fontSize: "20px" }}>
          The Bachelor of Science in Information Technology (BSc IT) is an undergraduate degree program focused on the study of computer systems, software development, and IT infrastructure. The program covers various areas such as programming, networking, databases, cybersecurity, and web development. Students learn to design, implement, and manage technology solutions for businesses and organizations. It prepares graduates for careers in IT support, systems analysis, software development, and network administration.
          </p>
        </div>
        {/* Project 3 */}
        <div
          style={{
            textDecoration: "none",
            color: "White",
            backgroundColor: "brown",
            padding: "4%",  // Adds padding for a more consistent layout
            maxWidth: "700px",  // Keeps the size of each card consistent
            borderRadius: "8px",  // Optional: Adds rounded corners to the card
          }}
        >
          <h1
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "30px",
            }}
          >
           Currently enorlled in GIAIC
          </h1>
          <p style={{ marginTop: "5px", color: "Black", fontSize: "20px" }}>
          Currently, I am enrolled in the Generative AI and Web 3.0 course at GIAIC (Governor Sindh Initiative for Artificial Intelligence and Computing). This program focuses on emerging technologies such as AI, machine learning, blockchain, and decentralized applications. It equips students with the skills to develop innovative solutions using generative models and explore the potential of Web 3.0 technologies. My goal is to apply this knowledge to real-world projects and contribute to the rapidly evolving fields of AI and decentralized tech.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Projects;


