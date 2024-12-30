import Layout from '@/components/layout'
import Hero from '@/components/hero'
import ConditionsGrid from '@/components/conditions-grid'
import AboutUs from '@/components/about-us'
import ContactForm from '@/components/contact-form'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ConditionsGrid />
      <AboutUs />
      <ContactForm />
    </Layout>
  )
}
