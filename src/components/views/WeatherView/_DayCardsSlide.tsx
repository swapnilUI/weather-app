import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { IDaysDataItem } from "../../../store/weatherReducer/types";
import { NextArrow, PrevArrow } from "../../core/Arrows";
import { DayCard } from "./_DayCard";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};
interface IDayCardsSliderProps{
  daysData:IDaysDataItem[]
  dates: string[]
  selected:string
  onCardChange:(date:string) => any
}
export class DayCardsSlider extends React.PureComponent<IDayCardsSliderProps> {
  public render() {
    const { dates, daysData, selected} = this.props
    return (
      <SliderWrapper>
          <Slider {...settings}>
            {
              dates.map(date =>
                <DayCard onCardChange={this.props.onCardChange} isSelected={selected === date} key={date} date={date} daysData={daysData} />
              )
            }
          </Slider>
      </SliderWrapper>
    );
  }
}

const SliderWrapper = styled.div`
    padding-top:50px;
    .slick-next{
      top:-50px;
      right:22px
    }
    .slick-prev{
      top:-50px;
      left:22px
    }
`