import axiosInstance from './axiosInstance';
import { UserAvatar, UserProfile } from '../types/index';

export const getUserProfile = async (): Promise<UserProfile> => {
  const response = await axiosInstance.get<UserProfile>('/users/profile');
  return response.data;
};

export const getUserAvatar = async (): Promise<UserAvatar[]> => {
  const response = await axiosInstance.get<UserAvatar[]>('/file-upload');
  return response.data;
};
