import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer/Footer'

import Header from '../pages/Header/Header'

const Main = () => {
  return (
    <Box>
        <Header/>
        <Outlet/>
        <Footer/>
    </Box>
  )
}

export default Main