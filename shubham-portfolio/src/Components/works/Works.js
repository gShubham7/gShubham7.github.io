/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Works.css";

// Import ../../assets/recentprojects/
import Justshop from "../../assets/recentprojects/justShop.png";
import Blog from "../../assets/recentprojects/blog.png";
import Ecotone from "../../assets/recentprojects/ecotone.png";
import Cultfit from "../../assets/recentprojects/cult-fit.png";
import Boat from "../../assets/recentprojects/boat.png";
import SparkAmerica from "../../assets/recentprojects/sparkAmerica.png";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiBootstrap, DiMongodb } from "react-icons/di";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "justShop",
      description: `An E-Commerce website designed and developed by MERN stack 
      with user as well as admin features to demonstrate the CRUD capabilities of the tech stack.`,
      alter: "justShop Website",
      image: `${Justshop}`,
      live: "https://justshop-unit5-project.netlify.app/",
      github: "https://github.com/gShubham7/justShop-own-creativity",
      techstacks: [
        { id: 11, tech: <SiReact /> },
        { id: 12, tech: <SiRedux /> },
        { id: 13, tech: <FaNodeJs /> },
        { id: 14, tech: <SiExpress /> },
        { id: 15, tech: <DiMongodb /> },
      ],
    },
    {
      id: 2,
      title: "Blogging Web-App",
      description: `It's a blogging application where one can see all blogs, create own blogs and can edit them also with likes and comments, built with React, Bootstrap, NodeJS, ExpressJS and MongoDB.`,
      alter: "Blog Website",
      image: `${Blog}`,
      live: "https://stunning-gumdrop-f22701.netlify.app/",
      github: "https://github.com/gShubham7/Blog-App",
      techstacks: [
        { id: 11, tech: <SiReact /> },
        { id: 12, tech: <FaNodeJs /> },
        { id: 13, tech: <SiExpress /> },
        { id: 14, tech: <DiMongodb /> },
        { id: 15, tech: <DiBootstrap /> },
      ],
    },
    {
      id: 3,
      title: "Ecotone-Buffer Clone",
      description: `About
      It is a Social Media Post Scheduler web application where user can create, edit and delete the posts on different channels seperately and also schedule in the calender. The tech stacks used are ReactJS ,expressJS, nodeJS and mongoDB as database.`,
      alter: "Ecotone Website",
      image: `${Ecotone}`,
      live: "https://u6project.netlify.app/",
      github: "https://github.com/gShubham7/Buffer-clone",
      techstacks: [
        { id: 11, tech: <SiReact /> },
        { id: 12, tech: <SiRedux /> },
        { id: 13, tech: <FaNodeJs /> },
        { id: 14, tech: <SiExpress /> },
        { id: 15, tech: <DiMongodb /> },
      ],
    },
    // {
    //   id: 2,
    //   title: "cult-fit Project",
    //   description: `An website clone project built by using
    //   ReactJS with authentication of user and cart functionality.`,
    //   alter: "cult-fit Project",
    //   image: `${Cultfit}`,
    //   live: "https://cult-fit-clone.netlify.app/",
    //   github: "https://github.com/gShubham7/cult-fit-Clone",
    //   techstacks: [
    //     { id: 21, tech: <SiReact /> },
    //     { id: 22, tech: <SiJavascript /> },
    //     { id: 23, tech: <SiHtml5 /> },
    //     { id: 24, tech: <SiCss3 /> },
    //   ],
    // },
    {
      id: 4,
      title: "boAt",
      description: `The audio and wearable products website built by using
      vanilla JavaScript to design and develop its front-end. It has fetures like filtering, sorting of products.`,
      alter: "boAt Project",
      image: `${Boat}`,
      live: "https://exquisite-tiramisu-73e015.netlify.app/",
      github: "https://github.com/gShubham7/boAt-Clone",
      techstacks: [
        { id: 31, tech: <SiJavascript /> },
        { id: 32, tech: <SiHtml5 /> },
        { id: 33, tech: <SiCss3 /> },
      ],
    },
    // {
    //   id: 4,
    //   title: "sparkAmerica Project",
    //   description: `SparkAmerica is a movement launching from a platform. It is Fitness & Health, Leadership Development, and Community Engagement by helping one person, one organization, and one city at a time.`,
    //   alter: "sparkAmerica Project",
    //   image: `${SparkAmerica}`,
    //   live: "https://transcendent-zabaione-8dbd80.netlify.app/",
    //   github: "https://github.com/gShubham7/sparkAmerica-Clone",
    //   techstacks: [
    //     { id: 41, tech: <SiJavascript /> },
    //     { id: 42, tech: <SiHtml5 /> },
    //     { id: 43, tech: <SiCss3 /> },
    //   ],
    // },
  ]);

  return (
    <section id="works">
      <h1 style={{ textAlign: "center", padding: "20px", fontSize: "3rem" }}>
        Projects
      </h1>
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.id + ". " + project.title} />
              </h3>
              <p className="description">{project.description}</p>
              <div className="techs">
                {project.techstacks?.map((tech) => (
                  <div key={tech.id}>{tech.tech}</div>
                ))}
              </div>
              <div className="buttons">
                <div>
                  <a href={project.live} target="blank">
                    <Button variant="outlined">Live</Button>
                  </a>
                </div>
                <div>
                  <a href={project.github} target="blank">
                    <Button variant="outlined">GitHub</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
