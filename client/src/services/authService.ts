import { jwtDecode } from 'jwt-decode';
import axiosInstance from './axiosInstance';

interface SignUpData {
  username: string;
  email: string;
  password: string;
}

interface SignInData {
  username: string;
  password: string;
}

interface JwtPayload {
  username: string;
  sub: number;
  iat: number;
  exp: number;
}

export const register = async (data: SignUpData) => {
  const response = await axiosInstance.post('/auth/sign-up', data);
  return response.data;
};

export const login = async (data: SignInData) => {
  const response = await axiosInstance.post('/auth/sign-in', data);
  const token = response.data.access_token;
  localStorage.setItem('token', token);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const decoded = jwtDecode<JwtPayload>(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
};

export const getUserProfile = async () => {
  const response = await axiosInstance.get('/auth/user');
  return response.data;
};