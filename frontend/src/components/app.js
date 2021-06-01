import React, { Component, useState } from "react";
import { render } from "react-dom";
// import About from "./About";
// import HomePage from "./HomePage";
// import Blogs from "./Blogs";
// import Slug from "./Slug";
// import ContactMe from "./ContactMe";
// import Projects from "./Projects";
// import { PageTransition } from "@steveeeie/react-page-transition";
import { Suspense, lazy } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const HomePage = lazy(() => import("./HomePage"));
const About = lazy(() => import("./About"));
const Blogs = lazy(() => import("./Blogs"));
const Slug = lazy(() => import("./Slug"));
const Projects = lazy(() => import("./Projects"));
const ContactMe = lazy(() => import("./ContactMe"));

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => {
            return (
              // <PageTransition
              // preset="carouselToBottom"
              // transitionKey={location.pathname}
              // >
              <Suspense fallback={<div>loading</div>}>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/about" component={About} />
                  <Route path="/blogs" component={Blogs} />
                  <Route path="/contactme" component={ContactMe} />
                  <Route path="/project" component={Projects} />
                  <Route path="/:slug" component={Slug} />
                </Switch>
              </Suspense>
              // </PageTransition>
            );
          }}
        />
      </Router>
    );
  }
}
const appDiv = document.getElementById("app");
render(<App />, appDiv);
