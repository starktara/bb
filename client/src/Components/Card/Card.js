import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';

// const Bike = require("../../assets/images/product/bike-image.png");

const Card = props => {
  const vehicleImagePath = '../../vehicles/';
  return (
    <Grid item component="div" lg={4} md={6} sm={12} xs={12} className="Prod">
      <Link to={'/vehicledetails/'+props.vehicleid}>
        <div className="Product">
          <div className="Product-image-container">
            <img src={vehicleImagePath+props.image} height="230" alt="" />
          </div>
          <div className="detail">
            <h3>{props.name} </h3>
              <p className="price">
              <img className="rupees" src={require("../../assets/icons/rupee-indian-red.svg")} alt=""/>{props.cost}
              </p>
            <ul className="detailPoints">
              <li className="year">{props.year}</li>
              <li className="km">{props.kms} KMs</li>
              <li className="cc">{props.cc} CC</li>
              <li className="owner">
                1<sup>st</sup> Owner
              </li>
            </ul><br className="clr" />          
              <p className="location">{props.loc}</p>

          </div>
        </div>
      </Link>
    </Grid>
  );
};

export default Card;
