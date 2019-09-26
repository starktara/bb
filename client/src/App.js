import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './Components/Homepage/Homepage';
import CategoryPage from './Components/CategoryPage/CategoryPage';
import LocateStore from './Components/LocateStore/LocateStore';
import VehicleDetails from './Components/VehicleDetails/VehicleDetails';
import Sell from './Components/Sell/Sell';
import BecomeFranchiseOwner from './Components/BecomeFranchiseOwner/BecomeFranchiseOwner';
import Contact from './Components/Contact/Contact';
import Signup from './Components/Auth/Signup/Signup';
import Signin from './Components/Auth/Signin/Signin';
import Faq from './Components/Faq/Faq';


const App = () =>  {

    return (
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/category/:category' component={CategoryPage} />
            <Route path='/vehicledetails/locate-store' component={LocateStore} />
            <Route path='/vehicledetails/:vehicleid' component={VehicleDetails} />
            <Route path='/sell' component={Sell} />
            <Route path="/becomefranchiseowner" component={BecomeFranchiseOwner} />
            <Route path="/contact" component={Contact} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/faq" component={Faq} />
        </Switch>
    );
}

export default connect(null)(App);
