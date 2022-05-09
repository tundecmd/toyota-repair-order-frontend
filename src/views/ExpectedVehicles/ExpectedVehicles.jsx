import React, { useEffect, useState } from 'react';
import MaterialTable from '@material-table/core';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Layout from '../../Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerOrder } from '../../actions';


// import Title from './Title';

// const dashboardRoutes = [];

// const options = [
//     { value: 'come-in', label: 'Customer Come-in' },
//     { value: 'delivery', label: 'Dealer Delivery' }
// ];

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const CODTUrl = 'http://localhost:2500/ExpectedVehicles';

const ExpectedVehicles = () => {
    const [dataExpectedVehicles, setDataExpectedVehicles] = useState([]);
    const [customerOrder, setCustomerOder] = useState({});
    const [showDialog, setShowDialog] = useState(false);
    const customerOrderList = useSelector(state => state.customerOrder.customerOrderList);
    // console.log('customerOrderList', customerOrderList);
    const [Stage, setStage] = useState("");

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    
    const dispatch = useDispatch();
   

    useEffect(() => {
        dispatch(getCustomerOrder());      
    }, [])

    const handleClickOpen = (event, rowData) => {
      console.log(rowData);
      setCustomerOder(rowData);
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    const columnsExpectedVehicles = [
      // {
      //   title: 'ID',
      //   field: 'id',
      //   width: "5%"
      // },
      {
        title: 'Reg. No',
        field: 'Vehicle_Registration_No'
      },
      {
        title: 'Model Name.',
        field: 'Model_Name'
      },
      {
        title: 'Customer Name',
        field: 'Customer_Name'
      },
      {
          title: 'Time Expected',
          field: 'Reception_Time',
          // type: "datetime",
          // render: (data) => {
          //   console.log(data);
          //   return new Date().toLocaleTimeString('en-gb');
          // }
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
            setDataExpectedVehicles(res);
          })
          .catch(e => console.log(e))
      }
    
      useEffect(() => {
        getCODT();
      }, [])

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
      const customerOrdersExpectedToday = customerOrderList.filter((customerOrder) => {
        return customerOrder.Reception_Date === dateParser("2022-03-07");
      });

      console.log('customerOrdersExpectedToday', customerOrdersExpectedToday)
      // const filteredDate = dates.filter((date) => {
      //   return dateParser(date) === dateParser("2022-03-07");
      // });

  const checkIn = () => {
    setStage("CheckedIn");
    console.log('Stage -->', Stage)
    handleClose();
  };
    
  return (
    <Layout sidebar>    
        <br />
        <br />
        <br />
        <div className="content-layout col-md-12 content">
            <div className="card">                    
              <div className="row">
              <div className="col-md-12 d-flex">
                <div className="card-body">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="card">
                          {/* <Button variant="outlined" onClick={handleClickOpen}>
                            Open responsive dialog
                          </Button> */}
                          <Dialog
                            fullWidth="lg"
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="responsive-dialog-title"
                          >
                            {/* <DialogTitle id="responsive-dialog-title">
                              {"Appointment Details"}
                            </DialogTitle> */}
                            <DialogContent>

								<div class="card flex-fill rounded">
									<div class="card-header d-flex">
										<h5 class="card-title mb-0 mr-5">Appointment Details</h5>
                    <span class="badge bg-inverse-warning">{customerOrder.Stage}</span>
									</div>
									<ul class="list-group list-group-flush">
										<li class="list-group-item d-flex">
                      <span className='col-6 text-sm'>Vehicle Reg No.</span> 
                      <span className='col-2'></span>
                      <span className='float-right text-sm'>{customerOrder.Vehicle_Registration_No}</span>
                    </li>
                    <li class="list-group-item d-flex">
                      <span className='col-6 text-sm'>Model Name</span> 
                      <span className='col-2'></span>
                      <span className='float-right text-sm'></span>
                    </li>
                    <li class="list-group-item d-flex">
                      <span className='col-6 text-sm'>Customer Name</span> 
                      <span className='col-2'></span>
                      <span className='float-right text-sm'>{customerOrder.Customer_Name}</span>
                    </li>
                    <li class="list-group-item d-flex">
                      <span className='col-6 text-sm'>Appointment Date</span> 
                      <span className='col-2'></span>
                      <span className='float-right text-sm'>{customerOrder.Reception_Date}</span>
                    </li>
                    <li class="list-group-item d-flex">
                      <span className='col-6 text-sm'>Appointment Time</span> 
                      <span className='col-2'></span>
                      <span className='float-right text-sm'>{customerOrder.Reception_Time}</span>
                    </li>
                    <li class="list-group-item d-flex">
                      <span className='col-6 text-sm'>Service Type</span> 
                      <span className='col-2'></span>
                      <span className='float-right text-sm'>Maintenance</span>
                    </li>
									</ul>
                  <button
                    onClick={checkIn}
                    className='btn btn-danger text-white mx-4 my-1'
                  >
                    Check In
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
                              <div className="card-body">
                                  <MaterialTable
                                    title="Expected Vehicles"
                                    columns={columnsExpectedVehicles}
                                    data={customerOrdersExpectedToday}
                                    onRowClick={(evt,rowData)=>handleClickOpen}
                                    options={{
                                      search: true,
                                      paging: true,
                                      filtering: false,
                                      exportButton: false,
                                      actionsColumnIndex: -1,
                                      addRowPosition: 'first'
                                    }}
                                    editable= {{
                                      onRowAdd: (newRow) => new Promise((resolve, reject) => {
                                        const allRows = [...dataExpectedVehicles];
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
                                    actions={[
                                      {
                                        icon: 'save',
                                        tooltip: 'Save User',
                                        onClick: handleClickOpen
                                      }
                                    ]}
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

export default ExpectedVehicles;