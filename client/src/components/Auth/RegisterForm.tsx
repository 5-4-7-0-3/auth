import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useRegisterForm } from '../../hooks/useRegisterForm';

const RegisterForm: React.FC = () => {
  const { register, handleSubmit, errors, isSubmitting } = useRegisterForm();

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
        Sign up
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
            label="Email"
            variant="outlined"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
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
        >
          Sign up
        </Button>
      </form>
    </Box>
  );
};

export default RegisterForm;
