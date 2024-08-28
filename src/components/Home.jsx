import ProImg from "../assets/ProImg.png";
import Alexa from "../assets/Alexa.gif";
import Signature from "../assets/sig.png";
import WorkImg from "../assets/work.png";
import { motion } from "framer-motion";

import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Typewriter from "typewriter-effect";
import ContainerVariant from "../lib/LoadMotion";

function Home() {
  const { hidden, visible } = ContainerVariant;
  return (
    <motion.div
      variants={ContainerVariant}
      initial={hidden}
      animate={visible}
      className="bg-slate-950 flex flex-col md:grid md:grid-cols-4 md:grid-rows-12 gap-3 md:px-20 px-5"
    >
      <motion.div
        initial={ContainerVariant.hidden}
        whileInView={ContainerVariant.visible}
        className=" md:col-span-2 z-10 md:row-span-7 p-8 bg-slate-800 text-white rounded-[2rem] flex gap-2 flex-col md:flex-row items-center"
      >
        <div className="relative flex ">
          <div className="">
            <LazyLoadImage
              className="rounded-full md:w-[27rem]"
              src={ProImg}
              alt="profile image"
              effect="blur" // Optional blur effect
            />
          </div>

            <motion.img
              animate={{
                opacity: [0, 1],
                scale: [0, 1, 1.4, 1.6, 1.4, 1, 1.4, 1, 5, 50, 0],
                x: [0, 0, 0, 0, 0, -260],
                y: [0, 0, 0, 0, 0, -330],
              }}
              transition={{
                delay: 1,
                duration: 2.8,
              }}
              className="rounded-full w-20 z-10  absolute right-10 bottom-8"
              src={Alexa}
              alt=""
            />
        </div>
        <ul className="flex flex-col items-center md:gap-4">
          <h1 className="font-bold text-4xl">M KH T@mim</h1>
          <span className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
            fugit!
          </span>
          <div className="h-20 relative px-4 pt-5 bg-slate-950 hidden rounded-[1rem] md:grid md:w-52 place-items-center text-2xl md:text-xl text-white capitalize font-mono font-bold">
            <span className="absolute top-2 text-sm font-sans text-white">
              Dev Skills
            </span>
            <Typewriter
              options={{
                strings: [
                  "HTML-5",
                  "CSS-3",
                  "Git & GitHub",
                  "Tailwind-CSS",
                  "Java-Script",
                  "React",
                  "Node",
                  // "Framer-Motion",
                  "C-language",
                ],
                autoStart: true,
                loop: true,
                cursor: "|",
                delay: 75,
              }}
            />
          </div>
        </ul>
      </motion.div>
      <motion.div
        initial={ContainerVariant.hidden}
        whileInView={ContainerVariant.visible}
        className="h-24 z-10 relative overflow-hidden bg-slate-800 md:hidden rounded-[1rem] grid place-items-center text-2xl text-white capitalize font-mono font-bold"
      >
        <span className="absolute top-2 left-[-2rem] bg-red-400 px-12  text-lg font-sans rotate-[-30deg] text-slate-950">
          dev
        </span>
        <span className="absolute bottom-2 bg-red-400 px-12 right-[-2rem] text-lg font-sans rotate-[-30deg] text-slate-950">
          skills
        </span>
        <Typewriter
          options={{
            strings: [
              "HTML-5",
              "CSS-3",
              'Git & GitHub',
              "Tailwind-CSS",
              "Java-Script",
              "React-JS",
              "Node-JS",
              "Motion-CSS",
              "C-language",
            ],
            autoStart: true,
            loop: true,
            cursor: "|",
            delay: 75,
          }}
        />
      </motion.div>
      <motion.div
        initial={ContainerVariant.hidden}
        whileInView={ContainerVariant.visible}
        className="h-16 md:h-auto z-10 md:col-span-2 md:row-span-1 bg-slate-800 rounded-[1rem] text-center text-white text-sm grid place-items-center"
      >
        <h1>
          Thanks for visiting! Feel free to consult for work opportunities.
        </h1>
      </motion.div>
      <motion.div
        initial={ContainerVariant.hidden}
        whileInView={ContainerVariant.visible}
        className="h-74 z-10 md:h-auto md:row-span-6 rounded-[2rem] text-white bg-slate-800 flex flex-col justify-between p-5"
      >
        <img
          className="object-cover h-3/4 p-5 scale-125"
          src={Signature}
          alt=""
        />
        <ul className="capitalize flex items-center justify-between ">
          <li>
            <h1>more about me</h1>
            <h1 className="text-3xl">credentials</h1>
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
            />
          </svg>
        </ul>
      </motion.div>
      <motion.div
        initial={ContainerVariant.hidden}
        whileInView={ContainerVariant.visible}
        className="h-74 z-10 md:h-auto md:row-span-6 rounded-[2rem] text-white bg-slate-800 flex flex-col justify-between p-5"
      >
        <img className="object-cover h-3/4 p-5 " src={WorkImg} alt="" />
        <ul className="capitalize flex items-center justify-between ">
          <li>
            <h1>briefcase of</h1>
            <h1 className="text-3xl">projects</h1>
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
            />
          </svg>
        </ul>
      </motion.div>
      <motion.div
        initial={ContainerVariant.hidden}
        whileInView={ContainerVariant.visible}
        className="h-74 z-10 md:h-auto md:row-span-5 rounded-[2rem] text-white bg-slate-800 flex gap-5 flex-col justify-between p-5"
      >
        <ul className="size-14 flex justify-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              stroke="white"
              strokeWidth={5}
              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              stroke="white"
              strokeWidth={5}
              d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              stroke="white"
              strokeWidth={5}
              d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"
            />
          </svg>
        </ul>
        <ul className="capitalize flex items-center justify-between ">
          <li>
            <h1>connect with me vai</h1>
            <h1 className="text-3xl">profiles</h1>
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
            />
          </svg>
        </ul>
      </motion.div>
      <motion.div
        initial={ContainerVariant.hidden}
        whileInView={ContainerVariant.visible}
        className="h-74 z-10 md:h-auto md:row-span-5 md:col-span-2 rounded-[2rem] text-white bg-slate-800 flex gap-5 flex-col justify-between p-5"
      >
        <ul className="size-14 flex gap-3 items-center text-2xl mt-7 justify-center w-full">
          <svg
            className="w-16 h-16 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z" />
          </svg>
          <svg
            className="w-16 h-16 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m3 2 1.578 17.834L12 22l7.468-2.165L21 2H3Zm13.3 14.722-4.293 1.204H12l-4.297-1.204-.297-3.167h2.108l.15 1.526 2.335.639 2.34-.64.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506l-.954 10.71Z" />
          </svg>
          <svg
            className="w-16 h-16"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6 .4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2 .7 376.3 .7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8 .5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" />
          </svg>
          <svg
            className="w-16 h-16 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z" />
            <path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z" />
          </svg>
          <svg
            className="w-16 h-16 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
          </svg>
          <h1>...</h1>
        </ul>
        <ul className="capitalize flex items-center justify-between ">
          <li>
            <h1>upgrated with those</h1>
            <h1 className="text-3xl">Technologies</h1>
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
            />
          </svg>
        </ul>
      </motion.div>
      <motion.div
        initial={ContainerVariant.hidden}
        whileInView={ContainerVariant.visible}
        className="h-74 z-10 md:h-auto md:row-span-5 rounded-[2rem] text-white bg-slate-800 flex gap-5 flex-col justify-between p-5"
      >
        <ul className="size-24 flex flex-col items-center justify-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 119.8 122.88"
          >
            <path d="M21.38,0a10.1,10.1,0,1,1-10.1,10.09A10.09,10.09,0,0,1,21.38,0ZM97.67,86.17a8.77,8.77,0,1,1-8.76,8.77,8.77,8.77,0,0,1,8.76-8.77Zm-69.73,0a8.77,8.77,0,1,1-8.76,8.77,8.77,8.77,0,0,1,8.76-8.77ZM22.43,105a11.12,11.12,0,0,0-5.58,2.23A17.86,17.86,0,0,0,12,113.51a21,21,0,0,0-2,8.35l-.15,1h7.52l.12-1.33a10.69,10.69,0,0,1,.81-3.88,6.33,6.33,0,0,1,1-1.69l.14,6.9H36.36l.08-4.59v.3l.05-2.61a6.33,6.33,0,0,1,1,1.69,10.69,10.69,0,0,1,.81,3.88l.12,1.33H39a4.44,4.44,0,0,1,0-.63l.14-1a34.63,34.63,0,0,1,.7-5A24.78,24.78,0,0,1,41.76,111l.28-.57A11.63,11.63,0,0,0,33.37,105c-3-.24-8,0-10.94,0ZM62.81,83.48a9.41,9.41,0,1,1-9.41,9.4,9.4,9.4,0,0,1,9.41-9.4Zm-5.92,20.17a12,12,0,0,0-6,2.4,19.27,19.27,0,0,0-5.19,6.77,22.62,22.62,0,0,0-2.15,9l-.16,1.09h8.08l.13-1.43a11.6,11.6,0,0,1,.87-4.16,6.87,6.87,0,0,1,1.09-1.82l.15,7.41H71.84l.09-4.92v.32l.06-2.81a7.44,7.44,0,0,1,1.09,1.82,11.82,11.82,0,0,1,.87,4.16l.13,1.43h8.07L82,121.79a22.46,22.46,0,0,0-2.15-9c-2.63-5.56-6-8.5-11.21-9.11-3.19-.26-8.54,0-11.74-.06ZM92.16,105a11.11,11.11,0,0,0-5.59,2.23,16.27,16.27,0,0,0-3,3.24l.25.52a24.3,24.3,0,0,1,1.86,5.31,33.32,33.32,0,0,1,.69,5l.11.72a4.74,4.74,0,0,1,.08.86h.58l.12-1.33a10.92,10.92,0,0,1,.82-3.88,6.31,6.31,0,0,1,1-1.69l.14,6.9h16.88l.08-4.59v.3l.06-2.61a6.58,6.58,0,0,1,1,1.69,10.69,10.69,0,0,1,.81,3.88l.12,1.33h7.53l-.15-1a20.81,20.81,0,0,0-2-8.35c-2.45-5.18-5.62-7.92-10.44-8.49-3-.24-8,0-10.93,0ZM51.35,37.14,62.66,25.27a1.75,1.75,0,0,1,2.54,2.41L54.54,38.86a4.77,4.77,0,0,1-3.71,7.81v13.9h55.63V15.67H50.83V37l.52.1ZM75.91,72.32V64.2H39.37a1.82,1.82,0,1,1,0-3.63H47.2V46.05l-9.06-1.74a4.75,4.75,0,0,1-3-1.9L31.25,37.1v.14l-.31,17.7,3.89,22.28,1,7.4a2.16,2.16,0,0,1,0,.35,12.65,12.65,0,0,0-10.51-2.46L21.37,59.9,17,85.15c-1,5.46-9.87,5.5-9.94-1.12L12,55.13,11.6,37.57h0l-.07-3a7.68,7.68,0,0,0-1.16,2A12.43,12.43,0,0,0,9.43,41L8.57,52.25v.18h0v0l0,.08v.06h0v.16h0v.33h0v.09l0,0v.05h0v0l0,0v.1h0v0l0,0v0l0,0v0l0,0v0l0,0v0l0,0,0,0v0l0,0v0c-1.68,2.32-5.85,3-7.41,0v0h0v-.09l0,0v0h0v-.07l0-.06v-.07h0v0l0-.09v-.09h0v-.07l0-.1V53h0v0l0-.11v-.07h0v-.09l0-.08V52.5h0v0l0-.14v-.08a72.15,72.15,0,0,1,.8-10.9C1.48,32,6.25,22.51,16.45,21.75c3-.22,6.06.08,9,.08a16.1,16.1,0,0,1,5.8,1A4.74,4.74,0,0,1,34,24.65l7.7,10.63,5.49,1.06V15.67H39.37a1.82,1.82,0,1,1,0-3.63H75.62V6.76a1.82,1.82,0,1,1,3.63,0V12h38.54a1.82,1.82,0,1,1,0,3.63h-7.73v44.9H118a1.82,1.82,0,1,1,0,3.63H79.5v8.31c.1.06.16.13.26.19L91.09,83.46a1.61,1.61,0,0,1,.33.42A13.39,13.39,0,0,0,89,85.71l-.27.24-.09.1L79.5,77.44v7.84a1.82,1.82,0,0,1-3.63,0V77.09L71,81.77A13.69,13.69,0,0,0,67.67,80l8.24-7.67Z" />
          </svg>
          <h1 className="font-bold">Intermediate(HSC)</h1>
        </ul>
        <ul className="capitalize flex items-center justify-between ">
          <li>
            <h1>teaching background</h1>
            <h1 className="text-3xl">ICT lecturer</h1>
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
            />
          </svg>
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default Home;
