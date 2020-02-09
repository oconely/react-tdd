import * as constants from './constants';

export const setBalance = balance => {
  return {
    type: constants.SET_BALANCE,
    balance
  }
}

export const deposit = deposit => ({ type: constants.DEPOSIT, deposit });

export const withdraw = withdrawal => ({
  type: constants.WITHDRAW,
  withdrawal 
});