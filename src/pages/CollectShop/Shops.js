import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Shop from './Shop'

const Shops = () => {
  return (
      <Box sx={{ backgroundColor: '#76BA99', py: 2 }}>
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
                      <Shop />
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
                      <Shop />
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
                      <Shop />
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
                      <Shop />
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
                      <Shop />
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
                      <Shop />
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
                      <Shop />
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
                      <Shop />
                  </Grid>

              </Grid>
          </Box>
      </Box>
  )
}

export default Shops