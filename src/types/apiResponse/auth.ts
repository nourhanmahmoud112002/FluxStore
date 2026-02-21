export interface AuthResponse {
  user: User;
  accessToken: TokenResponse;
  refreshToken: TokenResponse;
  resetPasswordToken?: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  userName: string;
  roles: string[];
}

export interface TokenResponse {
    token: string;
}
