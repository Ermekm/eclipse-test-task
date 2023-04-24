import { rootReducer } from "./reducers/index";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reduxDevTools = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, reduxDevTools);

/* Types */
export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducer>;
