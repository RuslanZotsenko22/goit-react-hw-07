

import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filterReducer from './filtersSlice';




export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },

});
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import contactReducer from './contactsSlice';
// import filterReducer from './filtersSlice';


// const rootReducer = combineReducers({
//     contacts: contactReducer,
//     filter: filterReducer,
// })

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),

// });


// export const persistor = persistStore(store);
// export default store;