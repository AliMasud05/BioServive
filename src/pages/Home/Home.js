import React from 'react'
import Login from '../../component/Login/Login'
import Banner from '../Banner/Banner'
import Events from '../Events/Events'
import Member from '../Member/Member'
import Partners from '../Partners/Partners'
import Welcome from '../Welcome/Welcome'
import Service from './Service'

const Home = () => {
  return (
    <>
          <Banner />
          <Welcome/>
          <Service/>
          <Member/>
          <Partners />
         
          
         
    </>
  )
}

export default Home