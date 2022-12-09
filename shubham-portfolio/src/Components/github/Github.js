import React from "react";
import "./Github.css";
import Githubcalendar from "react-github-calendar";
import { lightBlue } from "@material-ui/core/colors";
import { Stats } from "./GithubStats";

export const Github = () => {
  return (
    <div className="github">
      <div className="calender">
        <h1 style={{textAlign:"center", padding:"40px"}}>Days I Code</h1>
        <Githubcalendar
          username="gShubham7"
          theme={lightBlue}
          blockSize={20}
          blockMargin={5}
          fontSize={16}
        />
      </div>
      <div>
        <Stats />
      </div>
    </div>
  );
};
