import produce from "immer";
import {
  POST_QUESTIONNAIRE_SUCCESS,
  GET_QUESTIONNAIRE_SUCCESS,
} from "./../actions/questionnaire";

const INITIAL_STATE = { data: {}, id: null, status: "" };

const questionnaire = (prevState = INITIAL_STATE, action) =>
  produce(prevState, draft => {
    // disable because we don't need a default switch case with produce() since it will return the prevState
    // eslint-disable-next-line
    switch (action.type) {
      case POST_QUESTIONNAIRE_SUCCESS:
        draft.status = "success";
        draft.id = action.id;
        break;
      case GET_QUESTIONNAIRE_SUCCESS:
        draft.data = action.data;
        break;
    }
  });

export default questionnaire;
