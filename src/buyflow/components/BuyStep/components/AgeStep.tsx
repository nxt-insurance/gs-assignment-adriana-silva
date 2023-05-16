import React, { useState } from 'react'
import { useCollectedData, useStep } from '../../../hooks';
import { INITIAL_AGE, MAXIMUM_AGE, MINIMUM_AGE } from '../../../../utils/constants';


export function AgeStep() {
  const [age, setAge] = useState(INITIAL_AGE);
  const {setStep} = useStep();
  const {updateCollectedData} = useCollectedData();

  function handleClick() {
    updateCollectedData('age', age);
    setStep('summary');
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setAge(Number(value));
  }

  function invalidAge(age: number) {
    return age !== 0 && age >= MINIMUM_AGE && age <= MAXIMUM_AGE;
  }

  return (
    <>
      <div>
        Age:{' '}
        <input
          min={INITIAL_AGE}
          max={MAXIMUM_AGE}
          type="number"
          onChange={handleChange}
          value={age}
        ></input>
      </div>
      <button onClick={handleClick} disabled={!invalidAge(age)}>Next</button>
    </>
  )
}