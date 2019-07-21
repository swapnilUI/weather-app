export interface IWeatherState {
    data:IWeatherResponse
    isLoading:boolean
}

export interface IWeatherResponse{
    cod:string
    message:number
    cnt:number
    list?:IWeatherDataListItem[]
}

export interface IWeatherDataListItem {
    dt:number
    main:{
        temp:number
        temp_min:number
        temp_max:number
        pressure:number
        sea_level:number
        grnd_level:number
        humidity:number
        temp_kf:number
    }
    dt_txt:string
}

export interface IGetWeatherDataAction{
    type:string
    payload?:IWeatherResponse
}

export interface IDaysDataItem {
    temp:number
    tempUnit:string
    date:string
    time:string
}