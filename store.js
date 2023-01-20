import {configureStore} from "@reduxjs/toolkit";

import hrnetReducer from './features/hrnet';

export const store = configureStore({
    reducer: {
        toto: hrnetReducer
    }
})