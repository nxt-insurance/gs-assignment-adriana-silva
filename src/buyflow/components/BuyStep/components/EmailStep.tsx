import React, { useState } from 'react'
import { useCollectedData, useStep } from '../../../hooks';

export function EmailStep() {
  const [email, setEmail] = useState('');
  const {setStep} = useStep();
  const {updateCollectedData} = useCollectedData();

  function handleClick() {
    setStep('age');
    updateCollectedData('email', email);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setEmail(value);
  }

  function invalidEmail(email: string) {
    return email !== '' && /\S+@\S+\.\S+/.test(email);
  }

  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={handleChange}
          value={email}
        ></input>
      </div>
      <button onClick={handleClick} disabled={!invalidEmail(email)}>Next</button>
    </>
  )
}
