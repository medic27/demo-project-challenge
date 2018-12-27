import React from "react";
import { getRespondents } from "./../actions/respondents";
import { connect } from "react-redux";
import lifecycle from "react-pure-lifecycle";
import { compose } from "recompose";
import { selectRespondentData } from "./../selectors";
import { Link } from "react-router-dom";

const Respondents = ({ respondentData }) => (
  <div>
    <header>
      <h2> List of Respondents</h2>
    </header>
    <section>
      {respondentData &&
        respondentData.length &&
        respondentData.map(data => {
          return (
            <section>
              <p>
                <Link to={`${data.id}/${data.questionnaireid}`}>{data.id}</Link>
              </p>
            </section>
          );
        })}
    </section>
  </div>
);

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
