import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store, { history } from "./redux/configureStore";
import { ConnectedRouter } from "connected-react-router";
import App from './components/App';
import I18n from 'redux-i18n';
import { translations } from "./translations";
//import "./ReactotronConfig";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <I18n translations={translations} initialLang="en" fallbackLang="en">
                <App className="app"/> 
            </I18n>
        </ConnectedRouter>
    </Provider>, 
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


//localStorage.setItem('bestCourse', 'nomad academy');