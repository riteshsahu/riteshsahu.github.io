import { skillsByCategories } from "@/config/skills";
import React from "react";

export default function Skills() {
  return (
    <section className="card mb-8">
      <h2 className="heading-2">Skills</h2>
      <div>
        {skillsByCategories.map((dt) => (
          <ul className="flex flex-wrap mb-3">
            <li key={dt.categoryName} className="mr-2">
              <span className="title">{dt.categoryName}:</span>
            </li>
            {dt.skills.map((skill) => (
              <li key={skill.name} className="pr-2">
                <a
                  rel="noreferrer"
                  className="link"
                  target="_blank"
                  href={skill.link}
                  title={skill.title}
                >
                  {skill.name},
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
