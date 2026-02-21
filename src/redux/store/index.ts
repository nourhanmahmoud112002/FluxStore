import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import reactotron from '../../ReactotronConfig';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  enhancers: (getDefaultEnhancers) =>
    __DEV__
      ? getDefaultEnhancers().concat(reactotron.createEnhancer!())
      : getDefaultEnhancers(),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
