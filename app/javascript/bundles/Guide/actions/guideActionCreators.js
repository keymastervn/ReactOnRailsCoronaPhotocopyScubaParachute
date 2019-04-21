/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import * as consts from '../constants/guideConstants';
import * as types from '../constants/guideTypes';

export function fetchDataOnSearch(searchValue) {
  return dispatch => {
    return axios.get(consts.API_GUIDES_SEARCH, {
      params: {
        searchValue
      }
    }).then(response => {
      const res = response.data.result
      if (response.status === 200) {
        dispatch(fetchDataOnSearchToStore(res))
        dispatch(fetchDataOnSearchCompleted())
      }
    })
  }
}

export function fetchDataOnSearchToStore(data) {
  return {
    type: types.FETCH_DATA_ON_SEARCH_TO_STORE,
    payload: data
  }
}

export function fetchDataOnSearchCompleted() {
  // TODO add a dispatch to check user available credit here
  return {
    type: types.FETCH_DATA_ON_SEARCH_COMPLETED
  }
}
