const initialState = {
  open: false,
};

const NavbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_TOGGLE": {
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