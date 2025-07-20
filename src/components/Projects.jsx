import React, { useRef, useState } from "react";
import CustomHook from "./CustomHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register gsap
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Projects = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".scroll-up");

    elements.forEach((element, index) => {
      const fromX = index % 2 === 0 ? 100 : -100;

      gsap.fromTo(
        element,
        {
          x: fromX,
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: element,
            start: "bottom 120%",
            end: "bottom 95%",
            scrub: true,
          },
        }
      );
    });
  });

  const [listProjects] = useState([
    {
      name: "Farm to Market – Agritech Marketplace (Final Year Project)",
      des: "Developed a full-stack agritech marketplace that connects farmers with consumers. The platform features real-time product listings, buyer-to-farmer chat, role-based dashboards, and secure checkout functionality, providing a seamless farm produce buying experience.",
      mission: "Full Stack Development, Agritech, E-commerce",
      language: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS",
      images: "images/farm_to_market.png",
      link: "https://farm2market-nu.vercel.app/",
    },
    {
      name: "Posters E-Commerce Web Site",
      des: "Developed an e-commerce website for poster sales, Including admin interface, featuring a responsive design, and a user-friendly interface for seamless browsing, selection, and purchase of products.",
      mission: "Front-end, Back_end, UI/UX design",
      language: "HTML, CSS, React JS, Node JS",
      images: "images/poster_website.png",
      link: "https://e-comm-frontend-og8j.onrender.com",
    },
    {
      name: "Sundowns Studio website",
      des: "Sundowns Studio is a dynamic clone website featuring a sleek, This project highlights my skills in replicating immersive design elements and delivering a visually captivating user experience.",
      mission: "Front-end, User-friendly interface",
      language: "HTML, CSS, JavaScript ",
      images: "images/sundown.png",
      link: "https://jaishankarreddy.github.io/sundown/",
    },
    {
      name: "Website Hero Page",
      des: "User-friendly interface with rich media and vibrant visuals. This project highlights my skills in replicating immersive design elements and delivering a visually captivating user experience.",
      mission: "Front-end, User-friendly interface",
      language: "HTML, CSS, React JS",
      images: "images/earth.png",
      link: "https://jaishankarreddy.github.io/Poster-Website-Hero-page/",
    },
    {
      name: "Spline 3D Model Integration",
      des: "Created a landing page that integrates a real-time interactive 3D model using Spline. This project showcases how 3D elements can enhance web design and user experience by embedding them seamlessly within a front-end layout.",
      mission: "Front-end, UI/UX, 3D Model Integration",
      language: "HTML, CSS, Spline",
      images: "images/spline_3d.png",
      link: "https://jaishankarreddy.github.io/spline/",
    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="projects overflow-x-hidden" ref={scrollTab}>
      <div
        className=" text-3xl md:text-5xl font-bold mb-8 flex justify-center gap-3"
        ref={(el) => el && divs.current.push(el)}
      >
        My<span className="text-orange-500">Projects</span>
      </div>
      <div
        className="des project_disc"
        ref={(el) => el && divs.current.push(el)}
      >
        {/* 20 */}
        These are some of my unique projects, creating responsive user
        interfaces and efficient back-end systems. My expertise ensures
        seamless, scalable web applications from front to back.
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div
            className={`item scroll-up ${key % 2 !== 0 ? "reverse" : ""}`}
            key={key}
          >
            <a href={value.link}>
              <div className="images ">
                <img
                  className="project_image"
                  src={value.images}
                  alt="3D Avatar"
                />
              </div>
            </a>
            <div className="content">
              <h3 className="font-bold ">{value.name}</h3>
              <div className=" my-5 sm:my-5  text-gray-800 text-sm sm:text-base   font-medium  ">
                {value.des}
              </div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="  text-gray-500 font-semibold text-sm">
                    {value.mission}
                  </div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <h4>Languages</h4>
                  <div className="flex items-center justify-between text-gray-500 font-semibold text-sm">
                    <span>{value.language}</span>
                    <a
                      href={value.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-gray-200 hover:bg-orange-500 text-white rounded-xl px-3 py-2 sm:px-5 sm:py-3 text-base">
                        <FontAwesomeIcon
                          style={{ color: "black" }}
                          icon={faLink}
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

gsap.registerPlugin(ScrollTrigger);
export default Projects;
