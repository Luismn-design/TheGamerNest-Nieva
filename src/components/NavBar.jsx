import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CartWidget from './CartWidget';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar sx={{bgcolor:'#423e3e', position:'static'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SportsEsportsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
              TheGamerNest
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >              
              <MenuItem key={'juegos'} onClick={handleCloseNavMenu}>
                <Link to='/juegos' style={{textDecoration:'none', color:'black'}}>
                  <Typography textAlign="center">JUEGOS</Typography>
                </Link>
              </MenuItem>
              <MenuItem key={'rpg'} onClick={handleCloseNavMenu}>
                <Link to='/category/rpg' style={{textDecoration:'none', color:'black'}}>
                  <Typography textAlign="center">RPG</Typography>
                </Link>
              </MenuItem>
              <MenuItem key={'accion'} onClick={handleCloseNavMenu}>
                <Link to='/category/accion' style={{textDecoration:'none', color:'black'}}>
                  <Typography textAlign="center">ACCION</Typography>
                </Link>
              </MenuItem>
              <MenuItem key={'mmo'} onClick={handleCloseNavMenu}>
                <Link to='/category/mmo' style={{textDecoration:'none', color:'black'}}>
                  <Typography textAlign="center">MMO</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <SportsEsportsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
              TheGamerNest
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button key={'juegos'} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to="/juegos" style={{ textDecoration: 'none', color:'white' }}>
                  Juegos
                </Link>
            </Button>
            <Button key={'rpg'} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to="/category/rpg" style={{ textDecoration: 'none', color:'white' }}>
                  RPG
                </Link>
            </Button>
            <Button key={'accion'} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to="/category/accion" style={{ textDecoration: 'none', color:'white' }}>
                  ACCION
                </Link>
            </Button>
            <Button key={'mmo'} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to="/category/mmo" style={{ textDecoration: 'none', color:'white' }}>
                  MMO
                </Link>
            </Button>
          </Box>
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
