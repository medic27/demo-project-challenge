import produce from "immer";
import { GET_QUESTIONNAIRE_SUCCESS } from "./../actions/questionnaire";
import { UPDATE_ANSWERS, UPDATE_PII } from "./../actions/answers";

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
    case GET_QUESTIONNAIRE_SUCCESS: {
      //We create the structure for answers sections based on the questionnaire structure. Once we have the structure, we can update individual answers given the section index and question index.
      const questionnaireSections = action.data.questions.sections;
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
        sectionObj.questions.forEach(questionsObj => {
          answersSections[index].answers.push({ answer: "" });
        });
      });
      return newObj;
    }

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
    default:
      return prevState;
  }
};

export default answersReducer;
