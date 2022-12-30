import { Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { border } from 'polished'
import React from 'react'
 const itemData =[
     'https://i.ibb.co/n1p182b/uniliver.png',
     'https://i.ibb.co/sP3482j/walton.jpg',
     'https://i.ibb.co/b29q5Hg/basundhara.jpg',
     'https://i.ibb.co/v3JqX1b/education.jpg',
     'https://i.ibb.co/C0hJyth/Grameenphone-Logo.jpg',
     
 ]

const Partners = () => {
  return (
      <Box>
         <Typography variant='h3' fontFamily={'serif'} textAlign='center'>Our Partners</Typography>
          <Grid container spacing={3} sx={{
              my: 2,

              justifyContent: 'center',
              alignItems: 'center'
          }}>
              {
                  itemData.map(item => <Grid sx={{
                      border: '2px solid black',
                  }} key={item}><img width='300px' height='100px' sx={{

                  }} src={item} alt="" /></Grid>

                  )
              }
          </Grid>
      </Box>
       
  )
}

export default Partners