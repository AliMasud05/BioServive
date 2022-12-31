import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Event from './Event'
import WorkService from './WorkService'

const WorkServices = () => {
    return (


        <Box sx={{ backgroundColor: '#76BA99', py: 2 }}>
           

            <Box>
                <Typography>WHAT YOU CAN DO</Typography>
                <Typography>All our workshops, tree plantations, presentations, awareness programs and educational activities are ABSOLUTELY FREE for government schools, colleges and housing societies.</Typography>
            </Box>

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
                        <WorkService />
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
                        <WorkService />
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
                        <WorkService />
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
                        <WorkService />
                   

                </Grid>
            </Box>
        </Box>


    )
}

export default WorkServices