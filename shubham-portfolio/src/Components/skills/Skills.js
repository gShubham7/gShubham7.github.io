import React from "react";
import "./Skills.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMaterialui,
  SiChakraui,
  SiExpress,
  SiNetlify,
  SiVercel,
  SiPostman,
  SiTypescript,
  SiFigma,
} from "react-icons/si";
import { DiMongodb, DiHeroku } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Skills = () => {
  return (
    <>
      <div id="skills" className="section main" data-aos="fade-right">
        {/* <h2 className="section__title different">Skills</h2> */}
        <h1 style={{ textAlign: "center", padding: "20px", fontSize: "3rem" }}>
          Skills
        </h1>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>JavaScript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <SiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <SiTypescript />
            <h5>TypeScript</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDB</h5>
          </div>

          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div>
            <SiMaterialui />
            <h5>Material UI</h5>
          </div>
          <div>
            <SiChakraui />
            <h5>Chakra UI</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <SiFigma />
            <h5>Figma</h5>
          </div>
          <div>
            <SiPostman />
            <h5>Postman</h5>
          </div>
          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>
          <div>
            <DiHeroku />
            <h5>Heroku</h5>
          </div>
          <div>
            <SiVercel />
            <h5>Vercel</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
