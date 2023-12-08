import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaGitAlt,
  FaGithubSquare,
  FaAngular,
  FaEye,
} from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { IoLogoNodejs } from "react-icons/io";
import { TbBrandVscode } from "react-icons/tb";

import {
  SiNextdotjs,
  SiTypescript,
  SiAdobexd,
  SiAdobephotoshop,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiMui,
} from "react-icons/si";

//  data
export const aboutData = [
  {
    title: "Skills",
    info: [
      {
        title: "",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextdotjs" />,
          <IoLogoNodejs key="Nodejs" />,
          <BsBootstrapFill key="bootstrap" />,
          <SiTailwindcss key="tailwind" />,
          <SiMongodb key="mongodb" />,
          <SiExpress key="express" />,
        ],
      },
      {
        title: "",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="adobephotoshop" />,
          <FaGitAlt key="git" />,
          <FaGithubSquare key="Github" />,
          <TbBrandVscode key="Vscode" />,
          <FaAngular key="angular" />,
          <SiTypescript key="typescript" />,
          <SiFirebase key="firebase" />,
          <SiMui key="MUI" />,
        ],
      },
    ],
  },
  {
    title: "Education & Internships",
    info: [
      {
        title: "ITI (Front-end & cross platform mobile development)",
        stage: " 2023",
      },
      {
        title: "SEF (Front-end Fundamentals)",
        stage: " 2022",
      },
      {
        title: "Faculty of agriculture",
        stage: " 2015 - 2019",
      },
    ],
  },
  {
    title: "Courses & Certificates",
    info: [
      {
        title: "Build a Full Stack Twitter clone with Next.js (Coursera)",
        stage: " 11-2023",
        link: "https://www.coursera.org/account/accomplishments/verify/SY9XSFUXH9WY?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=project",
      },
      {
        title: "Advanced React (Meta)",
        stage: " 10-2023",
        link: "https://www.coursera.org/account/accomplishments/verify/FHZBH4TL28N9?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      },
      {
        title: "The Principles of Writing Clean Code (Mahara-Tech)",
        stage: " 07-2023",
        link: "https://drive.google.com/file/d/1t5L2lrL34hrUSp6SI4VAvUsCGUcnFKJo/view?usp=sharing",
      },
      {
        title: "The Complete Node.js Course (Mahara-Tech)",
        stage: " 06-2023",
        link: "https://drive.google.com/file/d/1YrT2bNg3ZpF-rBq7kb7y-D3TE1OFH_29/view?usp=sharing",
      },
      {
        title: "Modern JavaScript: ES6 and beyond (Mahara-Tech)",
        stage: " 05-2023",
        link: "https://drive.google.com/file/d/1W13rtfzaqPsfNkSkKgSMmIzBl-CCnnY8/view?usp=sharing",
      },
      {
        title: "TypeScript Fundamentals (Mahara-Tech)",
        stage: " 03-2023",
        link: "https://drive.google.com/file/d/1UY9xIvmqI4RMb-HxRVWmDXbah3hPs_gR/view?usp=sharing",
      },
      {
        title: "React JS (Mahara-Tech)",
        stage: " 05-2022",
        link: "https://drive.google.com/file/d/1joDBeAqoV9ssYwKoPF11jOnFXEjZ59gD/view?usp=sharing",
      },

      {
        title: "Freelancing Basics (Mahara-Tech)",
        stage: " 04-2022",
        link: "https://drive.google.com/file/d/1VjqT5nbiBAUhbk2ddKL24e3Q1X_I_ONF/view?usp=sharing",
      },
      {
        title: "UX Design Fundamentals (Mahara-Tech)",
        stage: " 03-2022",
        link: "https://drive.google.com/file/d/1S7-py7XQUgP_8X9FwC5m_D7y4kcr_6sc/view?usp=sharing",
      },
      {
        title: "Learn HTML &CSS (Mahara-Tech)",
        stage: " 03-2022",
        link: "https://drive.google.com/file/d/1hXVvIgMpggKLNYlrz2nAJywnM5zLPkQF/view?usp=sharing",
      },
    ],
  },
];

//Components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
//Fromer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
//counter
import CountUp from "react-countup";
import Link from "next/link";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left over ">
      <Circles />
      {/* avatar Img*/}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-[-400px] -left-[320px]"
      >
        {/* <Avatar src={"/avatar-2.png"} /> */}
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Translating ide<span className="text-accent">as into codes</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            ITI graduate,Junior Developer with 2+ years experience in building
            responsive websites with HTML,CSS,SASS, Bootstrap,Tailwind,
            JavaScript and Node.js Expertise in frameworks like
            React.js(Next.js) ,React native and Angular in agile environment and
            i have good knowledge of using data base such as MongoDB ,using git
            as version control.Passionate about clean code and get things done.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6 gap-x-2">
              <div
                className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0 "
              >
                <div className="text-2xl xl:text:4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div
                  className="text-xs uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]"
                >
                  Experience <br />
                </div>
              </div>
              {/* clients */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0 "
              >
                <div className="text-2xl xl:text:4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={55} duration={5} /> +
                </div>
                <div
                  className="text-xs uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]"
                >
                  Projects
                </div>
              </div>
              {/* projects */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text:4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div
                  className="text-xs uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]"
                >
                  Skills
                </div>
              </div>
              <div className="relative flex-1 ">
                <div className="text-2xl xl:text:4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div
                  className="text-xs uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]"
                >
                  Clients
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 xl-mt-8">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } 
                  cursor-pointer z-60 xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start overflow-y-auto ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 
                  items-center text-white/60 "
                >
                  {/* Title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  {item.link && (
                    <Link
                      href={item.link}
                      className="hover:text-accent transition-all duration-300 text-2xl hover:animate-anim-ping m-5"
                    >
                      <FaEye />
                    </Link>
                  )}
                  {/* icons */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
