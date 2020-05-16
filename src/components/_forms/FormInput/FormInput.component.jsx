import React from 'react';
import './FormInput.styles.scss';

const FormInput = ({ handleChange, label, ...otherInputProps }) => (
  <div className="form-input">
    <input className="input" onChange={ handleChange } { ...otherInputProps } />
    { label ?
      <label className={ `${ otherInputProps.value.length ? 'shrink' : '' } label` }>{ label }</label> :
      null
    }
  </div>
);

export default FormInput;
