import React, { useState } from 'react';
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
export const aboutData = [
  {
    title: 'Стек технологий',
    info: [
      {
        title: 'Веб разработка',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX дизайн',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'Награды',
    info: [
      {
        title: 'Премия рунета - Топ 3',
        stage: '2013',
      },
      {
        title: 'Webby Awards - Лауреат',
        stage: '2012',
      },
      {
        title: 'CSS Design Awards - Лауреат',
        stage: '2010',
      },
    ],
  },
];

//Components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
//Fromer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
//counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar Img*/}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* Text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Немного <span className='text-accent'>о нас.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            Наша веб студия имеет богатый опыт в создании сайтов различной сложности 
            и масштаба. Мы работаем с разными отраслями и знаем, как создать сайт, 
            который будет соответствовать потребностям вашего бизнеса. Наша команда 
            состоит из профессионалов, которые постоянно совершенствуют свои навыки и 
            следят за последними тенденциями веб-разработки.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text:4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]'>Лет <br/> на рынке</div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text:4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={450} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]'>Клиентов доверяют</div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text:4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]'>Успешных проектов</div>
              </div>
              {/* awards */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text:4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={1800} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]'>Решенных задач</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
                  cursor-pointer xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 
                  items-center text-white/60'
                >
                  {/* Title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className='flex gap-x-4'>
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className='text-2xl text-white'>{icon}</div>;
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