import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CHANGE_PAGE_NO,
} from './actionTypes'

const initialState = {
  page: 1,
  data: [],
  perPage: 10,
  length: 0,
  totalPages: 0,
  isLoadng: false,
  error: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case FETCH_DATA_REQUEST:
        return { 
          ...state, 
          isLoadng: true,
          error: false
        }

    case FETCH_DATA_SUCCESS:
        return { 
          ...state,
          data: payload,
          length: payload.length,
          totalPages: payload.length/state.perPage,
          isLoadng: false
        }

    case FETCH_DATA_FAILURE:
        return { 
          ...state,
          error: true
        }
    case CHANGE_PAGE_NO:
        return {
          ...state,
          page: payload
        }
      
    default:
        return state
    }
}
