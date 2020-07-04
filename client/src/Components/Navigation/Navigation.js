import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";

import "./Navigation.css";
import CityWidget from "./Widgets/CityWidget";
import CategoryWidget from "./Widgets/CategoryWidget";
import YearWidget from "./Widgets/YearWidget";
import BudgetWidget from "./Widgets/BudgetWidget";
import BrandWidget from "./Widgets/BrandWidget";
import KmWidget from "./Widgets/KmWidget/KmWidget";
import {BRANDS} from '../../shared/mappings/brands';
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const Navigation = (props) => {

  const[resetKm, setResetKm] = useState(0);

  const clearFilterData = () => {
    let category = props.category;
    let filterData = props.filter;
    filterData.budget = [];
    filterData.brand = [];
    filterData.myear = [];
    filterData.kmdriven = 100000;
    props.budgetFilter(category, filterData);
    props.brandFilter(category, filterData);
    props.manufactureDateFilter(category, filterData);
    props.kmFilter(category, filterData);
  }

  const clearAllFilters = () => {
    let check=document.getElementsByTagName('input');
    for(var i=0;i<check.length;i++){
      if(check[i].type=='checkbox'){
        check[i].checked=false;
      }
    }
    setResetKm(1);
    setTimeout(() => {
      setResetKm(0);
    }, 0);
    clearFilterData();
  };
  return (
    <Grid
      item
      component="aside"
      xs={12}
      sm={12}
      md={3}
      lg={3}
      className="filter"
    >
      <div className="resetFilter">
        <h5>Filter by</h5>
        <h5 onClick={clearAllFilters} style={{cursor:'pointer'}}>Clear All Filters</h5>
      </div>
      <div className="filterSec" style={{"marginBottom":"35px"}}>
        <CategoryWidget />
        <CityWidget />
        <BudgetWidget clear={1} budget={[0, 15000, 25000, 35000, 45000, 55000, 100000]} />
        <BrandWidget
          brands={BRANDS}
        />
        <YearWidget startYear={2005} endYear={2020} />
        <KmWidget reset={resetKm} />
      </div>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    filter: state.vehicleDetails.filter,
    category: state.vehicleDetails.category
  };
};
const mapDispatchToProps = dispatch => {
  return {
    budgetFilter: (category, filterdata) =>
      dispatch(actions.getVehicles(category, filterdata)),
    brandFilter: (category, filterdata) =>
      dispatch(actions.getVehicles(category, filterdata)),
    manufactureDateFilter: (category, filterdata) =>
      dispatch(actions.getVehicles(category, filterdata)),
    kmFilter: (category, filterdata) =>
      dispatch(actions.getVehicles(category, filterdata))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);