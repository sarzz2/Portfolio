import React, { Component } from "react";
import "./assets/css/about.css";
import LazyLoad from "react-lazy-load";

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
            <i class="fas fa-times"></i>
          </button>
          <h3 class="about-us-heading">
            <p class="about-us-pre-heading">Get to know me</p>
            About Me
          </h3>
        </div>
        <div class="about-image-container">
          <LazyLoad>
            <img class="about-image" src="/api/cdn/aboutme"></img>
          </LazyLoad>
          <div class="about-us-text">
            <h5 class="whoami">Who am i?</h5>
            <h4 class="answer">I'm Sarthak Singh a Developer</h4>
            <p class="text">
              I am a Developer based from India and I have been
              building noteworthy UX/UI designs and websites for years, which
              comply with the latest design trends. I help convert a vision and
              an idea into meaningful and useful products. Having a sharp eye
              for product evolution helps me prioritize tasks, iterate fast and
              work faster.
            </p>
            <hr></hr>
            <div class="about-details">
              <p class="about-title">Name:</p>
              <p>Sarthak Singh</p>
              <p class="about-title">Email: </p>
              <p>sarzzenquiry@gmail.com</p>
              <p class="about-title"> Age: </p>
              <p>20</p>
              <p class="about-title">From: </p>
              <p>India</p>
            </div>
            <div class="skills">
            <h1>Skill Set</h1>
            <hr></hr>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <div class="lang">
            <div class="list"><i class="fab fa-python"></i><span>  Python</span><br></br><hr class="fadewhite"></hr></div>
            <div class="list"><i class="fab fa-js"></i><span>  JavaScript</span><br></br><hr class="fadewhite"></hr></div>
            <div class="list"><i class="fas fa-bullhorn"></i><span>  TypeScript</span><br></br><hr class="fadewhite"></hr></div>
            <div class="list"><i class="fab fa-react"></i><span>  React JS</span><br></br><hr class="fadewhite"></hr></div>
            <div class="list"><i class="fas fa-bullhorn"></i><span>  Next JS</span><br></br><hr class="fadewhite"></hr></div>
            <div class="list"><i class="fas fa-bullhorn"></i><span>  SQL<br></br><hr class="fadewhite"></hr></span></div>
            <div class="list"><i class="fas fa-bullhorn"></i><span>  Flutter<br></br><hr class="fadewhite"></hr></span></div>
            <div class="list"><i class="fas fa-bullhorn"></i><span>  Java<br></br><hr class="fadewhite"></hr></span></div>
            <div class="list"><i class="fas fa-bullhorn"></i><span>  C#<br></br><hr class="fadewhite"></hr></span></div>
            <div class="list"><i class="fas fa-bullhorn"></i><span>  C++<br></br><hr class="fadewhite"></hr></span></div>
            <div class="list"><i class="fas fa-bullhorn"></i><span>  Golang<br></br><hr class="fadewhite"></hr></span></div>
            <div class="list"><i class="fab fa-docker"></i><span>  Docker</span><br></br><hr class="fadewhite"></hr></div>
            <div class="list"><i class="fas fa-bullhorn"></i><span>  Shell<br></br><hr class="fadewhite"></hr></span></div>

      






            </div>
           
          </div>
          </div>
          
        </div>
            </div>
    );
  }
}

