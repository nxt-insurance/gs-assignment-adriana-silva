import { useEffect } from 'react';
import { ProductIds } from '../../utils/enums';
import { useStep } from '../hooks';

import { PRODUCT_IDS_TO_NAMES } from '../../utils/constants';
import { BuyStep, Header } from '../components';


interface BuyflowProps {
  productId: ProductIds.devIns
}

export default function BuyflowDev({productId}: BuyflowProps) {
  const productTypeText = PRODUCT_IDS_TO_NAMES[productId];
  const {setFlow, productFlow, setStep, currentStep} = useStep();

  useEffect(() => {
    setFlow(productId);
    if (!currentStep) {
      return setStep('email');
    }
  }, [currentStep, productFlow, productId, setFlow, setStep])

  return (
    <>
      <Header />
      <h4>Buying {productTypeText}</h4>
      <BuyStep />
    </>
  )
}