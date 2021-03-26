import React, { Component } from "react";
import "./assets/css/blogs.css";
import twitter from "./assets/bg.jpg";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import HomePage from "./HomePage";

export default class Blogs extends Component {
  async componentDidMount() {
    fetch("/api/viewblog")
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
      <div class="blog-container">
        <div class="blog-title">
        <button class="close" onClick={this.goBack}>
            <i class="fa fa-close"></i>
          </button>
          <h3 class="blog-heading">
            <p class="blog-pre-heading">Check out my latest blog posts</p>
            My Blog
          </h3>
        </div>
        <div class="blog-card">
          {this.state.items.map((item) => (
            <div key={item.id} className="card">
              <a href={item.slug}>
                <img src={"/api/cdn/" + item.img_link} class="card-image"></img>
              </a>
              <div class="card-content">
                <h4 class="card-title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
