import { IconButton, Tooltip, Zoom } from "@material-ui/core";
import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BiMedal } from "react-icons/bi";

import "./topbar.css";

export const Topbar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav>
      <Tooltip
        title={"Home"}
        placement='right'
        TransitionComponent={Zoom}
      >
      <IconButton rel="noopener noreferrer" underline="none" color="inherit">
        <a
          href="#home"
          onClick={() => setActiveNav("#home")}
          className={activeNav === "#home" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>        
      </IconButton></Tooltip>
      <Tooltip
        title={"About"}
        placement='right'
        TransitionComponent={Zoom}
      >
      <IconButton rel="noopener noreferrer" underline="none" color="inherit">
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
      </IconButton></Tooltip>
      <Tooltip
        title={"Projects"}
        placement='right'
        TransitionComponent={Zoom}
      >
      <IconButton rel="noopener noreferrer" underline="none" color="inherit">
        <a
          href="#works"
          onClick={() => setActiveNav("#works")}
          className={activeNav === "#works" ? "active" : ""}
        >
          <BiBook />
        </a>
      </IconButton></Tooltip>
      <Tooltip
        title={"Skills"}
        placement='right'
        TransitionComponent={Zoom}
      >
      <IconButton rel="noopener noreferrer" underline="none" color="inherit">
        <a
          href="#skills"
          onClick={() => setActiveNav("#skills")}
          className={activeNav === "#skills" ? "active" : ""}
        >
          <BiMedal />
        </a>
      </IconButton></Tooltip>
      <Tooltip
        title={"Contact"}
        placement='right'
        TransitionComponent={Zoom}
      >
      <IconButton rel="noopener noreferrer" underline="none" color="inherit">
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </IconButton></Tooltip>
    </nav>
  );
};
