import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { connect, useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions/index";
import { withStyles } from "@material-ui/core/styles";
import { CHANGE_CITY } from "../../../store/actions/actionTypes";

const BBRadio = withStyles({
  root: {
    "&$checked": {
      color: "#e92d2c"
    }
  },
  checked: {}
})(props => <Radio {...props} />);

const CityWidget = props => {
  const dispatch = useDispatch();
  const { selectedCity, category } = useSelector(state => state.vehicleDetails);
  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState("");
  const updateState = event => {
    setSearchTerm(event.target.value);
    setCity(searchTerm);
  };

  useEffect(() => {
    setCity(selectedCity);
  }, []);

  const searchCity = event => {
    event.preventDefault();
    // let category = props.category;
    let filterData = props.filter;
    filterData.city = `${searchTerm}*`;
    props.cityFilter(category, filterData);
  };

  const searchClick = clickValue => {
    // let category = props.category;
    let filterData = props.filter;
    setCity(clickValue.target.value);
    dispatch({ type: CHANGE_CITY, payload: clickValue.target.value });
    filterData.city = `${clickValue.target.value}*`;
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
        <RadioGroup aria-label="gender" name="city" onChange={searchClick}>
          <ul className="cat-list">
            <li>
              <FormControlLabel
                value="Aluva"
                control={<BBRadio />}
                label="Aluva"
                checked={city === "Aluva"}
              />
            </li>
            <li>
              <FormControlLabel
                value="Kolkata"
                control={<BBRadio />}
                label="Kolkata"
                checked={city === "Kolkata"}
              />
            </li>
            <li>
              <FormControlLabel
                value="Rajahmundry"
                control={<BBRadio />}
                label="Rajahmundry"
                checked={city === "Rajahmundry"}
              />
            </li>
          </ul>
        </RadioGroup>
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

export default connect(mapStateToProps, mapDispatchToProps)(CityWidget);
