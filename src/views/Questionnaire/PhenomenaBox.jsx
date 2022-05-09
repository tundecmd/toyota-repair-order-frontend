// import DateTimePicker from '../../components/DateTimePicker';
// import { getTime } from 'date-fns/fp';
import React, { useState } from 'react';
import Select from 'react-select';
import Checkbox from 'rc-checkbox';
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
const confirmationWithCustomerOptions = [
  { value: '1', label: 'Yes' },
  { value: '2', label: 'No' }
];

const PhenomenaBox = () => {

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
                      <h4 className="card-title mb-0">Phenomena</h4>
                  </div>
                  <div className="card-body">
                      <form action="#">
                      <div className="form-group row">
                            <label className="col-md-3 col-form-label text-danger">Phenomena</label>
                            <div className="col-md-9">
                                <textarea rows="4" className="form-control"></textarea>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label text-danger">Telephone No.</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Available Time</label>
                              <div className="col-md-5">
                                  {/* <input type="date" className="form-control" /> */}
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
                              <div className="col-md-4">
                                  {/* <input type="date" className="form-control" /> */}
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
                              <label className="col-md-3 col-form-label text-danger">Date</label>
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
                            <label className="col-md-3 col-form-label text-danger">Diagnostic Questionner No</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Date</label>
                              <div className="col-md-9">
                              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                              </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label text-danger">SA</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Reception</label>
                              <div className="col-md-5">
                                  {/* <input type="date" className="form-control" /> */}
                                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                              </div>
                              <div className="col-md-4">
                                  {/* <input type="date" className="form-control" /> */}
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
                                <label className="col-md-3 col-form-label text-danger">Confirmation with Customer</label>
                                <div className="col-md-9">
                                    <Select
                                        value={confirmationWithCustomerOptions}
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
                            <label className="col-md-3 col-form-label text-danger">Staff Name</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="form-group row">
                                <label className="col-md-3 mr-3 col-form-label text-danger">Confirmation</label>
                                <div className="col-md-0">
                                    <Checkbox
                                        name="isPermanent"
                                        label="Additional Job Confirmation"
                                    />
                                </div> 
                                <div className="col-md-4">
                                Additional Job Confirmation
                                </div>
                                <div className="col-md-0">
                                    <Checkbox
                                        name="isPermanent"
                                        label="Appointment"
                                    />
                                </div>
                                <div className="col-md-4">
                                  Valubles (Yes / No)
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
                                  Seat Cover
                                </div>
                                <div className="col-md-0">
                                    <Checkbox
                                        name="isPermanent"
                                        label="Appointment"
                                    />
                                </div>
                                <div className="col-md-4">
                                  Floor Mat
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
      <hr className="text-color" />
      <div className="row">
          <div className="col-xl-12 d-flex">
              <div className="card flex-fill">
                  
                  <div className="card-body">
                      <form action="#">
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Confirmation</label>
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
                              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                              </div>
                              
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Model No.</label>
                              <div className="col-md-9">
                                  <input type="text" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Staff Name</label>
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

export default PhenomenaBox;