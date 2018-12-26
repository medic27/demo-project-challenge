import produce from "immer";
import {
  POST_QUESTIONNAIRE_SUCCESS,
  GET_QUESTIONNAIRE_SUCCESS,
} from "./../actions/questionnaire";

const INITIAL_STATE = { data: {}, id: null, status: "" };

const questionnaireReducer = (prevState = INITIAL_STATE, action) =>
  produce(prevState, draft => {
    // disable eslint for default switch case since with immer/produce it will return the prevState automatically if draft object isn't modified
    // eslint-disable-next-line
    switch (action.type) {
      case POST_QUESTIONNAIRE_SUCCESS:
        draft.status = "success";
        draft.id = action.id;
        break;
      case GET_QUESTIONNAIRE_SUCCESS:
        draft.data = action.data ? action.data.questions : draft.data;
        break;
    }
  });

export default questionnaireReducer;
