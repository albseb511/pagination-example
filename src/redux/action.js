import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CHANGE_PAGE_NO
} from "./actionTypes";
import axios from "axios";

export const getDataRequest = () => ({
  type: FETCH_DATA_REQUEST
});

export const getDataSuccess = payload => ({
  type: FETCH_DATA_SUCCESS,
  payload
});

export const getDataFailure = payload => ({
  type: FETCH_DATA_FAILURE,
  payload
});

export const getData = payload => {
  return dispatch => {
    dispatch(getDataRequest())
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        console.log(res)
        dispatch(getDataSuccess(res.data))
      })
      .catch(err => dispatch(getDataFailure(err)));
  };
};

export const changePage = payload => ({
  type: CHANGE_PAGE_NO,
  payload
})