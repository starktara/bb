import React from "react";
import Grid from '@material-ui/core/Grid';

// const Bike = require("../../assets/images/product/bike-image.png");

const Card = (props) => {
    return (
        <Grid
            item
            component="div"
            lg={4}
            md={6}
            sm={12}
            xs={12}
            className="Prod"
            >
                <div className="Product">
					<img src={require('../../assets/images/product/bike-img.png')} alt="" />
					<div className="detail">
						<h3>Bajaj Platina </h3>
						<ul className="detailPoints">
							<li className="year">2007</li>
							<li className="km">25,000 KMs</li>
							<li className="cc">99 CC</li>
							<li className="owner">1<sup>st</sup> Owner</li>
							<li className="location">Baner, Pune</li>
						</ul><br className="clr"/>
						<p className="price"><strong>₹</strong> 17,500</p>
					</div>
				</div>
        </Grid>
    );
}

export default Card;