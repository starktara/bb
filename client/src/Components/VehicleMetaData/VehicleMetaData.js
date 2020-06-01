import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Grid from "@material-ui/core/Grid";
import blackHeadingLines from '../../assets/black-heading-lines.svg';
import * as actions from '../../store/actions/index';


const VehicleMetaData = (props) => {
    return (
        <Grid container component="div" direction="row">
            <Grid item xs={12} md={12} sm={12} lg={12} className="vehicleSummarySec">
                <div className="vehicleSummary">
                    <h3>More details about the motorcycle</h3>
                    <h4>Sub Heading 1 Needs To Be Asked To The Client</h4>
                    {props.vehicleDetails.addiitionalInfo1 && <p>{props.vehicleDetails.addiitionalInfo1}</p>}
                    <br/>
                    <h4>Sub Heading 2 Needs To Be Asked To The Client</h4>
                    <ul className="list">
                        {props.vehicleDetails.addiitionalInfo2 && <li>{props.vehicleDetails.addiitionalInfo2}</li>}
                        {props.vehicleDetails.addiitionalInfo3 && <li>{props.vehicleDetails.addiitionalInfo3}</li>}
                        {props.vehicleDetails.addiitionalInfo4 && <li>{props.vehicleDetails.addiitionalInfo4}</li>}
                        {props.vehicleDetails.addiitionalInfo5 && <li>{props.vehicleDetails.addiitionalInfo5}</li>}
                        {props.vehicleDetails.addiitionalInfo6 && <li>{props.vehicleDetails.addiitionalInfo6}</li>}
                        {props.vehicleDetails.addiitionalInfo7 && <li>{props.vehicleDetails.addiitionalInfo7}</li>}
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

const mapStateToProps = state => {
    return {
        vehicle: state.vehicleDetails.vehicle,
        loading: state.vehicleDetails.loading
    };
}
const mapDispatchToProps = dispatch => {
    return {
        getVehicleData: (vehicleid) => dispatch(actions.getVehicleData(vehicleid))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(VehicleMetaData);