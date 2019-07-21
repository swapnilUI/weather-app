import React from 'react';
import { shallow } from 'enzyme';
import { BarChart } from './BarChart';

const FakeChartLabel = "Fake chart";
const FakeLabels = ["1","2","3"];
const FakeData= [1,2,3]

describe('BarChart', () => {
  it('should render correctly', () => {
    const component = shallow(<BarChart chartLabel={FakeChartLabel} labels={FakeLabels} data={FakeData} />);
    expect(component).toMatchSnapshot();
  });
});