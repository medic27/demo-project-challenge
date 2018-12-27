import questionnaireReducer from "./questionnaire";
import answersReducer from "./answers";
import respondentsReducer from "./respondents";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  questionnaire: questionnaireReducer,
  answers: answersReducer,
  respondents: respondentsReducer,
});

export default rootReducer;
