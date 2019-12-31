import React, { Component } from "react";
import Slider from "react-rangeslider";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";

import "./KmWidget.css";

class KmWidget extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      slideValue: 100000
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      slideValue: event
    });

    let category = this.props.category;
    let filterData = this.props.filter;
    filterData.kmdriven = event;
    this.props.kmFilter(category, filterData);
  }

  render() {
    return (

      <div className="kmWidget">
        <h3 className="WidgetTitle">
          <a
            data-toggle="collapse"
            href="#widget-body-1"
            role="button"
            aria-expanded="true"
            aria-controls="widget-body-1"
          >
            Kilometers
          </a>
        </h3>
        <div className="WidgetBody">
          <div className="MinMaxRange">
            <div className="MinRange">0 KM</div>
            <div className="MaxRange">1,00,000 KMs</div>
            <br className="clr" />
          </div>
          <Slider
            value={this.state.slideValue}
            onChange={this.handleChange}
            min={0}
            max={100000}
            step={5000}
            tooltip={false}
          />
          <br className="clr" />
          <div className="rangeOut">
            Upto <output id="js-output">{this.state.slideValue}</output> KMs
          </div>
        </div>
      </div>

    );

  }
}

const mapStateToProps = state => {
  return {
    filter: state.vehicleDetails.filter,
    category: state.vehicleDetails.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    kmFilter: (category, filterdata) =>
      dispatch(actions.getVehicles(category, filterdata))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KmWidget);