import React from 'react';
import Grid from "@material-ui/core/Grid";
import headingLines from '../../assets/heading-lines.svg';

const VehicleMetaData = () => {
    return (
        <Grid container component="div" direction="row">
            <Grid item xs={12} md={12} sm={12} lg={12} className="vehicleSummarySec">
                <div className="vehicleSummary">
                    <h3>More details about the motorcycle</h3>
                    <h4>Sub Heading</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <br/>
                    <h4>Sub Heading</h4>
                    <ul className="list">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    </ul>
                </div>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={12} className="vehicleReportSec">
                <div className="vehicleReport center-align">
                    <h2>Inspection Report</h2>
                    <div><img src={headingLines} alt=""/></div><br/>
                    <p>This bike has gone through a thorough and is certified by our auto experts having extensive experience.</p>
                    <p>It has also gone through a refurbishment process and is absolutely ready to take you on your adventurous journey.</p>
                </div>
            </Grid>
        </Grid>
    )
}

export default VehicleMetaData;