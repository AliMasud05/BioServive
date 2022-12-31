import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Link, TextField } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Shop() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shop Name"
                subheader="Friday-Sunday"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://i.ibb.co/KX6QbDh/jasmin-sessler-CIItgn-BEOgw-unsplash.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Shopkeeper: Hasib
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Shopkeeper: Location
                </Typography>
                <Typography variant="text" color="text.primary" fontSize='20px'>
                   Take your reward
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button className='dnone' size="small" variant="outlined" onClick={handleClickOpen} color="primary" sx={{ backgroundColor: '#F5F5DC' }}><Link>Give Waste</Link></Button>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Dialog open={open}  onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent sx={{
                    backgroundColor: '#FEF5ED'
                }}>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <form>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                            </Grid>
                           
                            <Grid item xs={12}>
                                <TextField type="text" placeholder="Waste Quantity" label="Quantity/kg" variant="outlined" fullWidth required />
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>Done</Button>
                            </Grid>
                            

                        </Grid>
                    </form>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
           
        </Card>
    );
}