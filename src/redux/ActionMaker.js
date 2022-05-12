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
