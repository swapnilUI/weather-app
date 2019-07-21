import React from "react";
import styled from "styled-components";
import { Card as CustomCard } from "@material-ui/core";
import { IDaysDataItem } from "../../../store/weatherReducer/types";
import { dateDisplayFormat } from "../../../assets/common/Utility";

interface IDayCardsSliderProps {
  daysData: IDaysDataItem[];
  date: string
  isSelected:boolean
  onCardChange:(date:string) => any
}
export class DayCard extends React.PureComponent<IDayCardsSliderProps> {
  public render() {
    const { date, daysData, isSelected } = this.props;
    const tempData = daysData.filter(item => item.date === date);
    const currentTemp = tempData[0];
    return (
      <CardWrap key={date}>
        <Card onClick={this.onCardChange} className={isSelected ? 'selected':''}>
            {<H3>{Math.round(currentTemp.temp)} &deg;{currentTemp.tempUnit}</H3>}
            <p>{dateDisplayFormat(date)}</p>
        </Card>
      </CardWrap>
    );
  }
  public onCardChange = ()=>{
      this.props.onCardChange(this.props.date)
  }
}

const CardWrap = styled.div`
  padding: 10px;
  box-sizing: border-box;
  height:100%;
  p{
    @media(max-width:375px){
      font-size:13px
    }
  }
`;
const Card = styled(CustomCard)`
  padding: 20px;
  box-sizing: border-box;
  height:100%;
  cursor:pointer;
  &:hover{
    box-shadow: 4px 4px 9px -5px rgba(0,0,0,0.75);
  }
  &.selected{
    border:1px solid #ff0
  }
`;
const H3 = styled.h3`
  font-size:20px;
  @media(max-width:375px){
    font-size:15px
  }
`