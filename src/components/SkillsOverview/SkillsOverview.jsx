import React from "react";
import "./SkillsOverview.css";
import SkillsImage from "../SkillsImage/SkillsImage";
import { SKILLS } from "../../data/skills";

const SkillsOverview = () => {
  return (
    <section className="skillsOverview" aria-labelledby="skills-overview-title">
      <h2 id="skills-overview-title" className="skillsOverview__title">
        Skills
      </h2>
      <div className="skillsOverview__grid">
        {SKILLS.map(({ id, name, projects }) => (
          <article key={id} className="skillsOverview__card">
            <div className="skillsOverview__icon" aria-hidden="true">
              <SkillsImage skill={id} />
            </div>
            <h3 className="skillsOverview__name">{name}</h3>
            <ul
              className="skillsOverview__projects"
              aria-label={`Proyectos destacados con ${name}`}
            >
              {projects.map(({ href, label }) => (
                <li key={href} className="skillsOverview__chipItem">
                  <a className="skillsOverview__chip" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillsOverview;
