import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  const navWhite = router.pathname === "/" ? true : false;

  return (
    <>
      <div className="container">
        <nav
          className={
            navWhite
              ? "flex space-between text-white"
              : "flex space-between text-black"
          }
        >
          <div className="nav__menu">
            <button onClick={handleClick}>
              {isOpen === false ? (
                <AiOutlineMenu
                  size="28"
                  color={navWhite ? "#ffffff" : "#363636"}
                />
              ) : (
                <AiOutlineClose
                  size="28"
                  color={navWhite ? "#ffffff" : "#363636"}
                />
              )}
            </button>
          </div>

          <div className="nav flex">
            <Link  href="/">
              <p>HOME</p>
            </Link>
            <Link href="/collections">
              <p className="standard-padding">COLLECTIONS</p>
            </Link>
          </div>

          <h6 className="nav__logo ">OverTheSea</h6>
          <div className=" flex">
            <Link href="/about">
              <p className="nav standard-padding">ABOUT</p>
            </Link>
            <div>
              <button
                className="shopping-cart"
                onClick={() => setShowCart(!showCart)}
              >
                <BsBag color={navWhite ? "#ffffff" : "#363636"} size="25" />
                <span className="text-white shopping-cart__qty">
                  {totalQuantities}
                </span>
              </button>
              {showCart && <Cart />}
            </div>
          </div>
        </nav>
      </div>

      <hr className="nav__break" />

      {isOpen && (
        <ul className="menu">
          <li>
            <Link href="/">
              <p>HOME</p>
            </Link>
          </li>
          <li>
            <Link href="/collections">
              <p>COLLECTIONS</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p>ABOUT</p>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
