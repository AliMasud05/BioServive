import React from 'react'
import Banner from '../Banner/Banner'
import Events from '../Events/Events'
import Member from '../Member/Member'
import Partners from '../Partners/Partners'
import Service from './Service'

const Home = () => {
  return (
    <>
          <Banner />
          <Service/>
          <Member/>
          <Partners />
         
    </>
  )
}

export default Home