import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Homepage.css";
import Header from "../Header/Header";
import MainMenu from "../MainMenu/MainMenu";
import Footer from "../Footer/Footer";
import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/search-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
// import sliderImg from "../../assets/main-img.png";
import bannerImg from "../../assets/banner.png";
import headingLines from "../../assets/heading-lines.svg";
import bike2 from "../../assets/bike-icon.svg";
import scooter from "../..//assets/scooter-icon.svg";
import bike from "../../assets/high-end-bike-icon.svg";
import certifiedAutoExperts from "../../assets/certified_by_auto_experts.svg";
import monthWarranty from "../../assets/6_month_warranty.svg";
import buyerProtection from "../../assets/buyer_protection.svg";
import lowCostEmi from "../../assets/low_cost_emi.svg";
import hassleFreeDocTransfer from "../../assets/hassle_free_document_transfer.svg";
// import testimonial1 from "../../assets/testimonial-image-1.png";
// import testimonial2 from "../../assets/testimonial-image-2.png";
// import testimonial3 from "../../assets/testimonial-image-3.png";
// import testimonial4 from "../../assets/testimonial-image-4.png";
// import testimonial5 from "../../assets/testimonial-image-5.png";
import M from "materialize-css";
import Grid from "@material-ui/core/Grid";
import * as CATEGORY from "../../shared/constants/category";
import { HOMEPAGE_LOAD } from "../../store/actions/actionTypes"

