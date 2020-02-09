import { FETCH_BITCOIN } from './constants';
import { apiUrl } from '../helpers/constants';

export const fetchBitcoin = () => {
  return dispatch => {
    return fetch(apiUrl)
      .then(response => response.json())
      .then(json => dispatch({ type: FETCH_BITCOIN, bitcoin: json }));
  }
}
