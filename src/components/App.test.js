import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()})


describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a connected Wallet component', () => {
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  });

  it('contains a connected Loot component', () => {
    expect(app.find('Connect(Loot)').exists()).toBe(true);
  });
})