import { Divider } from '@material-ui/core'
import React from 'react'
import About from './subcomponents/About'
import Banner from './subcomponents/Banner'
import ContactSection from './subcomponents/ContactSection'
import ContactUs from './subcomponents/ContactUs'
import NewsLetter from './subcomponents/NewsLetter'
import OurServices from './subcomponents/OurServices'
import OurWork from './subcomponents/OurWork'
import SpecializedSection from './subcomponents/SpecializedSection'
import Testimonials from './subcomponents/Testimonials'
import VerticalSlider from './subcomponents/VerticalSlider'
import WebsiteIncludes from './subcomponents/WebsiteIncludes'
import WebstixServices from './subcomponents/WebstixServices'

function HomeComponent() {
  return (
    <div>
      <Banner />
      <OurServices />
      <VerticalSlider />
      <SpecializedSection />
      <Divider />
      <ContactSection />
      <About />
      <WebsiteIncludes />
      <OurWork />
      <WebstixServices />
      <Testimonials />
      <ContactUs />
      <NewsLetter />
    </div>
  )
}

export default HomeComponent