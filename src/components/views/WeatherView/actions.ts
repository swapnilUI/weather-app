import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RECEIVED_WEATHER_DATA, INPROGRESS_WEATHER_DATA } from "../../../store/weatherReducer/action-types";
import { IAppState } from "../../../store/globalTypes";
import { IWeatherResponse } from "../../../store/weatherReducer/types";
import axios, { AxiosResponse, AxiosError } from "axios";
import {
  FetchResultType,
  openweathermapEndpoint
} from "../../../assets/common/Contstants";

export const getWeatherDataRemoteAction = (
  unit: string
): ThunkAction<Promise<void>, IAppState, {}, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<IAppState, {}, AnyAction>
  ): Promise<void> => {
    dispatch(fetchingWeatherDataAction())
    const weatherData = await openWeatherMapAPI(unit);
    dispatch(getWeatherDataAction(weatherData));
  };
};

const openWeatherMapAPI = (unit: string) => {
  const openWeatherMapEndpoint = openweathermapEndpoint(unit);
  return axios
    .get(openWeatherMapEndpoint)
    .then((response: AxiosResponse) => {
      if (response.status === 200) {
        return response.data;
      } else {
        return {
          status: FetchResultType.ERROR,
          message: "Unkown error"
        };
      }
    })
    .catch((error: AxiosError) => {
      if (error.response && error.response.status) {
        if (error.response.status === 403) {
          return {
            status: FetchResultType.FORBIDDEN,
            message: error.response!.data
          };
        }
        if (error.response.status === 401) {
          return {
            status: FetchResultType.UNAUTHORIZED,
            message: error.response!.data
          };
        }
      }
      return {
        status: FetchResultType.ERROR,
        message: error.response!.data
      };
    });
};

export const fetchingWeatherDataAction = () => {
  return {
    type: INPROGRESS_WEATHER_DATA
  }
}

export const getWeatherDataAction = (response: IWeatherResponse) => {
  return {
    type: RECEIVED_WEATHER_DATA,
    payload: response
  };
};
