import { Box, Grid } from '@mui/material'
import React from 'react'
import Event from './Event'

const Events = () => {
  return (


    <Box sx={{ backgroundColor: '#76BA99',py:2 }}>
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