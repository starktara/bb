import React, { useState, useEffect } from "react";
import isEmpty from "validator/lib/isEmpty";
import isAlpha from "validator/lib/isAlpha";
import isAlphaNumeric from "validator/lib/isAlphanumeric";
import isNumeric from "validator/lib/isNumeric";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import axios from "axios";
import Tooltip from "../UI/Tooltip/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

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
  mb: {
    margin: "50px 0"
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
      case "state":{
        const stateValue = value.replace(/ /g,'');
        return !isAlpha(stateValue) ? "City name must only be Alphabetical" : "";
      }
      case "city":{
        const cityValue = value.replace(/ /g,'');
        return !isAlpha(cityValue) ? "City name must only be Alphabetical" : "";
      }
      case "loc":{
        const locValue = value.replace(/ /g,'');
        return !isAlpha(locValue) ? "City name must only be Alphabetical" : "";
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
        return !isAlpha(ownerValue) ? "Owner name must only be Alphabetical" : "";
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
      case "nileage": {
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
    type: {
      value: "",
      error: false,
      errorMessage: ""
    },
    brand: {
      value: "",
      error: false,
      errorMessage: ""
    },
    storeId: {
      value: "",
      error: false,
      errorMessage: ""
    },
    model: {
      value: "",
      error: false,
      errorMessage: ""
    },
    regNumber: {
      value: "",
      error: false,
      errorMessage: ""
    },
    descr: {
      value: "",
      error: false,
      errorMessage: ""
    },
    price: {
      value: "",
      error: false,
      errorMessage: ""
    },
    state: {
      value: "",
      error: false,
      errorMessage: ""
    },
    city: {
      value: "",
      error: false,
      errorMessage: ""
    },
    loc: {
      value: "",
      error: false,
      errorMessage: ""
    },
    location: {
      value: "",
      error: false,
      errorMessage: ""
    },
    myear: {
      value: "",
      error: false,
      errorMessage: ""
    },
    mmonth: {
      value: "",
      error: false,
      errorMessage: ""
    },
    kmsdriven: {
      value: "",
      error: false,
      errorMessage: ""
    },
    owner: {
      value: "",
      error: false,
      errorMessage: ""
    },
    cc: {
      value: "",
      error: false,
      errorMessage: ""
    },
    bhp: {
      value: "",
      error: false,
      errorMessage: ""
    },
    mileage: {
      value: "",
      error: false,
      errorMessage: ""
    },
    category: {
      value: "",
      error: false,
      errorMessage: ""
    },
    image: {
      images: [],
      imageNames: [],
      message: ""
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
    for (var i = 0; i < event.target.files.length; i++) {
          images[i] = event.target.files.item(i);
      }
      images = images.filter(image => image.name.match(/\.(jpg|jpeg|png)$/))
      let imgNames = images.map(image => image.name);
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
      data.append("image", image, image.name);
      
      return axios.post('/upload', data)
      .then(response => {})
    });
    axios.all(uploaders).then(() => {
    }).catch(err => alert(err.message));
  }

  const validateAndUpdateFormdata = (event, formData) => {
      let targetValue = event.target.value;
      let targetName = event.target.name;
      let errorMessage = "";
      let error = false;
      if (isEmpty(targetValue)) {
        errorMessage = "This field is required";
        error = true;
      } else {
        errorMessage = formValidator(targetName, targetValue);
        if (errorMessage.length) {
          error = true;
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

  const updateFormdata = (event, formData) => {
      let targetValue = event.target.value;

      setFormData({
          ...formData,
          [event.target.name]: targetValue
      });
  };

  const submitForm = async(event) => {
      uploadImages(formData);
      axios
          .post("/apis/seedingData/uploadVehiclels", formData)
          .then(response => {})
          .catch(err => {
          console.log(err);
          });

      setTooltipState({
          open: true,
          message: "Your details have been saved",
          variant: "success"
  });
  setSuccessSubmit(true);
  };
  return(
      <div className={classes.body}>
        <h1 className={classes.mb}>Upload Vehicle Details</h1>
          <form action="" encType="multipart/form-data">
            <label htmlFor="type">
              <span >Type:*</span>&nbsp;&nbsp;(1, 2 or 3)
            </label>
            <input type="number" name="type" id="type"
              onBlur={event =>
                validateAndUpdateFormdata(event, formData)
              }/>
            {formData.type.error && (
              <p className={classes.formError}>
                {formData.type.errorMessage}
              </p>
            )}
            <label htmlFor="brand">
              <span >Brand:*</span>&nbsp;&nbsp;(Brand No.)
            </label>
            <input type="number" name="brand" id="brand"
              onBlur={event =>
                validateAndUpdateFormdata(event, formData)
              }/>
            {formData.brand.error && (
              <p className={classes.formError}>
                {formData.brand.errorMessage}
              </p>
            )}
            <label htmlFor="storeId">
              <span >StoreId:*</span>&nbsp;&nbsp;
            </label>
            <input type="number" name="storeId" id="storeId"
              onBlur={event =>
                validateAndUpdateFormdata(event, formData)
              }/>
            {formData.storeId.error && (
              <p className={classes.formError}>
                {formData.storeId.errorMessage}
              </p>
            )}
            <label htmlFor="model">
              <span >Model:*</span>&nbsp;&nbsp;
            </label>
            <input type="number" name="model" id="model"
              onBlur={event =>
                validateAndUpdateFormdata(event, formData)
              }/>
            {formData.model.error && (
              <p className={classes.formError}>
                {formData.model.errorMessage}
              </p>
            )}
            <label htmlFor="regNumber">
              <span >Registration Number:*</span>&nbsp;&nbsp;
            </label>
            <input type="text" name="regNumber" id="regNumber"
              onBlur={event =>
                validateAndUpdateFormdata(event, formData)
              }/>
            {formData.regNumber.error && (
              <p className={classes.formError}>
                {formData.regNumber.errorMessage}
              </p>
            )}
            <label htmlFor="descr">
              <span >Description:*</span>&nbsp;&nbsp;
            </label>
            <input type="text" name="descr" id="descr"
              onBlur={event =>
                validateAndUpdateFormdata(event, formData)
              }/>
            {formData.descr.error && (
              <p className={classes.formError}>
                {formData.descr.errorMessage}
              </p>
            )}
            <label htmlFor="price">
              <span >Price:*</span>&nbsp;&nbsp;
            </label>
            <input type="number" name="price" id="price"
              onBlur={event =>
                validateAndUpdateFormdata(event, formData)
              }/>
            {formData.price.error && (
              <p className={classes.formError}>
                {formData.price.errorMessage}
              </p>
            )}
            <label htmlFor="state">
              <span >State:*</span>&nbsp;&nbsp;
            </label>
            <input type="text" name="state" id="state"
              onBlur={event =>
                validateAndUpdateFormdata(event, formData)
              }/>
            {formData.state.error && (
              <p className={classes.formError}>
                {formData.state.errorMessage}
              </p>
            )}
            <label htmlFor="city">
              <span >City:*</span>&nbsp;&nbsp;
            </label>
            <input type="text" name="city" id="city"
              onBlur={event =>
                validateAndUpdateFormdata(event, formData)
              }/>
            {formData.city.error && (
              <p className={classes.formError}>
                {formData.city.errorMessage}
              </p>
            )}
            <label htmlFor="loc">
              <span >Location:*</span>&nbsp;&nbsp;
            </label>
            <input type="text" name="loc" id="loc"
              onBlur={event =>
                validateAndUpdateFormdata(event, formData)
              }/>
            {formData.loc.error && (
              <p className={classes.formError}>
                {formData.loc.errorMessage}
              </p>
            )}
            <label htmlFor="myear">
              <span >Manufacturing Year:*</span>&nbsp;&nbsp;
            </label>
            <input type="number" name="myear" id="myear"
              onBlur={event =>
                validateAndUpdateFormdata(event, formData)
              }/>
            {formData.myear.error && (
              <p className={classes.formError}>
                {formData.myear.errorMessage}
              </p>
            )}
            <label htmlFor="mmonth">
              <span >Manufacturing Month:*</span>&nbsp;&nbsp;
            </label>
            <input type="number" name="mmonth" id="mmonth"
              onBlur={event =>
                validateAndUpdateFormdata(event, formData)
              }/>
            {formData.mmonth.error && (
              <p className={classes.formError}>
                {formData.mmonth.errorMessage}
              </p>
            )}
            <label htmlFor="kmsdriven">
              <span >Kms. Driven:*</span>&nbsp;&nbsp;
            </label>
            <input type="number" name="kmsdriven" id="kmsdriven"
              onBlur={event =>
                validateAndUpdateFormdata(event, formData)
              }/>
            {formData.kmsdriven.error && (
              <p className={classes.formError}>
                {formData.kmsdriven.errorMessage}
              </p>
            )}
            <label htmlFor="owner">
              <span >Owner:*</span>&nbsp;&nbsp;
            </label>
            <input type="text" name="owner" id="owner"
              onBlur={event =>
                validateAndUpdateFormdata(event, formData)
              }/>
            {formData.owner.error && (
              <p className={classes.formError}>
                {formData.owner.errorMessage}
              </p>
            )}
            <label htmlFor="cc">
              <span >CC:*</span>&nbsp;&nbsp;
            </label>
            <input type="number" name="cc" id="cc"
              onBlur={event =>
                validateAndUpdateFormdata(event, formData)
              }/>
            {formData.cc.error && (
              <p className={classes.formError}>
                {formData.cc.errorMessage}
              </p>
            )}
            <label htmlFor="bhp">
              <span >BHP:*</span>&nbsp;&nbsp;
            </label>
            <input type="number" name="bhp" id="bhp"
              onBlur={event =>
                validateAndUpdateFormdata(event, formData)
              }/>
            {formData.bhp.error && (
              <p className={classes.formError}>
                {formData.bhp.errorMessage}
              </p>
            )}
            <label htmlFor="category">
              <span >Category:*</span>&nbsp;&nbsp;
            </label>
            <input type="number" name="category" id="category"
              onBlur={event =>
                validateAndUpdateFormdata(event, formData)
              }/>
            {formData.category.error && (
              <p className={classes.formError}>
                {formData.category.errorMessage}
              </p>
            )}
            <label htmlFor="mileage">
              <span >Mileage:*</span>&nbsp;&nbsp;
            </label>
            <input type="number" name="mileage" id="mileage"
              onBlur={event =>
                validateAndUpdateFormdata(event, formData)
              }/>
            {formData.mileage.error && (
              <p className={classes.formError}>
                {formData.mileage.errorMessage}
              </p>
            )}
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
            <button type="button" className="btn" onClick={submitForm} >
              Upload Vehicle
            </button>
          </form>
      </div>
  )
}

export default AdminUpload;