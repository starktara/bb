import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import "./CategoryPage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Navigation from "../Navigation/Navigation";
import Card from "../Card/Card";
import SortDropDown from "../SortDropDown/SortDropDown";

class CategoryPage extends Component {
  render() {
    console.log(this.props);

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
              <SortDropDown />
              <Grid container direction="row" component="div">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CategoryPage;
