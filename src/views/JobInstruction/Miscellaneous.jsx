import React, { useState, useEffect } from 'react';
import MaterialTable from '@material-table/core';
import Select from 'react-select';
import Checkbox from 'rc-checkbox';
import EditIcon from '@material-ui/icons/Edit';


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

const Miscellaneous = () => {
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
        field: 'id',
        editable: false
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
        editable: false,
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
    <div className="content container-fluid px-5 mt-4">
     <div className="row">
          <div className="col-xl-12 d-flex">
              <div className="card flex-fill">
                  <div className="card-header">
                      <h4 className="card-title mb-0">Job Time</h4>
                      <IconButton
                        key="edit"
                        aria-label="Edit"
                        color="inherit"
                        onClick={() => setModalForm(true)}
                      >
                        <EditIcon color="error" />
                      </IconButton>
                  </div>
                  <div className="card-body">
                      <form action="#">
                           <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Job Start</label>
                              <div className="col-md-5">
                              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                              </div>
                              <div className="col-md-4">
                              <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                />
                            </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Job Completion</label>
                              <div className="col-md-5">
                              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                              </div>
                              <div className="col-md-4">
                              <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                />
                            </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Technician Name</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Quality Control Staff Name</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Other findings / Advice</label>
                              <div className="col-md-9">
                                  <textarea type="text" rows="3" className="form-control"></textarea>
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Memo</label>
                              <div className="col-md-9">
                                  <textarea type="text" rows="3" className="form-control"></textarea>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      <div className="row">
          <div className="col-xl-12 d-flex">
              <div className="card flex-fill">
                  <div className="card-header">
                      <h4 className="card-title mb-0">Miscellaneous Information</h4>
                      <IconButton
                        key="edit"
                        aria-label="Edit"
                        color="inherit"
                        onClick={() => setModalForm(true)}
                      >
                        <EditIcon color="error" />
                      </IconButton>
                  </div>
                  <div className="card-body">
                      <form action="#">
                        <div className="form-group row">
                          <label className="col-md-3 mr-3 col-form-label text-danger">Pre-delivery Confirmation</label>
                          <div className="col-md-0">
                              <Checkbox
                                  name="isPermanent"
                                  label="Additional Job Confirmation"
                              />
                          </div> 
                          <div className="col-md-4">
                            Cleanliness ( External/Internal)
                          </div>
                          <div className="col-md-0">
                              <Checkbox
                                  name="isPermanent"
                                  label="Appointment"
                              />
                          </div>
                          <div className="col-md-4">
                            Courtesy Items Removal
                          </div>            
                        </div>
                        <div className="form-group row">
                              <label className="col-md-3 mr-3 col-form-label text-danger"></label>
                              <div className="col-md-0">
                                  <Checkbox
                                      name="isPermanent"
                                      label="Seat Cover"
                                  />
                              </div> 
                              <div className="col-md-4">
                                Outer Mirror Position / Seat Position
                              </div>
                              <div className="col-md-0">
                                  <Checkbox
                                      name="isPermanent"
                                      label="Appointment"
                                  />
                              </div>
                              <div className="col-md-4">
                                Clock Adjustment / Radio Settings
                              </div>              
                        </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Staff Name</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Confirmed By</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                          </div>
                          <hr />
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Job Completion Notification</label>
                              <div className="col-md-5">
                              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                              </div>
                              <div className="col-md-4">
                              <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                />
                            </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Staff Name</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                          </div>
                          <hr />
                          <hr />
                          <div className="form-group row">
                          <label className="col-md-3 mr-3 col-form-label text-danger">Job Results Explanation</label>
                          <div className="col-md-0">
                              <Checkbox
                                  name="isPermanent"
                                  label="Additional Job Confirmation"
                              />
                          </div> 
                          <div className="col-md-4">
                            Job Details Explanation
                          </div>
                          <div className="col-md-0">
                              <Checkbox
                                  name="isPermanent"
                                  label="Appointment"
                              />
                          </div>
                          <div className="col-md-4">
                            Fee Explanation
                          </div>            
                        </div>
                        <div className="form-group row">
                              <label className="col-md-3 mr-3 col-form-label text-danger"></label>
                              <div className="col-md-0">
                                  <Checkbox
                                      name="isPermanent"
                                      label="Seat Cover"
                                  />
                              </div> 
                              <div className="col-md-4">
                                Results Confirmation with Customer
                              </div>
                              <div className="col-md-0">
                                  <Checkbox
                                      name="isPermanent"
                                      label="Appointment"
                                  />
                              </div>
                              <div className="col-md-4">
                                Walk-around Check
                              </div>              
                        </div>
                        <div className="form-group row">
                              <label className="col-md-3 mr-3 col-form-label text-danger"></label>
                              <div className="col-md-0">
                                  <Checkbox
                                      name="isPermanent"
                                      label="Seat Cover"
                                  />
                              </div> 
                              <div className="col-md-4">
                                Fixed
                              </div>
                              <div className="col-md-0">
                                  <Checkbox
                                      name="isPermanent"
                                      label="Appointment"
                                  />
                              </div>
                              <div className="col-md-4">
                                Level-up
                              </div>              
                        </div>
                        <div className="form-group row">
                              <label className="col-md-3 mr-3 col-form-label text-danger"></label>
                              <div className="col-md-0">
                                  <Checkbox
                                      name="isPermanent"
                                      label="Seat Cover"
                                  />
                              </div> 
                              <div className="col-md-4">
                                No Fixed
                              </div>
                              <div className="col-md-0">
                                  <Checkbox
                                      name="isPermanent"
                                      label="Appointment"
                                  />
                              </div>
                              <div className="col-md-4">
                                PSFG (Plan)
                              </div>              
                        </div>
                        <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Staff Name</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                        </div>
                          <hr />
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Delivery</label>
                              <div className="col-md-5">
                              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                              </div>
                              <div className="col-md-4">
                              <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                />
                            </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Staff Name</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group row">
                                <label className="col-md-3 col-form-label text-danger">Customer</label>
                                <div className="col-md-9">
                                    <Select
                                        value={selectedOption}
                                        onChange={handleSelectChange}
                                        options={receptionTypeOptions}
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Other</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                          </div>
                          <hr />
                      </form>
                  </div>
              </div>
          </div>
      </div>
      <div className="row">
          <div className="col-xl-12 d-flex">
              <div className="card flex-fill">
                  <div className="card-header">
                      <h4 className="card-title mb-0">P.S.F.U Information</h4>
                      <IconButton
                        key="edit"
                        aria-label="Edit"
                        color="inherit"
                        onClick={() => setModalForm(true)}
                      >
                        <EditIcon color="error" />
                      </IconButton>
                  </div>
                  <div className="card-body">
                      <form action="#">
                        <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">PSFU (plan)</label>
                              <div className="col-md-5">
                              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                              </div>
                              <div className="col-md-4">
                              <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                />
                            </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Telephone No</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Email</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Other</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">PSFU (Actual)</label>
                              <div className="col-md-5">
                              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                              </div>
                              <div className="col-md-4">
                              <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                />
                            </div>
                          </div>
                          <div className="form-group row">
                                <label className="col-md-3 col-form-label text-danger">Customer</label>
                                <div className="col-md-9">
                                    <Select
                                        value={selectedOption}
                                        onChange={handleSelectChange}
                                        options={receptionTypeOptions}
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Other</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                          </div>
                        <div className="form-group row">
                                <label className="col-md-3 col-form-label text-danger">Followup status</label>
                                <div className="col-md-9">
                                    <Select
                                        value={selectedOption}
                                        onChange={handleSelectChange}
                                        options={receptionTypeOptions}
                                        placeholder=""
                                    />
                                </div>
                            </div>
                       
                          <div className="form-group row">
                                <label className="col-md-3 col-form-label text-danger">PSFU (GJ)</label>
                                <div className="col-md-9">
                                    <Select
                                        value={selectedOption}
                                        onChange={handleSelectChange}
                                        options={receptionTypeOptions}
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Other</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                          </div>
                          <hr />
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Staff Name</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Confirmed By</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                          </div>

                      </form>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Miscellaneous;