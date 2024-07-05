import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return ( <div className='borber-b border-neutral-800 pb-20'>
    <motion.h2
     whileInView={{opacity:1, y:0}}
     initial={{opacity:0, y:-100}}
     transition={{duration:1}}
    className='my-10 text-center text-4xl'>संपर्क <span className='text-neutral-500'>(Get in Touch)</span></motion.h2>
    <div className='text-center tracking-tighter'>
        <motion.p
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:0.5}}
        className='my-4'>
            Durga Kunj, Saklecha Nagar, Jalna - 431203
        </motion.p>
        <motion.p 
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:100}}
         transition={{duration:0.5}}
        className='my-4'>+91 8767432324</motion.p>
        <a href='mailto: anujagrawal380@gmail.com' className='border-b'>
            anujagrawal380@gmail.com
        </a>
        <br />
        <a href='mailto: 2022bec023@sggs.ac.in' className='border-b'>
        2022bec023@sggs.ac.in
        </a>
    </div>
  </div>
  )
}

export default Contact