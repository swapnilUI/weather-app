import { IWeatherState } from "./weatherReducer/types";

export interface IAppState {
    weather?:IWeatherState
}

export interface IGenericType{
    [key:string]:any
}