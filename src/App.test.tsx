import React from 'react';
import ReactDOM from 'react-dom';
import { createApp } from './components/createApp';

const App = createApp();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});




















