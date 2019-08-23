import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from 'react-redux';
import "./CategoryPage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Navigation from "../Navigation/Navigation";
import Card from "../Card/Card";
import SortDropDown from "../SortDropDown/SortDropDown";
import Pagination from "../Pagination/Pagination";
import * as actions from '../../store/actions/index';
import Spinner from '../../Components/UI/Spinner/Spinner';
import {Menu} from '../../shared/utility'

class CategoryPage extends Component {
  state = {
    currentData: [],
    currentPage: null,
    totalPages: null
  }

  componentDidMount () {
    this.props.getVehicles(this.props.match.params.category);
  }

  onPageChanged = paginationData => {
    const  data  = this.props.vehicles;
    // this.props(data);
    const { currentPage, totalPages, pageLimit } = paginationData;

    const offset = (currentPage - 1) * pageLimit;
    const currentData = data.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentData, totalPages });
  }

  render() {
    let vehicles = <Spinner />;
    let paginations = '';

    if (!this.props.loading) {
      vehicles = this.props.vehicles.map((vehicle,index) => (
        <Card key= {index} 
              year={vehicle._source.myear} 
              kms={vehicle._source.kmdriven} 
              cc={vehicle._source.cc}  
              name={vehicle._source.name} 
              loc={vehicle._source.loc}
              cost={vehicle._source.price}
        />
        ));
      const totalRecords = Object.keys(this.props.vehicles).length;
      paginations =  (
         <Pagination 
        totalRecords={totalRecords}
        pageLimit={8}
        pageNeighbours={1}
        onPageChanged={this.onPageChanged}
      />
      );
    }

    const {currentData, currentPage, totalPages} = this.state;


    let navigation = null;
    let heading = null;
    let text = null;

    if (this.props.match.params.category === "bike") {
      navigation = "Motorcycles";
      heading = "MOTORCYCLES";
      text =
        "Bikes are available at easy EMI starting at st 2,000*. Your  dream bike is not a distant dream now.";
    }

    return (
      <div>
        <Header />
        <div className="wapper">
          <Banner navigation={navigation} heading={heading} text={text} />
          <Grid container component="div" direction="row">
            <Navigation />
            <Grid
              item
              xs={12}
              md={12}
              sm={12}
              lg={9}
              className="ProductListSec"
            >
              <SortDropDown 
                title="Sort by"
                list={Menu} />
              <Grid container direction="row" component="div" className="cardConntainer">
                {vehicles}
              </Grid>
            {paginations}
            </Grid>   
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
       vehicles: state.vehicleDetails.vehicles,
       loading: state.vehicleDetails.loading,
  };
}
const mapDispatchToProps = dispatch => {
  return {
    getVehicles: (vehicleCategory) => dispatch(actions.getVehicles(vehicleCategory)),     
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryPage);
