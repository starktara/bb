import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import "./CategoryPage.css";
import Header from "../Header/Header";
import MainMenu from "../MainMenu/MainMenu";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Navigation from "../Navigation/Navigation";
import Card from "../Card/Card";
import SortDropDown from "../SortDropDown/SortDropDown";
import Pagination from "../Pagination/Pagination";
import * as actions from "../../store/actions/index";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { Menu } from "../../shared/utility";
import categoryData from "../../shared/mappings/category_data";
import { BRANDS } from "../../shared/mappings/brands";
import { MODELS } from "../../shared/mappings/bike_models";

class CategoryPage extends Component {
  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      if (this.props.history.location.search.trim() == "") {
        this.props.getVehicles(categoryData[this.props.match.params.category].id);
      } else {
        const search = new URLSearchParams(this.props.history.location.search);
        if (search.get("searchTerm")) {
          this.props.getSearchData(search.get("searchTerm"));
        }
      }
    });
    if (this.props.history.location.search.trim() == "") {
      this.props.getVehicles(categoryData[this.props.match.params.category].id);
    } else {
      const search = new URLSearchParams(this.props.history.location.search);
      if (search.get("searchTerm")) {
        this.props.getSearchData(search.get("searchTerm"));
      }
    }

  
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.vehicles != nextProps.vehicles) {
      this.props.getPaginatedData(0, 9);
    }
  }

  // componentWillUnmount() {
  //   this.unlisten();
  // }

  onPageChanged = paginationData => {
    const { currentPage, totalPages, pageLimit } = paginationData;
    const offset = (currentPage - 1) * pageLimit;
    this.props.getPaginatedData(offset, pageLimit);
  };

  render() {
    let vehicles = <Spinner />;
    let paginations = "";
    let containerClass = "";
    if (this.props.vehicles.length && this.props.currentData[0] != "NA") {
      vehicles = this.props.currentData.map((vehicle, index) => (
        <Card
          key={index}
          year={vehicle._source.myear}
          kms={vehicle._source.kmdriven}
          cc={vehicle._source.cc}
          // name={
          // vehicle._source.model <= MODELS.length - 1 &&
          // vehicle._source.brand <= BRANDS.length - 1
          // ? BRANDS[vehicle._source.brand] +
          // " " +
          // MODELS[vehicle._source.model]
          // : "NA"
          // }
          name={vehicle._source.name}
          loc={vehicle._source.loc}
          cost={vehicle._source.price}
          vehicleid={vehicle._id}
          image={vehicle._source.mimage}
        />
      ));
      containerClass = this.props.vehicles.length > 9 ? "cardContainer" : "";
      const totalRecords = Object.keys(this.props.vehicles).length;
      paginations = (
        <Pagination
          totalRecords={totalRecords}
          pageLimit={9}
          pageNeighbours={1}
          onPageChanged={this.onPageChanged}
        />
      );
    }

    if (this.props.currentData[0] == "NA") {
      vehicles = <h2>'No Vehicles Found!'</h2>;
    }

    let navigation = categoryData[
      this.props.match.params.category
    ].name.replace("Bike", "Motorcycle");
    let heading = categoryData[this.props.match.params.category].name.replace(
      "Bike",
      "Motorcycle"
    );
    let text =
      "Motorcycles are available at easy EMI starting at ₹2,000*. Your  dream bike is not a distant dream now.";

    return (
      <div>
        <Header />
        <MainMenu />
        <div className="wapper">
          <Banner
            navigation={navigation}
            heading={heading}
            text={text}
            path={this.props.location.pathname}
          />
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
                list={Menu}
                category={categoryData[this.props.match.params.category].id}
              />
              <Grid
                container
                direction="row"
                component="div"
                className={containerClass}
              >
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
    currentData: state.vehicleDetails.currentData,
    currentPage: state.vehicleDetails.currentPage,
    totalPages: state.vehicleDetails.totalPages
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getVehicles: vehicleCategory =>
      dispatch(actions.getVehicles(vehicleCategory)),
    getPaginatedData: (offset, pagelimit) =>
      dispatch(actions.getPaginatedData(offset, pagelimit)),
    getSearchData: searchData => dispatch(actions.getSearchData(searchData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPage);
