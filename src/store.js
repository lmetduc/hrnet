import {configureStore} from "@reduxjs/toolkit";

import createEmployeeReducer from './features/employee';

export const store = configureStore({
    reducer: {
        createEmployee: createEmployeeReducer
    }
})
