import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faLaravel,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { MdLoop } from "react-icons/md";

import CustomHook from "./CustomHook";
import "./progress.css";

const Skills = () => {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  // List of skills without the percentage counter
  const [listSkills] = useState([
    {
      name: "HTML5",
      des: "With a strong foundation in HTML, I bring clean, semantic structure to every project.",
      icon: faHtml5,
      type: "fa",
    },
    {
      name: "CSS3",
      des: "Proficient in CSS, I design responsive, visually appealing layouts that work seamlessly on any device.",
      icon: faCss3,
      type: "fa",
    },
    {
      name: "JavaScript",
      des: "I build dynamic, interactive features that enhance user engagement and functionality.",
      icon: faJs,
      type: "fa",
    },
    {
      name: "React Js",
      des: "I create dynamic, component-based interfaces that ensure smooth user interactions and efficient rendering.",
      icon: faReact,
      type: "fa",
    },
    {
      name: "Node Js",
      des: "I develop scalable, high-performance back-end solutions, handling data-intensive tasks and API integrations.",
      icon: faNodeJs,
      type: "fa",
    },
    {
      name: "Express Js",
      des: "I build fast, unopinionated backend services using Express for Node.js.",
      icon: SiExpress,
      type: "react",
    },
    {
      name: "MongoDB",
      des: "I design flexible, efficient databases, optimizing data storage and retrieval for scalable applications.",
      icon: faDatabase,
      type: "fa",
    },
    {
      name: "Tailwind CSS",
      des: "I utilize Tailwind CSS for rapid styling and efficient, responsive design.",
      icon: SiTailwindcss,
      type: "react",
    },
    {
      name: "Bootstrap",
      des: "I use Bootstrap for quick prototyping and building responsive layouts.",
      icon: faBootstrap,
      type: "fa",
    },
    {
      name: "REST APIs",
      des: "I create and consume RESTful APIs for seamless frontend-backend communication.",
      icon: AiOutlineApi,
      type: "react",
    },
    {
      name: "Git & GitHub",
      des: "I use Git for version control and GitHub for code collaboration and project management.",
      icon: FaGithub,
      type: "react",
    },
    {
      name: "Agile",
      des: "I follow Agile methodologies for iterative development and cross-functional collaboration.",
      icon: MdLoop,
      type: "react",
    },
  ]);

  return (
    <section className="skills -mt-5" ref={scrollTab}>
      <div
        className=" text-3xl font-bold items-center justify-center my-5 sm:my-7 flex gap-2 sm:gap-3 sm:text-5xl "
        ref={(el) => el && divs.current.push(el)}
      >
        My <span className="text-orange-500">Skills</span>
      </div>
      <div className=" des1" ref={(el) => el && divs.current.push(el)}>
        I specialize in full-stack development using the MERN stack, creating
        responsive user interfaces and efficient back-end systems. My expertise
        ensures seamless, scalable web applications from front to back.
      </div>
      <div className="list">
        {listSkills.map((skill, index) => (
          <div
            className="item"
            key={skill.name + index}
            ref={(el) => el && divs.current.push(el)}
          >
            {skill.type === "react" ? (
              <skill.icon className="text-black text-7xl React_icons" />
            ) : (
              <FontAwesomeIcon className="icon" icon={skill.icon} size="2x" />
            )}

            {/* Skill Name */}
            <h3 className="skill_name font-extrabold my-3 name_size">
              {skill.name}
            </h3>

            {/* Skill Description */}
            <div className="des font-semibold">{skill.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
