export const Routes = {
  WELCOME: 'Welcome',
  ONBOARDING: 'OnBoarding',
  HOME: 'Home',
  SIGNUP:"SignUp",
} as const;

// Param list type for React Navigation
export type RootStackParamList = {
  [Routes.WELCOME]: undefined;
  [Routes.ONBOARDING]: undefined;
  [Routes.HOME]: undefined;
  [Routes.SIGNUP]: undefined;
};
