import React from 'react';
import Grid from "@material-ui/core/Grid";
import headingLines from '../../assets/heading-lines.svg';


const SimilarVehicles = () => {
    return (
        <div className="similar">
            <h2>Similar Two Wheelers</h2>
            <div><img src={headingLines} alt=""/></div><br />
            <Grid container component="div" direction="row">
            </Grid>
        </div>
    )
}

export default SimilarVehicles;