export interface UserProfile {
  avatar: string;
  id: number;
  username: string;
  email: string;
}

export interface UserAvatar {
  id: number;
  filePath: string;
  createdAt: Date;
}

export interface UploadResponse {
  message: string;
  filePath: string;
}

export interface UploadResponse {
  message: string;
  filePath: string;
}
