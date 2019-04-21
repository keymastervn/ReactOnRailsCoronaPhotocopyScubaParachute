/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as consts from '../constants/guideConstants';
import * as types from '../constants/guideTypes';

export function proceedCreateNewReview(guideID, rating, comment) {
  return dispatch => {
    dispatch(saveNewReviewToStore(guideID, rating, comment))
    dispatch(saveNewReviewToDatabase(guideID, rating, comment))
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

export function saveNewReviewToDatabase(guideID, rating, comment) {
  return dispatch => {
    return axios.post(consts.CONTROLLER_REVIEWS, {
        guide_id: guideID,
        score: rating,
        comment
      }
    ).then(response => {
      console.log("Successfully added new review")
    })
  }
}
