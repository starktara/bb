import React from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

const useStyles = makeStyles({
  root: {
    color: 'blue',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    width: 18,
    height: 18,
    marginTop: 3,
    marginLeft: 3,
    top: 0,
    border: '1px solid #d3d5d5',
    backgroundColor: 'transparent',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    }
  },
  checkedIcon: {
    backgroundColor: '#ff0000',
    backgroundImage: '#ff0000',
    '&:before': {
      display: 'block',
      width: 18,
      height: 18,
      backgroundImage: '#ff0000',
      content: '""',
    }
  },
});

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const BudgetWidget = props => {

  const selectCheckbox = selectedCheck => {
    let category = props.category;
    let filterData = props.filter;
    let position = filterData.budget.indexOf(selectedCheck);
    filterData.budget.splice(position, 1);
    filterData.budget.push(selectedCheck);
    props.budgetFilter(category, filterData);
  };

  const budgetArray = [];
  for (let i = 0; i < props.budget.length - 1; i++) {
    budgetArray.push(
      <FormControlLabel
        key={i} 
        value={i.toString()}
        control={<StyledRadio />} 
        label={
          <span classsName="budget-label">
            <strong>₹</strong>{" "}{props.budget[i] === 0 ? props.budget[i] : props.budget[i] + 1} -{" "}
            {props.budget[i + 1]}
          </span>
        } 
        onChange={() => {
          selectCheckbox(props.budget[i] === 0 ? props.budget[i] : ((props.budget[i] + 1) + "-" + (props.budget[i + 1])))
        }}
      />
    );
  }

  budgetArray.push(
    <FormControlLabel 
      key={props.budget.length - 1}
      value={(props.budget.length - 1).toString()}
      control={<StyledRadio />} 
      label={ <span classsName="budget-label">
                <strong>₹</strong> {props.budget[props.budget.length - 1] + 1} +
              </span>
            } 
      onChange={() => {
        selectCheckbox((100000 + "-" + 200000))
      }}
    />
  );

  return (
    <div className="BudgetWidget">
      <h3 className="WidgetTitle">
        <a
          data-toggle="collapse"
          href="#widget-body-1"
          role="button"
          aria-expanded="true"
          aria-controls="widget-body-1"
        >
          Budget
        </a>
      </h3>
      <div className="WidgetBody">
        <FormControl component="fieldset">
          <RadioGroup defaultValue="" aria-label="" name="budget-widget">
          {budgetArray}
          </RadioGroup>
        </FormControl>
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
    budgetFilter: (category, filterdata) =>
      dispatch(actions.getVehicles(category, filterdata))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetWidget);
