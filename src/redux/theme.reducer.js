import { actionTypes } from "./theme.actions";

const initialState = {
  dark: true,
  name: "default",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DARK + "_SUCCESS": {
      return {
        ...state,
        dark: action.payload.dark,
      };
    }
    case actionTypes.SET_NAME + "_SUCCESS": {
      return {
        ...state,
        name: action.payload.name,
      };
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
