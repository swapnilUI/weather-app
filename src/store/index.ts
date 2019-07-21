import { Store, Action, createStore as createReduxStore, applyMiddleware, combineReducers } from 'redux'
import thunk,{ ThunkMiddleware} from 'redux-thunk'
import { IAppState } from './globalTypes';
import { WeatherReducer } from './weatherReducer';

const createReducer = () => {
    return combineReducers<IAppState>({
        weather:WeatherReducer
    })
} 
export const createDefaultAppStore=():IAppState=>{
    return {}
}
export const createStore = (): Store<IAppState, Action> =>{
    const reducer = createReducer();
    return createReduxStore(reducer,createDefaultAppStore(), applyMiddleware(thunk as ThunkMiddleware<IAppState, Action>))
}