import React from 'react'
import { Provider } from 'react-redux'

import { createStore } from "../store";
import App from '../App';

export const createApp =() => {
    const store = createStore();
    return class extends React.Component<{}>{
        public render(){
            return(
                <Provider store={store}>
                    <App/>
                </Provider>
            )
        }
    }
}