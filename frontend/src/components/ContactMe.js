import React, { Component } from "react";
import "./assets/css/contactme.css";
import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export default class ContactMe extends Component {


  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Email: '',
      Subject: '',
      Message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);

  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });

  }

   handleSubmit(){
     axios.post('/api/contact',{
        name: this.state.Name,
        email: this.state.Email,
        subject: this.state.Subject,
        message: this.state.Message
    },)
      .then((response) => {
          alert("Message Sent"+response.data);
          window.location="/contactme";
      });
  }


  goBack() {
    this.props.history.goBack();
  } 
  render() {
    return (
      <div class="contactme-container">
        <div class="contactme-title">
          <button class="close" onClick={this.goBack}>
            <i class="fa fa-close"></i>
          </button>
          <h3 class="contactme-heading">
            <p class="contactme-pre-heading">Get in touch with know me</p>
            Contact Me
          </h3>
        </div>
        <div class="contactme-grid-wrapper">
          <div class="form">
            <h4 class="message-me">Message Me</h4>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                class="textfield-name"
                name="Name"
                required
                onChange={this.handleChange}
              ></input>
              <input
                type="email"
                placeholder="Email"
                required
                class="textfield-email"
                name="Email"
                onChange={this.handleChange}
              ></input>
              <br></br>
              <input
                type="text"
                placeholder="Subject"
                required
                class="textfield-subject"
                name="Subject"
                onChange={this.handleChange}
                required
              ></input>
              <br></br>
              <textarea
                placeholder="Message"
                rows="8"
                required
                name="Message"
                onChange={this.handleChange}
              ></textarea>
              <br></br>
              <input
                type="submit"
                value="Send Message"
                class="textfield-send"
              ></input>
            </form>
          </div>
          <div class="contactme-info">
            {/* <h4 class="contactinfo">Contact Info</h4>
            <p>Feel free to contact me anytime</p>

              <ul type="none">
                <li class="list-class">
                  <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                  <hr class="contactme-hr"></hr>
                  <div class="contactme-detail">
                    <span>
                      <p class="contactme-info-name">Name</p>
                      <span class="contactme-info-span">Sarthak Singh</span>
                    </span>
                  </div>
                </li>
              </ul>


              <ul type="none">
                <li class="list-class">
                  <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                  <hr class="contactme-hr"></hr>
                  <div class="contactme-detail">
                    <span>
                      <p class="contactme-info-name">Email Me</p>
                      <span class="contactme-info-span">sss@example.comm</span>
                    </span>
                  </div>
                </li>
              </ul> */}
          </div>
        </div>
      </div>
    );
  }
}
