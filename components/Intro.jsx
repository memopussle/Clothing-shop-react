import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="container">
      <div className="intro section-margin">
        <div className="flex justify-content-center">
          <Image src="/img/intro1.png" alt="intro" width={600} height={700} />
        </div>
        <div className="intro__text flex">
          <p>New</p>
          <h5 className="secondary-font font-light small-margin">
            Elegant Summer
          </h5>
          <p>
            Let yourself be inspired by our blossoming floral prints! 🌺
            Whatever your signature style, this collection blooming with
            feminine floral prints has something for every woman.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
