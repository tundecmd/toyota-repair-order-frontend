import React, { useState } from 'react';
import Select from 'react-select';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
// import DateTimePicker from 'controls/DateTimePicker';
import DatePicker from "react-datepicker";

const ServiceHistoryAndCustomerRequest = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="row">
          <div class="col-md-12">
          <div class="col-md-12 d-flex">
                <div class="card flex-fill">
                <div class="card-header">
                        <h4 class="card-title mb-0">Service History</h4>
                    </div>
                    <div class="card-body">
                        <form action="#">
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label text-danger">Previous Service Date</label>
                                <div class="col-md-9">
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label text-danger">Customer Order Form No</label>
                                <div class="col-md-9">
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label text-danger">Job Type</label>
                                <div class="col-md-9">
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label text-danger">Odometer Reading at Appointment</label>
                                <div class="col-md-7">
                                    <input type="text" class="form-control" />
                                </div>
                                <label class="col-md-2 col-form-label">km / mile</label>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label text-danger">Service History</label>
                                <div class="col-md-9">
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label text-danger">SSC/SC Information</label>
                                <div class="col-md-9">
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-12 d-flex">
                <div class="card flex-fill">
                    <div class="card-header">
                        <h4 class="card-title mb-0">Customer's Requests</h4>
                    </div>
                    <div class="card-body">
                        <form action="#">
                            <div class="form-group row">
                                <label class="col-md-3 ml-3 col-form-label text-danger"></label>
                                <div class="col-md-0">
                                    <Checkbox
                                        name="isPermanent"
                                        label="Appointment"
                                    />
                                </div> 
                                <div class="col-md-2">
                                 Appointment
                                </div>
                                <div class="col-md-0">
                                    <Checkbox
                                        name="isPermanent"
                                        label="Appointment"
                                    />
                                </div>
                                <div class="col-md-2">
                                  Walk-in
                                </div>
                                <div class="col-md-0">
                                    <Checkbox
                                        name="isPermanent"
                                        label="Appointment"
                                    />
                                </div>
                                <div class="col-md-3">
                                  Internal
                                </div>                
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 ml-3 col-form-label"></label>
                                <div class="col-md-0">
                                    <Checkbox
                                        name="isPermanent"
                                        label="Appointment"
                                    />
                                </div> 
                                <div class="col-md-2">
                                 Warranty
                                </div>
                                <div class="col-md-0">
                                    <Checkbox
                                        name="isPermanent"
                                        label="Appointment"
                                    />
                                </div>
                                <div class="col-md-2">
                                  Maintenance
                                </div>
                                <div class="col-md-0">
                                    <Checkbox
                                        name="isPermanent"
                                        label="Appointment"
                                    />
                                </div>
                                <div class="col-md-3">
                                  Customer Waiting
                                </div>                
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 ml-3 col-form-label"></label>
                                <div class="col-md-0">
                                    <Checkbox
                                        name="isPermanent"
                                        label="Appointment"
                                    />
                                </div> 
                                <div class="col-md-2">
                                 Repeat Repair
                                </div>
                                <div class="col-md-0">
                                    <Checkbox
                                        name="isPermanent"
                                        label="Appointment"
                                    />
                                </div>
                                <div class="col-md-6">
                                  General Repair (Diagnostic Questionnaire Entry)
                                </div>
                                               
                            </div>
                            <div class="form-group row">
                              <label class="col-md-3 col-form-label text-danger">Job Details</label>
                              <div class="col-md-9">
                                  <textarea type="text" rows="5" class="form-control"></textarea>
                              </div>
                          </div>
                            <div class="form-group row">
                              <label class="col-md-3 col-form-label text-danger">Estimated Time</label>
                              <div class="col-md-4">
                                  {/* <input type="date" class="form-control" /> */}
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
                              <label class="col-md-2 col-form-label text-danger">Time Changed</label>
                              <div class="col-md-3">
                                  {/* <input type="date" class="form-control" /> */}
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
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label text-danger">Estimated Cost</label>
                                <div class="col-md-4">
                                    <input type="text" class="form-control" />
                                </div>
                                <label class="col-md-2 col-form-label text-danger">Cost Changed</label>
                                <div class="col-md-3">
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div class="form-group row">
                              <label class="col-md-3 col-form-label text-danger">Appointment</label>
                              <div class="col-md-5">
                                  {/* <input type="date" class="form-control" /> */}
                                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                              </div>
                              <div class="col-md-4">
                                  {/* <input type="date" class="form-control" /> */}
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
                          <div class="form-group row">
                                <label class="col-md-3 col-form-label text-danger">Staff Name</label>
                                <div class="col-md-9">
                                    <input type="text" class="form-control" />
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

export default ServiceHistoryAndCustomerRequest;