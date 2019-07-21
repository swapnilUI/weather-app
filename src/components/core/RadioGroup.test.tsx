import React from 'react';
import { shallow, mount } from 'enzyme';
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

describe('RadioGroup', () => {
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
    const component = mount(<RadioGroupTag onRadioChange={onRadioChange} defaultValue={FakeOptions[0].value} options={FakeOptions}  />);
    component.find(`input[value='imperial']`).simulate('change', { target: {value:'imperial'}})
    const state:any = component.state();
    expect(state.value).toEqual(FakeOptions[1].value)
  })
});