import React from 'react';
import Grid from "@material-ui/core/Grid";
import blackHeadingLines from '../../assets/black-heading-lines.svg';

const VehicleMetaData = (props) => {
    return (
        <Grid container component="div" direction="row">
            <Grid item xs={12} md={12} sm={12} lg={12} className="vehicleSummarySec">
                <div className="vehicleSummary">
                    <h3>More details about the motorcycle</h3>
                    <h4>Additional Information</h4>
    {props.vehicleDetails.additionalInfo ? <p>{props.vehicleDetails.additionalInfo}</p> : null}
                    <br/>
                    <h4>Key Information</h4>
                    <ul className="list">
                    {props.vehicleDetails.bulletInfo1 ? <li>{props.vehicleDetails.bulletInfo1}</li> : null}
                    {props.vehicleDetails.bulletInfo2 ? <li>{props.vehicleDetails.bulletInfo2}</li> : null}
                    {props.vehicleDetails.bulletInfo3 ? <li>{props.vehicleDetails.bulletInfo3}</li> : null}
                    {props.vehicleDetails.bulletInfo4 ? <li>{props.vehicleDetails.bulletInfo4}</li> : null}
                    {props.vehicleDetails.bulletInfo5 ? <li>{props.vehicleDetails.bulletInfo5}</li> : null}
                    {props.vehicleDetails.bulletInfo6 ? <li>{props.vehicleDetails.bulletInfo6}</li> : null}
                    </ul>
                </div>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={12} className="vehicleReportSec">
                <div className="vehicleReport center-align">
                    <h2>Inspection Report</h2>
                    <div><img src={blackHeadingLines} alt=""/></div><br/>
                    <p>This bike has gone through a thorough inspection and is certified by our auto experts having extensive experience.</p>
                    <p>It has also gone through a refurbishment process and is absolutely ready to take you on your adventurous journey.</p>
                </div>
            </Grid>
        </Grid>
    )
}

export default VehicleMetaData;