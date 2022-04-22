import ActionMaker from "./ActionMaker";

export const actionTypes = {
  SET_DARK: "SET_DARK",
  SET_NAME: "SET_NAME",
};

export const setDark = (dark) => {
  const { request, success, failure } = ActionMaker(actionTypes.SET_DARK);

  return (dispatch) => {
    dispatch(request); // we submitted the request
    // do the actual request
    dispatch(success({ dark: dark }));
  };
};

export const setName = (name) => {
  const { request, success, failure } = ActionMaker(actionTypes.SET_NAME);

  return (dispatch) => {
    dispatch(request); // we submitted the request
    // do the actual request
    dispatch(success({ name: name }));
  };
};
