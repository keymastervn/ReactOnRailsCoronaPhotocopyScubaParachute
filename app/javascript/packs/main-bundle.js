import ReactOnRails from 'react-on-rails';

import HelloWorldApp from '../bundles/HelloWorld/startup/HelloWorldApp';
import GuideApp from '../bundles/Guide/startup/GuideApp';
import GuideDataTableApp from '../bundles/Guide/startup/GuideDataTableApp';
import guideStore from '../bundles/Guide/store/guideStore';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorldApp,
  GuideApp,
  GuideDataTableApp
});

ReactOnRails.registerStore({
  guideStore,
});
