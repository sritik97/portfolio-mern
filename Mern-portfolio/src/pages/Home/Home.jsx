import React from 'react'
import './Home.css'
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.txt";

function Home() {
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">  
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer!",
                    "Mern Stack Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>       
            <div className="home-buttons">
               <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=7856958128"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={Resume} download="your_name.pdf">
                My Resume
              </a>
            </div>   
        </div>
      </div>
    </>
  )
}

export default Home
