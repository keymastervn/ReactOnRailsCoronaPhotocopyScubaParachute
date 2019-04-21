/* eslint-disable import/prefer-default-export */
import * as consts from '../constants/guideConstants';
import * as types from '../constants/guideTypes';

export function proceedCreateNewReview(guideID, rating, comment) {
  return dispatch => {
    dispatch(saveNewReviewToStore(guideID, rating, comment))

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

export function saveNewReviewToStore(guideID, rating, comment) {
  const data = {
    id: Math.floor(Math.random() * 10000000) + 1,
    guide_id: guideID,
    score: rating,
    comment
  }
  return {
    type: types.SAVE_NEW_REVIEW_TO_STORE,
    payload: data
  }
}
