//Store import
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// Persist imports
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


//Slice imports
import NetflixReducer from "./fetchReducer";
import showReducer from "./showReducer";
import trailerReducer from "./trailerReducer";
import playTimeReducer from "./playTimeReducer";
import modalReducer from "./modalReducer";
import likedReducer from "./likedReducer";

//Persist
const persistConfig = {
  key: "data",
  storage,
  //Blacklist is for any component that is being affected by Persist that shouldn't be affected
  blacklist: ['modal'],
  // stateReconciler: autoMergeLevel2
};

//new reducers to be added here
const combined = combineReducers({
  netflix: NetflixReducer,
  show: showReducer,
  trailer: trailerReducer,
  playTime: playTimeReducer,
  modal: modalReducer,
  liked:likedReducer,
});

const persistedReducer = persistReducer(persistConfig, combined);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
