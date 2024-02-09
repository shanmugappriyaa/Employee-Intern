import React from "react";
import {configureStore} from '@reduxjs/toolkit'
import empReducer from './EmpReducer'

export const store = configureStore({
    reducer:{
        employee:empReducer
    }
})