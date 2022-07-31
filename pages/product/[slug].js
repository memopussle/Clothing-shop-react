//pages -> product -> [slug] : each product page
import React, { useState } from "react";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { client, urlFor } from "../../lib/client";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";

const productDetails = ({ products, product }) => {
  //choose index
  const [index, setIndex] = useState(0);
  const { qty, incQty, decQty, onAdd, setSize, setShowCart } = useStateContext();


  const { image, name, details, price } = product;
  console.log(product)
  
  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  }
  
  return (
    <>
      <div className="container">
        <div className="products-container standard-margin-top">
          <div className="product__images">
            <img
              src={urlFor(image && image[index])}
              className="product__image"
            />
            <div className="product-container">
              {image?.map((item, i) => (
                <img
                  src={urlFor(item)}
                  key={i}
                  alt={name}
                  className="product__small"
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
          <div className="product__details">
            <h6 className="product__title">{name}</h6>
            <p className="font-weight-normal"> ${price}</p>
            <p>
              <span className="text-gray">Size:</span>
              <span className="product__size" onClick={() => setSize("S")}>
                S
              </span>
              <span className="product__size" onClick={() => setSize("M")}>
                M
              </span>
              <span className="product__size" onClick={() => setSize("L")}>
                L
              </span>
            </p>
            <div className="product__reviews">
              <AiFillStar size={25} color="#363636" />
              <AiFillStar size={25} color="#363636" />
              <AiFillStar size={25} color="#363636" />
              <AiFillStar size={25} color="#363636" />
              <AiOutlineStar size={25} color="#363636" />
              <p>(45)</p>
            </div>
            <p className="small-margin text-gray">{details}</p>
            <div className="flex product__qty">
              <p className="minus" onClick={decQty}>
                <AiOutlineMinus size={25} color="#363636" />
              </p>
              <p className="num">{qty}</p>
              <p className="plus" onClick={incQty}>
                <AiOutlinePlus size={25} color="#363636" />
              </p>
            </div>
            <button
              className="button-dark small-margin"
              onClick={() => onAdd(product, qty)}
            >
              ADD TO BAG
            </button>
            <button className="border-button small-margin" onClick={handleBuyNow}>BUY NOW</button>
          </div>
        </div>

        <div className="recommended standard-margin-top">
          <h6 className="secondary-font small-margin">You may also like</h6>
          <Product products={products} />
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;

  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default productDetails;
