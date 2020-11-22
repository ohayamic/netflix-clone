import React from "react";
//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import './Footer.css'


const Footer = () => {
  // get the Date inbuilt function
  let d = new Date();

  window.onscroll = () => {
    // for the back-to-top button
    const getLink = document.querySelector(".top-link");
    if (window.pageYOffset > 800) {
      getLink.classList.add("show-link");
    } else {
      getLink.classList.remove("show-link");
    }
  };

  const handleScroll = () => {
    window.scrollTo(0, 0);
    const getLink = document.querySelector(".top-link");
    getLink.classList.remove("show-link");
    if (window.pageYOffset > 800) {
      getLink.classList.add("show-link")
    }
  };

  return (
    <section>
      <p className="top-link" onClick={handleScroll}>
        <FontAwesomeIcon icon={faArrowUp} />
      </p>
          <footer className="section">
              <div className='section-center'>
                <p style={{margin:' 0 auto'}}>
                        copyright <FontAwesomeIcon icon={faCopyright} /> {d.getFullYear()}{" "}
                            {d.getMonth()}
                            {"/"}
                            {d.getUTCDate()} MichaelOnyebuchiOhaya. All Rights Reserved.
                </p>
              </div>
        
            </footer>
    </section>
  );
};

export default Footer;
