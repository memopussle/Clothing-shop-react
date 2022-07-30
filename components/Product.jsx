import React, { useRef, useEffect, useState } from "react";
import { urlFor } from "../lib/client";
import { motion } from "framer-motion";


import Link from "next/link";

const Product = ({ products }) => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    //scrollwidth: full screen, offsetWidth: what shows in carousel
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);

    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
    
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {products?.map((product) => (
            <motion.div key={product._id} className="product">
              <>
            
                <img
                  src={urlFor(product?.image && product?.image[0])}
                  width={450}
                  height={550}
                  alt="products"
                ></img>
                <p>{product?.name}</p>

                <p>${product?.price}</p>

                <Link href={`/product/${product?.slug.current}`}>
                  <button className="small-button">⟶</button>
                </Link>
              </>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
     
    </div>
  );
};

export default Product;
