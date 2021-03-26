import React, { Component } from "react";
import "./assets/css/projects.css";

export default class Projects extends Component {
  async componentDidMount() {
    fetch("/api/viewproject")
      .then((response) => response.json())
      .then((data) => (console.log(data), this.setState({ items: data })));
  }

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  } 
  render() {
    return (
      <div class="projects-container">
        <div class="project-title">
        <button class="close" onClick={this.goBack}>
            <i class="fa fa-close"></i>
          </button>
          <h3 class="project-heading">
            <p class="project-pre-heading">Check my recent projects</p>
            Projects
          </h3>
        </div>
        {this.state.items.map((item) => (
        <div key={item.id} class="project-card">
          <img
            src={"/api/cdn/" + item.img_link}
            class="project-card-img"
          ></img>
          <div class="project-wrapper">
            
        <h1 class="project-card-title">{item.title}</h1>
        <p class="project-card-content">{item.description}</p>
    
          </div>
          <a href={item.github_link} target="_blank">
            <button class="project-github">
              <i class="fa fa-github fa-2x" style={{ color: "black", position:"absolute"}}></i>
                <span style={{marginLeft:"30px", fontSize:"20px"}}> Repository</span>
            </button>
            </a>
        </div>
        ))}
      </div>
    );
  }
}
