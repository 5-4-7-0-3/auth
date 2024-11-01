import React, { useState, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import CustomModal from '../CustomModal';

interface UploadAvatarModalProps {
  open: boolean;
  onClose: () => void;
  onUpload: (file: File) => void;
}

const UploadAvatarModal: React.FC<UploadAvatarModalProps> = ({
  open,
  onClose,
  onUpload,
}) => {
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setDragging(false);
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      onUpload(files[0]);
    }
  };

  const handleFileChange = () => {
    if (fileInputRef.current?.files?.length) {
      onUpload(fileInputRef.current.files[0]);
    }
  };

  return (
    <CustomModal open={open} onClose={onClose} title="Upload avatar">
      <Box
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        sx={{
          border: dragging ? '2px dashed #1976d2' : 'none',
          padding: '16px',
          textAlign: 'center',
        }}
      >
        <Typography variant="body1" my={2}>
          Drag the file or click the button below
        </Typography>
        <Button
          variant="contained"
          fullWidth
          onClick={() => fileInputRef.current?.click()}
        >
          Upload file
        </Button>
        <input
          type="file"
          ref={fileInputRef}
          hidden
          onChange={handleFileChange}
        />
      </Box>
    </CustomModal>
  );
};

export default UploadAvatarModal;
