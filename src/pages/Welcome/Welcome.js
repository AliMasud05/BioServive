import { Button, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Welcome = () => {
  return (
    <Box sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        py:4,
          backgroundImage:
              "url('https://i.ibb.co/MBNYTfp/augustine-wong-3-Om4-DHca-Ac0-unsplash.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity:0.9,
          fontWeight:'600'
    }}>
        <Box>
              <Box sx={{
                display:'flex',
                 alignItems:'center',
                 justifyContent:'center'
                
              }}>
                <Typography variant='h4' fontWeight='700' >WELCOME TO </Typography>
                  <Typography variant='h4' fontWeight='700' sx={{ color: 'success.main', ml:'3px' }}> GREEN DAYS</Typography>
            </Box>
              <Typography variant='text' fontSize='20px'>A devoted Green Days for a Greener and Sustainable World</Typography>
              <Divider variant="middle" sx={{height:'6px', my:'6px'}} />
              <Typography variant='text' fontSize='18px'>Green Yatra is a leading environmental NGO in India working towards achieving the Sustainable Development Goals (SDGs) through tree plantation, urban biodiversity conservation, water bodies restoration, sustainable solutions, and environmental research and awareness. We are a rare blend of resources equipped with traditional wisdom and modern, innovative technologies to help corporate achieving their NET Zero Goal.</Typography>
              <Typography variant='h5' color='#361500'>We are registered with 12 A, 80G, FCRA and UNEP.</Typography>
              <Button variant="outlined" sx={{ backgroundColor:'#361500', py:'6px', my:'6px'}}>Read More</Button>

        </Box>
    </Box>
  )
}

export default Welcome