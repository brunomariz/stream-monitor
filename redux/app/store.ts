import { configureStore } from "@reduxjs/toolkit";
import monitorReducer from "../features/monitor/monitorSlice";

const store = configureStore({
  reducer: {
    monitor: monitorReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
