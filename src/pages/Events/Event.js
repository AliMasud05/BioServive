import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Event() {
    const handleEvent = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const number = form.number.value;
       
        console.log(email, name,number);
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://i.ibb.co/CH8z98K/tree-book-enviromental-education-important-can-help-us-all-planet-165836191.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" variant="outlined" onClick={handleClickOpen} color="primary" sx={{ backgroundColor:'#F5F5DC'}}>
                    Join Event
                </Button>
            </CardActions>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Join With US
                    </DialogContentText>
                    <form onSubmit={handleEvent}>
                        <Grid container spacing={1}>
                            <Grid xs={12}  item>
                                <TextField name='name' placeholder="Enter your name" label="First Name" variant="outlined" fullWidth required />
                            </Grid>
                            
                            <Grid item xs={12}>
                                <TextField name='email' type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name='number' type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                            </Grid>

                        </Grid>
                    </form>
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    
                </DialogActions>
            </Dialog>
           
        </Card>
    );
}