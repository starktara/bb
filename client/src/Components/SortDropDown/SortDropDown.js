import React, { Component } from "react";
import { connect } from 'react-redux';
import M from 'materialize-css';
import * as actions from '../../store/actions/index';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


class SortDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: true,
      headerTitle: "",
      scrollPos: window.pageYOffset,
    };
    this.selectOption = this.selectOption.bind(this);
    // window.addEventListener("scroll", this.closeMenu.bind(this));
  }

  
  componentDidMount() {
    let elems = this.select;
    M.FormSelect.init(elems, {});
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { scrollPos } = this.state;
    console.log("scrollpos", scrollPos);
    const currScroll = window.pageYOffset;
    const listOpen = scrollPos > currScroll;
    console.log("curr", currScroll);
    console.log("visible", listOpen);
    this.setState({
      scrollPos: currScroll,
      listOpen
    });
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
		    {/* <div className="filterBand"><button data-target="slide-out" className="sidenav-trigger"><i className="material-icons">filter_list</i> Filter</button></div> */}
        <h5>One Step Closer to Your Dream Bike</h5>
        {/* classname="input-field sortby" */}
        <FormControl  onClick={this.toggleList} style={{position: "absolute", right: "4%" }}>
          <InputLabel htmlFor="grouped-native-select"></InputLabel>
            <Select native defaultValue="" id="grouped-native-select" variant="outlined"
              labelWidth="13"
              // ref={(select) => {this.select = select}}
              onChange={this.selectOption}
              onclose={this.handleScroll}
              >
                <optgroup label="" value="" > 
                  <option value="" disabled>Sort by</option>
                  <option value="price-asc">Price - Low to High</option>
                  <option value="price-desc">Price - High to Low</option>
                  <option value="dist-asc">Distance from My Location - Low to High</option>
                  <option value="myear-asc">Manufacturing Year - Low to High</option>
                  <option value="myear-desc">Manufacturing Year - High to Low</option>
                  <option value="kmdriven-asc">Kilometer - Low to High</option>
                </optgroup>
                
            </Select>
        </FormControl>

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
