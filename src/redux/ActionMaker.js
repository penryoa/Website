/**
 * Creates a set of functions to call within an action, providing a consistent
 * framework to use when a request is made and if it's a success or failure
 * @param {string} actionType
 * @returns
 */
export default function ActionMaker(actionType) {
  function request() {
    return { type: actionType + "_REQUEST" };
  }
  function success(payload) {
    return { type: actionType + "_SUCCESS", payload };
  }
  function failure(error) {
    return { type: actionType + "_ERROR", error };
  }
  return { request, success, failure };
}
