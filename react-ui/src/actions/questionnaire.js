const POST_QUESTIONNAIRE_SUCCESS = "POST_QUESTIONNAIRE_SUCCESS";
const GET_QUESTIONNAIRE_SUCCESS = "GET_QUESTIONNAIRE_SUCCESS";

export const saveQuestionnaire = jsonObj => {
  return dispatch => {
    return fetch("/api/questionnaire", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonObj),
    })
      .then(response => response.text())
      .then(id =>
        dispatch({
          type: POST_QUESTIONNAIRE_SUCCESS,
          id: id,
        }),
      )
      .catch(error => {
        console.log(error);
      });
  };
};

export const getQuestionnaire = id => {
  return dispatch => {
    return fetch(`/api/questionnaire/${id}`)
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: GET_QUESTIONNAIRE_SUCCESS,
          data,
        }),
      )
      .catch(error => {
        console.log(error);
      });
  };
};
