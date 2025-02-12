import React from "react";
import { About } from "../sketch-legacy/sketch/about/about.js";
import { Contact } from "../sketch-legacy/sketch/contact/contact.js";
import Cv from "./Cv";
import Music from "../../pages/music/Music.js";

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="about"
          className={`${this.props.article === "about" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <br />
          <About />
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === "work" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <Cv></Cv>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <Contact />
          {close}
        </article>
        <article
          id="music"
          className={`${this.props.article === "music" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <Music></Music>
          {close}
        </article>
        <article
          id="variations"
          className={`${this.props.article === "variations" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          {this.props.isArticleVisible &&
            this.props.article === "variations" && (
              <bsm-iframe
                src={"https://variations.web.app"}
                width={"100%"}
                height={"85vh"}
              ></bsm-iframe>
            )}
          {close}
        </article>
      </div>
    );
  }
}

export default Main;
