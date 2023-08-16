import React from "react";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <>
      <div className={styles.bgImage}>
        <div className="container text-left">
          <h1>Ahmed Ashry</h1>
          <p className="fs-3">Full Stack Developer</p>
        </div>
      </div>
    </>
  );
};

export default Home;
