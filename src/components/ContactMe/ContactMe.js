import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import "../ContactMe/ContactMe.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    errorMessage: false
  };
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    if (name === "" || email === "" || subject === "" || message === "") {
      this.setState((prevState, props) => {
        return { errorMessage: !prevState.errorMessage };
      });
      return;
    }
    let templateParams = {
      from_name: email,
      to_name: "karleisenyabut@gmail.com",
      subject: subject,
      message_html: message
    };
    emailjs.send(
      "gmail",
      "template_aWOvM4VI",
      templateParams,
      "user_L6RJQK3f3fqBBmnJTnPir"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <>
        <div className="errorInput">
          {this.state.errorMessage && (
            <div className="errorMessage">Oops! All fields are required :(</div>
          )}
        </div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            <Label className="text-muted" for="email">
              Email address
            </Label>{" "}
            <span className="requiredField"> *</span>
            <Input
              id="email"
              type="email"
              name="email"
              value={this.state.email}
              className="text-primary"
              onChange={this.handleChange.bind(this, "email")}
              placeholder="Enter email"
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup>
            <Label className="text-muted">Name</Label>
            <span className="requiredField"> *</span>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              className="text-primary"
              onChange={this.handleChange.bind(this, "name")}
              placeholder="Name"
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup>
            <Label className="text-muted">Subject</Label>
            <span className="requiredField"> *</span>
            <Input
              type="text"
              name="subject"
              className="text-primary"
              value={this.state.subject}
              onChange={this.handleChange.bind(this, "subject")}
              placeholder="Subject"
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup>
            <Label className="text-muted">Message</Label>
            <span className="requiredField"> *</span>
            <Input
              type="textarea"
              name="message"
              className="text-primary"
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}
            />
          </FormGroup>
          <div className="submitBtnContainer">
            <Button
              className="submitBtn"
              variant="primary"
              type="submit"
              onClick={this.errorMessage}
            >
              Submit
            </Button>
          </div>
        </Form>
      </>
    );
  }
}
export default ContactForm;
