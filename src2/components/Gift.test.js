import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import Gift from './Gift';

describe('Gift', () => {
  const id = 1;
  const mockRemove = jest.fn();
  const props = { gift: { id }, removeGift: mockRemove };
  const gift = shallow(<Gift {...props} />);

  it('renders properly', () => {
    expect(gift).toMatchSnapshot();
  })

  it('initializes a person and present in `state`', () => {
    expect(gift.state()).toEqual({person: '', present: ''});
  })

  describe('when typing into the person input', () => {
    const person = 'Uncle';
    
    beforeEach(() => {
      gift.find('.input-person').simulate('change', {target: { value: person }});
    });

    it('updates the person in `state`', () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe('when typing into the present input', () => {
    const present = 'Golf Club';

    beforeEach(() => {
      gift.find('.input-present').simulate('change', {target: { value: present }});
    });

    it('updates the present in `state`', () => {
      expect(gift.state().present).toEqual(present);
    });
  });

  describe('when clicking the `Remove Gift` button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    });

    it('calls the removeGift callback', () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    })
  });
});