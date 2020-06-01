import React, { useState, useEffect } from "react";
import isEmpty from "validator/lib/isEmpty";
import isAlpha from "validator/lib/isAlpha";
import Grid from "@material-ui/core/Grid";
import isAlphaNumeric from "validator/lib/isAlphanumeric";
import isNumeric from "validator/lib/isNumeric";
import axios from "axios";
import Tooltip from "../UI/Tooltip/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import M from "materialize-css";
import {BRANDS} from '../../shared/mappings/brands';
import { MODELS } from '../../shared/mappings/bike_models';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
const useStyles = makeStyles(theme => ({
  formError: {
    color: "red",
    fontSize: 13
  },
  label: {
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: '0.83px',
    color: '#232c2b'
  },
  body: {
    margin: "50px 100px"
  },
  heading: {
    margin: "50px 0",
    textAlign: "center"
  },
  mt40: {
    marginTop: 40
  },
  mb20:{
    marginBottom: 20
  }
}));

const formValidator = (name, value) => {
    switch (name) {
      case "type": {
        return !isNumeric(value) ? "Enter Valid type" : "";
      }
      case "brand": {
        return !isNumeric(value) ? "Enter Valid Brand" : "";
      }
      case "storeId": {
        return !isNumeric(value) ? "Enter Valid StoreID" : "";
      }
      case "model": {
        return !isNumeric(value) ? "Enter Valid model" : "";
      }
      case "regNumber": {
        return !isAlphaNumeric(value) ? "Registration no. should contain no. and alphabets only" : "";
      }
      case "descr": {
          const descrValue = value.replace(/ /g,'');
        return !isAlphaNumeric(descrValue) ? "Enter valid description" : "";
      }
      case "price": {
        return !isNumeric(value) ? "Price must be numeric" : "";
      }
      case "location": {
        return !isAlphaNumeric(value) ? "Enter valid address" : "";
      }
      case "myear": {
        return !isNumeric(value) ? "Enter valid year" : "" ;
      }
      case "mmonth": {
        return !isNumeric(value) ? "Enter valid month" : "" ;
      }
      case "kmsdriven" :{
        return !isNumeric(value) ? "Kms. driven must be number" : "";
      }
      case "owner":{
        const ownerValue = value.replace(/ /g,'');
        return !isNumeric(ownerValue) ? "Owner field must be numeric" : "";
      }
      case "cc": {
        return !isNumeric(value) ? "Enter valid cc" : "" ;
      }
      case "bhp": {
        return !isNumeric(value) ? "Enter valid bhp" : "" ;
      }
      case "category": {
        return !isNumeric(value) ? "Enter valid category" : "" ;
      }
      case "mileage": {
        return !isNumeric(value) ? "Mileage must be numeric" : "" ;
      }
      default: {
        return false;
      }
    }
};
const AdminUpload = (props) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false
    },
    type: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false
    },
    brand: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false
    },
    storeId: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false
    },
    model: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false
    },
    regNumber: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false
    },
    descr: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false
    },
    price: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false
    },
    myear: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false
    },
    mmonth: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false
    },
    kmsdriven: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false
    },
    owner: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false
    },
    cc: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false
    },
    bhp: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false
    },
    mileage: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false
    },
    image: {
      images: [],
      imageNames: [],
      message: ""
    },
    addiitionalInfo1: {
      value: "",
      error: false,
      errorMessage: "",
      optional: true
    },
    addiitionalInfo2: {
      value: "",
      error: false,
      errorMessage: "",
      optional: true
    },
    addiitionalInfo3: {
      value: "",
      error: false,
      errorMessage: "",
      optional: true
    },
    addiitionalInfo4: {
      value: "",
      error: false,
      errorMessage: "",
      optional: true
    },
    addiitionalInfo5: {
      value: "",
      error: false,
      errorMessage: "",
      optional: true
    },
    addiitionalInfo6: {
      value: "",
      error: false,
      errorMessage: "",
      optional: true
    },
    addiitionalInfo7: {
      value: "",
      error: false,
      errorMessage: "",
      optional: true
    }
  });
  const [successSubmit, setSuccessSubmit] = useState(false);

  const [tooltipState, setTooltipState] = useState({
      open: false,
      message: "",
      variant: "error"
  });
  const handleClose = () => {
      setTooltipState({
        open: false,
        message: "",
        variant: "success"
      });
  };    
  const tooltip = (
      <Tooltip
          open={tooltipState.open}
          message={tooltipState.message}
          variant={tooltipState.variant}
          handleClose={handleClose}
      />
  );

  const selectFiles = (event, formData) => {
    let images = [];
    for (var i = 0; i < event.target.files.length && i<3; i++) {
          images[i] = event.target.files.item(i);
      }
      images = images.filter(image => image.name.match(/\.(jpg|jpeg|png)$/))
      let imgNames = images.map(image => image.name.replace(/ /g,''));
      let message = `${images.length} valid image(s) selected`
      
      setFormData({
        ...formData,
        image: {
          images: images,
          imageNames: imgNames,
          message: message
        }
      });
  }

  const uploadImages = (formData) => {
    const uploaders = formData.image.images.map(image => {
      const data = new FormData();
      data.append("image", image, image.name.replace(/ /g,''));
      return axios.post('/upload', data)
      .then(response => {})
    });
    axios.all(uploaders).then(() => {
    }).catch(err => alert(err.message));
  }

  const skipValidation = ['addiitionalInfo1', 'addiitionalInfo2', 'addiitionalInfo3', 'addiitionalInfo4', 'addiitionalInfo5', 'addiitionalInfo6', 'addiitionalInfo7'];

  const validateAndUpdateFormdata = (event, formData) => {
      let targetValue = event.target.value;
      let targetName = event.target.name;
      let errorMessage = "";
      let error = false;
      if(!skipValidation.includes(targetName)){
        if (isEmpty(targetValue)) {
          errorMessage = "This field is required";
          error = true;
        } else {
          errorMessage = formValidator(targetName, targetValue);
          if (errorMessage.length) {
            error = true;
          }
        }
      }
      setFormData({
        ...formData,
        [event.target.name]: {
          value: targetValue,
          error: error,
          errorMessage: errorMessage
        }
      });
  };

  const submitForm = async(event) => {
    let formValid = true;
    let elems = document.querySelectorAll("select");
    let submitObj ={...formData};
    for(let i=0;i<elems.length;i++){
      let instance = M.FormSelect.getInstance(elems[i]);
      let targetName = instance.el.name;
      let targetValue = instance.el.value;
      submitObj = {
        ...submitObj,
        [targetName]: {
          value: targetValue,
          error: false,
          errorMessage: ""
        }
      };
    }
    for(let prop in submitObj){
      if((!submitObj[prop].optional) && (submitObj[prop].error || submitObj[prop].value==="")){
        let message = (submitObj[prop].error) ? "Invalid form value for "+prop: "All Fields are Mandatory";
        formValid = false;
        setTooltipState({
          open: true,
          message: message,
          variant: "error"
        });
      }
    }
    if(formValid){
      uploadImages(formData);
        axios
            .post("/apis/seedData/adminVehiclesUpload", submitObj)
            .then(response => {
              console.log(response);
              if(response.status===200){
                setTooltipState({
                  open: true,
                  message: "Your details have been saved",
                  variant: "success"
                });
              }
            })
            .catch(err => {
            console.log(err);
            });
      setSuccessSubmit(true);
    }
  };
  let instance = [];

  const blogId = props.match.params.id;

  useEffect(() => {
  console.log(blogId)
      if(blogId!==undefined){
      props.getVehicleData(blogId);
  }
  }, []);
             
  useEffect(() => {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});
    instance = M.FormSelect.getInstance(elems);
  }, []);

  return(
      <div className={classes.body}>
        {tooltip}
        <h4 className={classes.heading}>Upload Vehicle Details</h4>
          <form action="" encType="multipart/form-data">
            <Grid container component="div" direction="row" justify="space-evenly">
            <Grid item xs={12} sm={12} md={11}  lg={11} className={classes.mb20}>
                <label htmlFor="regNumber">
                  <span >Name:*</span>&nbsp;&nbsp;
                </label>
                {(props && props.vehicle && props.vehicle._source) ? (<input type="text" name="name" id="name" value={props.vehicle._source.name}
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>) : (<input type="text" name="name" id="name"
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>)}
                {formData.name.error && (
                  <p className={classes.formError}>
                    {formData.name.errorMessage}
                  </p>
                )}
            </Grid>
            {/* <Grid item xs={12} sm={12} md={5}  lg={5}></Grid> */}
              <Grid item xs={12} sm={12} md={5}  lg={5}>
                <div>
                  <label>Type</label>
                  <select name="type">
                    <option value="" defaultValue>Choose the Type</option>
                    <option value="1" onClick={event =>
                      validateAndUpdateFormdata(event, formData)}>Bike</option>
                    <option value="2">Scooter</option>
                    <option value="3">High-end Bike</option>
                  </select>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={5}  lg={5}>
                <div>
                  <label>Brand</label>
                  <select name="brand">
                    <option value="" defaultValue>Choose the Brand</option>
                    {
                      BRANDS.map((key,value) => {
                        return (
                          <option key ={value} value={value}>{key}</option>
                        );
                      })
                    }
                  </select>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={5}  lg={5}>
                  <div>
                  <label>Store</label>
                  <select name="storeId">
                    <option value="" defaultValue>Choose the Store</option>
                    <option value="1">BikeBazaar, Aluva, Kerela</option>
                    <option value="2">BikeBazaar, MCV Wheels</option>
                    <option value="3">BikeBazaar, Rajahmundry</option>
                    {formData.storeId.error && (
                  <p className={classes.formError}>
                    {formData.storeId.errorMessage}
                  </p>
                )}
                  </select>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={5}  lg={5}>
                <div>
                  <label>Model</label>
                  <select name="model">
                    <option value="" defaultValue>Choose the Model</option>
                    {
                      MODELS.map((key,value) => {
                        return (
                        <option key={value} value={value}>{key}</option>
                        )
                      })
                    }
                  </select>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={5}  lg={5}>
                <label htmlFor="regNumber">
                  <span >Registration Number:*</span>&nbsp;&nbsp;
                </label>
                
                {(props && props.vehicle && props.vehicle._source) ? (<input type="text" name="regNumber" id="regNumber" value={props.vehicle._source.regNumber}
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>) : (<input type="text" name="regNumber" id="regNumber"
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>)}

                {formData.regNumber.error && (
                  <p className={classes.formError}>
                    {formData.regNumber.errorMessage}
                  </p>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={5}  lg={5}>
                <label htmlFor="descr">
                  <span >Description:*</span>&nbsp;&nbsp;
                </label>
                
                {(props && props.vehicle && props.vehicle._source) ? (<input type="text" name="descr" id="descr" value={props.vehicle._source.descr}
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>) : (<input type="text" name="descr" id="descr"
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>)}

                {formData.descr.error && (
                  <p className={classes.formError}>
                    {formData.descr.errorMessage}
                  </p>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={5}  lg={5}>
                <label htmlFor="price">
                  <span >Price:*</span>&nbsp;&nbsp;
                </label>
                
                {(props && props.vehicle && props.vehicle._source) ? (<input type="text" name="price" id="price" value={props.vehicle._source.price}
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>) : (<input type="text" name="price" id="price"
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>)}

                {formData.price.error && (
                  <p className={classes.formError}>
                    {formData.price.errorMessage}
                  </p>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={5}  lg={5}>
                <label htmlFor="myear">
                  <span >Manufacturing Year:*</span>&nbsp;&nbsp;
                </label>
                
                {(props && props.vehicle && props.vehicle._source) ? (<input type="number" name="myear" id="myear" value={props.vehicle._source.myear}
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>) : (<input type="number" name="myear" id="myear"
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>)}
                {formData.myear.error && (
                  <p className={classes.formError}>
                    {formData.myear.errorMessage}
                  </p>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={5}  lg={5}>
                <label htmlFor="mmonth">
                  <span >Manufacturing Month:*</span>&nbsp;&nbsp;
                </label>
                
                {(props && props.vehicle && props.vehicle._source) ? (<input type="number" name="mmonth" id="mmonth" value={props.vehicle._source.mmonth}
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>) : (<input type="number" name="mmonth" id="mmonth"
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>)}

                {formData.mmonth.error && (
                  <p className={classes.formError}>
                    {formData.mmonth.errorMessage}
                  </p>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={5}  lg={5}>
                <label htmlFor="kmsdriven">
                  <span >Kms. Driven:*</span>&nbsp;&nbsp;
                </label>
                
                {(props && props.vehicle && props.vehicle._source) ? (<input type="number" name="kmsdriven" id="kmsdriven" value={props.vehicle._source.kmdriven}
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>) : (<input type="number" name="kmsdriven" id="kmsdriven"
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>)}

                {formData.kmsdriven.error && (
                  <p className={classes.formError}>
                    {formData.kmsdriven.errorMessage}
                  </p>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={5}  lg={5}>
                <label htmlFor="owner">
                  <span >Owner:*</span>&nbsp;&nbsp;
                </label>
                
                {(props && props.vehicle && props.vehicle._source) ? (<input type="text" name="owner" id="owner" value={props.vehicle._source.owner}
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>) : (<input type="text" name="owner" id="owner"
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>)}

                {formData.owner.error && (
                  <p className={classes.formError}>
                    {formData.owner.errorMessage}
                  </p>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={5}  lg={5}>
                <label htmlFor="cc">
                  <span >CC:*</span>&nbsp;&nbsp;
                </label>
                
                {(props && props.vehicle && props.vehicle._source) ? (<input type="number" name="cc" id="cc" value={props.vehicle._source.cc}
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>) : (<input type="number" name="cc" id="cc"
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>)}

                {formData.cc.error && (
                  <p className={classes.formError}>
                    {formData.cc.errorMessage}
                  </p>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={5}  lg={5}>
                <label htmlFor="bhp">
                  <span >BHP:*</span>&nbsp;&nbsp;
                </label>
                
                {(props && props.vehicle && props.vehicle._source) ? (<input type="number" name="bhp" id="bhp" value={props.vehicle._source.bhp}
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>) : (<input type="number" name="bhp" id="bhp"
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>)}

                {formData.bhp.error && (
                  <p className={classes.formError}>
                    {formData.bhp.errorMessage}
                  </p>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={5}  lg={5}>
                <label htmlFor="mileage">
                  <span >Mileage:*</span>&nbsp;&nbsp;
                </label>
                
                {(props && props.vehicle && props.vehicle._source) ? (<input type="number" name="mileage" id="mileage" value={props.vehicle._source.mileage}
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>) : (<input type="number" name="mileage" id="mileage"
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>)}

                {formData.mileage.error && (
                  <p className={classes.formError}>
                    {formData.mileage.errorMessage}
                  </p>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={11}  lg={11} className={classes.mb20}>
                <label htmlFor="addiitionalInfo1">
                  <span >Additional Info 1</span>&nbsp;&nbsp;
                </label>
                

                {(props && props.vehicle && props.vehicle._source) ? (<textarea type="text" name="addiitionalInfo1" id="addiitionalInfo1" value={props.vehicle._source.addiitionalInfo1}
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>) : (<textarea type="text" name="addiitionalInfo1" id="addiitionalInfo1"
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>)}
                
                {formData.name.error && (
                  <p className={classes.formError}>
                    {formData.addiitionalInfo1.errorMessage}
                  </p>
                )}
            </Grid>
            <Grid item xs={12} sm={12} md={11}  lg={11} className={classes.mb20}>
                <label htmlFor="addiitionalInfo2">
                  <span >Additional Info 2</span>&nbsp;&nbsp;
                </label>
                
                {(props && props.vehicle && props.vehicle._source) ? (<textarea type="text" name="addiitionalInfo2" id="addiitionalInfo2" value={props.vehicle._source.addiitionalInfo2}
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>) : (<textarea type="text" name="addiitionalInfo2" id="addiitionalInfo2"
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>)}
                
                {formData.name.error && (
                  <p className={classes.formError}>
                    {formData.addiitionalInfo2.errorMessage}
                  </p>
                )}
            </Grid>
            <Grid item xs={12} sm={12} md={11}  lg={11} className={classes.mb20}>
                <label htmlFor="addiitionalInfo3">
                  <span >Additional Info 3</span>&nbsp;&nbsp;
                </label>
                
                {(props && props.vehicle && props.vehicle._source) ? (<textarea type="text" name="addiitionalInfo3" id="addiitionalInfo3" value={props.vehicle._source.addiitionalInfo3}
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>) : (<textarea type="text" name="addiitionalInfo3" id="addiitionalInfo3"
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>)}
               
                {formData.name.error && (
                  <p className={classes.formError}>
                    {formData.addiitionalInfo3.errorMessage}
                  </p>
                )}
            </Grid>
            <Grid item xs={12} sm={12} md={11}  lg={11} className={classes.mb20}>
                <label htmlFor="addiitionalInfo4">
                  <span >Additional Info 4</span>&nbsp;&nbsp;
                </label>
                
                {(props && props.vehicle && props.vehicle._source) ? (<textarea type="text" name="addiitionalInfo4" id="addiitionalInfo4" value={props.vehicle._source.addiitionalInfo4}
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>) : (<textarea type="text" name="addiitionalInfo4" id="addiitionalInfo4"
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>)}
              
                {formData.name.error && (
                  <p className={classes.formError}>
                    {formData.addiitionalInfo4.errorMessage}
                  </p>
                )}
            </Grid>
            <Grid item xs={12} sm={12} md={11}  lg={11} className={classes.mb20}>
                <label htmlFor="addiitionalInfo5">
                  <span >Additional Info 5  </span>&nbsp;&nbsp;
                </label>
                
                {(props && props.vehicle && props.vehicle._source) ? (<textarea type="text" name="addiitionalInfo5" id="addiitionalInfo5" value={props.vehicle._source.addiitionalInfo5}
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>) : (<textarea type="text" name="addiitionalInfo5" id="addiitionalInfo5"
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>)}
                
                {formData.name.error && (
                  <p className={classes.formError}>
                    {formData.addiitionalInfo5.errorMessage}
                  </p>
                )}
            </Grid>
            <Grid item xs={12} sm={12} md={11}  lg={11} className={classes.mb20}>
                <label htmlFor="addiitionalInfo6">
                  <span >Additional Info 6</span>&nbsp;&nbsp;
                </label>
                
                {(props && props.vehicle && props.vehicle._source) ? (<textarea type="text" name="addiitionalInfo6" id="addiitionalInfo6" value={props.vehicle._source.addiitionalInfo6}
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>) : (<textarea type="text" name="addiitionalInfo6" id="addiitionalInfo6"
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>)}
                
                {formData.name.error && (
                  <p className={classes.formError}>
                    {formData.addiitionalInfo6.errorMessage}
                  </p>
                )}
            </Grid><Grid item xs={12} sm={12} md={11}  lg={11} className={classes.mb20}>
                <label htmlFor="addiitionalInfo7">
                  <span >Additional Info 7</span>&nbsp;&nbsp;
                </label>
                
                {(props && props.vehicle && props.vehicle._source) ? (<textarea type="text" name="addiitionalInfo7" id="addiitionalInfo7" value={props.vehicle._source.addiitionalInfo7}
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>) : (<textarea type="text" name="addiitionalInfo7" id="addiitionalInfo7"
                  onBlur={event =>
                    validateAndUpdateFormdata(event, formData)
                  }/>)}
                
                {formData.name.error && (
                  <p className={classes.formError}>
                    {formData.addiitionalInfo7.errorMessage}
                  </p>
                )}
            </Grid>
              <Grid item xs={12} sm={12} md={10}  lg={10} className={classes.mt40}>
                <label htmlFor="image">
                  <span className={classes.label}> Upload images </span>
                </label>
                <input 
                  className="form-control" 
                  type="file" 
                  onChange={(event)=>selectFiles(event, formData)} 
                  multiple
                  />
                { formData.image.message? <p className="text-info">{formData.image.message}</p>: ''}
              </Grid>
            </Grid>
            <div className="center-align">
              <button type="button" className="btn" onClick={submitForm} >
                Upload Vehicle
              </button>
            </div>
          </form>
      </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(AdminUpload);