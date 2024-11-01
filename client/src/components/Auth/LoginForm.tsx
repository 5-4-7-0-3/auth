import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useLoginForm } from '../../hooks/useLoginForm';

const LoginForm: React.FC = () => {
  const { register, handleSubmit, errors, isSubmitting } = useLoginForm();

  return (
    <Box
      component="div"
      sx={{
        maxWidth: 400,
        mx: 'auto',
        p: 4,
        mt: 4,
        backgroundColor: 'white',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Authorization
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            {...register('username')}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isSubmitting}
          sx={{ mt: 2 }}
        >
          Sign in
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
