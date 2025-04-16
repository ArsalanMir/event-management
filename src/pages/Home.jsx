import React from 'react'
import Hero from '../components/Hero'
import KeyFeatures from '../components/KeyFeatures'
import WhyChooseUs from '../components/WhyChooseUs'
import PricingSection from '../components/PricingSection'

const Home = () => {
  return (
    <div>
        <Hero/>
        <KeyFeatures/>
        <PricingSection/>
        <WhyChooseUs/>
    </div>
  )
}

export default Home