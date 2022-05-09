import React, { useState } from 'react';
import Select from 'react-select';


// import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
// import MobileDatePicker from '@mui/lab/MobileDatePicker';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import Stack from '@mui/material/Stack';

import DatePicker from "react-datepicker";


const options = [
    { value: '1', label: 'Customer Come-in' },
    { value: '2', label: 'Dealer Delivery' }
];
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

const CustomerInformation = () => {
    // const [value, setValue] = React.useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);
    const [startDate, setStartDate] = useState(new Date());

    const handleSelectChange = selectedOption => {
        setSelectedOption(selectedOption);
        console.log('selectedOption :>> ', selectedOption);
    }
  return (
    <div className="content container-fluid px-5 mt-5">
      <div className="row">
          <div className="col-xl-12 d-flex">
              <div className="card flex-fill">
                  <div className="card-header">
                      <h4 className="card-title mb-0">Diagnosis Appointment</h4>
                  </div>
                  <div className="card-body">
                      <form action="#">
                      <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Customer Order Form No</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Reception</label>
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
                                <label className="col-md-3 col-form-label text-danger">Reception Type</label>
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
                                <label className="col-md-3 col-form-label text-danger">Courtesy Vehicle</label>
                                <div className="col-md-9">
                                    <Select
                                        value={selectedOption}
                                        onChange={handleSelectChange}
                                        options={courtesyVehicleOptions}
                                        placeholder=""
                                    />
                                </div>
                            </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Delivery</label>
                              <div className="col-md-5">
                                <DatePicker 
                                    selected={startDate} 
                                    onChange={(date) => setStartDate(date)} 
                                />
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
                            <label className="col-md-3 col-form-label text-danger">Delivery Type</label>
                            <div className="col-md-9">
                                <Select
                                    value={selectedOption}
                                    onChange={handleSelectChange}
                                    options={options}
                                    placeholder=""
                                />
                            </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Confirmation</label>
                              <div className="col-md-5">
                              <DatePicker 
                                    selected={startDate} 
                                    onChange={(date) => setStartDate(date)} 
                                />
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
                                <label className="col-md-3 col-form-label text-danger">Vehicle Driven by</label>
                                <div className="col-md-9">
                                    <Select
                                        value={VehicleDrivenByOptions}
                                        onChange={handleSelectChange}
                                        options={courtesyVehicleOptions}
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
                              <label className="col-md-3 col-form-label text-danger">Odometer Reading at Appointment</label>
                              <div className="col-md-7">
                                  <input type="text" className="form-control" />
                              </div>
                              <label className="col-md-2 col-form-label">km/mile</label>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      <div className="row">
          <div className="col-xl-12 d-flex">
              <div className="card flex-fill">
                  <div className="card-body">
                      <form action="#">
                            
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label text-danger">Date</label>
                            <div className="col-md-9">
                            <DatePicker 
                                    selected={startDate} 
                                    onChange={(date) => setStartDate(date)} 
                                />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label text-danger">Diagnostic Questionner No.</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label text-danger">SA</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control" />
                            </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      <hr className="text-color" />
      <div className="row">
          <div className="col-xl-12 d-flex">
              <div className="card flex-fill">
                  <div className="card-header">
                      <h4 className="card-title mb-0">Customer and Vehicle Information</h4>
                  </div>
                  <div className="card-body">
                      <form action="#">
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Customer Name</label>
                              <div className="col-md-9">
                                  <input type="text" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Address</label>
                              <div className="col-md-9">
                                  <input type="text" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Telephone No.</label>
                              <div className="col-md-9">
                                  <input type="text" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Vehicle Registration Number</label>
                              <div className="col-md-9">
                                  <input type="text" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Registered Date</label>
                              <div className="col-md-9">
                              <DatePicker 
                                    selected={startDate} 
                                    onChange={(date) => setStartDate(date)} 
                                />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Model Name</label>
                              <div className="col-md-9">
                                  <input type="text" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Model / Frame No / VIN</label>
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

export default CustomerInformation;