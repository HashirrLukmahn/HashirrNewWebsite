import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal/Fade"; // Add this import

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;
    const project = this.props.data.project;
    const github = this.props.data.github;

    
    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            {/*<Zmage alt={projects.title} src={projectImage} />*/}
            <div className="project-info">
              <h3>{projects.title}</h3>
              <p className="project-description">{projects.description}</p>
              {projects.technologies && (
                <ul className="project-tech">
                  <span className="tech-label">Technologies: </span><br/>
                  {projects.technologies}
                </ul>
              )}
              {projects.url && (
                <div className="project-link">
                  <a href={projects.url} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    });
    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Here are some projects I have worked on</h1>
              <div className="twelve columns">
                <div id="portfolio-wrapper" className="portfolio-grid">
                  {projects}
                </div>
              </div>
              {
            <Fade bottom duration={2000}>
              <ul className="social">
                {/*<a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
               </a>*/}
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
            }
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;