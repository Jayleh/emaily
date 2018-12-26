import React from 'react';

const SurveyField = ({ input, label, meta }) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return <span className="helper-text red-text">{error}</span>;
    }
  };

  return (
    <div className="row">
      <div className="col s12">
        <label>{label}</label>
        <input {...input} />
        {renderError(meta)}
      </div>
    </div>
  );
};

export default SurveyField;
