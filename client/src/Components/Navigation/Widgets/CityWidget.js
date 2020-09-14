import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { connect, useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions/index";
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import useDebounce from '../../MainMenu/use-debounce';
import { CHANGE_CITY, CHANGE_CATEGORY } from "../../../store/actions/actionTypes";


const BBRadio = withStyles({
  root: {
    "&$checked": {
      color: "#ff0000"
    }
  },
  checked: {}
})(props => <Radio {...props} />);


const CityWidget = props => {
  const dispatch = useDispatch();
  const { selectedCity, category, citynames } = useSelector(state => state.vehicleDetails);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const filterData = {
      ...citynames,
      city: selectedCity
    }
    console.log("filterData",filterData['city']);

    if(debouncedSearchTerm.length > 2){
      setTimeout(() => {
        dispatch(actions.getCityNames(filterData, debouncedSearchTerm));
      }, 10);
    }
  }, [debouncedSearchTerm, selectedCity]);

  const searchCity = event => {
    event.preventDefault();
    let filterData = props.filter;
    dispatch({ type: CHANGE_CITY, payload: searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1) });
    dispatch({ type: CHANGE_CATEGORY, payload: category });
    filterData.city = `${searchTerm}*`;
    props.cityFilter(category, filterData);
  };

  const searchClick = clickValue => {
    let filterData = props.filter;
    dispatch({ type: CHANGE_CITY, payload: clickValue.target.value });
    dispatch({ type: CHANGE_CATEGORY, payload: category });
    filterData.city = `${clickValue.target.value}*`;
    props.cityFilter(category, filterData);
  };

  const updateState = value => {
    setSearchTerm(value.toLowerCase());
  };

  const citiesArr = ['Aluva', 'Kolkata', 'Rajahmundry', 'Thrissur', 'Bangalore', 'Chennai', 'New Delhi', 'Gurgaon', 'Hyderabad', 'Jaipur', 'Mumbai', 'Nagpur', 'Pune' ];

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
            <div style={{width: "85%"}}>
              <Autocomplete
                id="searchCity"
                freeSolo
                options={searchTerm ? citiesArr: []}
                renderInput={(params) => (
                    <TextField 
                      onChange={updateState(params.inputProps.value)} 
                      {...params} 
                      id="outlined-basic"
                      label=" Search your City" 
                      variant="outlined" 
                    />
                )}
              />
            </div>
            {/* <button type="button" onClick={searchCity}>
                <i className="material-icons">search</i>
            </button> */}
          </form>
        </div>
        <RadioGroup aria-label="gender" name="city" onChange={searchClick}>
          <ul className="cat-list">
            {citiesArr.map(eachCity => (
              <li>
                <FormControlLabel
                  value={eachCity}
                  control={<BBRadio />}
                  label={eachCity}
                  checked={selectedCity === eachCity}
                />
              </li>
            ))}
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
