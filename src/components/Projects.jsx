import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-800 pb-4'>
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='my-20 text-center text-4xl'
      >
        परियोजना <span className='text-neutral-500'>(Projects)</span>
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index} 
            className='mb-8 flex flex-wrap lg:justify-center'
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <div className='w-full max-w-xl lg:w-3/4 border-b border-neutral-600 pb-4'>
              <h6 className='mb-2 font-semibold'>
                {project.title}{' '}
                {project.github && (
                  <a
                    target="_blank"
                    href={project.github}
                    className='ml-2 rounded bg-neutral-400 px-2 py-1 text-sm font-medium text-violet-900 w-full lg:w-auto truncate'
                  >
                    Source Code (GitHub)
                  </a>
                )}
                {project.live && (
                  <a
                    target="_blank"
                    href={project.live}
                    className='ml-2 rounded bg-neutral-400 px-2 py-1 text-sm font-medium text-violet-900 w-full lg:w-auto truncate'
                  >
                    Deployed Link
                  </a>
                )}
              </h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='inline-block mr-2 mb-2 rounded bg-neutral-400 px-2 py-1 text-sm font-medium text-violet-900'
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects