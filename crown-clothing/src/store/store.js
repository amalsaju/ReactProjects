import { compose, createStore, applyMiddleware } from 'redux';
//import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    next(action);
  }

  console.log("action", action.type);
  console.log("payload", action.payload);

  console.log("state", store.getState());

  next(action);

  console.log("new state", store.getState());

}

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);



