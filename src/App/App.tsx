import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { AppRoutes, insuranceDesignerRoute, insuranceDevRoute } from '../utils/Routes'
import { CollectedDataProvider, StepProvider} from '../buyflow/hooks'
import { ProductIds } from '../utils/enums'
import { BuyflowDesigner, BuyflowDev } from '../buyflow'
import './App.css'
import { WelcomeStep } from '../buyflow/components'

export default function App() {
  return (
    <StepProvider>
      <CollectedDataProvider> 
        <Router>
          <div className="App">
            <Switch>
              <Route path={insuranceDevRoute}>
                <BuyflowDev productId={ProductIds.devIns} />
              </Route>
              <Route path={insuranceDesignerRoute}>
                <BuyflowDesigner productId={ProductIds.designerIns} />
              </Route>
              <Route path={AppRoutes.Root}>
                <WelcomeStep/>
              </Route>
            </Switch>
          </div>
        </Router>
      </CollectedDataProvider>    
    </StepProvider>
  )
}
