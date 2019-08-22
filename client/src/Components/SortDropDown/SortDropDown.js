import React, { Component } from "react";
import M from 'materialize-css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import { withStyles, makeStyles } from "@material-ui/core/styles";

class SortDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: ""
    };
    this.toggleList = this.toggleList.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  handleClickOutside() {
    this.setState({
      listOpen: false
    });
  }

  componentDidMount () {
    let elems = this.select;
    let instances = M.FormSelect.init(elems, {});
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  selectOption(event) {
    console.log(event.target.value);
    this.setState({
      headerTitle: event.target.value
    });
  }

  render() {
    const {list} = this.props;

    return (
      <React.Fragment>
		    <div className="filterBand"><a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">filter_list</i> Filter</a></div>        
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

export default SortDropDown;
