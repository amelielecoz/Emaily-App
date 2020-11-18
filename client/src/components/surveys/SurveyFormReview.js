import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions'

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

    const reviewFields = _.map(formFields, ({ name, label}) => {
        return (
            <div key={name}>
                <label style={{ fontSize: '1rem', margin: '10px 0'}} >{ label }</label>
                <div style={{ fontSize: '1.5rem'}} >{ formValues[name] }</div>
            </div>
        )
    })
    return (
        <div>
            <h4 className="center">Please confirm your entries</h4>
            <div style={{ margin: '40px 0'}}>
                { reviewFields }
            </div>
            <button 
                className="yellow darken-4 white-text btn-flat"
                onClick={onCancel}
            >
                Back
            </button>
            <button className="blue btn-flat right white-text" onClick={() => submitSurvey(formValues, history)}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
};

function mapStateToProps(state) { 
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));