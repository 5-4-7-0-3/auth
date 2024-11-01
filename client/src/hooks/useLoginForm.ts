import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

interface LoginValues {
  username: string;
  password: string;
}

const validationSchema = Yup.object({
  username: Yup.string().required('Mandatory field'),
  password: Yup.string().required('Mandatory field'),
});

export const useLoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (values: LoginValues) => {
    try {
      await login(values);
      navigate('/profile');
    } catch (error: any) {
      if (error.response && error.response.data) {
        setError('password', { message: error.response.data.message });
      } else {
        console.error(error);
      }
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
};
