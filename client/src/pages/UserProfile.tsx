import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { UserProfile as UserProfileType } from '../types/index';

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<UserProfileType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        setUser(data);
      } catch (error: any) {
        console.error(error);
        navigate('/login');
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-6">User profile</h2>
      <p className="mb-4">
        <strong>ID:</strong> {user.id}
      </p>
      <p className="mb-4">
        <strong>User name:</strong> {user.username}
      </p>
      <p className="mb-4">
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};

export default UserProfile;
