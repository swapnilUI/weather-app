import { WeatherReducer } from './weatherReducer';
import { IWeatherState } from './weatherReducer/types';
import { FakeWeatherData } from '../FakeTestData/FakeWeatherResponse';
import { RECEIVED_WEATHER_DATA } from './weatherReducer/action-types';

const FakeIntialState:IWeatherState = {
    data:{
        cod:"",
        message:0,
        cnt:0
    },
    isLoading:false
}

const FakeAction = {
    type:'FakeAction',
}

const FakeActionWithPayload = {
    type:RECEIVED_WEATHER_DATA,
    payload:{...FakeWeatherData}
}

describe('Weather Reducer Test', () => {
    it('It should return default state', () => {
        const state = WeatherReducer(FakeIntialState,FakeAction)
        expect(state).toEqual(FakeIntialState)
    })
    it('It should return new state', () => {
        const state= WeatherReducer(FakeIntialState,FakeActionWithPayload);
        expect(state.data.cod).toEqual(FakeWeatherData.cod)
    })
})