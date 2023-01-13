import React from "react";

export const Stats = () => {
  return (
    // streak
    <>
      <div>
        <h1 style={{textAlign:"center", padding:"40px"}}>GitHub Stats</h1>
        <div align="center">
          <a href="https://github.com/gShubham7">
            <img
              style={{ width: "50%" }}
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com?user=gShubham7&theme=tokyonight_duo&hide_border=true"
              alt="streak"
            />
          </a>
        </div>
        <div align="center">
          <a href="https://github.com/gShubham7">
            <img
              style={{ width: "50%" }}
              align="center"
              src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=gShubham7&theme=transparent&hide_border=true&layout=compact" //launguages             
              alt="language"
            />
          </a>
        </div>
        <div align="center">
          <a href="https://github.com/gShubham7">
            <img
              style={{ width: "50%" }}
              align="center"
              src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=gShubham7&theme=transparent&count_private=true&show_icons=true&hide_border=true" //stats
              alt="stats"
            />
          </a>
        </div>
      </div>
    </>
  );
};
