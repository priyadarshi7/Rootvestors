import * as React from 'react';
import PropTypes from 'prop-types';
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
const navItems = ['Home', 'About', 'Contact', 'Newsletter', 'Course'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.1535 51.0543C27.7973 52.189 25.0526 52.189 22.6964 51.0543L9.49366 44.6962C7.13745 43.5615 5.42616 41.4156 4.84422 38.866L1.58343 24.5795C1.00149 22.0299 1.61224 19.354 3.24279 17.3093L12.3793 5.85246C14.0099 3.80781 16.4828 2.61693 19.098 2.61693L33.7519 2.61693C36.3671 2.61693 38.84 3.80781 40.4705 5.85246L49.6071 17.3093C51.2376 19.354 51.8484 22.0299 51.2664 24.5795L48.0056 38.866C47.4237 41.4156 45.7124 43.5615 43.3562 44.6962L30.1535 51.0543Z" fill="white"/>
<path d="M30.1535 51.0543C27.7973 52.189 25.0526 52.189 22.6964 51.0543L9.49366 44.6962C7.13745 43.5615 5.42616 41.4156 4.84422 38.866L1.58343 24.5795C1.00149 22.0299 1.61224 19.354 3.24279 17.3093L12.3793 5.85246C14.0099 3.80781 16.4828 2.61693 19.098 2.61693L33.7519 2.61693C36.3671 2.61693 38.84 3.80781 40.4705 5.85246L49.6071 17.3093C51.2376 19.354 51.8484 22.0299 51.2664 24.5795L48.0056 38.866C47.4237 41.4156 45.7124 43.5615 43.3562 44.6962L30.1535 51.0543Z" fill="url(#paint0_linear_540_404)"/>
<path d="M17.8423 24.6345V30.1881L27.2348 39.8502L32.3463 35.2564L28.5612 31.6439C29.2514 31.5145 29.8876 31.3311 30.4376 31.0831C31.2571 30.7273 31.9473 30.3067 32.4865 29.8214C33.0256 29.3362 33.457 28.8078 33.7805 28.2578C34.0824 27.7186 34.3197 27.2118 34.4814 26.7589C34.6324 26.2952 34.751 25.756 34.8157 25.1629L34.8696 24.6345H17.8315H17.8423ZM23.7302 29.7352L29.4023 35.2995L27.4505 37.0249L19.902 29.4548V26.705H32.2384C32.0767 27.0824 31.8394 27.449 31.5267 27.7941C31.1277 28.2578 30.5778 28.6784 29.9092 29.0666C29.2514 29.4332 28.3563 29.6705 27.2456 29.7459H23.7302V29.7352Z" fill="#222222"/>
<path d="M34.3197 20.0946C33.9638 19.3289 33.4462 18.628 32.7884 18.0349C32.1306 17.4526 31.365 16.9565 30.4915 16.5575C29.6072 16.1478 28.6367 15.9429 27.6338 15.9429H17.8315V23.0385H34.8049V22.5748C34.8373 21.7121 34.6755 20.871 34.3197 20.0946ZM27.3966 18.0025C28.3671 18.0565 29.1328 18.229 29.6611 18.4986C30.2111 18.779 30.7287 19.1456 31.1816 19.5877C31.6453 20.0299 31.9688 20.4073 32.1522 20.7416C32.2061 20.8278 32.2492 20.9141 32.2816 20.9788H19.902V18.0025H27.4074H27.3966Z" fill="#222222"/>
<path d="M32.4043 39.1667V37.6457H31.8062V37.3621H33.3375V37.6457H32.7394V39.1667H32.4043ZM33.589 39.1667V37.3621H33.8649L34.6538 38.6795H34.5094L35.2854 37.3621H35.5612L35.5638 39.1667H35.2467L35.2441 37.8597H35.3112L34.6512 38.9605H34.5017L33.8314 37.8597H33.9087V39.1667H33.589Z" fill="#222222"/>
<defs>
<linearGradient id="paint0_linear_540_404" x1="5.09481" y1="46.2675" x2="32.4407" y2="2.86255" gradientUnits="userSpaceOnUse">
<stop stop-color="#EDFABE"/>
<stop offset="0.206448" stop-color="#CCEB58"/>
<stop offset="1" stop-color="#B8DE29"/>
</linearGradient>
</defs>
</svg>
      </Typography>
      <Divider />
      <List sx={{color:"black"}}>
        <NavLink to="/">
          <ListItem>
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to="/courses">
          <ListItem>
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary="Courses" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to="/newsletter">
          <ListItem>
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary="Newsletter" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <ListItem>
          <ListItemButton href="#Contact" onClick={() => setOpen(false)}>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav"
      sx={{
        backgroundColor:"#FDFDFD",
        color:"black",
        
      }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between", 
            alignItems: "center",
            height: "64px", 
          }}
        >
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
            sx={{
                display: "flex",
                justifyContent: "center", 
              }}
          >
<svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.1535 51.0543C27.7973 52.189 25.0526 52.189 22.6964 51.0543L9.49366 44.6962C7.13745 43.5615 5.42616 41.4156 4.84422 38.866L1.58343 24.5795C1.00149 22.0299 1.61224 19.354 3.24279 17.3093L12.3793 5.85246C14.0099 3.80781 16.4828 2.61693 19.098 2.61693L33.7519 2.61693C36.3671 2.61693 38.84 3.80781 40.4705 5.85246L49.6071 17.3093C51.2376 19.354 51.8484 22.0299 51.2664 24.5795L48.0056 38.866C47.4237 41.4156 45.7124 43.5615 43.3562 44.6962L30.1535 51.0543Z" fill="white"/>
<path d="M30.1535 51.0543C27.7973 52.189 25.0526 52.189 22.6964 51.0543L9.49366 44.6962C7.13745 43.5615 5.42616 41.4156 4.84422 38.866L1.58343 24.5795C1.00149 22.0299 1.61224 19.354 3.24279 17.3093L12.3793 5.85246C14.0099 3.80781 16.4828 2.61693 19.098 2.61693L33.7519 2.61693C36.3671 2.61693 38.84 3.80781 40.4705 5.85246L49.6071 17.3093C51.2376 19.354 51.8484 22.0299 51.2664 24.5795L48.0056 38.866C47.4237 41.4156 45.7124 43.5615 43.3562 44.6962L30.1535 51.0543Z" fill="url(#paint0_linear_540_404)"/>
<path d="M17.8423 24.6345V30.1881L27.2348 39.8502L32.3463 35.2564L28.5612 31.6439C29.2514 31.5145 29.8876 31.3311 30.4376 31.0831C31.2571 30.7273 31.9473 30.3067 32.4865 29.8214C33.0256 29.3362 33.457 28.8078 33.7805 28.2578C34.0824 27.7186 34.3197 27.2118 34.4814 26.7589C34.6324 26.2952 34.751 25.756 34.8157 25.1629L34.8696 24.6345H17.8315H17.8423ZM23.7302 29.7352L29.4023 35.2995L27.4505 37.0249L19.902 29.4548V26.705H32.2384C32.0767 27.0824 31.8394 27.449 31.5267 27.7941C31.1277 28.2578 30.5778 28.6784 29.9092 29.0666C29.2514 29.4332 28.3563 29.6705 27.2456 29.7459H23.7302V29.7352Z" fill="#222222"/>
<path d="M34.3197 20.0946C33.9638 19.3289 33.4462 18.628 32.7884 18.0349C32.1306 17.4526 31.365 16.9565 30.4915 16.5575C29.6072 16.1478 28.6367 15.9429 27.6338 15.9429H17.8315V23.0385H34.8049V22.5748C34.8373 21.7121 34.6755 20.871 34.3197 20.0946ZM27.3966 18.0025C28.3671 18.0565 29.1328 18.229 29.6611 18.4986C30.2111 18.779 30.7287 19.1456 31.1816 19.5877C31.6453 20.0299 31.9688 20.4073 32.1522 20.7416C32.2061 20.8278 32.2492 20.9141 32.2816 20.9788H19.902V18.0025H27.4074H27.3966Z" fill="#222222"/>
<path d="M32.4043 39.1667V37.6457H31.8062V37.3621H33.3375V37.6457H32.7394V39.1667H32.4043ZM33.589 39.1667V37.3621H33.8649L34.6538 38.6795H34.5094L35.2854 37.3621H35.5612L35.5638 39.1667H35.2467L35.2441 37.8597H35.3112L34.6512 38.9605H34.5017L33.8314 37.8597H33.9087V39.1667H33.589Z" fill="#222222"/>
<defs>
<linearGradient id="paint0_linear_540_404" x1="5.09481" y1="46.2675" x2="32.4407" y2="2.86255" gradientUnits="userSpaceOnUse">
<stop stop-color="#EDFABE"/>
<stop offset="0.206448" stop-color="#CCEB58"/>
<stop offset="1" stop-color="#B8DE29"/>
</linearGradient>
</defs>
</svg>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
              <NavLink to="/"><Button sx={{color:"black", fontWeight:"500", textTransform:"none", fontSize:"15px", fontFamily:"Montserrat" }}>
                Home
              </Button></NavLink>
              {/* <Button sx={{color:"black", fontWeight:"500", textTransform:"none", fontSize:"15px", fontFamily:"Montserrat" }}>
                About
              </Button> */}
              <NavLink to="/courses"><Button sx={{color:"black", fontWeight:"500", textTransform:"none", fontSize:"15px", fontFamily:"Montserrat" }}>
                Courses
              </Button></NavLink>
              <NavLink to="/newsletter"><Button sx={{color:"black", fontWeight:"500", textTransform:"none", fontSize:"15px", fontFamily:"Montserrat" }}>
                Newsletter
              </Button></NavLink> 
              <a href="#contact"><Button sx={{color:"black", fontWeight:"500", textTransform:"none", fontSize:"15px", fontFamily:"Montserrat" }}>
                Contact Us
              </Button></a>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;
