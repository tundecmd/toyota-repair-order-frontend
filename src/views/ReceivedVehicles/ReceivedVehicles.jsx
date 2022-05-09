import React, { useEffect, useState } from 'react';
import MaterialTable from '@material-table/core';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Layout from '../../Layout';

import Select from 'react-select';

import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@mui/material';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// import FullWidthTabs from './ReceiveVehicleOtherDetails';
import FirstTab from './ReceiveVehicleOtherDetails';
import SecondTab from './ReceiveVehicleOtherDetails2';
import { getCustomerOrder } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

// const dashboardRoutes = [];

// const options = [
//     { value: 'come-in', label: 'Customer Come-in' },
//     { value: 'delivery', label: 'Dealer Delivery' }
// ];


const receptionTypeOptions = [
  { value: '1', label: 'Checked In Vehicles' },
  { value: '2', label: 'Received Vehicles' }
];

const CODTUrl = 'http://localhost:4000/received-vehicles';

const ReceivedVehicles = (props) => {
    const [dataReceivedVehicles, setDataReceivedVehicles] = useState([]);
    const customerOrder = useSelector(state => state.customerOrder);
    const [Reception_Type, setReception_Type] = useState(customerOrder ? customerOrder.customerOrder.Reception_Type : null);
    const [receivedVehicle, setReceivedVehicle] = useState({});
    const customerOrders = useSelector(state => state.customerOrder.customerOrderList);
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

    useEffect(() => {
      dispatch(getCustomerOrder());      
  }, [])

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
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectChange = selectedOption => {
        setSelectedOption(selectedOption);
        console.log('selectedOption :>> ', selectedOption);
    }

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
          field: 'stage',
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


  //   const handleSelectChange = selectedOption => {
  //     setReception_Type(selectedOption);
  //     console.log('selectedOption :>> ', selectedOption);
  // }

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
                            <div className="form-group row mb-5 z-100">
                              <div className='col-md-5'></div>
                              <label className="col-md-3 col-form-label text-danger">Checked In / Received</label>
                                <div className="col-md-4">
                                  <Select
                                      value={Reception_Type && Reception_Type.label}
                                      onChange={handleSelectChange}
                                      options={receptionTypeOptions}
                                      placeholder=""
                                  />
                                </div>
                            </div>
                          <div className="card mt-5">
                          <Button variant="outlined" onClick={handleClickOpen}>
                            Open Receive Vehicle Modal
                          </Button>
                          <Button variant="outlined" onClick={() => setOpenOtherDetails1(true)}>
                            Open Other Details Modal
                          </Button>
                          <Dialog
                            fullWidth={true}
                            maxWidth="lg"
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="responsive-dialog-title"
                          >
                            {/* <DialogTitle id="responsive-dialog-title">
                              {"Appointment Details"}
                            </DialogTitle> */}
                            <DialogContent>
                            
                            
                            
                              
								<div className="card flex-fill rounded">
									<div className="card-header d-flex">
										<h5 className="card-title mb-0 mr-5">Appointment Details</h5>
                    <span className="badge bg-inverse-warning">Pending</span>
                    {/* <span className="float-right">
                      <IconButton
                        key="delete"
                        aria-label="Delete"
                        color="inherit"
                        onClick={() => setOpen(false)}
                      >
                        <DeleteIcon color="error" />
                      </IconButton>
                    </span> */}
									</div>
                  <div className="mt-5">
                    <div className='d-flex my-2'>
                      <h3 className='col-5 small'>Car Details</h3> 
                        <div className='col-3 small'>VIN Number</div>
                      <div className='col-4 float-right small'>JTHE87588CJCDCJR5</div>
                    </div>
                    <div className='d-flex my-2'>
                      <div className='col-5 small'></div> 
                        <div className='col-3 small'>Model Number</div>
                      <div className='col-4 float-right small'>2534244255</div>
                    </div>
                    <div className='d-flex my-2'>
                      <div className='col-5 small'></div> 
                        <div className='col-3 small'>Model Name</div>
                      <div className='col-4 float-right small'>Toyota Avensis</div>
                    </div>
                    <div className='d-flex my-2'>
                      <div className='col-5 small'></div> 
                        <div className='col-3 small'>Engine Number</div>
                      <div className='col-4 float-right small'>497FGWEVRVOIKVJ464</div>
                    </div>
                    <div className='d-flex my-2'>
                      <div className='col-5 small'></div> 
                        <div className='col-3 small'>Vehicles Reg No.</div>
                      <div className='col-4 float-right small'>KJA 111 KJ</div>
                    </div>
                    <div className='d-flex my-2'>
                      <div className='col-5 small'></div> 
                        <div className='col-3 small'>Precious Services</div>
                      <div className='col-4 float-right small'>29/03/2020</div>
                    </div>
                    <div className='d-flex my-2'>
                      <div className='col-5 small'></div> 
                        <div className='col-3 small'>VIN Number</div>
                      <div className='col-4 float-right small'>KJA 111 KJ</div>
                    </div>
                    <div className='d-flex my-2'>
                      <div className='col-5 small'></div> 
                        <div className='col-3 small'>Service History</div>
                      <div className='col-4 float-right small'>KJA 111 KJ</div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className='d-flex my-2'>
                      <h3 className='col-5 small'>Customer Details</h3> 
                        <div className='col-3 small'>VIN Number</div>
                      <div className='col-4 float-right small'>JTHE87588CJCDCJR5</div>
                    </div>
                    <div className='d-flex my-2'>
                      <div className='col-5 small'></div> 
                        <div className='col-3 small'>Model Number</div>
                      <div className='col-4 float-right small'>2534244255</div>
                    </div>
                    <div className='d-flex my-2'>
                      <div className='col-5 small'></div> 
                        <div className='col-3 small'>Model Name</div>
                      <div className='col-4 float-right small'>Toyota Avensis</div>
                    </div>
                    <div className='d-flex my-2'>
                      <div className='col-5 small'></div> 
                        <div className='col-3 small'>Engine Number</div>
                      <div className='col-4 float-right small'>497FGWEVRVOIKVJ464</div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className='d-flex my-2'>
                      <h3 className='col-5 small'>Appointment Details</h3> 
                        <div className='col-3 small'>VIN Number</div>
                      <div className='col-4 float-right small'>JTHE87588CJCDCJR5</div>
                    </div>
                    <div className='d-flex my-2'>
                      <div className='col-5 small'></div> 
                        <div className='col-3 small'>Model Number</div>
                      <div className='col-4 float-right small'>2534244255</div>
                    </div>
                    <div className='d-flex my-2'>
                      <div className='col-5 small'></div> 
                        <div className='col-3 small'>Model Name</div>
                      <div className='col-4 float-right small'>Toyota Avensis</div>
                    </div>
                    <div className='d-flex my-2'>
                      <div className='col-5 small'></div> 
                        <div className='col-3 small'>Engine Number</div>
                      <div className='col-4 float-right small'>497FGWEVRVOIKVJ464</div>
                    </div>
                  </div>
									
                  <button 
                    onClick={receiveVehicle}
                    className='btn btn-danger text-white mx-auto bx-3 my-5'
                  >
                    Receive Vehicle
                  </button>
								</div>
                            </DialogContent>
                            {/* <DialogActions>
                              <Button autoFocus onClick={handleClose}>
                                Disagree
                              </Button>
                              <Button onClick={handleClose} autoFocus>
                                Agree
                              </Button>
                            </DialogActions> */}
                          </Dialog>
                          <Dialog
                            fullWidth={true}
                            maxWidth="lg"
                            open={openOtherDetails1}
                            onClose={() => setOpenOtherDetails1(false)}
                            aria-labelledby="responsive-dialog-title"
                          >
                            {/* <DialogTitle id="responsive-dialog-title">
                              {"Appointment Details"}
                            </DialogTitle> */}
                            <DialogContent>
                            
                            {/* <FullWidthTabs /> */}
                            <FirstTab />
                              
							
                            </DialogContent>
                            {/* <DialogActions>
                              <Button autoFocus onClick={handleClose}>
                                Disagree
                              </Button>
                              <Button onClick={handleClose} autoFocus>
                                Agree
                              </Button>
                            </DialogActions> */}
                          </Dialog>
                          <Dialog
                            fullWidth={true}
                            maxWidth="lg"
                            open={openOtherDetails2}
                            onClose={() => setOpenOtherDetails2(false)}
                            aria-labelledby="responsive-dialog-title"
                          >
                            {/* <DialogTitle id="responsive-dialog-title">
                              {"Appointment Details"}
                            </DialogTitle> */}
                            <DialogContent>
                            
                            {/* <FullWidthTabs /> */}
                            <SecondTab />
                              
							
                            </DialogContent>
                            {/* <DialogActions>
                              <Button autoFocus onClick={handleClose}>
                                Disagree
                              </Button>
                              <Button onClick={handleClose} autoFocus>
                                Agree
                              </Button>
                            </DialogActions> */}
                          </Dialog>
                            
                            <div className="card-body">
                                <MaterialTable
                                  title="Received Vehicles"
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
                                        console.log(event, rowData);
                                        setReceivedVehicle(rowData);
                                        setOpen(true);
                                      }
                                    },
                                    // {
                                    //   icon: 'delete',
                                    //   tooltip: 'Delete User',
                                    //   onClick: (event, rowData) => alert("You want to delete " + rowData.name)
                                    // }
                                  ]}
                                  editable= {{
                                    onRowAdd: (newRow) => new Promise((resolve, reject) => {
                                      const allRows = [...dataReceivedVehicles];
                                      newRow['id'] = allRows.length + 1;
                                      // Backend call
                                      fetch(CODTUrl, {
                                        method: "POST",
                                        headers: {
                                          "Content-type": "application/json"
                                        },
                                        body: JSON.stringify(newRow)
                                      }).then(res => res.json())
                                        .then(res => {
                                          getCODT()
                                          resolve()
                                        })
                                    }),
                                    onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
                                      // Backend call
                                      console.log(oldRow.tableData.id)
                                      const id = oldRow.id;
                                      fetch(`${CODTUrl}/${id}`, {
                                        method: "PUT",
                                        headers: {
                                          "Content-type": "application/json" 
                                        },
                                        body: JSON.stringify(updatedRow)
                                      }).then(res => res.json())
                                        .then(res => {
                                          getCODT()
                                          resolve()
                                        })
                                    }),
                                  }}
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

export default ReceivedVehicles;