/* eslint-disable import/prefer-default-export */
import * as consts from '../constants/guideConstants';
import * as types from '../constants/guideTypes';

export function proceedCreateNewReview(guideID, rating, comment) {
  return dispatch => {
    dispatch(saveNewReviewToStore(rating, comment))

    // return axios.get(consts.API_GUIDES_SEARCH, {
    //   params: {
    //     searchValue
    //   }
    // }).then(response => {
    //   const res = response.data.result
    //   if (response.status === 200) {
    //     dispatch(fetchDataOnSearchToStore(res))
    //   }
    // })
  }
}

export function saveNewReviewToStore(rating, comment) {
  const data = {
    score: rating,
    comment
  }
  return {
    type: types.SAVE_NEW_REVIEW_TO_STORE,
    payload: data
  }
}

export function fetchDataOnSearchCompleted() {
  // TODO add a dispatch to check user available credit here
  return {
    type: types.FETCH_DATA_ON_SEARCH_COMPLETED
  }
}
