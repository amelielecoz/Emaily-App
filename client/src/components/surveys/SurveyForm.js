import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const FIELDS = [
    {label: 'Survey Title', name: 'title' },
    {label: 'Subject Line', name: 'subject' },
    {label: 'Email Body', name: 'body' },
    {label: 'Recipients List', name: 'recipients' },
]

class SurveyForm extends Component {
renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
        return (
            <Field component={SurveyField} type="text" label={label} name={name} />
        )
    })
}

    render() {
        return (
            <div>
                <h1>Survey Form</h1>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text left">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                    
                </form>
                
            </div>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);