import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

interface IOptions {
    label:string
    value:string
}
interface IRadioGroupTagProps {
    onRadioChange:(selectedValue:string) => any
    options:IOptions[]
    defaultValue:string
}
export interface IRadioGroupTagState {
    value:string
}
export class RadioGroupTag extends React.PureComponent<IRadioGroupTagProps,IRadioGroupTagState>{
        constructor(props:IRadioGroupTagProps){
            super(props);
            this.state ={
                value:this.props.defaultValue
            }
        }
        public handleChange = (event:any) => {
            this.setState({
                value:event.target.value
            })
            this.props.onRadioChange(event.target.value);
        }
        public render(){
            return(
                <RadioGroup style={{
                    flexDirection:'row'
                }} value={this.state.value} onChange={this.handleChange}>
                    {
                        this.props.options.map( (btn:IOptions) => 
                            <FormControlLabel key={btn.value} value={btn.value} control={<Radio />} label={btn.label} />    
                        )
                    }
                </RadioGroup>
            )
        }
}