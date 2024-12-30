'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your mental wellness is one click away
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Online mental health care personalized just for you
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src="/placeholder.svg"
                alt="Platform Interface"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:mt-[-100px]"
        >
           <Link
                href="#contact"
              >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-[#E4B440] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#c99f33] transition-colors"
          >
           
                Get Started
             
          </motion.button>
          </Link>

        </motion.div>
      </div>
    </div>
  )
}

