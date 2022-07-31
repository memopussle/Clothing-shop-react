import React from "react";
import toast from "react-hot-toast";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineClose,
} from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";

const Cart = () => {
  const {
    totalQuantities,
    cartItems,
    setShowCart,
    size,
    qty,
    totalPrice,
    toggleCartItemQuantity,
    onRemove
  } = useStateContext();

     const handleCheckout = async () => {
       const stripe = await getStripe();

       const response = await fetch("/api/stripe", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(cartItems),
       });

       if (response.statusCode === 500) return;

       const data = await response.json();

       toast.loading("Redirecting...", {
         style: {
           fontSize: "1.5rem",
         },
       });

       stripe.redirectToCheckout({ sessionId: data.id });
     };


  return (
    <div className="cart flex ">
      <div>
        <div className="flex space-between">
          <button onClick={() => setShowCart(false)} className="secondary-font">
            <AiOutlineLeft size={25} color="#363636" />
          </button>
          <h6>
            <span className="secondary-font ">Your Bag &nbsp;</span>
            <span className="p">({totalQuantities})</span>
          </h6>
        </div>
        {cartItems.length < 1 && (
          <div className="cart__details flex">
            <p className="text-gray">Your Shopping Bag is empty.</p>
            <button
              className="button-dark small-margin"
              onClick={() => setShowCart(false)}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => (
            <div key={item._id} className=" cart-product  standard-margin-top">
              <img src={urlFor(item?.image[0])} className="product__image" />
              <div>
                <div className="flex space-between">
                  <h6 className="secondary-font font-light line-height-normal">
                    {item.name}
                  </h6>
                  <button onClick={() => onRemove(item)}>
                    <AiOutlineClose size={20} color="#363636" />
                  </button>
                </div>
                <p className="font-normal">${item.price}</p>
                <p>Size: {size}</p>
                <div className="flex product__qty">
                  <p
                    className="minus"
                    onClick={() => toggleCartItemQuantity(item._id, "dec")}
                  >
                    <AiOutlineMinus size={25} color="#363636" />
                  </p>
                  <p className="num">{item.quantity}</p>
                  <p
                    className="plus"
                    onClick={() =>
                      toggleCartItemQuantity(item._id, "inc", item.quantity)
                    }
                  >
                    <AiOutlinePlus size={25} color="#363636" />
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      {cartItems.length >= 1 && (
        <div className="flex cart-product__checkout">
          <h6 className="flex space-between standard-margin-top">
            <span className="secondary-font">
              Subtotal:
            </span>
            <span className="cart-product__total">${totalPrice}</span>
          </h6>
          <button className="button-dark small-margin" onClick={handleCheckout}>BUY NOW</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
