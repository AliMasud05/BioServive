import { Box, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Event from './Event'

const Events = () => {
  return (


    <Box sx={{ backgroundColor: '#76BA99',py:2, mt:'-3px' }}>
      <Stack spacing={3}>
        <Typography textAlign='center' variant='h3' sx={{fontWeight:700}}>Join Our Upcoming Event </Typography>
      <Typography textAlign='center' mb='4px'>We are friendly and available to chat.Reach out to us anytime and we'll happily answer your questions </Typography>
      </Stack>
      <Box sx={{ width: "65%", mx: "auto" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >

          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            xs={2}
            sm={4}
            md={4}

          >
            <Event />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            xs={2}
            sm={4}
            md={4}

          >
            <Event />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            xs={2}
            sm={4}
            md={4}

          >
            <Event />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            xs={2}
            sm={4}
            md={4}

          >
            <Event />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            xs={2}
            sm={4}
            md={4}

          >
            <Event />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            xs={2}
            sm={4}
            md={4}

          >
            <Event />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            xs={2}
            sm={4}
            md={4}

          >
            <Event />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            xs={2}
            sm={4}
            md={4}

          >
            <Event />
          </Grid>

        </Grid>
      </Box>
    </Box>


  )
}

export default Events