import React from "react";
import { ThemeContext } from "../../Context/theme";
//import styled from "styled-components";

import "../../App.css";
const Stats = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    // streak
    <>
    <div>
      <div align="center">
        <a href="https://github.com/gShubham7">
          <img
            style={{ width: "50%" }}
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com?user=gShubham7&theme=tokyonight_duo&hide_border=true"
          />
        </a>
      </div>
      <div align="center">
        <a href="https://github.com/gShubham7">
          <img
            style={{ width: "50%" }}
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=gShubham7&theme=transparent&hide_border=true&layout=compact" //launguages
          />
        </a>
      </div>
      <div align="center">
        <a href="https://github.com/gShubham7">
          <img
            style={{ width: "50%" }}
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=gShubham7&theme=transparent&count_private=true&show_icons=true&hide_border=true" //stats
          />
        </a>
      </div>
    </div>
    
    </>
  );
};

export default Stats;