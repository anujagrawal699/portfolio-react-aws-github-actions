import React from 'react'
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className='border-b border-neutral-800 pb-4'>
        <motion.h2
         initial={{opacity:0, y:-100}}
         whileInView={{opacity:1, y:0}}
         viewport={{ once: true }}
         transition={{duration:0.25}}
         className='my-20 text-center text-4xl'
        >
          अनुभव <span className='text-neutral-500'>(Experience)</span>
        </motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <motion.div 
                  key={index} 
                  className='mb-8 flex flex-wrap lg:justify-center'
                  initial={{opacity:0}}
                  whileInView={{opacity:1}}
                  viewport={{ once: true }}
                  transition={{duration:0.5}}
                >
                    <motion.div
                     initial={{opacity:0, x:-100}}
                     whileInView={{opacity:1, x:0}}
                     viewport={{ once: true }}
                     transition={{duration:0.5}}
                     className='w-full lg:w-1/4'
                    >
                      <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                    </motion.div>
                    <motion.div
                     initial={{opacity:0, x:100}}
                     whileInView={{opacity:1, x:0}}
                     viewport={{ once: true }}
                     transition={{duration:0.5}}
                     className='w-full max-w-xl lg:w-3/4'
                    >
                      <h6 className='mb-2 font-semibold'>
                        {experience.role} - <span className='text-sm text-purple-200'>{experience.company}</span>
                      </h6>
                      <p className='mb-4 text-neutral-400'>{experience.description}</p>
                      {experience.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className='inline-block mr-2 mb-2 rounded bg-neutral-500 px-2 py-1 text-sm font-medium text-violet-900'
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>
                </motion.div>
            ))}
        </div>
    </div>
  );
};

export default Experience