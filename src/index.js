import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/layout/Header';
import Login from './components/containers/Login';

// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';





// create redux store -> reducers -> 'actions - actionType' | applyMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


// provide the store to react

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route path="/login" component={Login} exact={true} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);



