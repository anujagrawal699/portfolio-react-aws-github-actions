import React from 'react'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'
import Star3D from './Box';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

const About = () => {
  return (
    <motion.div 
      className='border-b border-neutral-800 pb-4'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 
        className='my-20 text-center text-4xl'
        variants={itemVariants}
      > 
        में <span className='text-neutral-500'>(Me)</span>
      </motion.h2>
      <div className='flex flex-wrap'>
        <motion.div 
          className='w-full lg:w-1/2 lg:p-8'
          variants={itemVariants}
        >
          <div className='flex items-center justify-center'>
            <Star3D />
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className='w-full lg:w-1/2'
        >
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About