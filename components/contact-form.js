'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    condition: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formState)
  }

  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            One simple step to start your journey
          </h2>
          <p className="text-gray-600">
            The first step towards a healthier you is completing this form. It takes a few minutes only, but the provided information will help us better understand your needs and create a personalized treatment plan.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white rounded-xl shadow-lg p-6 md:p-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E4B440] focus:border-[#E4B440]"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E4B440] focus:border-[#E4B440]"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E4B440] focus:border-[#E4B440]"
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">
                Condition
              </label>
              <select
                id="condition"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E4B440] focus:border-[#E4B440]"
                value={formState.condition}
                onChange={(e) => setFormState({ ...formState, condition: e.target.value })}
              >
                <option value="">Select a condition</option>
                <option value="ADHD">ADHD</option>
                <option value="Anxiety">Anxiety</option>
                <option value="Depression">Depression</option>
                <option value="Insomnia">Insomnia</option>
                <option value="OCD">OCD</option>
                <option value="Stress">Stress</option>
                <option value="Weight Loss">Weight Loss</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Information
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E4B440] focus:border-[#E4B440]"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            />
          </div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-[#E4B440] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#c99f33] transition-colors"
            >
              Submit
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

