import loggerMiddleware from "./middleware/logger";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";

const configureStore = () => {
  //logs action being dispatched and the next state
  const middlewares = [];
  if (process.env === "development") {
    middlewares.push(loggerMiddleware);
  }
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    undefined,
    composeEnhancers(middlewareEnhancer),
  );
};

export default configureStore;
