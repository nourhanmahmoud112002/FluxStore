export const Routes = {
  WELCOME: 'Welcome',
  ONBOARDING: 'OnBoarding',
  HOME: 'Home',
  SIGNUP: 'SignUp',
  LOGIN: 'Login',
  FORGET_PASSWORD: 'ForgetPassword',
  VERIFICATION: 'Verification',
  RESET_PASSWORD: 'ResetPassword',
  AUTH: 'Auth',
  BOTTOM_TABS: 'BottomTabs',
  SEARCH: 'Search',
  CART: 'Cart',
  PROFILE: 'Profile',
  PRODUCTS: 'Products',
  HOME_NAVIGATION: 'HomeNavigation',
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
  [Routes.AUTH]: undefined;
  [Routes.BOTTOM_TABS]: undefined;
  [Routes.SEARCH]: undefined;
  [Routes.CART]: undefined;
  [Routes.PROFILE]: undefined;
  [Routes.PRODUCTS]: undefined;
};
