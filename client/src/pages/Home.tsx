import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="grey.100"
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to MyApp!
      </Typography>
      <Box display="flex" gap={2}>
        <Button
          component={RouterLink}
          to="/register"
          variant="contained"
          color="primary"
        >
          Sign up
        </Button>
        <Button
          component={RouterLink}
          to="/login"
          variant="contained"
          color="primary"
        >
          Sign in
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
