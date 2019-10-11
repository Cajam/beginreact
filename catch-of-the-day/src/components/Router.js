import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            {/* when the route is excatly /, use StorePicker component */}
            <Route exact path="/" component={StorePicker} />
            {/* when the route is /store/anything, go to the App component using that storeId*/}
            <Route path="/store/:storeId" component={App} />>
            {/* when the route is an unknown path,  */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;