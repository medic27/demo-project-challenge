import { CREATE_ANSWERS_OBJECT } from "./../reducers/answers";
import { SYNC_LOCAL_STORAGE } from "./answers";

export const POST_QUESTIONNAIRE_SUCCESS = "POST_QUESTIONNAIRE_SUCCESS";
export const GET_QUESTIONNAIRE_SUCCESS = "GET_QUESTIONNAIRE_SUCCESS";
export const GET_QUESTIONNAIRE_INITIAL = "GET_QUESTIONNAIRE_INITIAL";

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

export const getQuestionnaire = (id, respondentId) => {
  return dispatch => {
    dispatch({
      type: GET_QUESTIONNAIRE_INITIAL,
    });
    return fetch(`/api/questionnaire/${id}`)
      .then(response => {
        response.json();
      })
      .then(data => {
        dispatch({
          type: GET_QUESTIONNAIRE_SUCCESS,
          data,
        });
        dispatch({
          type: CREATE_ANSWERS_OBJECT,
          data,
        });

        const answersJsonString = window.localStorage.getItem("answers");
        const answersJson = JSON.parse(answersJsonString);
        if (answersJson && !respondentId) {
          dispatch({
            type: SYNC_LOCAL_STORAGE,
            data: answersJson,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};
