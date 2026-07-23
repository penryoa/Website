const initialState = {
  darkModeEnabled: true,
};

const DarkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DARK_TOGGLE": {
      return {
        darkModeEnabled: !state.darkModeEnabled
      };
    }
    default: {
      return state;
    }
  }
};

export default DarkModeReducer;