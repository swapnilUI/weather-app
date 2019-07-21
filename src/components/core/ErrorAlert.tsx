import React from 'react'
import styled from 'styled-components';

interface IErrorAlertProps{
    error:string
}
export class ErrorAlert extends React.PureComponent<IErrorAlertProps>{
    public render(){
        const { error } = this.props
        return(
            <ErrorAlertBox>
                {error}
            </ErrorAlertBox>
        )
    }
}   

const ErrorAlertBox = styled.div`
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
`
