import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CHANGE_PAGE_NO
} from "./actionTypes";

const initState = {
  data: [],
  page: 1,
  perPage: 10,
  isLoading: false,
  error: false
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false
      };
      case FETCH_DATA_SUCCESS:
        return {
        ...state,
        data: payload,
        isLoading: false
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    case CHANGE_PAGE_NO:
      if(payload<1)
        return state
      return {
        ...state,
        page: payload
      }
    default:
      return state;
  }
};
