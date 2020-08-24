import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { connect, useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions/index";
import { withStyles } from "@material-ui/core/styles";
import { CHANGE_CITY, CHANGE_CATEGORY } from "../../../store/actions/actionTypes";

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
  }, [selectedCity]);

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
    dispatch({ type: CHANGE_CATEGORY, payload: category });
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
            <li>
              <FormControlLabel
                value="Tirur"
                control={<BBRadio />}
                label="Tirur"
                checked={city === "Tirur"}
              />
            </li>
            <li>
              <FormControlLabel
                value="Bangalore"
                control={<BBRadio />}
                label="Bangalore"
                checked={city === "Bangalore"}
              />
            </li>
            <li>
              <FormControlLabel
                value="Chennai"
                control={<BBRadio />}
                label="Chennai"
                checked={city === "Chennai"}
              />
            </li>
            <li>
              <FormControlLabel
                value="New Delhi"
                control={<BBRadio />}
                label="New Delhi"
                checked={city === "New Delhi"}
              />
            </li>
            <li>
              <FormControlLabel
                value="Gurgaon"
                control={<BBRadio />}
                label="Gurgaon"
                checked={city === "Gurgaon"}
              />
            </li>
            <li>
              <FormControlLabel
                value="Hyderabad"
                control={<BBRadio />}
                label="Hyderabad"
                checked={city === "Hyderabad"}
              />
            </li>
            <li>
              <FormControlLabel
                value="Jaipur"
                control={<BBRadio />}
                label="Jaipur"
                checked={city === "Jaipur"}
              />
            </li>
            <li>
              <FormControlLabel
                value="Mumbai"
                control={<BBRadio />}
                label="Mumbai"
                checked={city === "Mumbai"}
              />
            </li>
            <li>
              <FormControlLabel
                value="Nagpur"
                control={<BBRadio />}
                label="Nagpur"
                checked={city === "Nagpur"}
              />
            </li>
            <li>
              <FormControlLabel
                value="Pune"
                control={<BBRadio />}
                label="Pune"
                checked={city === "Pune"}
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
