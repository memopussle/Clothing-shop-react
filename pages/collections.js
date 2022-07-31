import React, { useState, useEffect } from "react";
import { client, urlFor } from "../lib/client";
import Link from "next/link";

const collections = ({ products }) => {
  const [category, setCategory] = useState("all");

  const handleCategory = (e) => {
    let input = e.target.value;
    setCategory(input);
  };

    useEffect(() => {

    let newArray = products.filter((product) => {
      return product?.name.toLowerCase().includes(category);
    });
    console.log(newArray);
  }, [category]);

  return (
    <div className="container">
      <select name="category" className="options">
   
        <option value="all" onClick={handleCategory}>
          ALL
        </option>
        <option value="dress" onClick={handleCategory}>
          DRESS
        </option>
        <option value="top" onClick={handleCategory}>
          TOPS
        </option>
        <option value="pants" onClick={handleCategory}>
          PANTS
        </option>
      </select>
      <select name="price" className="options">

        <option value="dress">PRICE</option>
        <option value="tops">Low to High</option>
        <option value="pants">High to Low</option>
      </select>

      <div className="collections__product small-margin">
        {products?.map((product) => (
          <Link href={`/product/${product?.slug.current}`}>
            <div key={product._id} className="flex collections">
              <img
                src={urlFor(product?.image && product?.image[0])}
                alt="products"
                className="images"
              ></img>
              <h6 className="secondary-font font-light ">{product?.name}</h6>
              <p className="font-normal"> ${product?.price}</p>
            </div>
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  //whatever getServerSideProps returns, it get populated to Home function
  const query = '*[_type== "product"]'; //*: fetch all product from sanity
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default collections;
