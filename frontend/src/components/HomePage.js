import React, { Component, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazy-load";
import { slide as Menu } from 'react-burger-menu'

export default class App extends Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  burgerToggle() {
    let linksEl = document.querySelector(".narrowLinks");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  }
  state = {
    isLoading: false,
  };
  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <div class="container">
        <img src="/api/cdn/logo" class="logo"></img>

        <div class="topnav">
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

        <div class="name">
          <h4>Sarthak Singh</h4>
        </div>
        <LazyLoad>
          <div class="dev">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .typeString("I'm a ")
                  .pauseFor(100)
                  .typeString("Developer")
                  .start()
                  .pauseFor(1000)
                  .deleteChars(9)
                  .typeString("Student")
                  .start()
                  .pauseFor(1000)
                  .deleteChars(7)
                  .typeString("Designer")
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </LazyLoad>

        <div class="socialbox">
          <a class="social">
            <ul>
              <li>
                <a href="https://twitter.com/sarthak_singh2">
                  <i
                    class="fab fa-twitter fa-2x"
                    style={{ color: "white" }}
                  ></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/sarzz2">
                  <i class="fab fa-github fa-2x" style={{ color: "white" }}></i>
                </a>
              </li>
              <li>
                <a href="https://discordapp.com/users/576760984576983060/">
                  <i
                    class="fab fa-discord fa-2x"
                    style={{ color: "white" }}
                  ></i>
                </a>
              </li>
            </ul>
          </a>
        </div>
      </div>
    );
  }
}
