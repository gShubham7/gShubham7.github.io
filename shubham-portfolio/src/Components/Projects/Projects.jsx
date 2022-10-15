import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiCss3,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">               
                <img src="./cult-fit-clone.png" alt="cult-fit" />                
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>cult-fit Clone</h2>
              <p>
                Clone of the popular sportswear website cultsport. Built on
                react. It's a individual project executed in 4 days.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
                {/* <SiNodedotjs />
                <SiExpress />
                <SiMongodb /> */}
              </div>
              <div>
                <a
                  href="https://cult-fit-clone.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/gShubham7/shivering-haircut-3518"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src="./boAt-clone.png" alt="boAt" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>boAt Clone</h2>
              <p>
                First Project with HTML, CSS, and JavaScript Only. Main
                functionalities were : Register, Login , Sorting and Filtering
                in the Products page, Cart and many more.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
                {/* <FaReact />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb /> */}
              </div>
              <div>
                <a
                  href="https://exquisite-tiramisu-73e015.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/gShubham7/aquatic-beef-7375"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="./sparkAmerica-clone.png"
                  alt="sparkAmerica"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>sparkAmerica Clone </h2>
              <p>
                Fully responsive website built with HTML, CSS, JavaScript and other CSS Libraries.
              </p>
              <div>
              <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
                {/* <SiNodedotjs />
                <SiExpress />
                <SiMongodb /> */}
              </div>
              <div>
                <a
                  href="https://transcendent-zabaione-8dbd80.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/gShubham7/crowded-push-1335"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="./Weather-App.png"
                  alt="Weather-App"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Weather App</h2>
              <p>
                Mini project to get the weather of a particular location built using JavaScript and APIs.
                Features : Button for Searching The location, Details such as temperature wind speed will be shown along with 7 days forcat, etc.
              </p>
              <div>               
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript/>
              </div>
              <div>
                <a
                  href="https://roaring-paletas-2e019e.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="./ToDo-App.png"
                  alt="ToDo-App"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>TODO App</h2>
              <p>
                Vanilla JS web app to add and delete Todo. 
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://jovial-cranachan-a3c1b8.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
