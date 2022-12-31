import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';



const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function Header(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Green Days
            </Typography>
            <Divider />
            <List>
                <ListItemButton sx={{ textAlign: 'center' }}>
                    <NavLink to='/'>Home</NavLink>
                </ListItemButton>
                <ListItemButton sx={{ textAlign: 'center' }}>
                    <NavLink to='/events'>Event</NavLink>
                </ListItemButton>
                <ListItemButton sx={{ textAlign: 'center' }}>
                    <NavLink>Service</NavLink>
                </ListItemButton>
                <ListItemButton sx={{ textAlign: 'center' }}>
                    <NavLink>Blog</NavLink>
                </ListItemButton>
                <ListItemButton sx={{ textAlign: 'center' }}>
                    <NavLink to='/contact'>Contact US</NavLink>
                </ListItemButton>
                
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <Box sx={{ display: 'flex', mb:'70px'}}>
            <CssBaseline />
            <AppBar color="primary" sx={{ backgroundColor:'#146356'}} component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        textAlign='left'
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Green Days
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        
                        <Button sx={{mx:'3px', }}><NavLink  className='dnone' sx={{color:'#7882A4', }}  to='/'>Home</NavLink></Button>
                        <Button sx={{ mx:'3px', }}><NavLink  className='dnone' sx={{color:'#7882A4', }} to='/events'>Event</NavLink></Button>
                        <Button sx={{ mx:'3px', }}><NavLink  className='dnone' sx={{color:'#7882A4', }}>Service</NavLink></Button>
                        <Button sx={{ mx:'3px', }}><NavLink  className='dnone' sx={{color:'#7882A4', }} to='/shops'>Waste Collection Shop</NavLink></Button>                     
                        <Button sx={{ mx:'3px', }}><NavLink  className='dnone' sx={{color:'#7882A4', }}>Blog</NavLink></Button>
                        <Button sx={{ mx: '3px', }}><NavLink className='dnone' sx={{ color: '#7882A4', }} to='/contact'>Contact Us</NavLink></Button>
                        
                     
                       
                            <Button
                                aria-owns={anchorEl ? "simple-menu" : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                                onMouseEnter={handleClick}
                            sx={{ backgroundColor: '#7882A4', mx: '3px', color: '#146356' }}
                            >
                                GET INVOLVED
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                onMouseLeave={handleClose}
                            >
                            <MenuItem ><NavLink className='dnone' to='/shops'>Volunteer</NavLink></MenuItem>
                            <MenuItem ><NavLink className='dnone' to='/shops'>Careers</NavLink></MenuItem>
                            
                            </Menu>
                      
                        
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            
        </Box>
    );
}