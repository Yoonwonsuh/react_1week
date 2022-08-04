import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import todoReducer from '../modules/Todo';


export default configureStore({
  reducer: { 
    todos : todoReducer
}
}) 