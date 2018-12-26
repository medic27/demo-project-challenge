import React from "react";
import { connect } from "react-redux";
import { selectQuestionnaireData, selectQuestionnaireId } from "./../selectors";
import { getQuestionnaire } from "./../actions/questionnaire";

const Questionnaire = props => {
  console.log("props:", props);
  const { getQuestionnaire, questionnaireId, match } = props;
  const matchId = match.params.id;

  return <div>Questionnaire Page</div>;
};

const mapStateToProps = state => {
  return {
    questionnaire: selectQuestionnaireData(state),
    questionnaireId: selectQuestionnaireId(state),
  };
};

export default connect(
  mapStateToProps,
  { getQuestionnaire },
)(Questionnaire);
