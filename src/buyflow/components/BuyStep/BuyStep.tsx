import { useMemo } from 'react';
import { useStep } from '../../hooks';
import { AgeStep, EmailStep, SummaryStep, TextField } from './components';


export default function BuyStep() {
  const {currentStep} = useStep();
  
  const renderStepComponent = useMemo(() => {
    if (currentStep === 'firstName') {
      return <TextField title='First name' fieldName='firstName' nextStep='lastName'/>
    }

    if (currentStep === 'lastName') {
      return <TextField title='Last name' fieldName='lastName' nextStep='email'/>
    }

    if (currentStep === 'email') {
      return <EmailStep/>
    }

    if (currentStep === 'age') {
      return <AgeStep/>
    }

    if (currentStep === 'summary') {
      return <SummaryStep/>
    }
  }, [currentStep]);

  return (
    <>{renderStepComponent}</>
  )
}