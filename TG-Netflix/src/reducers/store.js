//Store import
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Persist imports
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

//Slice imports
import NetflixReducer from "./fetchReducer";
import showReducer from "./showReducer";
import trailerReducer from "./trailerReducer";
import playTimeReducer from "./playTimeReducer";
import modalReducer from "./modalReducer";

//Persist
const persistConfig = {
  key: "data",
  storage,
  stateReconciler: autoMergeLevel2
};

//new reducers to be added here
const combined = combineReducers({
  netflix: NetflixReducer,
  show: showReducer,
  trailer: trailerReducer,
  playTime: playTimeReducer,
  modal: modalReducer,
});

const persistedReducer = persistReducer(persistConfig, combined);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  //Blacklist is for any component that is being affected by Persist that shouldn't be affected
  blacklist: ['modalReducer']
});

export const persistor = persistStore(store);
