import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { connect, useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { CHANGE_CATEGORY } from "../../../store/actions/actionTypes";
import * as actions from "../../../store/actions/index";
import { vehicleData } from "../../../store/actions/vehiclesDetails";

const BBRadio = withStyles({
  root: {
    "&$checked": {
      color: "#ff0000"
    }
  },
  checked: {}

})(props => <Radio {...props} />);


const useStyle = makeStyles({
  countColor: {
    color: '#ff0000'
  }
})

const CategoryWidget = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyle();
  const { vehicles, category } = useSelector(state => state.vehicleDetails);
  console.log("only vehicles", vehicles);
  const [selectedCategory, setSelectedCategory] = useState(category);
  
  const handleChange = clickValue => {
    let filterData = props.filter;
    console.log("filter count",parseInt(clickValue.target.value));
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
  
  // console.log(typeof records)
  
  useEffect(() => {
    handleChange2(category)
  }, [category]);

  // console.log("value",valued);

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
          {/* <Link to='/category/all'>
              <li>
                <FormControlLabel
                  value="0"
                  control={<BBRadio />}
                  label= {`All ${selectedCategory === 0 ? valued : ""}` }
                  checked={selectedCategory === 0}
                />
              </li>
            </Link> */}
            <Link to='/category/bike'>
              <li>
                <FormControlLabel
                  value="1"
                  control={<BBRadio />}
                  label= {`Motorcycle ${selectedCategory === 1 ? valued : ""}` }
                  checked={selectedCategory === 1}
                />
              </li>
            </Link>
            <Link to='/category/scooter'>
              <li>
                <FormControlLabel
                  value="2"
                  control={<BBRadio />}
                  label={`Scooter ${selectedCategory === 2 ? valued : ""}`}
                  checked={selectedCategory === 2}
                />
              </li>
            </Link>
            <Link to='/category/high_end_bike'>
              <li>
                <FormControlLabel
                  value="3"
                  control={<BBRadio />}
                  label={`High-end Motorcycle ${selectedCategory === 3 ? valued : " "} `}
                  checked={selectedCategory === 3}
                />
              </li>
            </Link>            
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