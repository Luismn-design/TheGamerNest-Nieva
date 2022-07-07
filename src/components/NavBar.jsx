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
    <AppBar color='primary' sx={{ position:'static'}}>
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
          <Typography
            variant="body2"
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
              <Button key={'juegos'} onClick={handleCloseNavMenu} component={Link} to="/juegos"  sx={{ my: 2, color: 'white', textDecoration:'none' }}>
                Juegos
            </Button>
            <Button key={'rpg'} onClick={handleCloseNavMenu} component={Link} to="/category/rpg"  sx={{ my: 2, color: 'white', textDecoration:'none'  }}>
                RPG
            </Button>
            <Button key={'accion'} onClick={handleCloseNavMenu} component={Link} to="/category/accion" sx={{ my: 2, color: 'white', textDecoration:'none' }}>
                ACCION
            </Button>
            <Button key={'mmo'} onClick={handleCloseNavMenu} component={Link} to="/category/mmo" sx={{ my: 2, color: 'white', textDecoration:'none' }}>
                MMO
            </Button>
          </Box>
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
