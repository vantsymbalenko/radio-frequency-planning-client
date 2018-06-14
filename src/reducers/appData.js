import {PARAMS} from '../constants/appConst';
const initialState = {
    parameters: false
};

export const appData = (state = {...initialState}, action) => {
  switch (action.type){
      case PARAMS : {
          return{
              ...state,
              parameters: !state.parameters
          }
      }
      default: {
          return state;
      }
  }
};