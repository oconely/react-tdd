import React from 'react';
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { Loot } from './Loot';

configure({adapter: new Adapter()});

describe('Loot', () => {
  const mockFetchBitcoin = jest.fn();
  let props = { balance: 10, bitcoin: { bpi: { USD: { rate: '1,000' } } }, fetchBitcoin: mockFetchBitcoin }
  let loot = shallow(<Loot {...props} />);

  it('renders properly', () => {
    expect(loot).toMatchSnapshot();
  });

  describe('when mounted', () => {
    beforeEach(() => {
      loot = mount(<Loot {...props} />)
    });

    it('dispatches the `fetchBitcoin()` method it receives from props', () => {
      loot.debug()
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });

  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
      // props = {balance: 10, bitcoin: { bpi: { USD: { rate: '1,000' } } }};
      loot = shallow(<Loot {...props} />);
    });

    it('displays the correct bitcoin value', () => {
      expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01');
    });
  });
});