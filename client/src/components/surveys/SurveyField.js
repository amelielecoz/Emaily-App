//SurveyFiel contains logic to render a single label and text input
import React from 'react';

const SurveyField = ({ input, label, meta: {error, touched } }) => {
    
    return (
        <div>
            <label style={{ fontSize: '1.5rem'}} >{ label }</label>
            <input {...input} style={{ marginBottom: '5px', fontSize: '2rem'}} />
            <div className="red-text" style={{ marginBottom: '20px', }}>
                { touched && error }
            </div>
        </div>
    );
};

export default SurveyField;