import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Switch, Route } from 'react-router-dom';
import SignIn from './signIn';
import SignUp from './signUp';
import Boards from './board';
import { Provider } from 'redux-zero/react'
import store from './store'

const Index = () => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
                <Route path='/board' component={Boards} />
                {/*<Route path='/skills' component={Skills} />*/}
            </Switch>
        </HashRouter>
    </Provider>
)

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
