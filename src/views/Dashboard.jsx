import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import { useDispatch, useSelector } from 'react-redux';
import { customerOrderConstants } from '../actions/constants';
import { getCustomerOrder } from '../actions';


const Dashboard = () => {

  // const [customerOrders, setCustomerOrders] = useState([]);
  const customerOrderList = useSelector(state => state.customerOrder.customerOrderList);
  // console.log('customerOrderList', customerOrderList);
  const dispatch = useDispatch();

  useEffect(() => {
    // setCustomerOrders(customerOrderList)
    // console.log('cus order 1', customerOrderList);
    dispatch(getCustomerOrder());
    // console.log('cus order 2', customerOrderList);
  }, [])

  const dashboardCard = () => {
    return (
      <div className="col-sm-12 col-md-6 col-lg-4 d-flex">
      <div className="card flex-fill">
        <div className="card-body">
        <p className="text-center">
            <span className="badge"> </span>
          </p>
          <h1 className="card-text text-center display-1">
            17
          </h1>
          <h6 className="text-center">
            Vehicles Expected Today
          </h6>
          <p className="text-center text-info">
            <Link to="/expected-vehicles">View Details</Link>
          </p>
        </div>
      </div>
    </div>
    );
  };

  const vehiclesExpectedToday = () => {
    const customerOrder = customerOrderList.filter((item) => {
      return item.Reception_Date === new Date();
    })
    return
  };

  function dateParserwithArgument (date) {
    let today = new Date(date);
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
  
    today = yyyy + '-' + mm + '-' + dd;
      // console.log(today);
      return today;
  }
  
  function dateParserWithoutArgument () {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
  
    today = yyyy + '-' + mm + '-' + dd;
      // console.log(today);
      return today;
  }
  
  function dateParser (date) {
    return date ? dateParserwithArgument(date) : dateParserWithoutArgument();
  }
  
  // let dates = ['2022-04-04', '2022-04-04', '2022-01-03', '2022-01-03', '2022-01-05'];
  let dates = customerOrderList.map((customerOrder) => {
    return customerOrder.Reception_Date;
  });
  const filteredDate = dates.filter((date) => {
    return dateParser(date) === dateParser();
  });

  const renderCustomerOrder = customerOrderList.map((customerOrder, index) => {
    return (
      <div className="col-sm-12 col-md-6 col-lg-4 d-flex">
      <div className="card flex-fill">
        <div className="card-body">
        <p className="text-center">
            <span className="badge"> </span>
          </p>
          <h1 className="card-text text-center display-1">
            {customerOrderList.length}
          </h1>
          <h6 className="text-center">
            Vehicles Expected Today
          </h6>
          <p className="text-center text-info">
            <Link to="/expected-vehicles">View Details</Link>
          </p>
        </div>
      </div>
    </div>
    );
  });
  
  // console.log('filteredDate', filteredDate);
  
  return (
    <Layout sidebar>
      <Container component="main" maxWidth="lg" sx={{ mb: 4, display: "flex", justifyContent: "center"  }}>
          <div className="col-md-12">
            <div className="card-body">
              <div className="row">
                {/* {renderCustomerOrder} */}
                <div className="col-sm-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-body">
                    <p className="text-center">
                        <span className="badge"> </span>
                      </p>
                      <h1 className="card-text text-center display-1">
                        {filteredDate.length}
                      </h1>
                      <h6 className="text-center">
                        Vehicles Expected Today
                      </h6>
                      <p className="text-center text-info">
                        <Link to="/expected-vehicles">View Details</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-body">
                    <p className="text-center">
                        <span className="badge"> </span>
                      </p>
                      <h1 className="card-text text-center display-1">
                        5
                      </h1>
                      <h6 className="text-center">
                        Vehicles Checked In Today
                      </h6>
                      <p className="text-center text-info">
                        <Link  to="/">View Details</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-body">
                      <p className="text-center">
                        <span className="badge bg-inverse-danger">1 Vehicle needs to be received</span>
                      </p>
                    
                      <h1 className="card-text text-center display-1">
                        4
                      </h1>
                      <h6 className="text-center">
                        Vehicles Received Today
                      </h6>
                      <p className="text-center text-info">
                        <Link to="/received-vehicles">View Details</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
      </Container> 
    </Layout>
  )
}

export default Dashboard;