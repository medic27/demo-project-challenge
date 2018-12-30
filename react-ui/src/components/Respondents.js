import React from "react";
import { getRespondents } from "./../actions/respondents";
import { connect } from "react-redux";
import lifecycle from "react-pure-lifecycle";
import { compose } from "recompose";
import { selectRespondentData } from "./../selectors";
import { Link } from "react-router-dom";
import { css, StyleSheet } from "aphrodite";

const Respondents = ({ respondentData }) => {
  let listOfNames;
  if (respondentData && respondentData.length) {
    listOfNames = respondentData.map(({ id, questionnaireid, name }, index) => (
      <section key={`respondents-${index}`}>
        <p>
          <Link to={`/respondents/${questionnaireid}/${id}`}>{name}</Link>
        </p>
      </section>
    ));
  }
  const noRespondents = "No respondents so far.";

  return (
    <div className={css(styles.container)}>
      <header>
        <h2> List of Respondents</h2>
      </header>
      <section>{listOfNames ? listOfNames : noRespondents}</section>
    </div>
  );
};

const componentDidMount = ({ getRespondents }) => {
  getRespondents();
};

const methods = {
  componentDidMount,
};

const mapStateToProps = state => ({
  respondentData: selectRespondentData(state),
});

export default compose(
  connect(
    mapStateToProps,
    { getRespondents },
  ),
  lifecycle(methods),
)(Respondents);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },
});
