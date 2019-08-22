import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from 'react-redux';
import "./CategoryPage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Navigation from "../Navigation/Navigation";
import Card from "../Card/Card";
import SortDropDown from "../SortDropDown/SortDropDown";
import Pagination from "../Pagination/Pagination";
import * as actions from '../../store/actions/index';


const cardData = [
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2007',
    kms: '25,000',
    cc: '99'
  },
  {
    year: '2022',
    kms: '25,000',
    cc: '99'
  }
];

class CategoryPage extends Component {
  state = {
    data: cardData,
    currentData: [],
    currentPage: null,
    totalPages: null,
    menu: [
      {
        id: 0,
        title: 'Price - Low to High',
        selected: false,
        key: 'location'
    },
    {
      id: 1,
      title: 'Price - High to Low',
      selected: false,
      key: 'location'
    },
    {
      id: 2,
      title: 'Distance from My Location - Low to High',
      selected: false,
      key: 'location'
    },
    {
      id: 3,
      title: 'Manufacturing Year - Low to High',
      selected: false,
      key: 'location'
    },
    {
      id: 4,
      title: 'Manufacturing Year - High to Low',
      selected: false,
      key: 'location'
    },
    {
      id: 5,
      title: 'Kilometer - Low to High',
      selected: false,
      key: 'location'
    }
    ]
  }

  componentDidMount () {
    this.props.getVehicles(this.props.match.params.category);
  }

  onPageChanged = paginationData => {
    const { data } = this.state;
    const { currentPage, totalPages, pageLimit } = paginationData;

    const offset = (currentPage - 1) * pageLimit;
    const currentData = data.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentData, totalPages });
  }

  render() {

    const {data, currentData, currentPage, totalPages} = this.state;
    const totalRecords = data.length;

    let navigation = null;
    let heading = null;
    let text = null;

    if (this.props.match.params.category === "bike") {
      navigation = "Motorcycles";
      heading = "MOTORCYCLES";
      text =
        "Bikes are available at easy EMI starting at st 2,000*. Your  dream bike is not a distant dream now.";
    }

    return (
      <div>
        <Header />
        <div className="wapper">
          <Banner navigation={navigation} heading={heading} text={text} />
          <Grid container component="div" direction="row">
            <Navigation />
            <Grid
              item
              xs={12}
              md={12}
              sm={12}
              lg={9}
              className="ProductListSec"
            >
              <SortDropDown 
                title="Sort by"
                list={this.state.menu} />
              <Grid container direction="row" component="div" className="cardConntainer">
                {this.state.currentData.map((bike, index) => {
                  return <Card key= {index} year={bike.year} kms={bike.kms} cc={bike.cc}/>
                })}
                {/* <Card year="2007" kms="25,000" cc="2000"/> */}
              </Grid>
              <Pagination 
              totalRecords={totalRecords}
              pageLimit={12}
              pageNeighbours={1}
              onPageChanged={this.onPageChanged}
            />
            </Grid>
            
          </Grid>
          
        </div>
        
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      // ings: state.burgerBuilder.ingredients,
      // price: state.burgerBuilder.totalPrice,
      // error: state.burgerBuilder.error,
      // isAuthenticated: state.auth.token !== null
  };
}
const mapDispatchToProps = dispatch => {
  return {
    getVehicles: (vehicleCategory) => dispatch(actions.getVehicles(vehicleCategory)),
     
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryPage);
