import React from 'react';
import ReactDOM from 'react-dom';
jest.mock('./api');
const fakeApi = require('./api');
fakeApi.default.mockReturnValue(Promise.resolve('test'));
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
