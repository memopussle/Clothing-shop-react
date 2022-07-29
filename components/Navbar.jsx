import React, {useState} from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
   
  }

  return (
    <>
      <div className="container">
        <nav className="flex space-between text-white">
          <p className="nav__menu">
            <AiOutlineMenu onClick={handleClick} />
          </p>

          <div className="nav flex">
            <a href="#">
              <p>COLLECTIONS</p>
            </a>
            <a href="#">
              <p className="standard-padding">ABOUT</p>
            </a>
          </div>

          <h6 className="nav__logo ">OverTheSea</h6>
          <div className=" flex">
            <a href="#">
              <p className="nav standard-padding">INSTAGRAM</p>
            </a>
            <a href="#">
              <p>
                <BsBag />
              </p>
            </a>
          </div>
        </nav>
      </div>

      <hr className="nav__break" />
      {/* navbar menu */}
      {isOpen && (
        <ul>
          <li>
            <p>COLLECTIONS</p>
            <p>ABOUT</p>
            <p>INSTAGRAM</p>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
