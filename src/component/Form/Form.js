import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, Card, CardContent, FilledInput, FormControl, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Form = () => {
    

  return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap',justifyContent:'center',alignItems:'center' }}>
         
          <div >
              <Typography gutterBottom variant="h3" align="center">
                  React-App
              </Typography>
              <Grid>
                  <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                      <CardContent>
                          <Typography gutterBottom variant="h5">
                              Contact Us
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                              Fill up the form and our team will get back to you within 24 hours.
                          </Typography>
                          <form>
                              <Grid container spacing={1}>
                                  <Grid xs={12} sm={6} item>
                                      <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                                  </Grid>
                                  <Grid xs={12} sm={6} item>
                                      <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                                  </Grid>
                                  <Grid item xs={12}>
                                      <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                                  </Grid>
                                  <Grid item xs={12}>
                                      <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                                  </Grid>
                                  <Grid item xs={12}>
                                      <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                                  </Grid>
                                  <Grid item xs={12}>
                                      <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                                  </Grid>

                              </Grid>
                          </form>
                      </CardContent>
                  </Card>
              </Grid>
          </div>
      </Box>
  )
}

export default Form