import produce from "immer";
import { saveToLocalStorage } from "./../utils";

export const POST_ANSWERS_SUCCESS = "POST_ANSWERS_SUCCESS";
export const UPDATE_ANSWERS = "UPDATE_ANSWERS";
export const UPDATE_PII = "UPDATE_PII";

//post answers to DB
export const postAnswers = () => {
  return (dispatch, getState) => {
    const answersJson = getState().answers;
    return fetch("/api/answers", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answersJson),
    })
      .then(() =>
        dispatch({
          type: POST_ANSWERS_SUCCESS,
        }),
      )
      .catch(error => {
        console.log(error);
      });
  };
};

//update redux store with answered questions as well as perform a side effect to update localStorage with new answers state
export const updateAnswers = (sectionIndex, answersIndex, value) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_ANSWERS,
      sectionIndex,
      answersIndex,
      value,
    });

    saveToLocalStorage(getState);
  };
};

export const updatePii = (type, value) => {
  // we use thunk here so we can perform side effect to persist to localStorage
  return (dispatch, getState) => {
    if (type === "email" || type === "name") {
      dispatch({
        type: UPDATE_PII,
        value,
        piiType: type,
      });

      saveToLocalStorage(getState);
    }
  };
};

/* 
Considerations: while it's ok to POST the entire questionnaire, it seems wasteful to do so for the answers, having multiple POSTs just to add an additional answer each time in order to continuously save answer state. 

On the clientside, we can update the answers state in redux with something like setIn (using ImmutableJS for example), which optimizes the update, but on the server since we're storing the entire response object as a string, we can only update the entire stringified JSON. 

Due to this, an alternative solution used here is to not POST until the entire survey is ready for submission, and to save the state of the answers in localStorage as a stringified JSON object. This would mean that if the client changed browsers their previous answers would no longer be stored. One way to address this is to do intermittent POSTs when each section is completed, for example.
*/
