import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Switch, Route } from 'react-router-dom';
import SignIn from './signIn';
import SignUp from './signUp';

const Index = () =>(
    <HashRouter>
        <Switch>
            <Route exact path='/' component={SignIn} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            {/*<Route path='/skills' component={Skills} />*/}
        </Switch>
    </HashRouter>
)

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
