import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "./assets/css/slugs.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Moment from "react-moment";
import LazyLoad from "react-lazy-load";
import commentBox from 'commentbox.io';
import { slide as Menu } from 'react-burger-menu'

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={dark} language={language} children={value} />
    );
  },
};
export default class Slug extends Component {
  async componentDidMount() {
    await fetch("/api" + window.location.pathname)
      .then((response) => response.json())
      .then((data) => (console.log(data), this.setState({ items: data })));
      this.removeCommentBox = commentBox('5768387913318400-proj',{
        textColor: 'white'
      });
  }
  componentWillUnmount() {

    this.removeCommentBox();
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
        <Link to="/">
          {" "}
          <img src="/api/cdn/logo" class="logo"></img>
        </Link>
        <div class="slug-topnav">
          <a href="/contactme" className="menu-item">Contact</a>
          <a href="/blogs" className="menu-item">Blog</a>
          <a href="/project" className="menu-item">Projects</a>
          <a href="/about" className="menu-item">About</a>
        </div>
        <div class="responsive">
        <Menu right disableAutoFocus> 
          <a href="/contactme" className="menu-item">Contact</a>
          <a href="/blogs" className="menu-item">Blog</a>
          <a href="/project" className="menu-item">Projects</a>
          <a href="/about" className="menu-item">About</a>
          </Menu>
        </div>
        <div class="slug-post">
          {this.state.items.map((item) => (
            <div key={item.slug} className="slug-card">
              <a href={item.slug}></a>
              <LazyLoad>
                <div>
                  <img
                    src={"/api/cdn/" + item.img_link}
                    class="slug-image"
                  ></img>
                </div>
              </LazyLoad>
              <div class="slug-content">
                <h4 class="slug-title">{item.title}</h4>
                <p class="slug-author">
                  sarzz | <Moment fromNow>{item.created_on}</Moment>
                </p>
                <p></p>
                <ReactMarkdown className="slug-text" renderers={renderers}>
                  {item.content}
                </ReactMarkdown>
              </div>
            </div>
          ))}
            <div className="commentbox" style={{width:"80%", margin:"auto"}} />

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
