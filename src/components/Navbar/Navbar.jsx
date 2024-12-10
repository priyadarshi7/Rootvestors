import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText'; // Import fixed
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Hamburger from 'hamburger-react';
import { NavLink} from 'react-router-dom';
import { useParams } from "react-router"
import "./Navbar.css";
import LOGO from "../../assets/logos/rootvestors_nav.png";
import { useLocation } from "react-router";



const navItems = ['About Us', 'Past Event', 'Team', 'FAQ', 'Contact Us'];

function DrawerAppBar(props) {
  const location = useLocation();
  const { window: containerWindow } = props; // Renamed to avoid conflicts
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [bgColor, setBgColor] = React.useState('transparent');
  const [isOpen, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setBgColor('rgba(0, 0, 0, 0.7)');
      } else {
        setBgColor('transparent');
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);



  const drawer = (
    <Box
      onClick={() => {
        handleDrawerToggle();
        setOpen(false);
      }}
      sx={{ textAlign: 'center' }}
    >
      <div className="ham-head" style={{ display: "flex" }}>
        <Typography
          variant="h6"
          sx={{
            my: 2,
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: "Montserrat",
          }}
        >
          <img src={LOGO} alt="Logo" className="nav-log" height="30px" />
        </Typography>
      </div>
      <List sx={{color:"white"}}>
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
        {location.pathname==="/" && <ListItem>
          <ListItemButton href="#FAQ" onClick={() => setOpen(false)}>
            <ListItemText primary="FAQ" />
          </ListItemButton>
        </ListItem>}
        <ListItem>
          <ListItemButton href="#ContactUs" onClick={() => setOpen(false)}>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = containerWindow !== undefined ? () => containerWindow().document.body : undefined;

  return (
    <div className="nav">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            height: "8vh",
            background:bgColor,
            display: "flex",
            justifyContent: "center",
            boxShadow: "0",
            zIndex: "1201",
            transition: "background 0.3s ease",
          }}
          className="AppBar"
        >
          <Toolbar>
            <div className="ham">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' }, zIndex: "1201" }}
              >
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  aria-label="open drawer"
                  edge="start"
                  className="hamburger-icon"
                  sx={{ zIndex: "1201" }}
                />
              </IconButton>
            </div>
            <img src={LOGO} alt="Logo" className="nav-logo" />
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                background: "transparent",
                gap: "2vh",
                marginLeft: "auto",
                margin:"auto 0 auto auto" 
              }}
            >
              <ul
                style={{
                  display: 'flex',
                  justifyContent: "space-between",
                  listStyle: "none",
                  gap: "3vh",
                  paddingLeft: "0",
                  fontFamily: "Montserrat",                 
                }}
              >
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/courses"><li>Courses</li></NavLink>
                {location.pathname==="/" && <a href="#FAQ"><li>FAQs</li></a>}
                <a href="/newsletter"><li>Newsletter</li></a>
                <a href="#ContactUs"><li>Contact Us</li></a>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            anchor="right"
            ModalProps={{
              keepMounted: false,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: "100%",
                background: "linear-gradient(195.22deg, #012B27 1.61%, #000000 100%)",
                boxShadow: "0 4px 30px rgba(0, 50, 0, 0.2)",
                backdropFilter: "blur(6px)",
                webkitBackdropFilter: "blur(6px)",
                border: "none",
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </div>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
