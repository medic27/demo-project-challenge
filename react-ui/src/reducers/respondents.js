import produce from "immer";
import { GET_RESPONDENTS_SUCCESS } from "./../actions/respondents";

const INITIAL_STATE = {};

const respondentsReducer = (prevState = INITIAL_STATE, action) =>
  produce(prevState, draft => {
    // eslint-disable-next-line
    switch (action.type) {
      case GET_RESPONDENTS_SUCCESS:
        draft.data = action.data;
        break;
    }
  });

export default respondentsReducer;
