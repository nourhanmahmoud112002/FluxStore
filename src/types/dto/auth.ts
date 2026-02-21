export interface LoginParams {
  emailAddress: string;
  password: string;
}
export interface RegisterParams {
  name: string;
  emailAddress: string;
  password: string;
}

export interface GoogleLoginParams {
  idToken: string;
}
export interface RefreshTokenParams {
  refreshToken: string;
}
export interface ChangePasswordParams {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface ForgetPasswordParams {
  emailAddress: string;
}

export interface VerifyOtpParams {
  emailAddress: string;
  otp: string;
}
export interface ResetPasswordParams {
  emailAddress: string;
  resetPasswordToken: string;
  newPassword: string;
}
