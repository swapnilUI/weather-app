const APPID = `75f972b80e26f14fe6c920aa6a85ad57`
const COUNT = "40"
const CITY = "Munich"
const COUNTRYCODE = "de"
const openweathermapURL = `http://api.openweathermap.org/data/2.5/forecast?q=${CITY},${COUNTRYCODE}&APPID=${APPID}&cnt=${COUNT}&units={unit}`

export const openweathermapEndpoint=(unit:string) => {
    return openweathermapURL.replace('{unit}', unit);
}
export enum FetchResultType{
    ERROR = 'ERRROR',
    SUCCESS ='SUCCESS',
    UNAUTHORIZED = 'UNAUTHORIZED',
    FORBIDDEN = 'FORBIDDEN'
}
export const Units = [{
    label:'Celcius',
    value:'metric'
},{
    label:'Fahrenheit',
    value:'imperial'
}]

export enum TempUnit {
    CELECIUS = 'Celcius',
    FAHRENHEIT = 'Fahrenheit',
    METRIC = 'metric',
    IMPERIAL = 'imperial'
}

export const defaultUnit = "metric"
export const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
