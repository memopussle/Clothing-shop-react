import React, { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-hot-toast";

//create global context
const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [size, setSize] = useState();

  //items inside cart
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);
  let foundProduct;
  let index;

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    //set qty always > 0. so qty is not negative

    setQty((prevQty) => {
      if (prevQty - 1 < 0) return 0;
      return prevQty - 1;
    });
  };

  const onAdd = (product, quantity) => {
    //find if product is already in cart
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      //if product exists in the cart, we simply get its price + product price * quantity

      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
            //only update quantity if product is in the cart
          };
      });

      setCartItems(updatedCartItems);
      console.log(cartItems);
    } else {
      product.quantity = quantity;

      //update product property quantity of product if product doesnt exist in cart
      setCartItems([...cartItems, { ...product }]);
      console.log(cartItems);
    }
    toast.success(`${qty} ${product.name} added to the cart.`, {
      style: {
        fontSize: "1.5rem",
      },
    });
  };

  const toggleCartItemQuantity = (id, value) => {
    //find product
    foundProduct = cartItems.find((item) => item._id === id);
    //find index of product
    index === cartItems.findIndex((product) => product._id === id);

    if (value === "inc") {
      setCartItems(
        cartItems.map((item) =>
          item._id === id
            ? { ...foundProduct, quantity: foundProduct.quantity + 1 }
            : item
        )
      );
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      setCartItems(
        cartItems.map((item) =>
          item._id === id
            ? { ...foundProduct, quantity: foundProduct.quantity - 1 }
            : item
        )
      );
      setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
    }
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        totalQuantities,
        setTotalQuantities,
        cartItems,
        setCartItems,
        qty,
        setQty,
        incQty,
        decQty,
        onAdd,
        setSize,
        size,
        totalPrice,
        toggleCartItemQuantity,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

//export useStateContext by using Context just created
export const useStateContext = () => useContext(Context);
