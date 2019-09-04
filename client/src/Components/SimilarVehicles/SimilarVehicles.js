import React, { useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import headingLines from '../../assets/heading-lines.svg';
import indianRupeeRed from '../../assets/images/icons/rupee-indian-red.svg';
import bikeIcon from '../../assets/images/product/bike-img.png';


const SimilarVehicles = () => {
    useEffect(() => {
        
    });

    return (
        <div className="similar">
            <h2>Similar Two Wheelers</h2>
            <div className="flex-center"><img src={headingLines} alt=""/></div><br />
            <Grid container component="div" direction="row">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                </Grid>
            </Grid>
        </div>
    )
}

export default SimilarVehicles;