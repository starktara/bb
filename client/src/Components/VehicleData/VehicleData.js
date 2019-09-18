import React,{ useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Grid from "@material-ui/core/Grid";


const VehicleData = (props) => {

    const [sliderImages, setSliderImages] = useState(props.data.images);

    const vehicleImagePath = '../../vehicles/';
    var discount = null;

    if(props.data.discount){  
        discount = <span className="save">Save {props.data.discount}%</span>
    }

    const getStoreDetails = () =>{
        props.history.push(`locate-store?store-id=${props.data.storeId}`);
    }

    useEffect(() => {
        setSliderImages(props.data.images);
        console.log(props.data.images);
    }, [props.data.images]);
    
    return( 
        <Grid container component="div" direction="row">
             <Grid item xs={12} md={12} sm={12} lg={6} className="vehicleGalSec">
                <div className="vehicleGal">
                    <Carousel dynamicHeight={true}>
                        {
                            sliderImages.map((image,key)=>{
                                return <div key={key}>
                                <img src={vehicleImagePath+image} alt=""/>
                            </div>
                            })
                        }
                    </Carousel>
                </div>
            </Grid>
            <Grid item xs={12} md={12} sm={12} lg={6}>
                <div className="vehicleDetails">
                    <div className="PriceSec">
                        <p className="price"><strong>`</strong>{props.data.price}</p>
                        <span className="del"><strong>`</strong>{props.data.price}</span>
                        {discount}
                    </div>
                    <div className="ProductDetail">
                        <ul className="detailPoints">
                            <li className="year">{props.data.myear}</li>
                            <li className="km">{props.data.kmdriven} KMs</li>
                            <li className="cc">{props.data.cc} CC</li>
                            <li className="owner">{props.data.owner}</li>
                            <li className="location">{props.data.loc+', '+props.data.city}</li>
                        </ul><br className="clr"/>
                    </div>
                    <div className="ProductForm">
                        <form method="post" action="" name="0" id="" className="">
                            <Grid container component="div" direction="row" className="form-group">
                                <Grid item xs={12} md={12} sm={12} lg={3}>
                                    <label className="fieldname" htmlFor="txtOrgName">Name* :</label>
                                </Grid>
                                <Grid item xs={12} md={12} sm={12} lg={9}
                                >
                                    <input type="text" className="name" name="" id="" placeholder="Type Your Name" maxLength="" required />
                                </Grid>
                            </Grid>
                            <Grid container component="div" direction="row" className="form-group">
                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                <label className="fieldname" htmlFor="txtOrgName">Phone No.* :</label>
                                </Grid>
                                <Grid item xs={12} sm={12} md={9} lg={9}>
                                        <input type="text" className="contact" name="" id="" placeholder="Type Your Contact Number" maxLength="" required />
                                </Grid>
                            </Grid>
                            <Grid container component="div" direction="row" className="form-group">
                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                    <label className="fieldname" htmlFor="txtOrgName">Email Id</label>
                                </Grid>
                                <Grid item xs={12} sm={12} md={9} lg={9}>
                                    <input type="text" className="email" name="" id="" placeholder="Type Your Email Id" maxLength="" required />
                                </Grid>
                            </Grid>
                            <Grid container component="div" direction="row" className="form-group">
                                <label className="fieldname">
                                    <input type="checkbox" className="filled-in" defaultChecked />
                                    <span>Interested in Low-Cost EMI Option</span>
                                </label>
                            </Grid>
                            <div className="form-group"><button type="button" className="btn" onClick = {getStoreDetails}>Get Store Details</button></div>
                        </form>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = state => {
    return {
        vehicle: state.vehicleDetails.vehicle,
        loading: state.vehicleDetails.loading
    };
}
const mapDispatchToProps = dispatch => {
    return {
        save: (vehicleid) => dispatch(actions.getVehicleData(vehicleid))
    }
} 
 
export default connect(mapStateToProps,mapDispatchToProps)(VehicleData);