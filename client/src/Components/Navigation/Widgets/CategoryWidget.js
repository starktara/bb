import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { connect, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { CHANGE_CATEGORY } from "../../../store/actions/actionTypes";
import * as actions from "../../../store/actions/index";
import { Typography } from '@material-ui/core';

const BBRadio = withStyles({
  root: {
    "&$checked": {
      color: "#e92d2c"
    }
  },
  checked: {}
})(props => <Radio {...props} />);

const CategoryWidget = props => {
  const dispatch = useDispatch();
  const { category } = useSelector(state => state.vehicleDetails);
  console.log(category);
  const [selectedCategory, setSelectedCategory] = useState(category);
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

  const counterHandle = () => {
    return category.length;
  }
  
  useEffect(() => {
    handleChange2(category)
  }, [category]);

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
                // label="Motorcycle"
                label={<Typography>Motorcycle {"1"} </Typography>}
                checked={selectedCategory === 1}
                onChange={counterHandle}
              />
            </li>
            <li>
              <FormControlLabel
                value="2"
                control={<BBRadio />}
                label="Scooter"
                checked={selectedCategory === 2}
              />
            </li>
            <li>
              <FormControlLabel
                value="3"
                control={<BBRadio />}
                label="High-end Motorcycle"
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