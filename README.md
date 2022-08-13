

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#challenges">Challenges</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

https://user-images.githubusercontent.com/91854884/182618457-93692f9f-eeed-4316-a265-fb627c285d84.mp4


[View Live Website Here ](https://overthesea-shop-qgqll239p-memopussle.vercel.app/)

OverTheSea is an E-commerce clothing store specialising in selling sustainable women's clothes. It is a fully functioning application that displays products and allows users to purchase online.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

Technogies that I used to build this application: Nextjs, Sanity, Reactjs, JavaScript, Stripe, Context API and Framer Motion. Context API simplifies the props by storing them globally. I chose Nextjs because this framework can handle both front-end and back-end configurations, which are needed for React. Also, I used the Sanity.io platform for data storage and content management. Nextjs and Sanity work perfectly together without needing nodejs, express and MongoDB.


[![Technologies used](https://skills.thijs.gg/icons?i=react,nextjs,js&theme=light)](https://skills.thijs.gg)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Features
  <ol>
        <li><p>User-Friendly Navigation</p></li>
        <li><p>Buy Now and Add To Cart Function</p></li>
        <li><p>Online purchase with Stripe</p></li>
  </ol>


### Challenges

There were a few challenges that I faced while working on this project. Mainly they were communications between Nextjs and Sanity and how to query my products list and integrate it with my website. I hope to implement a few features in the future: A search engine for products, filter and sort features (initially this only works on Firefox but not yet across all internet browsers), and push Stripe purchase payment live.



<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

This is an instructions of how you may set up this roject locally.

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/memopussle/Clothing-shop-react.git
   ```
2. Install npm packages
   ```sh
   npm install
   ```
   
3. Create an .env file in root directory. Insert your sanity API key, Stripe Public and Secret API keys like below:
   ```sh
   NEXT_PUBLIC_SANITY_TOKEN =  YOUR_SANITY_API_KEY

   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = YOUR_PUBLIC_STRIPE_KEY

   NEXT_PUBLIC_STRIPE_SECRET_KEY = YOUR_SECRET_STRIPE_KEY
   ```
4. Start nextjs
   ```sh
   npm run dev
   ```
<p>Open http://localhost:3000 with your browser to see the result.</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Thu Giang - xanhtham.cuc@gmail.com

<br /> 
Project Link: [OverTheSea Ecommerce Shop](https://github.com/memopussle/Clothing-shop-react)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


