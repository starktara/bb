import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

const CityWidget = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchCity = event => {
    setSearchTerm(event.target.value);
    let category = props.category;
    let filterData = props.filter;
    filterData.searchTerm = `${searchTerm}*`;
    props.cityFilter(category, filterData);
  };

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
          <form action="/action_page.php">
            <input
              type="text"
              placeholder="Search your City"
              name="Search your City"
              value={searchTerm}
              onChange={searchCity}
            />
            <button type="submit">
              <i className="material-icons">search</i>
            </button>
          </form>
        </div>
        <ul className="cat-list">
          <li>
            <a href="#">Mumbai</a>
          </li>
          <li>
            <a href="#">Pune</a>
          </li>
          <li>
            <a href="#">Kollim</a>
          </li>
          <li>
            <a href="#">Rajmundary</a>
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
