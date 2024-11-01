import React from 'react';
import { Paper, Typography } from '@mui/material';
import { UserProfile } from '../../types/index';

interface UserInfoProps {
  user: UserProfile;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <Paper elevation={3} sx={{ maxWidth: 400, p: 4, mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        User Profile
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>ID:</strong> {user.id}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Username:</strong> {user.username}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Email:</strong> {user.email}
      </Typography>
    </Paper>
  );
};

export default UserInfo;
