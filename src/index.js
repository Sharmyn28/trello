import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import BoardView from './components/board';
import WorkingBoard from './components/workingBoard';
import { Provider } from 'redux-zero/react';
import store from './store/store';

const Index = () => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
                <Route path='/board' component={BoardView} />
                <Route path="/details" component={WorkingBoard} />
                {/*<Route path='/skills' component={Skills} />*/}
            </Switch>
        </HashRouter>
    </Provider>
)

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
