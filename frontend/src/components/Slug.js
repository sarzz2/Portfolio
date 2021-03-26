import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "./assets/css/slugs.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Moment from "react-moment";
import twitter from "./assets/twitter.png";

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={dark} language={language} children={value} />
    );
  },
};
export default class Slug extends Component {
  async componentDidMount() {
    fetch("/api" + window.location.pathname)
      .then((response) => response.json())
      .then((data) => (console.log(data), this.setState({ items: data })));
  }

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  render() {
    return (
      <div class="slug-container">
       <Link to="/"> <img src={twitter} class="logo"></img></Link>
        <div class={"slug-topnav"}>
          <Link to="/contactme">Contact</Link>
          <Link to="/blogs">Blog</Link>
          <Link to="/contact">Projects</Link>
          <Link to="/about">About</Link>
          {/* <a class="icon">
          <i class="fa fa-bars"></i>
        </a> */}
        </div>
        <div class="slug-post">
          {this.state.items.map((item) => (
            <div key={item.slug} className="slug-card">
              <a href={item.slug}></a>
                <div>
                  <img
                    src={"/api/cdn/" + item.img_link}
                    class="slug-image"
                  ></img>
                </div>
              <div class="slug-content">
                <h4 class="slug-title">{item.title}</h4>
                <p class="slug-author">sarzz | </p>
                <p class="slug-">
                  <Moment fromNow>{item.created_on}</Moment>
                </p>
                <ReactMarkdown className="slug-text" renderers={renderers}>
                  {item.content}
                </ReactMarkdown>
              </div>
            </div>
          ))}
        </div>

        {/* <div class="comment-container">
      <img class="slug-comment-img" src="http://127.0.0.1:8000/api/cdn/test5/"></img>
      <div style={{float:"left"}}>
        <div style={{float:"left"}}>
          Name 
              </div>
              <div>
                Date Time
              </div>
<p>comment</p>
</div>
  </div> */}
        <footer>
          <div class="footer">
            <a href="https://twitter.com/sarthak_singh2">
              <i
                class="fa fa-twitter fa-2x"
                style={{ color: "white", margin: "1% 0" }}
              ></i>
            </a>
            <a href="https://github.com/sarzz2">
              <i
                class="fa fa-github fa-2x"
                style={{ color: "white", margin: "1% 0" }}
              ></i>
            </a>
            <a href="https://discordapp.com/users/576760984576983060/">
              <i
                class="fab fa-discord fa-2x"
                style={{ color: "white", margin: "1% 0" }}
              ></i>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
