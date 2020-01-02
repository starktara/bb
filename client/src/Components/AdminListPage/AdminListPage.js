import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Spinner from "../../Components/UI/Spinner/Spinner";
import Pagination from "../Pagination/Pagination";
import * as actions from "../../store/actions/index";
import Card from "../Card/Card";

const AdminListPage = (props) => {
  useEffect( () => {
    props.getVehicles(1, null);
  }, []);
   console.log(props);
  let vehicles = <Spinner />
  vehicles = props.vehicles.map((vehicle, index) => (
    <tbody>
      <tr>
        <td>{vehicle._source.name}</td>
        <td>{vehicle._source.myear}</td>
        <td>{vehicle._source.price}</td>
      </tr>
    </tbody>  
  ));
  return(
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Year</th>
            <th>Price</th>
          </tr>
        </thead>
        {vehicles}
      </table>
      <button><a href='/admin/upload'>Upload Bikes</a></button>
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