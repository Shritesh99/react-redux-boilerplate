import { rootReducer } from "./reducers";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
	middleware.push(createLogger());
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
