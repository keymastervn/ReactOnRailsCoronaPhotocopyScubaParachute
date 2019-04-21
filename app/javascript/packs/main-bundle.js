import ReactOnRails from 'react-on-rails';

import HelloWorldApp from '../bundles/HelloWorld/startup/HelloWorldApp';
import GuideApp from '../bundles/Guide/startup/GuideApp';
import ShowGuideApp from '../bundles/Guide/startup/ShowGuideApp';

// Support bootstrap
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

// for RailsAuthenticityToken
import setupCSRFToken from "../utils/axios_csrf_token"
setupCSRFToken()

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorldApp,
  GuideApp,
  ShowGuideApp
});
