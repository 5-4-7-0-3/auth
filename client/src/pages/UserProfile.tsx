import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import useUserProfile from '../hooks/useUserProfile';
import UserInfo from '../components/Profile/UserInfo';
import UserAvatar from '../components/Profile/UserAvatar';
import useAvatarUpload from '../hooks/useAvatarUpload';
import UploadAvatarModal from '../components/Profile/UploadAvatarModal';

const UserProfile: React.FC = () => {
  const { data: user, error, isLoading: isProfileLoading } = useUserProfile();
  const {
    handleUpload,
    isLoading: isUploading,
    error: uploadError,
    success,
    setSuccess,
  } = useAvatarUpload();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (success) {
      setModalOpen(false);
      setSuccess(false);
    }
  }, [success]);

  if (isProfileLoading || isUploading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || uploadError) {
    return (
      <Typography color="error" variant="body1" align="center" mt={10}>
        {error?.message || uploadError || 'Error loading profile'}
      </Typography>
    );
  }

  if (!user) {
    return (
      <Typography color="error" variant="body1" align="center" mt={10}>
        User not found
      </Typography>
    );
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
      <UserAvatar
        src={user.avatar}
        alt={user.username}
        onUpload={() => setModalOpen(true)}
      />
      <UserInfo user={user} />
      <UploadAvatarModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        onUpload={handleUpload}
      />
    </Box>
  );
};

export default UserProfile;
