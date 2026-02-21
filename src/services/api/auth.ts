import { ENDPOINTS } from '../../constants/endpoints';
import {
  ApiResponse,
  LoginParams,
  AuthResponse,
  RegisterParams,
  GoogleLoginParams,
  RefreshTokenParams,
  ChangePasswordParams,
  ForgetPasswordParams,
  VerifyOtpParams,
  ResetPasswordParams,
} from '../../types';
import client from './client';
import { handleApiError } from './apiUtils';

export const loginRequest = async (
  params: LoginParams,
): Promise<ApiResponse<AuthResponse>> => {
  try {
    const response = await client.post<ApiResponse<AuthResponse>>(
      ENDPOINTS.LOGIN,
      params,
    );
    return response.data as ApiResponse<AuthResponse>;
  } catch (error) {
    return handleApiError<AuthResponse>(error);
  }
};

export const registerRequest = async (
  params: RegisterParams,
): Promise<ApiResponse<AuthResponse>> => {
  try {
    const response = await client.post<ApiResponse<AuthResponse>>(
      ENDPOINTS.REGISTER,
      params,
    );
    return response.data as ApiResponse<AuthResponse>;
  } catch (error) {
    return handleApiError<AuthResponse>(error);
  }
};

export const googleLoginRequest = async (
  params: GoogleLoginParams,
): Promise<ApiResponse<AuthResponse>> => {
  try {
    const response = await client.post<ApiResponse<AuthResponse>>(
      ENDPOINTS.GOOGLE_LOGIN,
      params,
    );
    return response.data as ApiResponse<AuthResponse>;
  } catch (error) {
    return handleApiError<AuthResponse>(error);
  }
};

export const refreshTokenRequest = async (
  params: RefreshTokenParams,
): Promise<ApiResponse<AuthResponse>> => {
  try {
    const response = await client.post<ApiResponse<AuthResponse>>(
      ENDPOINTS.REFRESH_TOKEN,
      params,
    );
    return response.data as ApiResponse<AuthResponse>;
  } catch (error) {
    return handleApiError<AuthResponse>(error);
  }
};

export const changePasswordRequest = async (
  params: ChangePasswordParams,
): Promise<ApiResponse<AuthResponse>> => {
  try {
    const response = await client.post<ApiResponse<AuthResponse>>(
      ENDPOINTS.CHANGE_PASSWORD,
      params,
    );
    return response.data as ApiResponse<AuthResponse>;
  } catch (error) {
    return handleApiError<AuthResponse>(error);
  }
};


export const logoutRequest = async (
): Promise<ApiResponse<AuthResponse>> => {
  try {
    const response = await client.post<ApiResponse<AuthResponse>>(
      ENDPOINTS.LOGOUT,
    );
    return response.data as ApiResponse<AuthResponse>;
  } catch (error) {
    return handleApiError<AuthResponse>(error);
  }
};

export const forgetPasswordRequest = async (
  params: ForgetPasswordParams,
): Promise<ApiResponse<AuthResponse>> => {
   try {
     const response = await client.post<ApiResponse<AuthResponse>>(
       ENDPOINTS.FORGET_PASSWORD,
       params,
     );
     return response.data as ApiResponse<AuthResponse>;
   } catch (error) {
     return handleApiError<AuthResponse>(error);
   }
}

export const verifyOtpRequest = async (
  params: VerifyOtpParams,
): Promise<ApiResponse<AuthResponse>> => {
  try {
    const response = await client.post<ApiResponse<AuthResponse>>(
      ENDPOINTS.VERIFY_OTP,
      params,
    );
    return response.data as ApiResponse<AuthResponse>;
  } catch (error) {
    return handleApiError<AuthResponse>(error);
  }
};

export const resetPasswordRequest = async (
  params: ResetPasswordParams,
): Promise<ApiResponse<AuthResponse>> => {
  try {
    const response = await client.post<ApiResponse<AuthResponse>>(
      ENDPOINTS.RESET_PASSWORD,
      params,
    );
    return response.data as ApiResponse<AuthResponse>;
  } catch (error) {
    return handleApiError<AuthResponse>(error);
  }
};
