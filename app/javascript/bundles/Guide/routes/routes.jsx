import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GuideContainer from '../containers/GuideContainer';
import ShowGuideContainer from '../containers/ShowGuideContainer';

export default (
  <div>
    <Switch>
      <Route
        path="/"
        component={GuideContainer}
        exact
      />
      <Route
        path="/guide"
        component={GuideContainer}
        exact
      />
      <Route
        path="/guide/*"
        component={ShowGuideContainer}
      />
    </Switch>
  </div>
);