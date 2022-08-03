import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runFireWorks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    //clear storage
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireWorks();
  }, []);

  return (
    <div className="container">
      <div className="success flex">
        <p>
          <BsBagCheckFill color="#009933" size={25} />
        </p>
        <h6 className="secondary-font">Thank you for your order!</h6>
        <p>Check your email inbox for the receipt.</p>
        <p>
          If you have any questions, please email
          <a href="mailto:order@example.com" className="email">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button className="button-dark small-margin">
            CONTINUE SHOPPING
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
