import React from 'react'
import AboutSection from './about/AboutSection'
import Causes from './causes/Causes'
import Events from './events/Events'
import "./main.scss"
import News from './news/News'
import Stats from './stats/Stats'
import TopBanner from './topBanner/TopBanner'

export default function Main() {
  return (
    <main className="main">
      <TopBanner/>
      <AboutSection/>
      <Causes/>
      <Stats/>
      <Events/>
      <News/>
    </main>
  )
}