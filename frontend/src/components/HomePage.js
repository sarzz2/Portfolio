import React, { Component, useState } from "react";
import { render } from "react-dom";
import twitter from "./assets/twitter.png";
import { BrowserRouter as Router,Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-solid-svg-icons'


export default class App extends Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
   burgerToggle() {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
              linksEl.style.display = 'none';
          } else {
              linksEl.style.display = 'block';
          }
  }
  state = {
    isLoading: false,
  };
  render() {
    return (
      <div class="container">
          <img src={twitter} class="logo"></img>

        <div class="topnav">
          <Link to="/contactme">Contact</Link>
          <Link to="/blogs">Blog</Link>
          <Link to="/project">Projects</Link>
          <Link to="/about">About</Link>
        </div>

        <div class="name">
          <h4>Sarthak Singh</h4>
        </div>
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
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div class="socialbox">
          <a class="social">
            <ul>
              <li>
                <a href="https://twitter.com/sarthak_singh2">
                  <i class="fa fa-twitter fa-2x" style={{ color: "white" }}></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/sarzz2">
                  <i class="fa fa-github fa-2x" style={{ color: "white" }}></i>
                </a>
              </li>
              <li>
                <a href="https://discordapp.com/users/576760984576983060/">
                <i class="fab fa-discord fa-2x" style={{ color: "white" }}></i>
                                </a>
              </li>
            </ul>
          </a>
        </div>
      </div>
    );
  }
}
