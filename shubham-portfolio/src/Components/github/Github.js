import React from "react";
import "./Github.css";
import Githubcalendar from "react-github-calendar";
import { lightBlue } from "@material-ui/core/colors";
import { Stats } from "./GithubStats";

export const Github = () => {
  return (
    <div className="github">
      <div className="calender">
        <h3>Days I Code</h3>
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
