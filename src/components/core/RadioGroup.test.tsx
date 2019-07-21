import React from 'react';
import { shallow } from 'enzyme';
import { RadioGroupTag, IRadioGroupTagState } from './RadioGroup';

const FakeOptions = [
    {
        label:'Celcius',
        value:'metric'
    },{
        label:'Fahrenheit',
        value:'imperial'
    }
];

const onRadioChange = jest.fn();

describe('MyComponent', () => {
  it('should render correctly', () => {
    const component = shallow(<RadioGroupTag onRadioChange={onRadioChange} defaultValue={FakeOptions[0].value} options={FakeOptions}  />);
    expect(component).toMatchSnapshot();
  });
  it('should check default value', () => {
    const component = shallow(<RadioGroupTag onRadioChange={onRadioChange} defaultValue={FakeOptions[0].value} options={FakeOptions}  />);
    const state:any = component.state()
    expect(state.value).toEqual(FakeOptions[0].value)
  });
  it('should change value on click', () =>{
    const component = shallow(<RadioGroupTag onRadioChange={onRadioChange} defaultValue={FakeOptions[0].value} options={FakeOptions}  />);
    const label = component.find(`label`).at(1);
    label.simulate('click');
    const state:any = component.state()
    expect(state.value).toEqual(FakeOptions[1].value)
  })
});