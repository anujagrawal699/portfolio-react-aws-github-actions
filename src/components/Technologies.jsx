import React from 'react'
import { FaNodeJs } from 'react-icons/fa'
import { SiC, SiCplusplus, SiMongodb, SiMysql } from 'react-icons/si'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial : {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    },
});

const TechologiesIcons = ({Icon, color, x}) => {
    return <motion.div
    variants={iconVariants(x)}
    initial= "initial"
    animate="animate"
    className='rounded-2xl border-4 border-neutral-800 p-4'>
      <Icon className={`text-7xl ${color}`} />
    </motion.div>
}

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:100}}
         transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>संगणक भाषाएँ/आंकड़ा भंडार <span className='text-neutral-500'>(Languages/Databases)</span></motion.h2>
        <motion.div 
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:1.5}}
         className='flex flex-wrap items-center justify-center gap-4'>
            <TechologiesIcons Icon={SiC} color="text-blue-500" x={2.5} />
            <TechologiesIcons Icon={SiCplusplus} color="text-blue-500" x={3} />
            <TechologiesIcons Icon={FaNodeJs} color="text-green-500" x={1.5} />
            <TechologiesIcons Icon={SiMongodb} color="text-green-600" x={2} />
            <TechologiesIcons Icon={SiMysql} color="text-blue-600" x={2.5} />
        </motion.div>
        </div>
  )
}

export default Technologies