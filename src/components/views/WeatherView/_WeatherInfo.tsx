import React from 'react'
import styled from 'styled-components';
import { RadioGroupTag } from '../../core/RadioGroup';
import { Units, TempUnit } from '../../../assets/common/Contstants';
import { DayCardsSlider } from './_DayCardsSlide';
import { IDaysDataItem } from '../../../store/weatherReducer/types';
import { BarChart } from '../../core/BarChart';
import { ErrorAlert } from '../../core/ErrorAlert';

interface IWeatherInfo {
    onUnitChange:(unit:string) => any
    dates:string[]
    daysData:IDaysDataItem[]
    selectedUnit:string
}
export class WeatherInfo extends React.PureComponent<IWeatherInfo>{
    public state = {
        selected:this.props.dates[0]
    }
    public render(){
        const { daysData, dates, selectedUnit } = this.props;
        const { selected } = this.state
        const currentTempData = daysData.filter(item => item.date === selected)
        const labels = currentTempData.map(item => item.time);
        const temps = currentTempData.map(item => item.temp);
        return(
            <WeatherInfoWrapper>
                <RadioGroupWrapper>
                    <RadioGroupTag defaultValue={selectedUnit} options={Units} onRadioChange={this.props.onUnitChange} />
                </RadioGroupWrapper>
                { daysData.length > 0 ? <><DayCardsSlider onCardChange={this.onCardChange} selected={selected} dates={dates} daysData={daysData} />
                <BarChart selectedUnit={selectedUnit} chartLabel={`Temparature in ${selectedUnit=== TempUnit.METRIC ? TempUnit.CELECIUS:TempUnit.FAHRENHEIT}`} labels={labels} data={temps} /></> : <ErrorAlert error={`No weather data available`} />}
            </WeatherInfoWrapper>
        )
    }
    public onCardChange = (date:string) => {
        this.setState({
            selected:date
        })
    }
}

const WeatherInfoWrapper = styled.section`
        max-width:960px;
        margin:0 auto;
        font-family:"Roboto", "Helvetica", "Arial", sans-serif
`
const RadioGroupWrapper = styled.div`
        display:flex;
        justify-content:center;
        margin-bottom:50px
`