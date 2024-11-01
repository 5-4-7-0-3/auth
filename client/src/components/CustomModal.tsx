import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  onClose,
  title,
  children,
}) => (
  <Modal open={open} onClose={onClose}>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '8px',
      }}
    >
      <Typography variant="h6" align="center" mb={2}>
        {title}
      </Typography>
      {children}
    </Box>
  </Modal>
);

export default CustomModal;
