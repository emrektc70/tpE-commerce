import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import authenticationMiddleware from "../middleware/authentification";
import registerMiddleware from "../middleware/register";
import globalMiddleware from "../middleware/global";


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
        authenticationMiddleware,
        registerMiddleware,
        globalMiddleware,
        ...getDefaultMiddleware({
            serializableCheck: false,
        }),
    ],
});

export default store;

// Infer the Rootstateand AppDispatch types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: Postsstate, comments: CommentsState, users: Usersstate}
export type AppDispatch = typeof store.dispatch;
