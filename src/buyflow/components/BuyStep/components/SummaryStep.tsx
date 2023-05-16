import { Link } from 'react-router-dom'
import { AppRoutes } from '../../../../utils/Routes';
import { useStep, useCollectedData } from '../../../hooks';
import { ProductIds } from '../../../../utils/enums';

export function SummaryStep(){
  const {collectedData} = useCollectedData();
  const {productFlow} = useStep();
  const {firstName, lastName, email, age} = collectedData;
  const redirectToPurchasedWithParams = `${AppRoutes.Purchased}=${productFlow}`;


  function renderName () {
    if (firstName !== '' && lastName !== '' && productFlow === ProductIds.designerIns) {
      return (
        <>
          <div>First name: {firstName}</div>
          <div>Last name: {lastName}</div>
        </>
      )
    }
  }

  return (
    <>
      {renderName()}
      <div>Email: {email}</div>
      <div>Age: {age}</div>
      <div>
        <Link to={redirectToPurchasedWithParams}>Purchase</Link>
      </div>
    </>
  )
}
