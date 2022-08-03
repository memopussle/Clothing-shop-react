import React from "react";

const about = () => {
  return (
    <div className="container about-page">
      <div className="flex about__title standard-margin-top">
        <div className="about__wrapper">
          <p>About us</p>
          <h5 className="secondary-font font-normal standard-margin-top">
            OverTheSea adapts the styles of the moment to the eternal principles
            of feminine elegance.
          </h5>
        </div>
      </div>
      <div className="story flex standard-margin-top">
        <div className="flex story__text">
          <h5 className="secondary-font font-normal">Story</h5>
          <p className=" standard-margin-top font-normal">
            Founded in 2020, OverTheSea specialises in dress, tops and comfy
            pants. A celebration of women and the female form, its collection
            are lovingly designed to marry fasshion and grace with comfort and
            quality.
          </p>
        </div>
        <div className="flex story__wrapper standard-margin-top">
          <img src="./img/story.jpg" className="story__image" />
        </div>
      </div>
      <div className="mission standard-margin-top ">
        <div className="flex story__wrapper">
          <img src="./img/story2.jpg" className="intro__image" />
        </div>
        <div className="mission__text">
          <h5 className="secondary-font font-normal standard-margin-top ">
            Our mission
          </h5>
          <p className="secondary-font standard-margin-top font-normal">
            All OverTheSea lines are incorporating garments made with
            sustainable materials under its global action. Its goal is to reduce
            the use of natural resources, minimising the environmental impact of
            each phase of obtaining them, and also to protect biodiversity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
