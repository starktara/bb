import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './Components/Homepage/Homepage';
import CategoryPage from './Components/CategoryPage/CategoryPage';
import LocateStore from './Components/LocateStore/LocateStore';
import VehicleDetails from './Components/VehicleDetails/VehicleDetails';
import Sell from './Components/Sell/Sell';
import BecomeFranchiseOwner from './Components/BecomeFranchiseOwner/BecomeFranchiseOwner';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () =>  {

    return (
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/category/:category' component={CategoryPage} />
            <Route path='/locate-store' component={LocateStore} />
            <Route path='/vehicledetails/:vehicleid' component={VehicleDetails} />
            <Route path='/sell' component={Sell} />
            <Route path="/becomefranchiseowner" component={BecomeFranchiseOwner} />
        </Switch>
    );
}

export default connect(null)(App);
