import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { logger } from "./middlewares/logger";
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk'

let store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store