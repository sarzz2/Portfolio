import React, { Component } from "react";
import "./assets/css/about.css";
import twitter from "./assets/bg.jpg";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.goBack();
  } 
  render() {
    return (
      <div class="about-us-container">
        <div class="about-us-title">
        <button class="close" onClick={this.goBack}>
            <i class="fa fa-close"></i>
          </button>
          <h3 class="about-us-heading">
            <p class="about-us-pre-heading">Get to know me</p>
            About Me
          </h3>
        </div>
        <div class="about-image-container">
          <img class="about-image"src={twitter}></img>
          <div class="about-us-text">
            <h5 class="whoami">Who am i?</h5>
            <h4 class="answer">I'm Sarthak Singh a Developer</h4>
            <p class="text">I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
            <hr></hr>
            <div class="about-details">
            <p class="about-title">Name:</p><p>Sarthak Singh</p>
            <p class="about-title">Email: </p><p>sss@gmail.com</p>
            <p class="about-title"> Age: </p><p>20</p>  
            <p class="about-title">From: </p><p>New Delhi</p>
                      </div>
          </div>
        </div>
      </div>
    );
  }
}
