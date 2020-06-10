import React, { useState, useEffect } from "react";
import isEmpty from "validator/lib/isEmpty";
import Grid from "@material-ui/core/Grid";
import isAlphaNumeric from "validator/lib/isAlphanumeric";
import isNumeric from "validator/lib/isNumeric";
import axios from "axios";
import Tooltip from "../UI/Tooltip/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import M from "materialize-css";
import { BRANDS } from "../../shared/mappings/brands";
import { MODELS } from "../../shared/mappings/bike_models";
const useStyles = makeStyles((theme) => ({
  formError: {
    color: "red",
    fontSize: 13,
  },
  label: {
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: "0.83px",
    color: "#232c2b",
  },
  body: {
    margin: "50px 100px",
  },
  heading: {
    margin: "50px 0",
    textAlign: "center",
  },
  mt40: {
    marginTop: 40,
  },
  mb20: {
    marginBottom: 20,
  },
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
    case "regnumber": {
      return !isAlphaNumeric(value)
        ? "Registration no. should contain no. and alphabets only"
        : "";
    }
    case "descr": {
      const descrValue = value.replace(/ /g, "");
      return !isAlphaNumeric(descrValue) ? "Enter valid description" : "";
    }
    case "price": {
      return !isNumeric(value) ? "Price must be numeric" : "";
    }
    case "location": {
      return !isAlphaNumeric(value) ? "Enter valid address" : "";
    }
    case "myear": {
      return !isNumeric(value) ? "Enter valid year" : "";
    }
    case "mmonth": {
      return !isNumeric(value) ? "Enter valid month" : "";
    }
    case "kmdriven": {
      return !isNumeric(value) ? "Kms. driven must be number" : "";
    }
    case "owner": {
      const ownerValue = value.replace(/ /g, "");
      return !isNumeric(ownerValue) ? "Owner field must be numeric" : "";
    }
    case "cc": {
      return !isNumeric(value) ? "Enter valid cc" : "";
    }
    case "bhp": {
      return !isNumeric(value) ? "Enter valid bhp" : "";
    }
    case "category": {
      return !isNumeric(value) ? "Enter valid category" : "";
    }
    case "mileage": {
      return !isNumeric(value) ? "Mileage must be numeric" : "";
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
      optional: false,
    },
    type: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false,
    },
    brand: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false,
    },
    storeId: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false,
    },
    model: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false,
    },
    regnumber: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false,
    },
    descr: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false,
    },
    price: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false,
    },
    myear: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false,
    },
    mmonth: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false,
    },
    kmdriven: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false,
    },
    owner: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false,
    },
    cc: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false,
    },
    bhp: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false,
    },
    mileage: {
      value: "",
      error: false,
      errorMessage: "",
      optional: false,
    },
    image: {
      images: [],
      imageNames: [],
      message: "",
    },
    additionalInfo: {
      value: "",
      error: false,
      errorMessage: "",
      optional: true,
    },
    bulletInfo1: {
      value: "",
      error: false,
      errorMessage: "",
      optional: true,
    },
    bulletInfo2: {
      value: "",
      error: false,
      errorMessage: "",
      optional: true,
    },
    bulletInfo3: {
      value: "",
      error: false,
      errorMessage: "",
      optional: true,
    },
    bulletInfo4: {
      value: "",
      error: false,
      errorMessage: "",
      optional: true,
    },
    bulletInfo5: {
      value: "",
      error: false,
      errorMessage: "",
      optional: true,
    },
    bulletInfo6: {
      value: "",
      error: false,
      errorMessage: "",
      optional: true,
    },
  });
  const [successSubmit, setSuccessSubmit] = useState(false);

  const [tooltipState, setTooltipState] = useState({
    open: false,
    message: "",
    variant: "error",
  });
  const handleClose = () => {
    setTooltipState({
      open: false,
      message: "",
      variant: "success",
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
    for (var i = 0; i < event.target.files.length && i < 3; i++) {
      images[i] = event.target.files.item(i);
    }
    images = images.filter((image) => image.name.match(/\.(jpg|jpeg|png)$/));
    let imgNames = images.map((image) => image.name.replace(/ /g, ""));
    let message = `${images.length} valid image(s) selected`;

    setFormData({
      ...formData,
      image: {
        images: images,
        imageNames: imgNames,
        message: message,
      },
    });
  };

  const uploadImages = (formData) => {
    const uploaders = formData.image.images.map((image) => {
      const data = new FormData();
      data.append("image", image, image.name.replace(/ /g, ""));
      return axios.post("/upload", data).then((response) => {});
    });
    axios
      .all(uploaders)
      .then(() => {})
      .catch((err) => alert(err.message));
  };

  const skipValidation = [
    "addiitionalInfo",
    "bulletInfo1",
    "bulletInfo2",
    "bulletInfo3",
    "bulletInfo4",
    "bulletInfo5",
    "bulletInfo6",
  ];

  const validateAndUpdateFormdata = (event, formData) => {
    let targetValue = event.target.value;
    let targetName = event.target.name;
    let errorMessage = "";
    let error = false;
    if (!skipValidation.includes(targetName)) {
      if (isEmpty(targetValue)) {
        errorMessage = "This field is required";
        error = true;
      } else {
        errorMessage = formValidator(targetName, targetValue);
        if (errorMessage.length) {
          error = true;
        } else {
          errorMessage = formValidator(targetName, targetValue);
          if (errorMessage.length) {
            error = true;
          }
        }
      }
    }
    setFormData({
      ...formData,
      [event.target.name]: {
        value: targetValue,
        error: error,
        errorMessage: errorMessage,
      },
    });
  };

  const submitForm = async (event) => {
    let formValid = true;
    let elems = document.querySelectorAll("select");
    let submitObj = { ...formData };
    for (let i = 0; i < elems.length; i++) {
      let instance = M.FormSelect.getInstance(elems[i]);
      let targetName = instance.el.name;
      let targetValue = instance.el.value;
      submitObj = {
        ...submitObj,
        [targetName]: {
          value: targetValue,
          error: false,
          errorMessage: "",
        },
      };
    }
    for (let prop in submitObj) {
      if (
        !submitObj[prop].optional &&
        (submitObj[prop].error || submitObj[prop].value === "")
      ) {
        let message = submitObj[prop].error
          ? "Invalid form value for " + prop
          : "All Fields are Mandatory";
        formValid = false;
        setTooltipState({
          open: true,
          message: message,
          variant: "error",
        });
      }
    }
    if (formValid) {
      uploadImages(formData);
      axios
        .post("/apis/seedData/adminVehiclesUpload", submitObj)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setTooltipState({
              open: true,
              message: "Your details have been saved",
              variant: "success",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
      setSuccessSubmit(true);
    }
  };

  const deleteVehicle = (id) => {
    const formData = {
      id: id
    };
    axios.post('/apis/seedData/deleteVehicle', formData)
      .then(response => {
        if(response.status===200){
          let td = document.querySelector('#id-'+id);
          td.parentElement.remove();
        }
      })
  }

  const updateSubmitForm = async (id) => {
    let formValid = true;
    let elems = document.querySelectorAll("select");
    let submitObj = { ...formData };
    for (let i = 0; i < elems.length; i++) {
      let instance = M.FormSelect.getInstance(elems[i]);
      let targetName = instance.el.name;
      let targetValue = instance.el.value;
      submitObj = {
        ...submitObj,
        [targetName]: {
          value: targetValue,
          error: false,
          errorMessage: "",
        },
      };
    }
    for (let prop in submitObj) {
      if (
        !submitObj[prop].optional &&
        (submitObj[prop].error || submitObj[prop].value === "")
      ) {
        let message = submitObj[prop].error
          ? "Invalid form value for " + prop
          : "All Fields are Mandatory";
        formValid = false;
        setTooltipState({
          open: true,
          message: message,
          variant: "error",
        });
      }
    }
    
    let submitUpdateObj = {
      submitObj: submitObj,
      vehicleId: id
    };
    
    if (formValid) {
      uploadImages(formData);
      axios
        .post("/apis/seedData/adminVehiclesUpdate", submitUpdateObj)
        .then((response) => {
          if (response.status === 200) {
            setTooltipState({
              open: true,
              message: "Your details have been saved",
              variant: "success",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
      setSuccessSubmit(true);
    }
  };
  let instance = [];
  useEffect(() => {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});
    instance = M.FormSelect.getInstance(elems);
  }, []);

  const vehicleId = props.match.params.id;

  useEffect(() => {
    if (vehicleId !== undefined) {
      const getVehicleData = (vehicleId) => {
        let url = "/apis/seedData/searchBike?vehicleid=" + vehicleId;
        axios
          .get(url)
          .then((response) => {
            console.log(response);
            const vehicleData = response.data[0]._source;
            const objectArray = Object.entries(vehicleData);
            let vehicleDataObj = formData;
            objectArray.forEach(([key, value]) => {
              vehicleDataObj = {
                ...vehicleDataObj,
                [key]: {
                  value: value,
                  error: null,
                  errorMessage: null,
                },
              };
            });
            setFormData(vehicleDataObj);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getVehicleData(vehicleId);
    }
  }, []);

  const updateFormFieldHandler = (event, formData) => {
    let targetValue = event.target.value;
    let targetName = event.target.name;
    let vehicleDataObj = {
      ...formData,
      [targetName]: {
        value: targetValue,
      },
    };

    setFormData(vehicleDataObj);
  };

  return (
    <div className={classes.body}>
      {tooltip}
      {vehicleId !== undefined ? (
        <h4 className={classes.heading}>Update Vehicle Details</h4>
      ) : (
        <h4 className={classes.heading}>Upload Vehicle Details</h4>
      )}
      <form action="" encType="multipart/form-data">
        <Grid container component="div" direction="row" justify="space-evenly">
          <Grid item xs={12} sm={12} md={11} lg={11} className={classes.mb20}>
            <label htmlFor="regnumber">
              <span>Name:*</span>&nbsp;&nbsp;
            </label>
            <input
              value={formData.name.value}
              onChange={(event) => updateFormFieldHandler(event, formData)}
              type="text"
              name="name"
              id="name"
              onBlur={(event) => validateAndUpdateFormdata(event, formData)}
            />
            {formData.name.error && (
              <p className={classes.formError}>{formData.name.errorMessage}</p>
            )}
          </Grid>
          {/* <Grid item xs={12} sm={12} md={5}  lg={5}></Grid> */}
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <div>
              <label>Type</label>
              <select value={formData.type.value} name="type">
                {!formData.type.value ? null : (
                  <option value="" defaultValue>
                    Choose the Type
                  </option>
                )}
                <option
                  value="1"
                  onClick={(event) =>
                    validateAndUpdateFormdata(event, formData)
                  }
                >
                  Bike
                </option>
                <option value="2">Scooter</option>
                <option value="3">High-end Bike</option>
              </select>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <div>
              <label>Brand</label>
              <select value={formData.brand.value} name="brand">
                {!formData.brand.value ? null : (
                  <option value="" defaultValue>
                    Choose the Brand
                  </option>
                )}
                {BRANDS.map((key, value) => {
                  return (
                    <option key={value} value={value}>
                      {key}
                    </option>
                  );
                })}
              </select>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <div>
              <label>Store</label>
              <select value={formData.storeId.value} name="storeId">
                {!formData.storeId.value ? null : (
                  <option value="" defaultValue>
                    Choose the Store
                  </option>
                )}
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
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <div>
              <label>Model</label>
              <select value={formData.model.value} name="model">
                {!formData.model.value ? null : (
                  <option value="" defaultValue>
                    Choose the Model
                  </option>
                )}
                {MODELS.map((key, value) => {
                  return (
                    <option key={value} value={value}>
                      {key}
                    </option>
                  );
                })}
              </select>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <label htmlFor="regnumber">
              <span>Registration Number:*</span>&nbsp;&nbsp;
            </label>
            <input
              value={formData.regnumber.value}
              onChange={(event) => updateFormFieldHandler(event, formData)}
              type="text"
              name="regnumber"
              id="regnumber"
              onBlur={(event) => validateAndUpdateFormdata(event, formData)}
            />
            {formData.regnumber.error && (
              <p className={classes.formError}>
                {formData.regnumber.errorMessage}
              </p>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <label htmlFor="descr">
              <span>Description:*</span>&nbsp;&nbsp;
            </label>
            <input
              value={formData.descr.value}
              onChange={(event) => updateFormFieldHandler(event, formData)}
              type="text"
              name="descr"
              id="descr"
              onBlur={(event) => validateAndUpdateFormdata(event, formData)}
            />
            {formData.descr.error && (
              <p className={classes.formError}>{formData.descr.errorMessage}</p>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <label htmlFor="price">
              <span>Price:*</span>&nbsp;&nbsp;
            </label>
            <input
              value={formData.price.value}
              onChange={(event) => updateFormFieldHandler(event, formData)}
              type="number"
              name="price"
              id="price"
              onBlur={(event) => validateAndUpdateFormdata(event, formData)}
            />
            {formData.price.error && (
              <p className={classes.formError}>{formData.price.errorMessage}</p>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <label htmlFor="myear">
              <span>Manufacturing Year:*</span>&nbsp;&nbsp;
            </label>
            <input
              value={formData.myear.value}
              onChange={(event) => updateFormFieldHandler(event, formData)}
              type="number"
              name="myear"
              id="myear"
              onBlur={(event) => validateAndUpdateFormdata(event, formData)}
            />
            {formData.myear.error && (
              <p className={classes.formError}>{formData.myear.errorMessage}</p>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <label htmlFor="mmonth">
              <span>Manufacturing Month:*</span>&nbsp;&nbsp;
            </label>
            <input
              value={formData.mmonth.value}
              onChange={(event) => updateFormFieldHandler(event, formData)}
              type="number"
              name="mmonth"
              id="mmonth"
              onBlur={(event) => validateAndUpdateFormdata(event, formData)}
            />
            {formData.mmonth.error && (
              <p className={classes.formError}>
                {formData.mmonth.errorMessage}
              </p>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <label htmlFor="kmdriven">
              <span>Kms. Driven:*</span>&nbsp;&nbsp;
            </label>
            <input
              value={formData.kmdriven.value}
              onChange={(event) => updateFormFieldHandler(event, formData)}
              type="number"
              name="kmdriven"
              id="kmdriven"
              onBlur={(event) => validateAndUpdateFormdata(event, formData)}
            />
            {formData.kmdriven.error && (
              <p className={classes.formError}>
                {formData.kmdriven.errorMessage}
              </p>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <label htmlFor="owner">
              <span>Owner:*</span>&nbsp;&nbsp;
            </label>
            <input
              value={formData.owner.value}
              onChange={(event) => updateFormFieldHandler(event, formData)}
              type="text"
              name="owner"
              id="owner"
              onBlur={(event) => validateAndUpdateFormdata(event, formData)}
            />
            {formData.owner.error && (
              <p className={classes.formError}>{formData.owner.errorMessage}</p>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <label htmlFor="cc">
              <span>CC:*</span>&nbsp;&nbsp;
            </label>
            <input
              value={formData.cc.value}
              onChange={(event) => updateFormFieldHandler(event, formData)}
              type="number"
              name="cc"
              id="cc"
              onBlur={(event) => validateAndUpdateFormdata(event, formData)}
            />
            {formData.cc.error && (
              <p className={classes.formError}>{formData.cc.errorMessage}</p>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <label htmlFor="bhp">
              <span>BHP:*</span>&nbsp;&nbsp;
            </label>
            <input
              value={formData.bhp.value}
              onChange={(event) => updateFormFieldHandler(event, formData)}
              type="number"
              name="bhp"
              id="bhp"
              onBlur={(event) => validateAndUpdateFormdata(event, formData)}
            />
            {formData.bhp.error && (
              <p className={classes.formError}>{formData.bhp.errorMessage}</p>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <label htmlFor="mileage">
              <span>Mileage:*</span>&nbsp;&nbsp;
            </label>
            <input
              value={formData.mileage.value}
              onChange={(event) => updateFormFieldHandler(event, formData)}
              type="number"
              name="mileage"
              id="mileage"
              onBlur={(event) => validateAndUpdateFormdata(event, formData)}
            />
            {formData.mileage.error && (
              <p className={classes.formError}>
                {formData.mileage.errorMessage}
              </p>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={11} lg={11} className={classes.mb20}>
            <label htmlFor="additionalInfo">
              <span>Additional Information:</span>&nbsp;&nbsp;
            </label>
            <textArea
              value={formData.additionalInfo.value}
              onChange={(event) => updateFormFieldHandler(event, formData)}
              type="text"
              name="additionalInfo"
              id="additionalInfo"
              onBlur={(event) => validateAndUpdateFormdata(event, formData)}
            />
            {formData.additionalInfo.error && (
              <p className={classes.formError}>
                {formData.additionalInfo.errorMessage}
              </p>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={11} lg={11} className={classes.mb20}>
            <label htmlFor="bulletInfo1">
              <span>Bullet Information 1:</span>&nbsp;&nbsp;
            </label>
            <input
              value={formData.bulletInfo1.value}
              onChange={(event) => updateFormFieldHandler(event, formData)}
              type="text"
              name="bulletInfo1"
              id="bulletInfo1"
              onBlur={(event) => validateAndUpdateFormdata(event, formData)}
            />
            {formData.bulletInfo1.error && (
              <p className={classes.formError}>
                {formData.bulletInfo1.errorMessage}
              </p>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={11} lg={11} className={classes.mb20}>
            <label htmlFor="bulletInfo2">
              <span>Bullet Information 2:</span>&nbsp;&nbsp;
            </label>
            <input
              value={formData.bulletInfo2.value}
              onChange={(event) => updateFormFieldHandler(event, formData)}
              type="text"
              name="bulletInfo2"
              id="bulletInfo2"
              onBlur={(event) => validateAndUpdateFormdata(event, formData)}
            />
            {formData.bulletInfo2.error && (
              <p className={classes.formError}>
                {formData.bulletInfo2.errorMessage}
              </p>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={11} lg={11} className={classes.mb20}>
            <label htmlFor="bulletInfo3">
              <span>Bullet Information 3:</span>&nbsp;&nbsp;
            </label>
            <input
              value={formData.bulletInfo3.value}
              onChange={(event) => updateFormFieldHandler(event, formData)}
              type="text"
              name="bulletInfo3"
              id="bulletInfo3"
              onBlur={(event) => validateAndUpdateFormdata(event, formData)}
            />
            {formData.bulletInfo3.error && (
              <p className={classes.formError}>
                {formData.bulletInfo3.errorMessage}
              </p>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={11} lg={11} className={classes.mb20}>
            <label htmlFor="bulletInfo4">
              <span>Bullet Information 4:</span>&nbsp;&nbsp;
            </label>
            <input
              value={formData.bulletInfo4.value}
              onChange={(event) => updateFormFieldHandler(event, formData)}
              type="text"
              name="bulletInfo4"
              id="bulletInfo4"
              onBlur={(event) => validateAndUpdateFormdata(event, formData)}
            />
            {formData.bulletInfo4.error && (
              <p className={classes.formError}>
                {formData.bulletInfo4.errorMessage}
              </p>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={11} lg={11} className={classes.mb20}>
            <label htmlFor="bulletInfo5">
              <span>Bullet Information 5:</span>&nbsp;&nbsp;
            </label>
            <input
              value={formData.bulletInfo5.value}
              onChange={(event) => updateFormFieldHandler(event, formData)}
              type="text"
              name="bulletInfo5"
              id="bulletInfo5"
              onBlur={(event) => validateAndUpdateFormdata(event, formData)}
            />
            {formData.bulletInfo5.error && (
              <p className={classes.formError}>
                {formData.bulletInfo5.errorMessage}
              </p>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={11} lg={11} className={classes.mb20}>
            <label htmlFor="bulletInfo6">
              <span>Bullet Information 6:</span>&nbsp;&nbsp;
            </label>
            <input
              value={formData.bulletInfo6.value}
              onChange={(event) => updateFormFieldHandler(event, formData)}
              type="text"
              name="bulletInfo6"
              id="bulletInfo6"
              onBlur={(event) => validateAndUpdateFormdata(event, formData)}
            />
            {formData.bulletInfo6.error && (
              <p className={classes.formError}>
                {formData.bulletInfo6.errorMessage}
              </p>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={10} className={classes.mt40}>
            <label htmlFor="image">
              <span className={classes.label}> Upload images </span>
            </label>
            <input
              className="form-control"
              type="file"
              onChange={(event) => selectFiles(event, formData)}
              multiple
            />
            {formData.image.message ? (
              <p className="text-info">{formData.image.message}</p>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
        <div className="center-align">
          {vehicleId !== undefined ? (
            <button type="button" className="btn" onClick={() => updateSubmitForm(vehicleId)} id={'id-'+vehicleId}>
              Update Vehicle
            </button>
          ) : (
            <button type="button" className="btn" onClick={submitForm}>
              Upload Vehicle
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AdminUpload;
