import ProImg from "../assets/ProImg.png";
import { motion } from "framer-motion";
import ContainerVariant from "../lib/LoadMotion";
// import Rt from "./Rt";

const { hidden, visible } = ContainerVariant;
function About() {
  return (
    <motion.div
      variants={ContainerVariant}
      initial={hidden}
      animate={visible}
      className="md:px-20 p-5 md:grid md:grid-cols-6 bg-slate-950 text-white flex flex-col gap-5 "
    >
      <motion.div
        variants={ContainerVariant}
        initial={hidden}
        whileInView={visible}
        className="border-t border-r relative md:h-[16rem] md:col-span-2 md:row-span-3 bg-slate-800 rounded-[2rem] p-5 flex flex-col gap-2 items-center"
      >
        <img className="rounded-full md:h-[14rem]" src={ProImg} alt="" />
      <svg
        viewBox="0 0 100 100"
        className=" md:h-[20rem] h-[22rem] absolute top-0"
      >
        <defs>
          <path
            id="circlePath"
            d="M 50, 50
               m -37, 0
               a 37,37 0 1,1 74,0
               a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text fontFamily="cursive" fill="white" fontSize="10">
          <textPath className="capitalize" href="#circlePath" startOffset="15%">
            who am i 
          </textPath>
        </text>
        {/* <circle
          cx="50"
          cy="50"
          r="37"
          fill="none"
          stroke="#FC8181"
          strokeWidth="2"
        /> */}
      </svg>
      </motion.div>

      <motion.div
        variants={ContainerVariant}
        initial={hidden}
        whileInView={visible}
        className="border-b border-l md:col-span-4 md:row-span-1 bg-slate-800 rounded-[2rem]  p-7 flex flex-col gap-2 justify-center"
      >
        <h1 className="uppercase text-2xl font-bold">mkh tamim</h1>
        <p className="text-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo
          natus repellendus eveniet minima dolor tempore necessitatibus, ab
          soluta temporibus porro eligendi consequuntur amet numquam possimus
          odio ducimus ipsam reprehenderit.sdfsdf
        </p>
      </motion.div>

      <motion.div
        variants={ContainerVariant}
        initial={hidden}
        whileInView={visible}
        className="border-b border-r md:row-span-4 md:col-span-2 bg-slate-800 rounded-[2rem] p-9 flex flex-col gap-2 justify-center"
      >
        <h1 className="uppercase text-xl font-medium">experience</h1>
        <ul className="capitalize flex flex-col gap-5">
          <li>
            <h1 className="text-gray-400">2007-2017</h1>
            <p className="text-lg">framer designer & developer</p>
            <p className="text-gray-400">bluebase designs</p>
          </li>
          <hr />
          <li>
            <h1 className="text-gray-400">2017-2023</h1>
            <p className="text-lg">front-end developer</p>
            <p className="text-gray-400">larsen & toubro</p>
          </li>
        </ul>
      </motion.div>

      <motion.div
        variants={ContainerVariant}
        initial={hidden}
        whileInView={visible}
        className="border-b border-l md:row-span-4 md:col-span-2 bg-slate-800 rounded-[2rem] p-9 flex flex-col gap-2 justify-center"
      >
        <h1 className="uppercase text-xl font-medium">education</h1>
        <ul className="capitalize flex flex-col gap-5">
          <li>
            <h1 className="text-gray-400">passing year : 2018</h1>
            <p className="text-lg">JSC</p>
            <p className="text-gray-400">
              agrabad government colony high school
            </p>
          </li>
          <hr />
          <li>
            <h1 className="text-gray-400">passing year : 2020</h1>
            <p className="text-lg">SSC ( science )</p>
            <p className="text-gray-400">
              agrabad government colony high school
            </p>
          </li>
          <hr />
          <li>
            <h1 className="text-gray-400">passing year : 2023</h1>
            <p className="text-lg">HSC ( science )</p>
            <p className="text-gray-400">chattogram bandar college</p>
          </li>
        </ul>
      </motion.div>

      <motion.div
        variants={ContainerVariant}
        initial={hidden}
        whileInView={visible}
        className="border-r border-b bg-slate-800 md:row-span-2 md:col-span-2 rounded-[2rem] p-9 flex flex-col gap-4 justify-center"
      >
        <h1 className="uppercase text-xl font-medium">profiles</h1>
        <ul className="flex gap-7 justify-center ">
          <li>
            <svg
              className="w-10 h-10 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <svg
              className="w-10 h-10 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
            </svg>
          </li>
          <li>
            <svg
              className="w-10 h-10 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
            </svg>
          </li>
        </ul>
        <h1 className="capitalize text-gray-400">social media</h1>
        <hr />
        <ul className="flex gap-5 justify-center">
          <li>
            <svg
              className="w-10 h-10 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li>
            <svg
              className="w-10 h-10 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                clipRule="evenodd"
              />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
          </li>
        </ul>
        <h1 className="capitalize text-gray-400">work</h1>
      </motion.div>
    </motion.div>
  );
}

export default About;
