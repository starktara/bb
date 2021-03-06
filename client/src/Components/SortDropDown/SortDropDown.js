import React, { Component } from "react";
import { connect } from 'react-redux';
import M from 'materialize-css';
import * as actions from '../../store/actions/index';

class SortDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      headerTitle: "",
      scrollPos: window.scrollY,
    };
    this.selectOption = this.selectOption.bind(this);
    window.addEventListener("scroll", this.onScroll);
  }

  
  componentDidMount() {
    let elems = this.select;
    M.FormSelect.init(elems, {});
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { scrollPos } = this.state;
    const currScroll = window.scrollY;
    const visible = scrollPos < currScroll;
    this.setState({
      scrollPos: currScroll,
      visible
    });
  };

  onScroll = () => {
    this.setState({visible: false});
  };

  selectOption(event) {
    let category  = this.props.category;
    let filterData = this.props.filter;

    let selectedFilter = event.target.value.split("-");

    filterData.sort.column = selectedFilter[0];
    filterData.sort.order = selectedFilter[1];
    this.props.getsortedData(category,filterData);
  
  }

  render() {
    
    return (
      <React.Fragment>
		    <h5>One Step Closer to Your Dream Bike</h5>
        <div className="input-field sortby" onClick={this.toggleList}>
          <select
            ref={(select) => {this.select = select}}
            onChange={this.selectOption}
            visible={this.state.visible}
            // defaultValue="">
            >
            <option value="">Sort by</option>
            <option value="price-asc">Price - Low to High</option>
            <option value="price-desc">Price - High to Low</option>
            <option value="myear-asc">Manufacturing Year - Low to High</option>
            <option value="myear-desc">Manufacturing Year - High to Low</option>
            <option value="kmdriven-asc">Kilometer - Low to High</option>
          </select>
        </div>

      <br className="clr" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
       filter:state.vehicleDetails.filter
  };
}
const mapDispatchToProps = dispatch => {
  return {
    getsortedData: (category,sortKey) => dispatch(actions.getVehicles(category,sortKey)),  
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SortDropDown);
