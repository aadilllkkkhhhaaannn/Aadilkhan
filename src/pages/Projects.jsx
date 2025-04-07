import React from "react";
import p1 from "../assets/p-1.jpeg";
import p2 from "../assets/p-2.jpeg";
import p4 from "../assets/image.png";
import p3 from "../assets/p-3.jpeg";
import p5 from "../assets/p-5.jpeg";
import ecom from "../assets/ecommerce.jpeg";
import chrono from "../assets/chrono.jpeg";

const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <h3 className="mt-4">
        MY <span>PROJECTS</span>
      </h3>

      <div className="projects">
        <div className="box1">
          <a
            href="https://casualstore-ovy9.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ecom} alt="" />
          </a>

          <div className="layer">
            <h4>ECOMMERCE WEBSITE</h4>
            <p>
              Build on MERN E-commerce wwebsite Redux toolkit, TailwindCss , and
              ShadcnUI for integrated API using axios.
            </p>
            <a href="https://casualstore-ovy9.vercel.app/" target="_blank">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="box1">
          <a
            href="https://expese-manager.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={chrono} alt="" />
          </a>

          <div className="layer">
            <h4>CHRONO-WATCH-CARE</h4>
            <p>
              Build on MERN stack Complaint-box application Redux toolkit,
              TailwindCss , and ShadcnUI for integrated API using axios.
            </p>
            <a href="https://chronowatchcare.vercel.app/" target="_blank">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="box1">
          <a
            href="https://expese-manager.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={p1} alt="" />
          </a>

          <div className="layer">
            <h4>EXPENSE-MANAGER</h4>
            <p>
              Build on Redux toolkit, MaterialUI for UI, integrated trending
              crypto API using axios.
            </p>
            <a href="https://expese-manager.vercel.app/" target="_blank">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="box1">
          <img src={p2} alt="" />
          <div className="layer">
            <h4>CryptoMania</h4>
            <p>
              Build on React.js, using Bootstrap for UI design, intergrated news
              api using axios.
            </p>
            <a href="https://crypto-mania-app.vercel.app/Login" target="_blank">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="box1">
          <img src={p4} alt="" />
          <div className="layer">
            <h4>CRUD</h4>
            <p>
              Build on React.js, using Bootstrap for UI design, applying CRUD
              functionality.{" "}
            </p>
            <a
              href="https://todo-list-app-pi-taupe.vercel.app/"
              target="_blank"
            >
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="box1">
          <img src={p3} alt="" />
          <div className="layer">
            <h4>Feedback APP</h4>
            <p>
              Build using JavaScript, integrated Weather API using fetch method
              to fetch anywhere weather data.
            </p>
            <a
              href="https://feedback-app-zeta-sandy.vercel.app/"
              target="_blank"
            >
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="box1">
          <img src={p5} alt="" />
          <div className="layer">
            <h4>Authentication App</h4>
            <p>Build on React Redux, here we can in Authentication App. </p>
            <a
              href="https://authentication-app-react.vercel.app/login"
              target="_blank"
            >
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        {/* <div className="box1">
          <img src={project6} alt="" />
          <div className="layer">
            <h4>QR Generator</h4>
            <p>
              Build on JavaScript, intergrated QR api using fetch method to
              generate QR for entered URL or text.
            </p>
            <a
              href="https://qr-generator-one-gamma.vercel.app/"
              target="_blank"
            >
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div> */}

        {/* <div className="box1">
          <img src={project7} alt="" />
          <div className="layer">
            <h4>BMI Calculator</h4>
            <p>
              Build on JavaScript, here we can calculated our BMI that shows us
              that we are either healthy, overweight, undeweight or obese.
            </p>
            <a
              href="https://bmi-calculator-seven-psi.vercel.app/"
              target="_blank"
            >
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
