import React, { Component } from "react";
import "./assets/css/blogs.css";
import LazyLoad from "react-lazy-load";

export default class Blogs extends Component {
  async componentDidMount() {
    await fetch("/api/viewblog")
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
            <i class="fas fa-times"></i>
          </button>
          <h3 class="blog-heading">
            <p class="blog-pre-heading">Check out my latest blog posts</p>
            My Blog
          </h3>
        </div>
        <div class="blog-card">
          {this.state.items.map((item) => (
            <div key={item.id} className="card">
              <LazyLoad>
                <a href={item.slug}>
                  <img
                    src={"/api/cdn/" + item.img_link}
                    class="card-image"
                  ></img>
                </a>
              </LazyLoad>
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
