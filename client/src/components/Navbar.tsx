import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
// import MenuIcon from '@mui/icons-material/Menu';

export const Navbar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        style={{ background: "#FFFFFFFF" }}
        elevation={0}
      >
        <Toolbar>
          <Link href="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              TXJ
            </IconButton>
          </Link>
            <Link href="/publications">
                <Button disableRipple>Publications</Button>
            </Link>
            <Link href="/people">
                <Button disableRipple>People</Button>
            </Link>
            <Link href="/about">
                <Button disableRipple>About</Button>
            </Link>
            <Link href="/teaching">
                <Button disableRipple>Teaching</Button>
            </Link>
            <Link href="/contact">
                <Button disableRipple>Contact</Button>
            </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;