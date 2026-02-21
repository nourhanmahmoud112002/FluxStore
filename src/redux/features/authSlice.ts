import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
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
import {
  changePasswordRequest,
  forgetPasswordRequest,
  googleLoginRequest,
  loginRequest,
  logoutRequest,
  refreshTokenRequest,
  registerRequest,
  resetPasswordRequest,
  verifyOtpRequest,
} from '../../services/api';
import { getObjectData, MMKV_KEYS } from '../../common';
import { handleFulfilled, handlePending, handleRejected } from '../utils';

const prefix = 'auth/';

export const login = createAsyncThunk<ApiResponse<AuthResponse>, LoginParams>(
  prefix + 'login',
  async params => await loginRequest(params),
);
export const register = createAsyncThunk<
  ApiResponse<AuthResponse>,
  RegisterParams
>(prefix + 'register', async params => await registerRequest(params));
export const googleLogin = createAsyncThunk<
  ApiResponse<AuthResponse>,
  GoogleLoginParams
>(prefix + 'googleLogin', async params => await googleLoginRequest(params));
export const refreshToken = createAsyncThunk<
  ApiResponse<AuthResponse>,
  RefreshTokenParams
>(prefix + 'refreshToken', async params => await refreshTokenRequest(params));
export const changePassword = createAsyncThunk<
  ApiResponse<AuthResponse>,
  ChangePasswordParams
>(
  prefix + 'changePassword',
  async params => await changePasswordRequest(params),
);

export const logout = createAsyncThunk<ApiResponse<AuthResponse>>(
  prefix + 'logout',
  async () => await logoutRequest(),
);

export const forgetPassword = createAsyncThunk<
  ApiResponse<AuthResponse>,
  ForgetPasswordParams
>(
  prefix + 'forgetPassword',
  async params => await forgetPasswordRequest(params),
);

export const verifyOtp = createAsyncThunk<
  ApiResponse<AuthResponse>,
  VerifyOtpParams
>(prefix + 'verifyOtp', async params => await verifyOtpRequest(params));

export const resetPassword = createAsyncThunk<
  ApiResponse<AuthResponse>,
  ResetPasswordParams
>(prefix + 'resetPassword', async params => await resetPasswordRequest(params));

interface IAuthState {
  user: AuthResponse | null;

  loaders: {
    login: boolean;
    register: boolean;
    googleLogin: boolean;
    refreshToken: boolean;
    changePassword: boolean;
    logout: boolean;
    forgetPassword: boolean;
    verifyOtp: boolean;
    resetPassword: boolean;
  };
  errors: {
    login: string | null;
    register: string | null;
    googleLogin: string | null;
    refreshToken: string | null;
    changePassword: string | null;
    logout: string | null;
    forgetPassword: string | null;
    verifyOtp: string | null;
    resetPassword: string | null;
  };
}
const initialState: IAuthState = {
  user: getObjectData<AuthResponse>(MMKV_KEYS.USER_KEY) || null,
  loaders: {
    login: false,
    register: false,
    googleLogin: false,
    refreshToken: false,
    changePassword: false,
    logout: false,
    forgetPassword: false,
    verifyOtp: false,
    resetPassword: false,
  },
  errors: {
    login: null,
    register: null,
    googleLogin: null,
    refreshToken: null,
    changePassword: null,
    logout: null,
    forgetPassword: null,
    verifyOtp: null,
    resetPassword: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        isAnyOf(
          login.pending,
          register.pending,
          googleLogin.pending,
          refreshToken.pending,
          changePassword.pending,
          logout.pending,
          forgetPassword.pending,
          verifyOtp.pending,
          resetPassword.pending,
        ),
        handlePending,
      )
      .addMatcher(
        isAnyOf(
          login.rejected,
          register.rejected,
          googleLogin.rejected,
          refreshToken.rejected,
          changePassword.rejected,
          logout.rejected,
          forgetPassword.rejected,
          verifyOtp.rejected,
          resetPassword.rejected,
        ),
        handleRejected,
      )
      .addMatcher(
        isAnyOf(
          login.fulfilled,
          register.fulfilled,
          googleLogin.fulfilled,
          refreshToken.fulfilled,
          changePassword.fulfilled,
          logout.fulfilled,
          forgetPassword.fulfilled,
          verifyOtp.fulfilled,
          resetPassword.fulfilled,
        ),
        (state, action) => {
          handleFulfilled(state, action);
          state.user = action.payload.data || null;
        },
      );
  },
});

export default authSlice.reducer;
