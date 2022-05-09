import React, { useState, useEffect } from 'react';
import MaterialTable from '@material-table/core';
import Select from 'react-select';


// import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
// import MobileDatePicker from '@mui/lab/MobileDatePicker';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import Stack from '@mui/material/Stack';

import DatePicker from "react-datepicker";
import { IconButton } from '@mui/material';
//import EditIcon from '@mui/icons-material/EditIcon';
import EditIcon from '@material-ui/icons/Edit';


const jobDetailUrl = 'http://localhost:4000/jobDetails';
const CODTUrl = 'http://localhost:4000/codt';

const options = [
  { value: '1', label: 'Needed' },
  { value: '2', label: 'Unneeded' }
];
const replacedPartsOptions = [
  { value: '1', label: 'Yes' },
  { value: '2', label: 'No' }
];

// const options = [
//     { value: '1', label: 'Customer Come-in' },
//     { value: '2', label: 'Dealer Delivery' }
// ];
const receptionTypeOptions = [
    { value: '1', label: 'Customer Bring-In' },
    { value: '2', label: 'Dealer Pickup' }
];
const courtesyVehicleOptions = [
    { value: '1', label: 'Need' },
    { value: '2', label: 'No Need' }
];
const VehicleDrivenByOptions = [
  { value: '1', label: 'Owner' },
  { value: '2', label: 'Family' },
  { value: '3', label: 'Other' },
];

const EstimationTable = () => {
    // const [value, setValue] = React.useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [modalForm, setModalForm] = useState(false);
    const [replacedPartsOption, setReplacedPartsOptions] = useState(replacedPartsOptions);

    const handleSelectChange = selectedOption => {
        setSelectedOption(selectedOption);
        console.log('selectedOption :>> ', selectedOption);
    }

  const [data, setData] = useState([]);
  const [dataCODT, setDataCODT] = useState([]);
  const [modalTable, setModalTable] = useState(false);

  const getJobDetails = () => {
    fetch(jobDetailUrl)
      .then(res => res.json())
      .then(res => { 
        console.log(res)
        setData(res);
      })
      .catch(e => console.log(e))
  }

  const getCODT = () => {
    fetch(CODTUrl)
      .then(res => res.json())
      .then(res => { 
        console.log(res)
        setDataCODT(res);
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    getJobDetails();
  }, [])

  useEffect(() => {
    getCODT();
  }, [])

    const columns = [
      {
        title: 'ID',
        field: 'id'
      },
      {
        title: 'Job Details / Replaced Parts',
        field: 'jobDetails'
      },
      {
        title: 'Parts No.',
        field: 'partNo'
      },
      {
        title: 'Quantity',
        field: 'quantity'
      },
      {
        title: 'Results',
        field: 'results'
      }
    ];

    const columnsCODT = [
      {
        title: 'ID',
        field: 'id',
        width: "5%"
      },
      {
        title: 'Additional Jobs / Job Stoppage',
        field: 'additionalJobs'
      },
      {
        title: 'Necessary Part No.',
        field: 'necessaryPartNo'
      },
      {
        title: 'Quantity',
        field: 'quantity'
      },
      {
        title: 'Stock',
        field: 'stock'
      },
      {
        title: 'ETA',
        field: 'eta',
        type: "datetime",
        render: (data) => {
          console.log(data);
          return new Date('2019-02-19T06:00:00Z').toLocaleTimeString('en-gb');
        }
      },
    ];
  return (
    <div className="content container-fluid px-5 mt-5">
      <div className="row">
        <div className="col-md-12 d-flex">
          <div className="card-body">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title mb-0">Estimation</h4>
                            <IconButton
                              key="edit"
                              aria-label="Edit"
                              color="inherit"
                              onClick={() => setModalTable(true)}
                            >
                              <EditIcon color="error" />
                            </IconButton>
                        </div>
                        <div className="card-body">
                            <MaterialTable
                              title="Estimation Table"
                              columns={columns}
                              data={data}
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
                                  const allRows = [...data];
                                  newRow['id'] = allRows.length + 1;
                                  // Backend call
                                  fetch(jobDetailUrl, {
                                    method: "POST",
                                    headers: {
                                      "Content-type": "application/json"
                                    },
                                    body: JSON.stringify(newRow)
                                  }).then(res => res.json())
                                    .then(res => {
                                      getJobDetails()
                                      resolve()
                                    })
                                }),
                                onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
                                  // Backend call
                                  console.log(oldRow.tableData.id)
                                  const id = oldRow.id;
                                  fetch(`${jobDetailUrl}/${id}`, {
                                    method: "PUT",
                                    headers: {
                                      "Content-type": "application/json" 
                                    },
                                    body: JSON.stringify(updatedRow)
                                  }).then(res => res.json())
                                    .then(res => {
                                      getJobDetails()
                                      resolve()
                                    })
                                }),
                              }}
                              cellEditable={{
                                cellStyle: {},
                                onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
                                    console.log(oldValue);
                                    console.log('row data', rowData);
                                    const id = rowData.id;
                                    const updatedRow = {
                                      ...rowData,

                                    };
                                    console.log(columnDef);
                                    return new Promise((resolve, reject) => {
                                        console.log('newValue: ' + newValue);
                                        // setTimeout(resolve, 4000);
                                        fetch(`${jobDetailUrl}/${id})`, {
                                          method: "PUT",
                                          headers: {
                                            "Content-type": "application/json"
                                          },
                                          body: JSON.stringify(updatedRow)
    
                                        }).then(res => res.json())
                                          .then(res => {
                                            getJobDetails()
                                            resolve()
                                          })
                                    });
                                }
                              }}
                            />

<hr />
                                
<hr />
                                <div className="form-group row">
                                  <label className="col-md-6 col-form-label text-danger"></label>
                                  <label className="col-md-2 display-2 col-form-label text-danger">Total Estimation</label>
                                  
                                  <div className="col-md-4 ">
                                      <input rows="5" className="form-control" />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label className="col-md-6 col-form-label text-danger"></label>
                                  <label className="col-md-2 display-2 col-form-label text-danger">Cost Changed</label>
                                  
                                  <div className="col-md-4 ">
                                      <input rows="5" className="form-control" />
                                  </div>
                                </div>
                                
                                <div className="form-group row">
                                  <label className="col-md-2 col-form-label text-danger">Additional Jobs</label>
                                  
                                  <div className="col-md-10">
                                      <textarea rows="3" className="form-control"></textarea>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label className="col-md-2 col-form-label text-danger">Advice</label>
                                  
                                  <div className="col-md-10">
                                      <textarea rows="3" className="form-control"></textarea>
                                  </div>
                                </div>
                        </div>
                    </div>
                </div>
                
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default EstimationTable;