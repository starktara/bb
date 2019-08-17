import React, { Component } from "react";
import "./CategoryPage.css";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Navigation from "../Navigation/Navigation"

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
          <Navigation />
        </div>
        This is a category page. Bhavik will develop it.
      </div>
    );
  }
}

export default CategoryPage;
