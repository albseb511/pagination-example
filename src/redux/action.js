import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CHANGE_PAGE_NO
} from './actionTypes'
import axios from 'axios'

export const fetchDataRequest = (payload) => ({
  type: FETCH_DATA_REQUEST,
  payload
})

export const fetchDataSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  payload
})

export const fetchDataFailure = (payload) => ({
  type: FETCH_DATA_FAILURE,
  payload
})

export const fetchData = (payload) => {
  return dispatch => {
    dispatch(fetchDataRequest())
    axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then(res=>dispatch(fetchDataSuccess(res.data)))
    .catch(err=>dispatch(fetchDataFailure(err)))
  }
}

export const changePage = (payload) => ({
  type: CHANGE_PAGE_NO,
  payload
})

