import React from "react";
import "../css/Skills.css";

const FrontendSkills = [
  { name: "HTML / CSS", percent: 95 },
  { name: "React", percent: 85 },
  { name: "JavaScript", percent: 70 },
  { name: "Tailwind CSS", percent: 80 },
];

const BackendSkills = [
  { name: "Node.js", percent: 85 },
  { name: "Express.js", percent: 75 },
  { name: "MySQL", percent: 85 },
  { name: "MongoDB", percent: 60 },
];

const Tools = [
  { name: "Git", percent: 85 },
  { name: "GitHub", percent: 70 },
  { name: "VS Code", percent: 85 },
  { name: "Postman", percent: 60 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-dark">
      <div className="skills-dark-container">
        <h2 className="skills-dark-title">
          My <span>Skills</span>
        </h2>
        <p className="skill-desc" >This is my Skills in Inforamtion Technology Field</p>

        <div className="skills-dark-grid">

          {/* Frontend Skills */}
          <div className="skills-box">
            <h3>Frontend Skills</h3>
            {FrontendSkills.map((skill, i) => (
              <div className="skill-row" key={i}>
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Backend Skills */}
          <div className="skills-box">
            <h3>Backend Skills</h3>
            {BackendSkills.map((skill, i) => (
              <div className="skill-row" key={i}>
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="skills-box">
            <h3>Tools</h3>
            {Tools.map((skill, i) => (
              <div className="skill-row" key={i}>
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
