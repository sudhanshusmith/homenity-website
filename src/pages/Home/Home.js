import React from 'react'

import Hero from './Hero/Hero'
import Step from './Step/Step'
import How from './How/How'
import Download from './Download/Download'
import PlanOverview from './PlanOverview/PlanOverview'

function Home() {
  return (
    <div id="Top" class="page-content">
    <Hero />
    <Step />
    <How />
    <PlanOverview />
    {/* <Download /> */}
    </div>
  )
}

export default Home