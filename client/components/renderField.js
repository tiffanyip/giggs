import React from 'react';

const renderField = ({ input, label, type, className, meta: { touched, error } }, value) => (
  <div>
    <label>{label}</label>
    <input {...input} placeholder={label} type={type} className={className} />
    {touched && error && <span>{error}</span>}
  </div>
);

export default renderField;
