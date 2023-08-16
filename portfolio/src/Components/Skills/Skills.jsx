import React from "react";

const Skills = () => {
  return (
    <div className="bg-black">
      <div className="container text-center p-5">
        <div className="row mb-5">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <p className="fs-3 text-white">SKILL LEVEL</p>
          </div>
          <div className="col-md-8">
            <div className="progress mb-4">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                HTML (100%)
              </div>
            </div>

            <div className="progress mb-4">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                CSS (90%)
              </div>
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                JavaScript (80%)
              </div>
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                React (80%)
              </div>
            </div>

            <div className="progress">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Node.js (90%)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
