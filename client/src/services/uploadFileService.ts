import { UploadResponse } from '../types';
import axiosInstance from './axiosInstance';

export const uploadFile = async (file: File): Promise<UploadResponse[]> => {
  const formData = new FormData();
  formData.append('files', file);

  const response = await axiosInstance.post('/upload', formData);

  return response.data;
};

export const uploadAvatar = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('avatar', file);

  const response = await axiosInstance.post<UploadResponse>('/upload/avatar', formData);

  return response.data.filePath;
};
