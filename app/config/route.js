import React, {Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import App from '../containers/App/index';
import ListView from '../containers/ListView/index';
import Main from '../containers/Main/index';
import Tutorial from '../containers/Tutorial/index'

const config = [
    {
        path: '/',
        component: App,
        // default index
        indexRoute: {
            component: Main
        },
        childRoutes: [
            { path: '/list', name: 'list', component: ListView },
            { path: '/main', name: 'main', component: Main },
            { path: '/test', name: 'test', component: Tutorial}
        ]
    }
];

const route = (
    <Router
        history={hashHistory}
        routes={config}
        render={applyRouterMiddleware(useScroll())}>
    </Router>
);


export default route;
