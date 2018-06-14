import {
  PARAMS,
  REQUEST_END,
  REQUEST_START,
  SET_DATA
} from "../constants/appConst";

const initialState = {
  parameters: false,
  requestStatus: false,
  data: {}
};

export const appData = (state = { ...initialState }, action) => {
  switch (action.type) {
    case PARAMS: {
      return {
        ...state,
        parameters: !state.parameters
      };
    }
    case REQUEST_START: {
      return {
        ...state,
        requestStatus: true
      };
    }
    case REQUEST_END: {
      return {
        ...state,
        requestStatus: false
      };
    }
    case SET_DATA: {
      return {
        ...state,
        data: { ...action.payload }
      };
    }
    default: {
      return state;
    }
  }
};
