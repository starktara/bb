import React, { Component } from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

class SortDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    };
    this.toggleList = this.toggleList.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  handleClickOutside() {
    this.setState({
      listOpen: false
    });
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
    const{list} = this.props;

    return (
      <React.Fragment>
		    <div className="filterBand"><a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">filter_list</i> Filter</a></div>        
        <h5>One Step Closer to Your Dream Bike</h5>
        <Select
          open={this.state.listOpen}
          onClose={this.toggleList}
          onOpen={this.toggleList}
          onChange={this.selectOption}
          value={this.state.headerTitle}
          inputProps={{
            name: "Sort by",
            id: "sort-vehicles-select"
          }}
          className="drop-down"
          >
            
            <MenuItem value={"Price - Low to High"}>Price - Low to High</MenuItem>
            <MenuItem value={"Price - High to Low"}>Price - High to Low</MenuItem>
            <MenuItem value={"Distance from My Location - Low to High"}>Distance from My Location - Low to High</MenuItem>
            <MenuItem value={"Manufacturing Year - Low to High"}>Manufacturing Year - Low to High</MenuItem>
            <MenuItem value={"Manufacturing Year - High to Low"}>Manufacturing Year - High to Low</MenuItem>
            <MenuItem value={"Kilometer - Low to High"}>Kilometer - Low to High</MenuItem>

        </Select>
        <br className="clr" />
      </React.Fragment>
    );
  }
}

export default SortDropDown;
