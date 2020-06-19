import React from 'react';
import Grid from "@material-ui/core/Grid";

const ImageUploadDisplay = (props) => {
    // console.log(props.images)
    if(props.images){
        
    var result = Object.keys(props.images).map(function(key) {
        return [props.images[key]];
      });
      let results = result[0][0];
    //   console.log(results);
//       let ar = result.split(', '); // split string on comma space
// console.log( ar );
   let imgBlock =  results.map((image)=>{<div><img src={vehicleImagePath+image} alt=""/></div>});
   console.log(imgBlock);
    }

const vehicleImagePath = '../../vehicles/';

    return (
        <Grid container component="div" direction="row">
            <Grid item xs={12} md={12} sm={12} lg={12} >
                <div>
                    {/* {(results !== undefined) ? (<div></div>) : (<div></div>)} */}
                </div>
            </Grid>
        </Grid>
    )
}

export default ImageUploadDisplay;