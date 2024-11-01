import React from 'react';
import { Box, Avatar, IconButton } from '@mui/material';

interface AvatarProps {
  src: string;
  alt: string;
  onUpload: () => void;
}
const API_URL = process.env.REACT_APP_API_URL;

const UserAvatar: React.FC<AvatarProps> = ({ src, alt, onUpload }) => (
  <Box mb={2}>
    <IconButton onClick={onUpload}>
      <Avatar
        src={`${API_URL}/${src}`}
        alt={alt}
        sx={{ width: 100, height: 100 }}
      />
    </IconButton>
  </Box>
);

export default UserAvatar;
