'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Check } from 'lucide-react'

const features = [
  'Evidence-based treatment methods',
  'Providers who focus on your progress',
  'Personalized holistic treatment plans',
  '24/7 patient support',
  'Appointments within 24 hours'
]

export default function AboutUs() {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Discover how we provide relief and mental wellness to{' '}
              <span className="text-[#E4B440]">5000+</span> patients monthly
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Trusted certified providers
                </h3>
                <p className="text-gray-600">
                  Receive compassionate care from our licensed doctors who prioritize your mental well-being.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Individual Treatment Programs
                </h3>
                <p className="text-gray-600">
                  We combine accurate diagnosing and transparency every step of the way. You get a treatment plan tailored to your unique needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  All-in-one Digital Care
                </h3>
                <p className="text-gray-600">
                  Starting from assessing your symptoms to ensuring medication pickup, we are there for you at all levels.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] w-full">
              <Image
                src="/placeholder.svg"
                alt="US Map with Provider Network"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#FFF9E6] rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6">We care about you</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Check className="w-5 h-5 text-[#E4B440]" />
                </div>
                <span className="text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

