export const GET_RESPONDENTS_SUCCESS = "GET_RESPONDENTS_SUCCESS";

export const getRespondents = () => {
  return dispatch => {
    return fetch(`/api/respondents/`)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_RESPONDENTS_SUCCESS,
          data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
