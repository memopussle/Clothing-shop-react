import React from "react";
import { Product, Footer, HeroBanner, Intro } from "../components";
import { client } from "../lib/client";
import Link from "next/link";

const Home = ({ products}) => {
  return (
    <>
      <HeroBanner  />

      <div className="container">
        <h5 className="product__heading section-margin">Collections</h5>
        <Product products={products} />
        <div className="product__button">
          <Link href={`/products`}>
            <button className="border-button">SEE MORE</button>
          </Link>
        </div>
      </div>
      <Intro />
    </>
  );
};
//fetch product from sanity to project
export const getServerSideProps = async () => {
  //whatever getServerSideProps returns, it get populated to Home function
  const query = '*[_type== "product"]'; //*: fetch all product from sanity
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default Home;
