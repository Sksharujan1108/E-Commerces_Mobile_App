import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

// configure store with middleware and reducers

const middleware = [logger];

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ serializableCheck: false }), ...middleware],
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;