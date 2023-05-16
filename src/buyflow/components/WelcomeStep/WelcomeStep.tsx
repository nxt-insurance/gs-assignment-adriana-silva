import { AppRoutes } from '../../../utils/Routes';
import { useStep } from '../../hooks';
import { Link } from 'react-router-dom';
import { ProductIds } from '../../../utils/enums';

import { useEffect } from 'react';
import { Header } from '..';

export default function WelcomeStep() {
  const insuranceDevRoute = `${AppRoutes.Buy}/${ProductIds.devIns}`;
  const insuranceDesignerRoute = `${AppRoutes.Buy}/${ProductIds.designerIns}`;
  const {setFlow, setStep, productFlow, currentStep} = useStep();

  useEffect(() => {
    if (productFlow && currentStep) {
      setFlow('');
      setStep('');
    }
  }, [currentStep, productFlow, setFlow, setStep])

  return (
    <>   
      <Header />
      <p>Welcome to Getsafe's Insurance portal</p>
      <ul>
        <li>
          <Link to={insuranceDevRoute}>Get started with the Developer insurance!</Link>
        </li>
        <li>
        <Link to={insuranceDesignerRoute}>Get started with the Designer insurance!</Link>
        </li>
      </ul>
    </>
  )
}