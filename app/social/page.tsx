import React from 'react';
import Image from 'next/image';

function Social() {
  return (
    <div style={{ backgroundColor: "transparent", textAlign: "center" }}>
      <h1>Click Social Media Account Name</h1>
      <h1>Social Media Sites!</h1>
      <div
        style={{
          display: "flex",
          gap: "50px", // Adds gap of 50px between each item
          flexWrap: "wrap", // Ensures items wrap when space is tight
          justifyContent: "center", // Centers the items horizontally
          marginTop: "70px",
          backgroundColor: "transparent", // Make sure background of container is transparent
        }}
      >
        <div style={{
          textDecoration: "none",
          color: "White",
          backgroundColor: "brown",
          padding: "4%",  // Adds padding for a more consistent layout
          maxWidth: "300px",  // Keeps the size of each card consistent
          borderRadius: "8px",
        }}>
          <Image
            src="/images/gmail.png" // Ensure this image has a transparent background
            alt="Gmail"
            width={200} // Set the width of the image to match the container
            height={120} // Set the height of the image to match the container
            objectFit="cover" // Ensures the image covers the circle area
          /><br/>
            <a href="mailto:muhammadanasqadri2@gmail.com " style={{textDecoration:"none", color:"white", fontSize:"30px" }}>Gmail Account</a>
          
        </div>
        <div style={{
          textDecoration: "none",
          color: "White",
          backgroundColor: "brown",
          padding: "4%",  // Adds padding for a more consistent layout
          maxWidth: "300px",  // Keeps the size of each card consistent
          borderRadius: "8px",
        }}>
          <Image
            src="/images/github.png" // Ensure this image has a transparent background
            alt="Gmail"
            width={200} // Set the width of the image to match the container
            height={120} // Set the height of the image to match the container
            objectFit="cover" // Ensures the image covers the circle area
          /><br/>
            <a href="https://github.com/Anas-Rajput12" style={{textDecoration:"none", color:"white", fontSize:"30px" }}>Github Account</a>
          
        </div>
        <div style={{
          textDecoration: "none",
          color: "White",
          backgroundColor: "brown",
          padding: "4%",  // Adds padding for a more consistent layout
          maxWidth: "300px",  // Keeps the size of each card consistent
          borderRadius: "8px",
        }}>
          <Image
            src="/images/61109.png" // Ensure this image has a transparent background
            alt="Gmail"
            width={150} // Set the width of the image to match the container
            height={120} // Set the height of the image to match the container
            objectFit="cover" // Ensures the image covers the circle area
          /><br/>
            <a href="https://www.linkedin.com/in/muhammad-anas-qadri-a7608a2b7/" style={{textDecoration:"none", color:"white", fontSize:"30px" }}>LinkedIn Account</a>
          
        </div>
      </div>
    </div>
  );
}

export default Social;
