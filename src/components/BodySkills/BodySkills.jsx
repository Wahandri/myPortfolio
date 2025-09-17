import React from "react";
import "./BodySkills.css";
import SkillsImage from "../SkillsImage/SkillsImage";
import { SKILLS } from "../../data/skills";

const BodySkills = () => {
  return (
    <section className="bodySkills" aria-labelledby="body-skills-title">
      <h2 id="body-skills-title" className="bodySkills__title">
        Skills
      </h2>
      <div className="skillsGrid">
        {SKILLS.map(({ id, name, projects }) => (
          <article key={id} className="skillCard">
            <div className="skillCard__icon" aria-hidden="true">
              <SkillsImage skill={id} />
            </div>
            <div className="skillCard__content">
              <h3 className="skillCard__name">{name}</h3>
              <ul
                className="projectChipList"
                aria-label={`Proyectos donde utilizo ${name}`}
              >
                {projects.map(({ href, label }) => (
                  <li key={href} className="projectChipItem">
                    <a className="projectChip" href={href}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BodySkills;
