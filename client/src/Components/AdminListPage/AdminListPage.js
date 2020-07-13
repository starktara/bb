import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Spinner from "../../Components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import BulkUpload from "../BulkUpload/BulkUpload";

const useStyles = makeStyles(theme => ({
  delete: {
    cursor: 'pointer'
  }
}));

const AdminListPage = (props) => {
  const classes = useStyles();
  const loggedIn = false;
  useEffect( () => {
    if(loggedIn){
      props.getVehicles(null, null);
    } else{
      props.history.push("/admin")
    }
  }, []);

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
   console.log(props);
  let vehicles = <Spinner />
  vehicles = props.vehicles.map((vehicle, index) => (
      <tr key={index}>
        <td>{vehicle._source.name}</td>
        <td>{vehicle._source.myear}</td>
        <td>{vehicle._source.price}</td>
        <tb><Link to={'/admin/edit/'+vehicle._id} className='btn btn-secondary ButtonVoolor float-right'>Edit Info</Link></tb>
        <td onClick={() => deleteVehicle(vehicle._id)} id={'id-'+vehicle._id} className={classes.delete}>Delete</td>
      </tr>
  ));
  return(
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Year</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {vehicles}
        </tbody>
      </table>
      <Button className="btn " component={Link} to="./upload"> Upload Vehicle</Button>
      <Button className="btn" component={Link} to="./BulkUpload">Bulk Upload vehicles</Button>
    </>
  )
}

const mapStateToProps = state => {
  return {
    vehicles: state.vehicleDetails.vehicles,
    currentData: state.vehicleDetails.currentData,
    currentPage: state.vehicleDetails.currentPage,
    totalPages: state.vehicleDetails.totalPages
  };
};

const mapDispatchToProps = dispatch => {
    return {
      getVehicles: vehicleCategory =>
        dispatch(actions.getVehicles(vehicleCategory)),
      getPaginatedData: (offset, pagelimit) =>
        dispatch(actions.getPaginatedData(offset, pagelimit))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AdminListPage);