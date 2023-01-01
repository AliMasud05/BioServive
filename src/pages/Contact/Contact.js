import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Contact = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const message = form.message.value;
    console.log(email, name, message);
  }
  
  return (
    <Box sx={{
      height:'70vh',
      my:'100px'
     
    }}>
      <Typography textAlign='center' variant='h4'>Get in Touch </Typography>
      <Typography textAlign='center'>We are friendly and available to chat.Reach out to us anytime and we'll happily answer your questions </Typography>
      <Grid container>
      <Grid xs={6} item>
        <Box>
          <img width='100%' height='600px'  src="https://i.ibb.co/HV5XkCS/pgy9-9kk1-210811.jpg" alt="" />
        </Box>
      </Grid>
      <Grid xs={6} item>
        <Box>
            <Card sx={{ my: 6, width:700, mx:'auto', backgroundColor:'#EFEFEF'}}>
            <CardActionArea>
              <Typography textAlign='center' color='crimson' variant='h4' sx={{py:4, fontWeight:700,  }}>Contact Here</Typography>
              <CardContent>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={1}>
                      <Grid xs={12} item>
                        <TextField name='name' placeholder="Enter first name" label="Name" variant="filled" fullWidth required />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <TextField name='email' type="email" placeholder="Enter email" label="Email" variant="filled" fullWidth required />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <TextField label="Message" type='text' name='message' multiline rows={4} placeholder="Type your message here" variant="filled" fullWidth required />
                      </Grid>
                      <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                      </Grid>

                    </Grid>
                  </form>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Grid>
      </Grid>
    </Box>
  )
}

export default Contact