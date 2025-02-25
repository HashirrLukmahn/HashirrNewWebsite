import React, { Component } from "react";
import Slide from "react-reveal";


class Resume extends Component {
  
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

  // Render highlights properly (supports nested arrays, not really lmao)
  renderHighlights(highlights) {
    if (!Array.isArray(highlights)) return <p>No highlights available.</p>;
  
    return highlights.map((item, index) => {
      if (Array.isArray(item)) {
        return (
          <ul key={index} className="nested-list">
            {item.map((subItem, subIndex) => (
              <li key={subIndex} className="nested-item">
                {subItem}
              </li>
            ))}
          </ul>
        );
      } else {
        return <li key={index} className="item">{item}</li>;
      }
    });
  }
  
  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;

    const education = this.props.data.education.map((education) => (
      <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="info">
          {education.major}
          <br />
          {education.minor}
          <br />
          <em className="date">{education.graduated}</em>
        </p>
        <p>{education.description}</p>
        <ul className="highlights-list">
          {this.renderHighlights(education.highlights)}
        </ul>
        <ul className="highlights-list">
          {this.renderHighlights(education.achievements)}
        </ul>
      </div>
    ));

    const work = this.props.data.work.map((work) => (
      <div key={work.company}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
          <br />
          <em className="date">{work.years}</em>
        </p>
        <ul className="description-list">
          {this.renderHighlights(work.description)}
        </ul>
      </div>
    ));

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = "#3498db";
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
