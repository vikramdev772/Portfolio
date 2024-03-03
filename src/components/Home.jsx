import v from "./images/vikram.png";
import React from "react";

import d from "./images/d.png";
import ds from "./images/ds.png";
import dv from "./images/dv.png";
import apd from "./images/apd.png";
import css from "./images/css-3.png";
import html from "./images/html.png";
import js from "./images/js.png";
import java from "./images/java.png";
import github from "./images/github.png";
import react from "./images/react.png";
import codelab from "./images/codelab.png";

// import webdev from "./images/webdev.jpg";
import webdev from "./images/developer.png";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
    <div className="mainPage">
    <section className="home" id="home">
        <div className="home-content">
          <h3>HELLO , It's Me </h3>
          <h1>Vikram Ram</h1>
          <h3>
            And I'm a
            <br />
            <br />
             <br />
            <span>Web Devloper</span>
            <br />
            <br />
            <span className="multiple-text" />
          </h3>

          <p>
            I believe that web development is indeed an important and growing
            field with a lot of potential for the future.
          </p>
          <a href="https://vikramresume.netlify.app/" download>
            <button>Download CV</button>
          </a>
        </div>
        <div className="">
          <div className="">
            <div className="profession" style={{ "-i": 0 }}>
              <i className="bx bx-code-alt" />
              {/* <h3>Web Devloper</h3> */}
            </div>
            <div className="circle" />
          </div>

          <div className="overlay"></div>
          <div className="home-img">
            <img src={webdev} alt />{" "}
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src={webdev} className="developer" alt />
        </div>
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>Frontend Developer</h3>
          <p>
            Frontend development is a key aspect of building modern websites and
            web applications. Frontend developers are responsible for creating
            the user-facing parts of a website or application, including the
            layout, design, and interactivity. They work with HTML, CSS, and
            JavaScript to build the visual and interactive components of a
            website or application.
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </section>
      <section class="skills" id="skills">
        <h2 class="heading">
          <span>Skills</span>
        </h2>
        <br />
        <br />
        <div class="skills-container">
          <div class="skills-box">
            <img src={github} alt="" className="icons" />

            <a href="https://github.com/Vk4011" class="btn">
              <h3>GitHub</h3>
            </a>
          </div>
          <div class="skills-box">
            <img src={html} alt="HTML Icon" className="icons" />
            <a href="#" class="btn">
              {" "}
              <h3>HTML</h3>
            </a>
          </div>
          <div class="skills-box">
            <img src={react} alt="React Icon" className="icons-react" />
            <a href="https://github.com/Vk4011/React.git" class="btn">
              <h3>React</h3>
            </a>
          </div>
          <div class="skills-box">
            <img src={css} alt="CSS Icon" className="icons" />
            <a href="https://github.com/Vk4011/CSS" class="btn">
              <h3>CSS</h3>
            </a>
          </div>
          <div class="skills-box">
            <img src={js} alt="JavaScript Icon" className="icons" />
            <a href="https://github.com/Vk4011/java-script" class="btn">
              <h3>JavaScript</h3>
            </a>
          </div>  
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest <span>Project</span>
        </h2>
        <div className="portfolio-container">
          <div className="portfolio-container">
            <div className="portfolio-box">
              <img className="codelab" src={codelab} alt />
              <div className="portfolio-layer" />
              <br />
              <h2>Gates code lab</h2>
              <h1>
                Developed a web application for coding practice and skill
                improvement using NodeJS, ReactJS, and MongoDB.
                <br />
                Designed an intuitive React-based interface to enhance coding
                proficiency for users.
              </h1>
              <br />
              <a href="https://github.com/Vk4011/Code-lab" class="btn">
                <h3>code link</h3>
              </a>
            </div>
          </div>
          <div className="portfolio-box">
            <video className="codelab" autoPlay loop muted>
              <source
                src="https://res.cloudinary.com/datowd0cc/video/upload/v1699510332/Space-game/yktkjzrpphu8dnicaxta.mp4"
                type="video/mp4"
              />
            </video>
            <div className="portfolio-layer" />
            <br />
            <h2>Space Game</h2>
            <h1>
              Developed a web application for coding practice and skill
              improvement using HTML Canvas,css animations,JS.
              <br />
              I'm excited to share my latest project - a space-themed game built
              from scratch using HTML canvas, CSS, and JavaScript. 🎮
            </h1>
            <br />
            <a href="https://github.com/Vk4011/space-game" class="btn">
              <h3>code link</h3>
            </a>
          </div>
        </div>
        </section>
        <Contact/>
        <br />
        <Footer/>
    </div>
      
    </>
  );
}

export default Home;
