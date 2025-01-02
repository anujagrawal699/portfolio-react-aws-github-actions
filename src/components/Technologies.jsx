import React from 'react'
import { FaNodeJs } from 'react-icons/fa'
import { SiC, SiCplusplus, SiMongodb, SiMysql } from 'react-icons/si'
import { motion } from 'framer-motion'
import { DiPostgresql, DiPython, DiRedis } from 'react-icons/di';
import { FaGolang } from 'react-icons/fa6';
import { GrGraphQl } from 'react-icons/gr';

const TechnologiesIcons = ({ Icon, color, x }) => {
    return (
        <motion.div
            className='rounded-2xl border-4 border-neutral-800 p-4'
            animate={{
                y: [0, -10, 10],
                transition: {
                    y: {
                        duration: x,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "reverse"
                    }
                }
            }}
        >
            <Icon className={`text-7xl ${color}`} />
        </motion.div>
    )
}

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className='my-20 text-center text-4xl'
            >
                संगणक भाषाएँ/आंकड़ा भंडार <span className='text-neutral-500'>(Languages/Databases)</span>
            </motion.h2>
            <div className='flex flex-wrap items-center justify-center gap-2'>
            <TechnologiesIcons Icon={GrGraphQl} color="text-blue-600" x={2.5} />
                <TechnologiesIcons Icon={FaGolang} color="text-blue-500" x={2} />
                <TechnologiesIcons Icon={SiC} color="text-blue-500" x={2.5} />
                <TechnologiesIcons Icon={SiCplusplus} color="text-blue-500" x={3} />
                <TechnologiesIcons Icon={FaNodeJs} color="text-green-500" x={1.5} />
                <TechnologiesIcons Icon={SiMongodb} color="text-green-600" x={2} />
                <TechnologiesIcons Icon={SiMysql} color="text-blue-600" x={2.5} />
                <TechnologiesIcons Icon={DiPython} color="text-blue-600" x={2.5} />
                <TechnologiesIcons Icon={DiRedis} color="text-red-600" x={2.5} />
                <TechnologiesIcons Icon={DiPostgresql} color="text-blue-600" x={2.5} />
            </div>
        </div>
    )
}

export default Technologies