import {combineReducers, configureStore} from '@reduxjs/toolkit'
import seasonReducer from './reducers/SeasonsSlice';

import garanteeReducer from './reducers/GaranteeSlice'
import countryReducer from './reducers/CountrySlice'
import materialArcReducer from './reducers/MaterialArcSlice'
import materialBottomReducer from './reducers/MaterialBottomSlice'
import placecountReducer from './reducers/PlacecountSlice'
import colorReducer from './reducers/ColorSlice'

import tentReducer  from './reducers/TentSlice'

const rootReducer = combineReducers({
    garanteeReducer,
    countryReducer,
    materialArcReducer,
    materialBottomReducer,
    placecountReducer,
    seasonReducer,
    tentReducer,
    colorReducer,
})

export const setupStore = ()=>{
    return configureStore({
        reducer: rootReducer,

    })
}

export type RootState  = ReturnType<typeof rootReducer>
export type AppStore  = ReturnType<typeof setupStore>
export type AppDispatch  = AppStore['dispatch']

