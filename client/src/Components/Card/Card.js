import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';
import './watermark.css';

const Card = props => {

  const vehicleImagePath = '../../vehicles/';
  return (
    <Grid item component="div" lg={4} md={6} sm={12} xs={12} className="Prod">
      <Link to={'/vehicledetails/'+props.vehicleid}>
        <div className="Product">
          <div className="Product-image-container watermarked watermarkedCard">
            <img src={vehicleImagePath+props.image} height="230" alt="" />
          </div>
          <div className="detail">
            <div className="bike-name">
              <h3>{props.name} </h3>
            </div>
              <p className="price">
              <img className="rupees" src={require("../../assets/icons/rupee-indian-red.svg")} alt=""/>{props.cost}
              </p>
            <ul className="detailPoints">
              <li className="year">
                <span>{props.year}</span>
              </li>
              <li className="km">
                <span>{props.kms} KMs</span>
              </li>
              <li className="cc">
                <span>{props.cc} CC</span>
              </li>
              <li className="owner">
                <span>1<sup>st</sup> Owner</span>
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
