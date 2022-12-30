import { Button,  Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import  "./Menber.css";



const styles = {
    paperContainer: {
        backgroundImage: 'https://i.ibb.co/G0FtjV8/cdc-cdfv65-Cld-QQ-unsplash.jpg'
    }
};


const Member = () => {
    // const myStyle = {
        
    //     height: '100vh',
    //     marginTop: '-70px',
    //     fontSize: '50px',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    // };
  

  return (
      <Box sx={
        {
            mt:'-3px'
        }
      }>
         
          <Grid container

              sx={{
                  justifyContent: 'center',
                  gap: 2,
                  py: 6,
                  mt: '3px',
                  
                  backgroundImage:
                      "url('https://i.ibb.co/WvdXLJC/jason-zhao-eeu3p-Oc-U0h0-unsplash.jpg')",
                 backgroundPosition:'center',
                 backgroundSize:'cover',
                 
                  
                 


              }}>
              <Grid sx={6,
              {
                  backgroundColor: '#F5EBE0',
                  opacity: '0.9',
                  py: 4,
                  px: 2,
                  borderRadius: '6px'
              }} >
                  <Stack spacing={2}>
                      <Box>
                          <Typography variant='h5' fontFamily={'serif'}>Be a Member</Typography>
                          <Typography variant='text'> We will only be able to fulfill our mission by working together with the best</Typography>
                      </Box>
                      <Button sx={{
                          backgroundColor: '#8A8635',
                          color: '#483434'


                      }}><Link className='dnone' sx={{
                          textDecorationLine: 'none'
                      }}>Be a Member</Link></Button>
                  </Stack>
              </Grid>
              <Grid sx={6,
              {
                  backgroundColor: '#F5EBE0',
                  opacity:'0.9',
                  py: 4,
                  px: 2,
                  borderRadius: '6px'
              }} >
                  <Stack spacing={2}>
                      <Box>
                          <Typography variant='h5' fontFamily={'serif'}>Be a Event Sponsor</Typography>
                          <Typography variant='text'> We will only be able to fulfill our mission by working together with the best</Typography>
                      </Box>
                      <Button sx={{
                          backgroundColor: '#8A8635',
                          color:'#483434'


                      }}><Link className='dnone'  >Make a Event</Link></Button>
                  </Stack>
              </Grid>


          </Grid>
          
      </Box>
  )
}

export default Member