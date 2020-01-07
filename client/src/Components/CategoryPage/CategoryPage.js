import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
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

const CategoryPage = (props) => {
  const dispatch = useDispatch();
  const { vehicles, filter, loading, currentData, selectedCity } = useSelector((state) => state.vehicleDetails);
  var category;
  var searchTerm;
  const stateFilterData = { 
    ...filter,
    city: selectedCity 
  };

  useEffect(() => {
    category = categoryData[props.match.params.category].id;
    if (props.history.location.search.trim() !== "") {
      const search = new URLSearchParams(props.history.location.search);
      searchTerm = search.get("searchTerm") ? search.get("searchTerm") : '';
    }
    dispatch(actions.getVehicles(category, stateFilterData, searchTerm));
  }, [props.history.location.search])



  useEffect(() => {
    dispatch(actions.getPaginatedData(0, 9));
  }, [vehicles])

  const onPageChanged = paginationData => {
    const { currentPage, totalPages, pageLimit } = paginationData;
    const offset = (currentPage - 1) * pageLimit;
    dispatch(actions.getPaginatedData(offset, pageLimit));
  };

  let renderedVehicles = <Spinner />;
  let paginations = "";
  let containerClass = "";
  if (vehicles.length && currentData[0] != "NA") {
    renderedVehicles = currentData.map((vehicle, index) => (
      <Card
        key={index}
        year={vehicle._source.myear}
        kms={vehicle._source.kmdriven}
        cc={vehicle._source.cc}
        name={vehicle._source.name}
        loc={vehicle._source.loc}
        cost={vehicle._source.price}
        vehicleid={vehicle._id}
        image={vehicle._source.mimage}
      />
    ));
    containerClass = vehicles.length > 9 ? "cardContainer" : "";
    const totalRecords = Object.keys(vehicles).length;
    paginations = (
      <Pagination
        totalRecords={totalRecords}
        pageLimit={9}
        pageNeighbours={1}
        onPageChanged={onPageChanged}
      />
    );
  }

  if (currentData[0] == "NA") {
    renderedVehicles = <h2>'No Vehicles Found!'</h2>;
  }

  let navigation = categoryData[
    props.match.params.category
  ].name.replace("Bike", "Motorcycle").slice(0, -1).split(" ").join("-");
  let heading = categoryData[props.match.params.category].name.replace(
    "Bike",
    "Motorcycle"
  ).slice(0, -1).split(" ").join("-");
  let text =
    "Motorcycles are available at easy EMI starting at ₹2,000*. Your  dream bike is not a distant dream now.";
  return (
    <div id="CategoryPage">
      <Header />
      <MainMenu />
      <Grid container component="div" direction="row" justify="center" className="mtop40">
        <Grid item xs={11} md={11} sm={11} lg={11}>
          <Banner navigation={navigation} heading={heading} text={text} path={props.location.pathname} />
        </Grid>
        <Grid item xs={11} md={11} sm={11} lg={11}>
          <Grid container component="div" direction="row">
            <Navigation />
            <Grid item xs={12} md={12} sm={12} lg={9} className="ProductListSec">
              <SortDropDown
                title="Sort by"
                list={Menu}
                category={categoryData[props.match.params.category].id}
              />
              <Grid container direction="row" component="div" className={containerClass}>
                {renderedVehicles}
              </Grid>
              {paginations}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );

}

export default CategoryPage;
