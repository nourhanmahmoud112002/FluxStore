export const Routes = {
  WELCOME: 'Welcome',
  ONBOARDING: 'OnBoarding',
  HOME: 'Home',
  SIGNUP: 'SignUp',
  LOGIN: 'Login',
  FORGET_PASSWORD: 'ForgetPassword',
  VERIFICATION: 'Verification',
  RESET_PASSWORD: 'ResetPassword',
} as const;

// Param list type for React Navigation
export type RootStackParamList = {
  [Routes.WELCOME]: undefined;
  [Routes.ONBOARDING]: undefined;
  [Routes.HOME]: undefined;
  [Routes.SIGNUP]: undefined;
  [Routes.LOGIN]: undefined;
  [Routes.FORGET_PASSWORD]: undefined;
  [Routes.VERIFICATION]: { email: string };
  [Routes.RESET_PASSWORD]: { email: string; resetPasswordToken?: string };
};
