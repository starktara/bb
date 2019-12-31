import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

const CityWidget = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const updateState = event => {
    setSearchTerm(event.target.value);
  };

  const searchCity = (event) => {
    event.preventDefault();
    let category = props.category;
    let filterData = props.filter;
    filterData.searchTerm = `${searchTerm}*`;
    props.cityFilter(category, filterData);
  }

  const searchClick = (clickValue) => {
    let category = props.category;
    let filterData = props.filter;
    filterData.searchTerm = `${clickValue}*`;
    props.cityFilter(category, filterData);
  }


  return (
    <div className="CityWidget">
      <h3 className="WidgetTitle">
        <a
          data-toggle="collapse"
          href="#widget-body-1"
          role="button"
          aria-expanded="true"
          aria-controls="widget-body-1"
        >
          City
        </a>
      </h3>
      <div className="WidgetBody">
        <div className="search-container">
          <form onSubmit={searchCity}>
            <input
              type="text"
              placeholder="Search your City"
              name="Search your City"
              value={searchTerm}
              onChange={updateState}
            />
            <button type="button" onClick={searchCity}>
              <i className="material-icons">search</i>
            </button>
          </form>
        </div>
        <ul className="cat-list">
          <li>
            <a href="#" onClick={() => searchClick('aluva')}>Aluva</a>
          </li>
          <li>
            <a href="javascript:void" onClick={() => searchClick('kolkata')}>Kolkata</a>
          </li>
          <li>
            <a href="javascript:void" onClick={() => searchClick('pune')}>Pune</a>
          </li>
          <li>
            <a href="javascript:void" onClick={() => searchClick('rajahmundry')}>Rajahmundry</a>
          </li>
        </ul>
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
    cityFilter: (category, filterdata) =>
      dispatch(actions.getVehicles(category, filterdata))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityWidget);
