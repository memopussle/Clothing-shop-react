import React from "react";

const Instagram = () => {
  const images = [
    "./img/insta1.jpg",
    "./img/insta2.jpg",
    "./img/insta3.jpg",
    "./img/insta4.jpg",
    "./img/insta5.jpg",
    "./img/insta6.jpg",
  ];

  return (
    <div className="container section-margin">
      <div className="instagram__text flex">
        <p>OUR INSTAGRAM </p>

        <h5 className="secondary-font font-light"> &nbsp;@OverTheSea</h5>
      </div>
      <div className="instagram__images small-margin">
        {images.map((image, i) => (
          <a
            href="https://www.instagram.com/ "
            key={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image} className="insta__image" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Instagram;
