export const Routes = {
  WELCOME: 'Welcome',
  ONBOARDING: 'OnBoarding',
  HOME: 'Home',
} as const;

// Param list type for React Navigation
export type RootStackParamList = {
  [Routes.WELCOME]: undefined;
  [Routes.ONBOARDING]: undefined;
  [Routes.HOME]: undefined;
};
