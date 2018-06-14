import { REQUEST_START, REQUEST_END } from "../constants/appConst";

export const disableButtons = () => {
  return {
    type: REQUEST_START
  };
};

export const enableButtons = () => {
  return {
    type: REQUEST_END
  };
};
