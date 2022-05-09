import React, { useEffect, useState } from 'react';
import MaterialTable from '@material-table/core';
import { Link, Outlet, useNavigate, Navigate } from "react-router-dom";
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Layout from '../../Layout';

// import DeleteIcon from '@material-ui/icons/Delete';
// import { IconButton } from '@mui/material';

// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// import FullWidthTabs from './ReceiveVehicleOtherDetails';
// import FirstTab from './ReceiveVehicleOtherDetails';
// import SecondTab from './ReceiveVehicleOtherDetails2';
import { getCustomerOrder } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

// const dashboardRoutes = [];

// const options = [
//     { value: 'come-in', label: 'Customer Come-in' },
//     { value: 'delivery', label: 'Dealer Delivery' }
// ];

const CODTUrl = 'http://localhost:4000/received-vehicles';

const CustomerOrders = (props) => {
  
    const [dataReceivedVehicles, setDataReceivedVehicles] = useState([]);
    const [receivedVehicle, setReceivedVehicle] = useState({});
    const customerOrders = useSelector(state => state.customerOrder.customerOrderList);
    console.log('customerOrders', customerOrders)
    const [showDialog, setShowDialog] = useState(false);
    const [Stage, setStage] = useState("");
    const [status, setStatus] = useState(0);
    // const [showDialogOtherDetails1, setShowDialogOtherDetails1] = useState(false);

    const [open, setOpen] = React.useState(false);
    const [openOtherDetails1, setOpenOtherDetails1] = React.useState(false);
    const [openOtherDetails2, setOpenOtherDetails2] = React.useState(false);
    const [valueTab, setValueTab] = React.useState(2);
    const { children, value, index, ...other } = props;

    const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(getCustomerOrder());      
    // }, [])

  useEffect(() => {
    async function fetchData() { 
        await dispatch(getCustomerOrder()); 
    };
    fetchData();
}, []);

    const handleChange = (event, newValue) => {
      setValueTab(newValue);
    };

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const navigate = useNavigate();

    // const [selectedOption, setSelectedOption] = useState(null);

    // const handleSelectChange = selectedOption => {
    //     setSelectedOption(selectedOption);
    //     console.log('selectedOption :>> ', selectedOption);
    // }

    const columnsReceivedVehicles = [
      {
        title: 'ID',
        field: 'id',
        width: "5%"
      },
      {
        title: 'Reg. No',
        field: 'regNo'
      },
      {
        title: 'Model Name.',
        field: 'modelName'
      },
      {
        title: 'Customer Name',
        field: 'customerName'
      },
      {
          title: 'Time Received',
          field: 'timeReceived',
          type: "datetime",
          render: (data) => {
            // console.log(data);
            return new Date('2019-02-19T06:00:00Z').toLocaleTimeString('en-gb');
          }
      },
      {
          title: 'Stage',
          field: 'Stage',
          cellStyle: {       
            color: "green"
          },
        },
      
    ];

    const getCODT = () => {
        fetch(CODTUrl)
          .then(res => res.json())
          .then(res => { 
            console.log(res.status)
            setDataReceivedVehicles(res);
          })
          .catch(e => console.log(e))
    }
    
    useEffect(() => {
      getCODT();
    }, [])
    
    const receiveVehicle = () => {
      setStage("Received");
      console.log("Stage -->", Stage);
      handleClose();
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

    const vehiclesCheckedInToday = customerOrders.filter((customerOrder, index) => {
      return customerOrder.Reception_Date === dateParser("2022-03-07");
    });    

  return (
    <Layout sidebar>    
        <br />
        <div className="content-layout col-md-12 content">
            <div className="card">                    
              <div className="row">
              <div className="col-md-12 d-flex">
                <div className="card-body">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="card">
                          
                         
                            <div className="card-body">
                                <MaterialTable
                                  title="Customer Orders"
                                  columns={columnsReceivedVehicles}
                                  data={vehiclesCheckedInToday}
                                  options={{
                                    search: true,
                                    paging: true,
                                    filtering: false,
                                    exportButton: false,
                                    actionsColumnIndex: -1,
                                    addRowPosition: 'first'
                                  }}
                                  actions={[
                                    {
                                      icon: 'save',
                                      tooltip: 'Save User',
                                      onClick: (event, rowData) => {
                                        // console.log(rowData);
                                        // navigate(`${rowData.Customer_No}`, { replace: true });
                                        navigate(`/customer-orders/${rowData.No}`, { replace: true, state: { rowData } });
                                        console.log(rowData);
                                        // <Navigate to={`/customer-orders/${rowData.Customer_No}`} replace state={rowData} />;
                                        <Outlet />
                                        // return (
                                        //   <Link
                                        //   to={`/customer-orders/${rowData.Customer_No}`}
                                        //   >
                                            
                                        //   </Link>
                                        // );
                                        // navigate(`${rowData.Customer_No}`, { replace: true });
                                      }
                                    },
                                    // {
                                    //   icon: 'delete',
                                    //   tooltip: 'Delete User',
                                    //   onClick: (event, rowData) => alert("You want to delete " + rowData.name)
                                    // }
                                  ]}
                                  // editable= {{
                                  //   onRowAdd: (newRow) => new Promise((resolve, reject) => {
                                  //     const allRows = [...dataReceivedVehicles];
                                  //     newRow['id'] = allRows.length + 1;
                                  //     // Backend call
                                  //     fetch(CODTUrl, {
                                  //       method: "POST",
                                  //       headers: {
                                  //         "Content-type": "application/json"
                                  //       },
                                  //       body: JSON.stringify(newRow)
                                  //     }).then(res => res.json())
                                  //       .then(res => {
                                  //         getCODT()
                                  //         resolve()
                                  //       })
                                  //   }),
                                  //   onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
                                  //     // Backend call
                                  //     console.log(oldRow.tableData.id)
                                  //     const id = oldRow.id;
                                  //     fetch(`${CODTUrl}/${id}`, {
                                  //       method: "PUT",
                                  //       headers: {
                                  //         "Content-type": "application/json" 
                                  //       },
                                  //       body: JSON.stringify(updatedRow)
                                  //     }).then(res => res.json())
                                  //       .then(res => {
                                  //         getCODT()
                                  //         resolve()
                                  //       })
                                  //   }),
                                  // }}
                                />
                            </div>
                          </div>
                      </div>
                      
                  </div>
                  
                </div>
              </div>
              </div>
            </div>
        </div>
    </Layout>
  );
}

export default CustomerOrders;