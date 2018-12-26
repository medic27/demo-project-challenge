// import loggerMiddleware from "./middleware/logger";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const configureStore = () => {
  //logs action being dispatched and the next state
  const middlewares = [thunk];
  // middleswares.push(loggerMiddleware);
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
