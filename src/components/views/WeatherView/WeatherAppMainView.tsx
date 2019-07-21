import React from 'react'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'
import { Loader } from '../../core/Loader';
import { IWeatherState } from '../../../store/weatherReducer/types';
import { IAppState } from '../../../store/globalTypes';
import { getWeatherDataRemoteAction } from './actions';
import { WeatherInfo } from './_WeatherInfo';
import { defaultUnit, TempUnit } from '../../../assets/common/Contstants';

interface IWeatherDataProps {
    weatherData?:IWeatherState | undefined
}

interface DispatchProps{
    getWeatherDataRemoteAction:(unit:string) => any
}

type IWeatherAppMainViewProps = IWeatherDataProps & DispatchProps

class WeatherAppMainView extends React.PureComponent<IWeatherAppMainViewProps>{
    public state = {
        selectedUnit:""
    }
    
    public componentDidMount(){
        this.setState({
            selectedUnit:defaultUnit
        })
        this.props.getWeatherDataRemoteAction(defaultUnit)
    }
    public onUnitChange = (unit:string) =>{
        this.setState({
            selectedUnit:unit
        })
        this.props.getWeatherDataRemoteAction(unit)
    }
    public render(){
        const { weatherData } = this.props;
        const { selectedUnit } = this.state;
        const unit = selectedUnit === TempUnit.METRIC ? "C": "F";
        const daysData = weatherData && weatherData.data.list && weatherData.data.list !== null && weatherData.data.list.length !== 0 ? weatherData.data.list.map(item => {
            return {
                date:item.dt_txt.split(" ")[0],
                time:item.dt_txt.split(" ")[1].slice(0,5),
                tempUnit:`${unit}`,
                temp:item.main.temp
            }
        }): [];
        const dates = daysData && daysData.length !== 0 ? Array.from(new Set(daysData.map(item => item.date.split(" ")[0]))) : [];
        return(
             weatherData && !weatherData.isLoading? 
             <WeatherInfo selectedUnit={selectedUnit} dates={dates} daysData={daysData} onUnitChange={this.onUnitChange} />:<Loader />
        )
    }
}

const mapStatetoProps = (state:IAppState) => {
    return{
        weatherData:state.weather
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: IWeatherDataProps): DispatchProps => {
    return {
      getWeatherDataRemoteAction: async (unit:string) => {
        await dispatch(getWeatherDataRemoteAction(unit))
      }
    }
  }
  
export default connect(mapStatetoProps,mapDispatchToProps)(WeatherAppMainView)