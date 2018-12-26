import questionnaireReducer from "./questionnaire";
import answersReducer from "./answers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  questionnaire: questionnaireReducer,
  answers: answersReducer,
});

export default rootReducer;