const Homepage = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const updateState = event => {
    setSearchTerm(event.target.value);
  };
  const [sliderState, changeSlider] = useState(null);

  const initCar = direction => {
    if (sliderState == null) {
      var instance;
      const testiminialMessages = [
        {
          name: "Jai Kumar",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          name: "Jimi Hendrix",
          message:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          name: "Buckethead",
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          name: "David Gilmour",
          message:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
          name: "Slash",
          message:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful."
        }
      ];
      let carouselOptions = {
        shift: -150,
        padding: 800,
        dist: -200,
        onCycleTo: function (data) {
          let index = data.getAttribute("index");
          let message = testiminialMessages[index].message;
          let name = testiminialMessages[index].name;
          document.querySelector("#clientName").innerText = name;
          document.querySelector("#testimonialMessage").innerText = message;
        }
      };
      let testimonialCarousel = document.querySelectorAll(".carousel");
      instance = M.Carousel.init(testimonialCarousel, carouselOptions);
      changeSlider(instance);
    } else {
      if (direction === "left") {
        sliderState[0].prev();
      } else {
        sliderState[0].next();
      }
    }
  };

  useEffect(() => {
    let topSlider = document.querySelectorAll(".slider");
    M.Slider.init(topSlider, {});
    initCar();
    dispatch({ type: HOMEPAGE_LOAD });
  }, []);

  return (
    <div className="App">
      <Header />
      <MainMenu />
      <div className="slider hide-on-small-only">
        <ul className="slides">
          <li>
            <img alt="" src={bannerImg} />
            <div className="caption left-align">
              <h3 className="heading">
                India's Favourite Place to Buy<br />Pre-owned Two-wheelers
              </h3>
              <h4 className="text-white">
                <img alt="" src={logo} className="tick-icon" />
                <span>
                  <span className="bold">Certified</span> Two-wheeler
                </span>
              </h4>
              <h4 className="text-white">
                <img alt="" src={logo} className="tick-icon" />
                <span>
                  6 Months'{" "} <span className="bold">Warranty</span>
                </span>
              </h4>
              <h4 className="text-white">
                <img alt="" src={logo} className="tick-icon" />
                <span>
                  Low Cost <span className="bold">EMI</span>
                </span>
              </h4>
              <div className="carousel-search-container">
                <div className="carousel-location-btn">
                  <img alt="" src={locationIcon} width="23" height="20" />
                  <div className="loc-text">Aluva</div>
                </div>
                <div className="carousel-search-box">
                  <input
                    type="text"
                    name="location-search"
                    placeholder="Search Your Two-wheeler"
                    value={searchTerm}
                    onChange={updateState}
                  />
                </div>
                <Link to={`/category/bike?searchTerm=${searchTerm}`}>
                  <button className="carousel-search-label" type="button">
                    <img alt="" src={searchIcon} width="40" height="44" />
                  </button>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="section-2">
        <Grid container component="div" direction="row" className="row">
          <Grid
            item
            xs={12}
            md={12}
            sm={12}
            lg={12}
            className="center-align section-2-heading"
          >
            <h3>WHAT ARE YOU LOOKING FOR?</h3>
            <img alt="" src={headingLines} width="57" height="4" />
          </Grid>
        </Grid>
        <Grid container component="div" direction="row">
          <Grid item xs={12} sm={12} md={4} lg={4} className="flex-center">
            <div className="box-shadow center-align">
              <Link to={"/category/" + CATEGORY.BIKE}>
                <img alt="" src={bike2} height="170" width="290" />
              </Link>
              <h5>Motorcycle</h5>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} className="flex-center">
            <div className="box-shadow center-align">
              <Link to={"/category/" + CATEGORY.SCOOTER}>
                <img alt="" src={scooter} height="170" width="290" />
              </Link>
              <h5>Scooter</h5>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} className="flex-center">
            <div className="box-shadow center-align">
              <Link to={"/category/" + CATEGORY.HIGH_END_BIKE}>
                <img alt="" src={bike} height="170" width="290" />
              </Link>
              <h5>High-End Motorcycle</h5>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="section-3">
        <Grid container component="div" direction="row" className="advantageRow">
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className="center-align section-3-heading"
          >
            <h3>BIKEBAZAAR ADVANTAGE</h3>
            <img alt="" src={headingLines} width="57" height="4" />
          </Grid>
        </Grid>
        <Grid container component="div" direction="row" className="row padHorizontal5">
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className="gola-wrapper">
              <div className="gola valign-wrapper">
                <img alt="" src={certifiedAutoExperts} height="69" width="69" />
              </div>
            </div>
            <div className="center-align">
              <h5>Certified by Auto Experts</h5>
              <p className="advantage-subtitle-1">
                Every bike goes through a thorough inspection and is certified
                by our team of Auto Experts
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className="gola-wrapper">
              <div className="gola valign-wrapper">
                <img alt="" src={monthWarranty} height="69" width="69" />
              </div>
            </div>
            <div className="center-align">
              <h5>Free 6 Months' Warranty</h5>
              <p className="advantage-subtitle-1">
                Get 6 Months' Warranty covering critical parts including engine
                and gear box, extendable upto 12 months
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className="gola-wrapper">
              <div className="gola valign-wrapper">
                <img alt="" src={buyerProtection} height="69" width="69" />
              </div>
            </div>
            <div className="center-align">
              <h5>Verified Sellers</h5>
              <p className="advantage-subtitle-1">
                All BikeBazaar Two-Wheelers are procured through Verified
                Sellers
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          component="div"
          direction="row"
          className="row"
          justify="center"
        >
          <Grid item xs={12} sm={12} md={4} lg={5}>
            <div className="gola-wrapper">
              <div className="gola-2 valign-wrapper">
                <img alt="" src={lowCostEmi} height="69" width="69" />
              </div>
            </div>
            <div className="center-align">
              <h5>Low Cost EMI</h5>
              <p className="advantage-subtitle">
                All vehicles are available at EMI starting at ₹ 2000*. Your
                dream bike is not a distant dream now
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className="gola-wrapper">
              <div className="gola-2 valign-wrapper">
                <img
                  alt=""
                  src={hassleFreeDocTransfer}
                  height="69"
                  width="69"
                />
              </div>
            </div>
            <div className="center-align hfdc">
              <h5>Hassle Free Document Transfer</h5>
              <p className="advantage-subtitle">
                Document transfer is facilitated and made easy for buyer and
                seller
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* <div className="section-4">
        <Grid
          container
          component="div"
          direction="row"
          className="row center-align"
        >
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <h3>TESTIMONIALS</h3>
            <img alt="" src={headingLines} width="57" height="4" />
          </Grid>
        </Grid>
        <Grid container component="div" direction="row" className="row mb-0">
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <div className="valign-wrapper arrow-container">
              <button
                className="btn-floating btn-large waves-effect waves-light white"
                id="slideLeft"
                onClick={() => initCar("left")}
              >
                <i className="material-icons icon-black">keyboard_arrow_left</i>
                initCar
              </button>
            </div>
          </Grid>
          <Grid item xs={10} sm={10} md={10} lg={10} className="center-align">
            <div className="carousel">
              <a className="carousel-item" href="#one!" index="0">
                <img alt="" className="circle" src={testimonial1} />
              </a>
              <a className="carousel-item" href="#two!" index="1">
                <img alt="" className="circle" src={testimonial2} />
              </a>
              <a className="carousel-item" href="#three!" index="2">
                <img alt="" className="circle" src={testimonial3} />
              </a>
              <a className="carousel-item" href="#four!" index="3">
                <img alt="" className="circle" src={testimonial4} />
              </a>
              <a className="carousel-item" href="#five!" index="4">
                <img alt="" className="circle" src={testimonial5} />
              </a>
            </div>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <div className="valign-wrapper arrow-container">
              <button
                className="btn-floating btn-large waves-effect waves-light white"
                id="slideRight"
                onClick={() => initCar("right")}
              >
                <i className="material-icons icon-black">
                  keyboard_arrow_right
                </i>
              </button>
            </div>
          </Grid>
        </Grid>
        <Grid container component="div" direction="row" className="row">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="center-align">
              <h4 id="clientName"></h4>
            </div>
            <div id="testimonialMessage"></div>
          </Grid>
        </Grid>
      </div> */}
      <Footer />
    </div>
  );
};

export default Homepage;
