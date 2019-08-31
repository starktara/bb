import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './Components/Homepage/Homepage';
import CategoryPage from './Components/CategoryPage/CategoryPage';
import LocateStore from './Components/LocateStore/LocateStore';
import VehichleDetails from './Components/VehichleDetails/VehichleDetails';

const App = () =>  {

    return (
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/category/:category' component={CategoryPage} />
            <Route path='/locate-store' component={LocateStore} />
            <Route path='/vehicledetails/:bikeid' component={VehichleDetails} /> 
        </Switch>
    );
}

export default connect(null)(App);
