const BASE_URL = 'http://localhost:5089';
export const ENDPOINTS = {
  BASE_URL,
  LOGIN: '/api/v1/auth/login',
  REGISTER: '/api/v1/auth/register',
  GOOGLE_LOGIN: '/api/v1/auth/google-login',
  REFRESH_TOKEN: '/api/v1/auth/refresh-token',
  CHANGE_PASSWORD: '/api/v1/auth/change-password',
  LOGOUT: '/api/v1/auth/logout',
  FORGET_PASSWORD: '/api/v1/auth/forget-password',
  VERIFY_OTP: '/api/v1/auth/verify-reset-password-otp',
  RESET_PASSWORD: '/api/v1/auth/reset-password',
};
