import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import seasonReducer from './reducers/SeasonsSlice';

import garanteeReducer from './reducers/GaranteeSlice'
import countryReducer from './reducers/CountrySlice'
import materialArcReducer from './reducers/MaterialArcSlice'
import materialBottomReducer from './reducers/MaterialBottomSlice'
import placecountReducer from './reducers/PlacecountSlice'



const rootReducer = combineReducers({
    garanteeReducer,
    countryReducer,
    materialArcReducer,
    materialBottomReducer,
    placecountReducer,
    seasonReducer
})

export const setupStore = ()=>{
    return configureStore({
        reducer: rootReducer,

    })
}

export type RootState  = ReturnType<typeof rootReducer>
export type AppStore  = ReturnType<typeof setupStore>
export type AppDispatch  = AppStore['dispatch']

