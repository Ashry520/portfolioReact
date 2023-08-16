import React from "react";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <section className={`p-5 ${styles.textBgSecondary}`}>
      <div className="container">
        <div className={`portfolio-title fs-1 mb-4 ${styles.portfolioTitle}`}>
          Portfolio
        </div>

        <div className="row mb-5">
          <div className="col-md-4">
            <div
              className={`card ${styles.card} d-flex justify-content-center align-items-center p-5 mb-5 shadow`}
            >
              <p className="fs-5">mugiwara no luffy</p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={`card ${styles.card} d-flex justify-content-center align-items-center p-5 mb-5 shadow`}
            >
              <p className="fs-5">roronoa zoro</p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={`card ${styles.card} d-flex justify-content-center align-items-center p-5 mb-5 shadow`}
            >
              <p className="fs-5">Ace</p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={`card ${styles.card} d-flex justify-content-center align-items-center p-5 mb-5 shadow`}
            >
              <p className="fs-5">Pentakill</p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={`card ${styles.card} d-flex justify-content-center align-items-center p-5 mb-5 shadow`}
            >
              <p className="fs-5">Have Fun</p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={`card ${styles.card} d-flex justify-content-center align-items-center p-5 mb-5 shadow`}
            >
              <p className="fs-5">El Reverse Shagy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
