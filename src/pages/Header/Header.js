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



const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function Header(props) {
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
            <AppBar component="nav">
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
                        
                        <Button><NavLink to='/'>Home</NavLink></Button>
                        <Button><NavLink to='/events'>Event</NavLink></Button>
                        <Button><NavLink>Service</NavLink></Button>
                        <Button><NavLink>Blog</NavLink></Button>
                        <Button><NavLink to='/contact'>Contact US</NavLink></Button>
                        
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