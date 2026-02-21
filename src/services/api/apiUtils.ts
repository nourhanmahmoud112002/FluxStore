import axios from 'axios';
import { ApiResponse } from '../../types';

export const handleApiError = <T>(error: unknown): ApiResponse<T> => {
  if (axios.isAxiosError(error) && error.response?.data) {
    return error.response.data as ApiResponse<T>;
  }
  return {
    isSuccess: false,
    message: (error as Error).message,
    instance: '',
    traceId: '',
    errorCode: '',
    validationErrors: {},
    meta: {},
  };
};
