import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Select from "react-select";

const DropdownComponent = (props) => {
  function searchOptionsObject(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].value == nameKey) {
        return myArray[i];
      }
    }
  }

  let dropdownDiv = <div>WHAT</div>;
  useEffect(() => {
    if (props.populatedObject) {
      console.log("IFIFIFIFIFIFIFIFIFIFIFIF");
      dropdownDiv = (
        <div>OK</div>
        // <Select
        //   options={props.optionsObject}
        //   defaultValue={searchOptionsObject(
        //     props.populatedObject.value,
        //     props.optionsObject
        //   )}
        // />
      );
    } else {
      console.log("ELSEELSEELSEELSEELSEELSEELSE");
      dropdownDiv = <Select options={props.optionsObject} />;
    }
  }, props.populatedObject);

  return (
    <Grid container component="div" direction="row">
      <Grid item xs={12} md={12} sm={12} lg={12}>
        <div>
          <label>{props.labelName}</label>
          {dropdownDiv}
        </div>
      </Grid>
    </Grid>
  );
};

export default DropdownComponent;
