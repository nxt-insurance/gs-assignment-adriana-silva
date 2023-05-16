import { useState, createContext, useContext, PropsWithChildren } from 'react'

const StepContext = createContext({currentStep: '', productFlow: '', setStep: (nextStep: string) => {}, setFlow: (flow: string) => {} });
export const useStep = () => useContext(StepContext);

interface StepProviderProps {
  children: PropsWithChildren<JSX.Element>
}

export default function StepProvider({children}: StepProviderProps) {

  
  const [productFlow, setProductFlow] = useState('');
  const [currentStep, setStep] = useState('');

  const handleUpdateStep = (nextStep: string) => {
    return setStep(nextStep);
  }

  const handleUpdateProductFlow = (flow: string) => {
    return setProductFlow(flow);
  }

  return (
    <StepContext.Provider value={{currentStep, setStep: handleUpdateStep, productFlow, setFlow: handleUpdateProductFlow}}>
      {children}
    </StepContext.Provider>
  )
}