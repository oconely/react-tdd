import * as constants from './constants';
import * as actions from './balance';

it ('creates an action to set the balance', () => {
  const balance = 0;

  const exptectedAction = { type: constants.SET_BALANCE, balance };

  expect(actions.setBalance(balance)).toEqual(exptectedAction);
});

it('creates an action to deposit into the balance', () => {
  const deposit = 10;

  const exptectedAction = { type: constants.DEPOSIT, deposit };

  expect(actions.deposit(deposit)).toEqual(exptectedAction);
});

it('creates an action to withdraw from the balance', () => {
  const withdrawal = 10;

  const expectedAction = { type: constants.WITHDRAW, withdrawal };

  expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
});