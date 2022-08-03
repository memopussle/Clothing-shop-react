import React from "react";

const Footer = () => {
  const footerTitle = [
    "Customer service",
    "Company",
    "Follow us",
    "Do you need assistance?",
  ];

  const footerBody1 = ["Contact", "Shopping Guide", "Size Guide"];

  const footerBody2 = ["About us", "Policies", "Privacy Policy"];
  const footerBody3 = ["Facebook", "Instagram", "Pinterest"];
  return (
    <div className=" container">
      <ul className="flex space-between footer section-margin">
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="secondary-font">{footerTitle[0]}</p>
            {footerBody1.map((line, i) => (
              <div key={i}>
                <p>{line}</p>
              </div>
            ))}
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="secondary-font">{footerTitle[1]}</p>
            {footerBody2.map((line, i) => (
              <div key={i}>
                <p>{line}</p>
              </div>
            ))}
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="secondary-font">{footerTitle[2]}</p>
            {footerBody3.map((line, i) => (
              <div key={i}>
                <p>{line}</p>
              </div>
            ))}
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="secondary-font">{footerTitle[3]}</p>
            <p>Call: 0900 147 687</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
