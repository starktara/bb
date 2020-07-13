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
import HowItWorks from './Components/HowItWorks/HowItWorks';
import About from './Components/About/About';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
import AdminListPage from './Components/AdminListPage/AdminListPage';
import AdminUpload from './Components/AdminUpload/AdminUpload';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import BlogPostHome from './Components/Blog/BlogPostHome'
import BlogPost from './Components/Blog/BlogPost'
import BulkUpload from "./Components/BulkUpload/BulkUpload";


const App = () => {

    return (
        <Switch>
            <Route exact path="/admin/BulkUpload" component={BulkUpload}/>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/admin/edit/:id' component={AdminUpload} />
            <Route exact path='/admin/list' component={AdminListPage} />
            <Route exact path='/admin' component={AdminLogin} />
            <Route exact path='/admin/upload' component={AdminUpload} />
            <Route exact path='/category/:category' component={CategoryPage} />
            <Route path='/vehicledetails/locate-store' component={LocateStore} />
            <Route path='/vehicledetails/:vehicleid' component={VehicleDetails} />
            <Route path='/sell' component={Sell} />
            <Route path="/becomefranchiseowner" component={BecomeFranchiseOwner} />
            <Route path="/contact" component={Contact} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/faq" component={Faq} />
            <Route path="/about" component={About} />
            <Route path="/howitworks" component={HowItWorks} />
            <Route path="/privacypolicy" component={PrivacyPolicy} />
            <Route path="/termsandconditions" component={TermsAndConditions} />
            <Route exact path='/blog/:id' component={BlogPost} />   
            <Route exact path='/blog' component={BlogPostHome} /> 
        </Switch>
    );
}

export default connect(null)(App);