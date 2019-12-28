import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import {BRANDS} from '../../../shared/mappings/brands';

const BrandWidget = props => {
  const selectCheckbox = selectedCheck => {
    let category = props.category;
    let filterData = props.filter;
    let position = filterData.brand.indexOf(selectedCheck);

    if (~position) {
      filterData.brand.splice(position, 1);
    } else {
      filterData.brand.push(selectedCheck);
    }
    props.brandFilter(category, filterData);
  };

  const brandArray = props.brands.map((brand, index) => {
    return (
      <li key={index}>
        <label>
          <input type="checkbox" className="filled-in"  onClick={() => {
              selectCheckbox(index);
            }} />
          <span>{brand}</span>
        </label>
      </li>
    );
  });

  return (
    <div className="BrandWidget">
      <h3 className="WidgetTitle">
        <a
          data-toggle="collapse"
          href="#widget-body-1"
          role="button"
          aria-expanded="true"
          aria-controls="widget-body-1"
        >
          Brand
        </a>
      </h3>
      <div className="WidgetBody">
        <ul className="list">{brandArray}</ul>
      </div>
    </div>
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
    brandFilter: (category, filterdata) =>
      dispatch(actions.getVehicles(category, filterdata))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrandWidget);

