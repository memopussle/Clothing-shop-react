

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

- [NextJS](https://nextjs.org/)
- [Sanity](https://www.sanity.io/)
- [ReactJS](https://reactjs.org/)
- [JavaScript](https://www.javascript.com/)
- [Stripe](https://stripe.com/en-nz)

I used the technologies to build this application: NextJS, Sanity, Reactjs, JavaScript, Stripe, Context API and Framer Motion. Context API stores states globally so every component can have access to and use them. NextJS framework was used to handle both front-end and back-end development without the need to write NodeJS and use Sanity.io for data storage. For payment, I used Stripe.

### Other Dependencies
- React icons
- React hot toast
- Framer motion
- Stripe

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Features
  <ol>
        <li><p>User-Friendly Navigation</p></li>
        <li><p>Buy Now and Add To Cart Function</p></li>
        <li><p>Online purchase with Stripe</p></li>
  </ol>


### Challenges

My main challenges when building this application are:
- How to make the cart items update dynamically when users choose the products and quantities.
- How to fetch cart items to Stripe when users check out. 

#### Solution/ workaround
- Update the check-out cart: To show items being updated from product page to cart, those components need to share the same states. States can be passed around and be updated in different components. That's why I used context API - a custom hook that makes states globally without manually passing the props down to each component. 

-  Fetch data to Stripe: although Stripe provides instructions on how to use it for online payment in your app, the instruction only returns 1 product with the exact ID provided. But to return the list of chosen products in the cart, I need to think of another way. I used the POST method to pass items in the cart as the request body, and then in the Checkout session function, I mapped through each item and displayed the information stored in the line_items variable.



I hope to implement a few features in the future: A search engine for products, filter and sort features (initially this only works on Firefox but not yet across all internet browsers), and push Stripe purchase payment live.



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


