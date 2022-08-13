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