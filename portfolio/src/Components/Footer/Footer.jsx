import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container d-flex p-5">
        <div className="col-md-4">
          <p className="fs-4 text-white">CONTACT ME</p>
          <p className="text-white">
            <i className="fas fa-envelope text-white"></i> ashry@example.com
          </p>
        </div>
        <div className="col-md-4 text-center d-flex flex-column justify-content-center align-items-center">
          <div className="text-white">&copy; All rights reserved</div>
          <div className="mb-3 mt-2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-lg m-3 text-white"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f fa-lg m-3 text-primary"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in fa-lg m-3 text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
