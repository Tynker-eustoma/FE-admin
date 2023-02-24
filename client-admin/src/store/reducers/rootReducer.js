import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import itemReducer from "./itemReducer";
import ingredientsReducer from "./ingredientsReducer";

const rootReducer = combineReducers({
  item: itemReducer,
  category: categoryReducer,
  ingredients: ingredientsReducer
})

export default rootReducer