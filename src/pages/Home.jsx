import React from "react";
import image from "../assets/girl1.png";

const Home = () => {
  return (
    <div className="home-content d-flex align-items-center justify-content-center">
      <div className="left1">
        <h3>Hello, It's Me</h3>
        <h1>Aadil Khan</h1>
        <h3 className="text-animation">
          And I'm a <span></span>
        </h3>
        <p>
          I'm a MERN stack developer who loves turning ideas into real websites.
          I use MongoDB, Express.js, React, and Node.js to build awesome web
          apps. I enjoy creating things that look good and work smoothly. Let's
          build something cool together!
        </p>

        <span>
          <a href="https://github.com/aadilllkkkhhhaaannn" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/aadilllkkkhhhaaannn">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="mailto:Hamzakhannoor76@gmail.com" target="_blank">
            <i className="bx bxl-gmail"></i>
          </a>
        </span>

        <a href="#about" className="btn-box">
          More About Me
        </a>
      </div>

      <div className="right1">
        <img
          src="https://static.vecteezy.com/system/resources/previews/022/484/651/non_2x/happy-3d-student-boy-with-books-on-white-background-transparent-background-free-png.png"
        />
      </div>
    </div>
  );
};

export default Home;
