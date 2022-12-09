/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useRef } from "react";
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from "sweetalert2";

import emailjs from "@emailjs/browser";

import "./Contact.css";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "3em",
  },
  form: {
    width: "100%",
  },
  formfield: {
    width: "100%",
    marginBottom: "2rem",
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const greetings = "Say Hello!!!";

  const form = useRef();
  const [text, setText] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!text.name || !text.email || !text.message) {
      return alert("Field can not be empty!");
    }
    emailjs
      .sendForm(
        "service_pij59oh",
        "template_2zl2hva",
        form.current,
        "b-XgSHNEB8NI9LCMr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You have sent an email!",
      showConfirmButton: false,
      timer: 1500,
    });
    e.target.reset();
  };

  return (
    <section id="contact">
      <h1 style={{ textAlign: "center", padding: "40px", fontSize: "3rem" }}>
        Contact
      </h1>
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <div className="_form_wrapper">
            <form ref={form} onSubmit={sendEmail} className={classes.form}>
              <TextField
                id="outlined-name-input"
                label="Name"
                type="text"
                size="small"
                variant="filled"
                name="name"
                value={text.name}
                onChange={handleChange}
                className={classes.formfield}
              />
              <TextField
                id="outlined-password-input"
                label="Email"
                type="email"
                size="small"
                variant="filled"
                name="email"
                value={text.email}
                onChange={handleChange}
                className={classes.formfield}
              />
              <TextField
                id="outlined-password-input"
                label="Message"
                type="textarea"
                size="small"
                multiline
                minRows={5}
                variant="filled"
                name="message"
                value={text.message}
                onChange={handleChange}
                className={classes.formfield}
              />
              <button type="submit" value="Send" className="submit-btn">
                <i className="fas fa-terminal"></i>
                <Typography component="span">
                  {" "}
                  Send to gaikwad7777@gmail.com
                </Typography>
              </button>
            </form>
          </div>
          <h1 className="contact_msg">
            <TextDecrypt text={greetings} />
          </h1>
        </div>
      </Container>
    </section>
  );
};
