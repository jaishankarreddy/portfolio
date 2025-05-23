import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  // State to trigger animation on page load
  const [isAnimating, setIsAnimating] = useState(false);

  
  // Reset animation on component mount
  useEffect(() => {
    setIsAnimating(false);
    const timeout = setTimeout(() => setIsAnimating(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  // Stagger effect for container
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Spring animation for elements
  const springAnimation = {
    initial: { x: "-10vw", opacity: 0, filter: "blur(10px)" },
    animate: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 90, damping: 9, mass: 1 },
    },
  };

  const imageAnimation = {
    initial: { x: "10vw", opacity: 0, filter: "blur(10px)" },
    animate: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 80, damping: 7, mass: 1 },
    },
  };

  const iconAnimation = {
    initial: { y: "7vw", opacity: 0, filter: "blur(10px)" },
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 80, damping: 10, mass: 2 },
    },
  };

  return (
    <section className="hero relative z-10 mx-auto max-w-6xl px-5 py-10 md:py-20 flex flex-col-reverse md:flex-row gap-8 items-center min-h-svh mt-12 -mb-10 m-full">
      {/* Content Section */}
      {isAnimating && (
        <motion.div
          key="right-section"
          className="right w-full md:w-1/2 space-y-4 text-center md:text-left"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="hi_there text-xl md:text-2xl font-semibold"
            variants={springAnimation}
          >
            Hi There,
          </motion.h2>
          <motion.h1
            className="name text-4xl md:text-5xl font-bold py-2 text-orange-500 text-shadow"
            variants={springAnimation}
          >
            <span className="i_am text-black">I'm</span>
            <p className="my_name md:ml-20 mt-1">Jaishankar Reddy</p>
          </motion.h1>
          <motion.h1
            className="full_stack text-2xl md:text-3xl font-bold pb-2"
            variants={springAnimation}
          >
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start text-xl md:text-2xl font-bold">
              <span className="i_am_a mr-2 text-gray-800">I am a</span>
              <p className="full_stack text-orange-600">Full-Stack Developer</p>
            </div>
          </motion.h1>
          <motion.p
            className="hero_disc text-gray-700 max-w-xl text-sm font-medium md:text-base pb-2 mx-auto md:mx-0"
            variants={springAnimation}
          >
          Full Stack Web Developer specializing in the MERN stack, with
            expertise in creating responsive, scalable applications. I focus on
            both front-end and back-end development, prioritizing user
            experience and efficiency.
          </motion.p>
          <motion.a href="resume.pdf" variants={springAnimation}>
            <motion.button className="home_button bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-6 py-2 text-base my-5">
              Download CV
            </motion.button>
          </motion.a>
        </motion.div>
      )}

      {/* Image Section */}
      {isAnimating && (
        <motion.div
          key="left-section"
          className="left w-full md:w-1/2 flex flex-col items-center md:pl-10 lg:pl-44"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={imageAnimation}
            className="home_img relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border-8 border-white overflow-hidden shadow-lg"
          >
            
            <img
              src={"images/myImg.jpg"}
              alt="Profile"
              className="object-cover w-full h-full z-20"
            />
          </motion.div>

          <motion.div className="social_media_container flex space-x-6 mt-6 md:mt-10">
            <motion.a
              variants={iconAnimation}
              href="#"
              className="hover:text-orange-500"
            >
              <FaFacebook className="social_media h-6 w-6 md:h-5 md:w-5" />
            </motion.a>
            <motion.a
              variants={iconAnimation}
              href="#"
              className="hover:text-orange-500"
            >
              <FaTwitter className="social_media h-6 w-6 md:h-5 md:w-5" />
            </motion.a>
            <motion.a
              variants={iconAnimation}
              href="#"
              className="hover:text-orange-500"
            >
              <Instagram className="social_media h-6 w-6 md:h-5 md:w-5" />
            </motion.a>
            <motion.a
              variants={iconAnimation}
              href="https://www.linkedin.com/in/jai-shankar-9a65ab314"
              className="hover:text-orange-500"
            >
              <FaLinkedin className="social_media h-6 w-6 md:h-5 md:w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
