import React from 'react';
import { FormInputContainer, InputContainer, LabelContainer } from './FormInput.styles';

const FormInput = ({ handleChange, label, ...otherInputProps }) => (
  <FormInputContainer>
    <InputContainer onChange={ handleChange } { ...otherInputProps } />
    { label ?
      <LabelContainer shrink={ otherInputProps.value.length > 0 }>{ label }</LabelContainer> :
      null
    }
  </FormInputContainer>
);

export default FormInput;
