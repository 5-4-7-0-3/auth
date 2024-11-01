import { useState } from 'react';
import { uploadAvatar } from '../services/uploadFileService';

const useAvatarUpload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleUpload = async (file: File) => {
    setIsLoading(true);
    setError(null);

    try {
      await uploadAvatar(file);
      setSuccess(true);
    } catch (err) {
      setError('Upload failed');
    } finally {
      setIsLoading(false);
    }
  };

  return { handleUpload, isLoading, error, success, setSuccess };
};

export default useAvatarUpload;
