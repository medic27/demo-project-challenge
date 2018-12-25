const POST_QUESTIONNAIRE = "POST_QUESTIONNAIRE";
const RECEIVE_QUESTIONNAIRE = "RECEIVE_QUESTIONNAIRE";
const GET_QUESTIONNAIRE = "GET_QUESTIONNAIRE";

export const saveQuestionnaire = jsonObj => {
  return dispatch => {
    dispatch({
      type: POST_QUESTIONNAIRE,
    });

    return fetch("/api/questionnaire", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonObj),
    })
      .then(response => response.json())
      .then(data => dispatch(receiveQuestionnaire(data)));
  };
};

export const requestQuestionnaire = id => {
  return {
    type: GET_QUESTIONNAIRE,
    //promise
  };
};

export const receiveQuestionnaire = data => {
  return {
    type: RECEIVE_QUESTIONNAIRE,
    payload: {
      data,
    },
  };
};
