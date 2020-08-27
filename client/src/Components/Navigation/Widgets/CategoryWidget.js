import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { connect, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { CHANGE_CATEGORY } from "../../../store/actions/actionTypes";
import * as actions from "../../../store/actions/index";
import { vehicleData } from "../../../store/actions/vehiclesDetails";

const BBRadio = withStyles({
  root: {
    "&$checked": {
      color: "#e92d2c"
    }
  },
  checked: {}

})(props => <Radio {...props} />);


const useStyle = makeStyles({
  countColor: {
    color: '#e92d2c'
  }
})

const CategoryWidget = props => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const { vehicles, category } = useSelector(state => state.vehicleDetails);
  const [selectedCategory, setSelectedCategory] = useState(category);
  // const [valued, setValued] = useState();
  
  const handleChange = clickValue => {
    let filterData = props.filter;
    setSelectedCategory(parseInt(clickValue.target.value));
    dispatch({ type: CHANGE_CATEGORY, payload: parseInt(clickValue.target.value) });
    props.cityFilter(parseInt(clickValue.target.value), filterData);
  }
  const handleChange2 = categ => {
    let filterData = props.filter;
    setSelectedCategory(categ);
    dispatch({ type: CHANGE_CATEGORY, payload: categ });
    props.cityFilter(categ, filterData);
  }
  
  const val = value => {
    if (value[0] === 'NA') {
      return 0
    }
    else {
      return Object.keys(value).length;
    }
  }

  let valued = " ( " + val(vehicles) + " ) ";
  
  console.log(typeof records)
  
  useEffect(() => {
    handleChange2(category)
  }, [category]);

  console.log("value",valued);

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
          Category
        </a>
      </h3>
      <div className="WidgetBody">
        <RadioGroup aria-label="category" name="category" onChange={handleChange}>
          <ul className="cat-list">
            <li>
              <FormControlLabel
                value="1"
                control={<BBRadio />}
                label= {`Motorcycle ${selectedCategory === 1 ? valued : ""}` }
                checked={selectedCategory === 1}
              />
            </li>
            <li>
              <FormControlLabel
                value="2"
                control={<BBRadio />}
                label={`Scooter ${selectedCategory === 2 ? valued : ""}`}
                checked={selectedCategory === 2}
              />
            </li>
            <li>
              <FormControlLabel
                value="3"
                control={<BBRadio />}
                label={`High-end Motorcycle ${selectedCategory === 3 ? valued : " "} `}
                checked={selectedCategory === 3}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryWidget);