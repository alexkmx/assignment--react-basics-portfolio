import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import App from './App';
import {HashRouter} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import {skills, eduList, jobsList} from './data/datasource';

class AppRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App />
      </HashRouter>
    )
  }
}


ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
