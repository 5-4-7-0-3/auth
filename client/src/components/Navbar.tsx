import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useAuthLogout } from '../hooks/useAuthLogout';

const Navbar: React.FC = () => {
  const { isAuthenticated, handleLogout } = useAuthLogout();

  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ color: 'inherit', textDecoration: 'none', flexGrow: 1 }}
        >
          MyApp
        </Typography>

        <Box>
          {!isAuthenticated ? (
            <>
              <Button
                component={RouterLink}
                to="/login"
                color="inherit"
                sx={{ mx: 1 }}
              >
                Sign in
              </Button>
              <Button
                component={RouterLink}
                to="/register"
                color="inherit"
                sx={{ mx: 1 }}
              >
                Sign up
              </Button>
            </>
          ) : (
            <>
              <Button
                component={RouterLink}
                to="/profile"
                color="inherit"
                sx={{ mx: 1 }}
              >
                Profile
              </Button>
              <Button onClick={handleLogout} color="inherit" sx={{ mx: 1 }}>
                Sign out
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
