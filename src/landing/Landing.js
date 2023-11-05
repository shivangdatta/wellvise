import React from 'react'
import Head from 'C:/work/DEV/REACT/wellvise/src/landing/heading/Head.js' 
import Number from './numbers/Number'
import Services from './services/Services'
import Workshop from './workshop/Workshop'
import Plans from '../plans/Plans'
import Stitle from './services/Stitle'
import Wtitle from './workshop/Wtitle'

export default function Landing() {
  return (
    <div>
      <Head/>
      <Number/>
      <Stitle/>
      <Services/>
        <Wtitle/>
        <Workshop/>
  
    </div>
  )
}
