import ReactOnRails from 'react-on-rails';

import HelloWorldApp from '../bundles/HelloWorld/startup/HelloWorldApp';
import GuideApp from '../bundles/Guide/startup/GuideApp';

// Support bootstrap
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorldApp,
  GuideApp,
});
