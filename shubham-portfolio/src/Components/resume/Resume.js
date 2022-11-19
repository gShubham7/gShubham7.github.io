import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import { TextDecrypt } from '../content/TextDecrypt';
import ResumePDF from './../../assets/Shubham_Gaikwad_Resume.pdf';
import {
  ResumeIcon
} from '../content/ResumeButton';
import {FaDownload} from "react-icons/fa"

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'fixed',
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    // display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  
}));

export const Resume = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerText}>
    <Link
      color='inherit'
      underline='none'
      href= {`${ResumePDF}`}
      target='_blank'      
      rel='noopener noreferrer'
      // style={{display:"flex",alignItems:"center"}}
    >
      <ResumeIcon />
      <Typography component='span'>
        <TextDecrypt text={' Resume'} />
      </Typography>
    </Link>    
      <Link href= {`${ResumePDF}`} download={"Shubham_Gaikwad_Resume.pdf"}>
      <FaDownload/>
      </Link>
    </div>
  );
};
