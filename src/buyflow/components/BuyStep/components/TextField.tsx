import React, { useState } from 'react'
import { useCollectedData, useStep } from '../../../hooks';
import { MAX_NAME_SIZE, MIN_NAME_SIZE } from '../../../../utils/constants';

interface TextFieldProps {
  title: string;
  fieldName: string
  nextStep: string;
}

export function TextField({title = '', fieldName, nextStep}: TextFieldProps) {
  const [fieldValue, setFieldValue] = useState('');
  const {setStep} = useStep();
  const {updateCollectedData} = useCollectedData();

  function handleClick() {
    setStep(nextStep);
    updateCollectedData(fieldName, fieldValue);
    setFieldValue('');
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setFieldValue(value);
  }

  function emptyField(fieldValue: string) {
    return fieldValue !== '' && fieldValue.length >= MIN_NAME_SIZE && fieldValue.length <= MAX_NAME_SIZE;
  }

  return (
    <>
      <div>
        {title}:{' '}
        <input
          type="text"
          onChange={handleChange}
          value={fieldValue}
        ></input>
      </div>
      <button onClick={handleClick} disabled={!emptyField(fieldValue)}>Next</button>
    </>
  )
}
