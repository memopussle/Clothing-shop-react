import React, { useState, useEffect } from "react";
import { client, urlFor } from "../lib/client";
import Link from "next/link";

const collections = ({ products }) => {
  const [category, setCategory] = useState("all");
  const newProducts = products;
  const [allProducts, setAllProducts] = useState(newProducts);
  const [price, setPrice] = useState(newProducts);

  const handleCategory = (e) => {
    let input = e.target.value;
    setCategory(input);
  };

  const handlePrice = (e) => {
    let input = e.target.value;
    setPrice(input);
  };
  let filterProducts = newProducts.filter((product) => {
    return product?.name.toLowerCase().includes(category);
  });

  useEffect(() => {
    if (category !== "all") {
      setAllProducts(filterProducts);
    } else if (category === "all" && price === "all") {
      setAllProducts(newProducts);

    } else if (category === "all") {
        setAllProducts(newProducts);
    }
  }, [category]);

  useEffect(() => {
    if (price === "low") {
      const sortedProducts = allProducts.sort((a, b) => a.price - b.price);
      setPrice(sortedProducts);
    } else if (price === "all" && category === "all") {
      setAllProducts(newProducts);
    } else if (price === "all" && category !== "all") {
      setAllProducts(filterProducts);
      console.log(filterProducts);
    } else if (price === "high") {
      const sortedProducts = allProducts.sort((a, b) => b.price - a.price);
      setPrice(sortedProducts);
    }
  }, [price]);

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
        <option value="all" onClick={handlePrice}>
          PRICE
        </option>
        <option value="low" onClick={handlePrice}>
          LOW TO HIGH
        </option>
        <option value="high" onClick={handlePrice}>
          HIGH TO LOW
        </option>
      </select>

      <div className="collections__product standard-margin-top">
        {allProducts?.map((product) => (
          <Link href={`/product/${product?.slug.current}`} key={product._id}>
            <div className="flex collections">
              <img
                src={urlFor(product?.image && product?.image[0])}
                alt="products"
                className="images"
              ></img>
              <h6 className="secondary-font font-light ">{product?.name}</h6>
              <p className="font-normal"> ${product?.price}</p>
              <button className="small-button small-margin">⟶</button>
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
