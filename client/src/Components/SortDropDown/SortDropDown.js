import React, { Component } from "react";
import { connect } from 'react-redux';
import M from 'materialize-css';
import * as actions from '../../store/actions/index';



class SortDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: ""
    };
    this.selectOption = this.selectOption.bind(this);
  }

  componentDidMount () {
    let elems = this.select;
    M.FormSelect.init(elems, {});
  }

  selectOption(event) {
    this.props.getVehicles(event.target.value);
    console.log(event.target.value);
    this.setState({
      headerTitle: event.target.value
    });
  }

  render() {

    return (
      <React.Fragment>
		    <div className="filterBand"><button data-target="slide-out" className="sidenav-trigger"><i className="material-icons">filter_list</i> Filter</button></div>        
        <h5>One Step Closer to Your Dream Bike</h5>
        <div className="input-field sortby" onClick={this.toggleList}>
				<select
          ref={(select) => {this.select = select}}
          onChange={this.selectOption}
          defaultValue="">
					<option value="" disabled>Sort by</option>
					<option value="1">Price - Low to High</option>
					<option value="2">Price - High to Low</option>
					<option value="3">Distance from My Location - Low to High</option>
					<option value="4">Manufacturing Year - Low to High</option>
					<option value="5">Manufacturing Year - High to Low</option>
					<option value="6">Kilometer - Low to High</option>
				</select> 
      </div>
        <br className="clr" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
       vehicles: state.vehicleDetails.vehicles
  };
}
const mapDispatchToProps = dispatch => {
  return {
    getsortedData: (sortKey) => dispatch(actions.getVehicles(sortKey)),  
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SortDropDown);
