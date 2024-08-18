import Alexa from "../assets/Alexa.gif";
import { motion, easeInOut } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(true);
  const activator = () => {
    setActive(!active);
  };
  const svgVarian = {
    hover: {
      scale: 1.2,
    },
  };
  const pathVariant = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        ease: easeInOut,
        duration: 1.5,
      },
    },
  };
  return (
    <div>
      <nav className="bg-slate-950  w-full h-14 flex items-center justify-between px-5">
        <div className="flex gap-2 md:gap-3 items-center">
          <motion.img
            animate={{
              opacity: [0, 1],
              //x:[260,260,260,260,260,260,260,1,0],
              //y:[330,330,330,330,330,330,330,1,0],
              //scale:[2,1,1.5,1,2.2,1.7,1.1,2,1,2,1,100,5,1],
            }}
            transition={{
              delay: 3.4,
            }}
            className="w-10 rounded-full h-10"
            src={Alexa}
            alt=""
          />
          <motion.h1
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 4,
              duration: 1,
            }}
            className="text-white flex text-xs md:text-lg"
          >
            Hey there! Welcome{" "}
            <p className="hidden md:block">
              ,This site is currently being updated.
            </p>
          </motion.h1>
        </div>
        <ul className="text-white px-5 flex gap-3 items-center justify-end h-full capitalize text-xl">
          <li
            onClick={activator}
            // template literels problem line bellow
            //  className={`${active} : "flex gap-1 flex-col items-center border-b-4 p-1" ? "flex gap-1 flex-col items-center"`}
          >
            <Link to='/'>
            <motion.svg
              initial={{
                scale: 1,
                rotate: 360,
              }}
              whileInView={{
                rotate: 0,
              }}
              transition={{
                duration: 0.2,
              }}
              whileHover={svgVarian.hover}
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                variants={pathVariant}
                initial="hidden"
                whileInView="visible"
                d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                stroke="white"
                strokeWidth="1.9"
                strokeLinecap="round"
              />
              <motion.path
                variants={pathVariant}
                initial="hidden"
                whileInView="visible"
                d="M15 18H9"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </motion.svg>
            </Link>
          </li>
          <li className="flex gap-2">
            <Link to='/about'>
            <motion.svg
              initial={{
                x: -70,
              }}
              whileInView={{
                x: 5,
              }}
              whileHover={svgVarian.hover}
              transition={{
                duration: 0.2,
              }}
              className="w-10 h-10 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <motion.path
                variants={pathVariant}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
              />
            </motion.svg>
            </Link>
          </li>
          <li className="flex gap-2">
            <Link to='/contact'>
            <motion.svg
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              whileHover={svgVarian.hover}
              transition={{
                duration: 0.2,
              }}
              className="w-10 h-10 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <motion.path
                variants={pathVariant}
                initial="hidden"
                whileInView="visible"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z"
              />
            </motion.svg>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
