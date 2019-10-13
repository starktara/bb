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
        var ul = document.querySelector('.thumbs');
        ul.innerHTML = '';
        for(var i=0;i<props.data.images.length;i++){
            var li = document.createElement('li');
            li.classList = 'thumb';
            li.role = 'button';
            li.tabIndex = 0;
            var img = document.createElement('img');
            img.src = vehicleImagePath + props.data.images[i];
            li.appendChild(img);
            ul.appendChild(li);
        }
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
                            <Grid container component="div" direction="row" className="form-group" justify="flex-end">
                                <Grid item xs={9} sm={9} md={9} lg={9}>
                                <label className="fieldname">
                                    <input type="checkbox" className="filled-in" defaultChecked />
                                    <span>Interested in Low-Cost EMI Option</span>
                                </label>
                                </Grid>
                            </Grid>
                            <Grid container component="div" direction="row" className="form-group" justify="center">
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <div className="form-group"><button type="button" className="btn" onClick = {getStoreDetails}>Get Store Details</button></div>
                                </Grid>
                            </Grid>
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