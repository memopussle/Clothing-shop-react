import React from 'react';
import Link from "next/link";


const About = () => {
  return (
    <div className="container">
      <div className="about section-margin">
        <div className="about__text flex">
          <p>About</p>
          <h5 className="secondary-font font-light">Our mission</h5>
          <p>
            Ethically and sustainably crafted, every OverTheSea garment
            transforms lives through fair employment, training and empowerment
            for its maker.
          </p>
          <div className="small-margin">
            <Link href="/about">
              <button className="border-button">KNOW MORE</button>
            </Link>
          </div>
        </div>

          <img src="./img/about.jpg" alt="about" className='intro__image'/>
     
      </div>
    </div>
  );
}

export default About