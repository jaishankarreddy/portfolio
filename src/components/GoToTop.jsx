import React, { useEffect, useState } from "react";
import { FaCircleChevronUp } from "react-icons/fa6";
import { scrollToTop } from "../lib/scroll";

const GoToTop = () => {
  const goTop = () => {
    scrollToTop();
  };


const [isScrolled, setIsScrolled] = useState();

useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button onClick={goTop} className="go_to_top" >
      <div className={`fixed z-50 bottom-12 right-9 text-3xl   ${isScrolled ? "opacity-100 ":"opacity-0" }`}>
        <FaCircleChevronUp className="opacity-80 text-orange-500 animate-bounce hover:opacity-100 transition-opacity" />
      </div>
    </button>
  );
};

export default GoToTop;
