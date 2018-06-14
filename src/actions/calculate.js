import { disableButtons, enableButtons } from "./buttonsActions";
import { CALCULATE_URL, SET_DATA } from "../constants/appConst";

const setData = data => {
  return {
    type: SET_DATA,
    payload: { ...data }
  };
};

export const calculate = data => {
  return async dispatch => {
    dispatch(disableButtons());
    try {

      const settings = {
          method: "POST",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
          },
          body: JSON.stringify({...data})
      };

      const response = await fetch(CALCULATE_URL, settings);
      const responseData = await response.json();

      if (responseData.url) {
        dispatch(setData(responseData));
      }

    } catch (err) {
      alert("Sorry but was error. Try again later " + err);
      console.log(err);
    }
    dispatch(enableButtons());
  };
};
