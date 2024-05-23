const initialState = {
  open: false,
};

const NavbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE": {
      return {
        open: !state.open
      };
    }
    default: {
      return state;
    }
  }
};

export default NavbarReducer;