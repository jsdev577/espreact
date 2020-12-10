import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auction from '../Components/Auction';
import Home from '../Components/Home';
import Stake from '../Components/Stake';
import Referral from '../Components/Referral';

const AppRouter = () =>
  (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/auction" component={Auction} />
          <Route path="/stake" component={Stake} />
          <Route path="/referral" component={Referral} />
        </Switch>
      </div>
    </BrowserRouter>
  )

export default AppRouter;