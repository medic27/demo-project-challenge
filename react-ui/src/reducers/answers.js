import produce from "immer";
import {
  UPDATE_ANSWERS,
  UPDATE_PII,
  SYNC_LOCAL_STORAGE,
  POST_ANSWERS_SUCCESS,
} from "./../actions/answers";
export const CREATE_ANSWERS_OBJECT = "CREATE_ANSWERS_OBJECT";

const INITIAL_STATE = {
  data: {
    id: "",
    by: { name: "", email: "" },
    at: "",
    for: "",
    sections: [],
  },
};

const answersReducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    // when questionnaire is loaded into redux, we want to create a similarly structured answers object in redux in order for us to update the answers into it. However, we don't  want to conflict with SYNC_LOCAL_STORAGE here since it would destroy the data in there. We check the draft.localStorage property before doing this.
    case CREATE_ANSWERS_OBJECT: {
      if (!prevState.localStorage) {
        return createAnswersStructure(prevState, action);
      }
    }
    case POST_ANSWERS_SUCCESS:
      produce;
    case UPDATE_ANSWERS: {
      //we assume that we already have the answer structure by now
      const { sectionIndex, answersIndex, value } = action;
      return produce(prevState, draft => {
        // inject the answer value into the right place and immer will do the rest!
        draft.data.sections[sectionIndex].answers[answersIndex].answer = value;
      });
    }
    case UPDATE_PII: {
      const { piiType, value } = action;
      return produce(prevState, draft => {
        piiType === "name"
          ? (draft.data.by.name = value)
          : (draft.data.by.email = value);
      });
    }

    case SYNC_LOCAL_STORAGE: {
      const answersJson = action.data;
      const nextState = produce(prevState, draft => {
        draft.data = answersJson;
        draft.localStorage = true;
      });
      return nextState;
    }

    default:
      return prevState;
  }
};

const createAnswersStructure = (_, action) => {
  //We create the structure for answers sections based on the questionnaire structure. Once we have the structure, we can update individual answers given the section index and question index.
  const questionnaireSections = action.data.questions.sections;

  //to refactor with immer later if possible
  const newObj = {
    data: {
      id: "",
      by: { name: "", email: "" },
      at: "",
      for: action.data.questions.id,
      sections: [],
    },
  };
  const answersSections = newObj.data.sections;
  questionnaireSections.forEach((sectionObj, index) => {
    answersSections.push({ answers: [] });
    sectionObj.questions.forEach(_ => {
      answersSections[index].answers.push({ answer: "" });
    });
  });
  return newObj;
};

export default answersReducer;
