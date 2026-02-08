import {
  createNavigationContainerRef,
  StackActions,
  CommonActions,
} from '@react-navigation/native';
import { RootStackParamList } from './Routes';

type RouteName = keyof RootStackParamList;

export const navigationRef =
  createNavigationContainerRef<RootStackParamList>();

export const navigate = <T extends RouteName>(
  screenName: T,
  params?: RootStackParamList[T],
) => {
  if (navigationRef.isReady()) {
    (navigationRef.navigate as any)(screenName, params);
  }
};

export const getCurrentRouteName = () => {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute()?.name;
  }

  return undefined;
};

export const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

export const push = <T extends RouteName>(
  screenName: T,
  params?: RootStackParamList[T],
) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(screenName, params));
  }
};

export const replace = <T extends RouteName>(
  screenName: T,
  params?: RootStackParamList[T],
) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(screenName, params));
  }
};

export const popToTop = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
};

export const reset = <T extends RouteName>(
  screenName: T,
  params?: RootStackParamList[T],
) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: screenName, params: params }],
      }),
    );
  }
};
