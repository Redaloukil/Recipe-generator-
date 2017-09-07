import React from 'react';
import ReactDOM from 'react-dom';
// using ES6 modules
import { BrowserRouter as Router,  Route , Switch , BrowserRouter} from 'react-router-dom'
import './index.css';
import Header from './header'
import App from './App';
import Home from './home';
import Recipee from './recipee';


import registerServiceWorker from './registerServiceWorker';
ReactDOM.render((
  <div>
    <Header/>
    <Router history={BrowserRouter}>
      <Switch>
        <div className="container">
          <div className="row">
            <div className="col-sm-offset-2 col-sm-8 content">
              <Route exact path="/" component={Home}/>
              <Route path="/recipee" component={Recipee}/>
            </div>
          </div>
        </div>
      </Switch>
    </Router>
  </div>
), document.getElementById('root'))

registerServiceWorker();







