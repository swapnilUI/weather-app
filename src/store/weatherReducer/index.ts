import { IWeatherState, IGetWeatherDataAction } from "./types";
import { RECEIVED_WEATHER_DATA, INPROGRESS_WEATHER_DATA } from "./action-types";

const initialState:IWeatherState = {
        data:{
            cod:"",
            message:0,
            cnt:0
        },
        isLoading:false
}
export const WeatherReducer = (state:IWeatherState = initialState , action:IGetWeatherDataAction):IWeatherState =>{
    switch(action.type){
        case RECEIVED_WEATHER_DATA:
            if(action.payload){
                return{
                    ...state,
                    data:{
                        ...state.data,
                        ...action.payload
                    },
                    isLoading:false
                }
            }else{
                return{
                    ...state,
                    isLoading:false
                }
            }
        case INPROGRESS_WEATHER_DATA:
            return{
                ...state,
                isLoading:true
            }
        default:
            return state
    }
}   

