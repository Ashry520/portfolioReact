import React from "react";
import img from "../../assests/image/about-me-icon-png-14.jpg";
const About = () => {
  return (
    <>
      <div className="about p-5 bg-black">
        <div className="container">
          <div className="row p-5">
            <div className="col-lg-4">
              <img src={img} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-8">
              <h2 className="text-white">About Me</h2>
              <p className="text-white">
                I'm Ahmed Ashry, a skilled front-end developer experienced in
                HTML, CSS, JavaScript, and React. Crafting responsive designs
                and diving into backend with Node.js and MongoDB. Goal: MERN
                stack mastery. Problem-solver and eager learner. Efficient time
                manager excelling in studies, work, and personal projects.
                Passionate about crafting exceptional web experiences. Adeptly
                navigating frontend and backend, blending creativity with
                problem-solving. Embracing challenges and always evolving to
                stay at the forefront. Let's collaborate to bring your web ideas
                to life. Navigating the digital landscape with finesse and
                innovation is my commitment. Masterful in MERN stack sorcery
                channeling energy into the art of forging dynamic and
                ultra-responsive web realms that dance with life. Possessing the
                ability to wield the mighty MongoDB crystal, shape the winds of
                Express.js, breathe fiery essence into React enchantments, and
                traverse the vast Node.js dimensions to conjure interfaces that
                flow like enchanted streams. Pledged to an unending journey of
                knowledge expansion, ensuring the crafting of extraordinary
                solutions in the ever-morphing tapestry of web wizardry, all
                within the vibrant world of anime inspiration.
              </p>
              <button className="btn btn-primary">DOWNLOAD RESUME HERE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
