"use client";

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const userPersistConfig = {
  key: "user",
  storage: storage,
  blacklist: [], // Add any properties you want to exclude from persistence
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
