import React from "react";
import { Products, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  console.log(products, bannerData)
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
    <Products />
      <h1>About us</h1>
      <h1>Instagram</h1>
      <FooterBanner />
      <h1>footer</h1>
    </div>
  )
}
//fetch product from sanity to project
export const getServerSideProps = async () => {
  //whatever getServerSideProps returns, it get populated to Home function
  const query = '*[_type== "product"]'; //*: fetch all product from sanity
  const products = await client.fetch(query);

  const bannerQuery = '*[_type== "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;