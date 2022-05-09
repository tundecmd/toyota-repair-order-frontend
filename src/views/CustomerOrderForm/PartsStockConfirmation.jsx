import React, { useState } from 'react';
import Select from 'react-select';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import DatePicker from "react-datepicker";
// import DateTimePicker from 'controls/DateTimePicker';


const options1 = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
];
const options2 = [
  { value: 1, label: 'Yes' },
  { value: 2, label: 'No' }
];
const options3 = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' }
];
const options4 = [
  { value: 1, label: 'Yes' },
  { value: 2, label: 'No' }
];
const options5 = [
  { value: 1, label: 'Yes' },
  { value: 2, label: 'No' }
];
const paymentOptions = [
  { value: 1, label: 'Credit Card' },
  { value: 2, label: 'Cash Method' },
  { value: 2, label: 'Other' },
];

const PartsStockConfirmation = () => {

    const [selectedOption1, setSelectedOption1] = useState(1);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [selectedOption3, setSelectedOption3] = useState(null);
    const [selectedOption4, setSelectedOption4] = useState(null);
    const [selectedOption5, setSelectedOption5] = useState(null);
    const [paymentSelectedOption, setpaymentSelectedOption] = useState(null);
    const [startDate, setStartDate] = useState(new Date());


    const [selectedOptionBox, setSelectedOptionBox] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const handleSelectChange1 = selectedOption1 => {
      setSelectedOption1(selectedOption1);
      console.log('selectedOption1 :>> ', selectedOption1);
    };
    const handleSelectChange2 = selectedOption2 => {
        setSelectedOption2(selectedOption2);
        // console.log('selectedOption :>> ', selectedOption);
    };
    const handleSelectChange3 = selectedOption3 => {
      setSelectedOption3(selectedOption3);
      // console.log('selectedOption :>> ', selectedOption);
    };
    const handleSelectChange4 = selectedOption4 => {
      setSelectedOption4(selectedOption4);
      // console.log('selectedOption :>> ', selectedOption);
    };
    const handleSelectChange5 = selectedOption5 => {
      setSelectedOption5(selectedOption5);
      // console.log('selectedOption :>> ', selectedOption);
    };
    const handlePaymentSelectChange = paymentSelectedOption => {
      setSelectedOption5(paymentSelectedOption);
      // console.log('selectedOption :>> ', selectedOption);
    };

    const handleCheckboxChange = e => {
        console.log('Checkbox checked:', (e.target.checked));
        setSelectedOptionBox(disabled);
    };
    
  return (
    <div class="content container-fluid px-3">
      <div className="row">
          <div class="col-md-12 d-flex">
            <div class="card-body">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title mb-0">Parts Stock Confirmation</h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th class="text-danger">Parts Stock Confirmation</th>
                                            <th class="text-danger">Quantity</th>
                                            <th class="text-danger">Stock</th>
                                            <th class="text-danger">ETA</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            <td>
                                                <Select
                                                    value={selectedOption1}
                                                    onChange={handleSelectChange1}
                                                    options={options1}
                                                    placeholder=""
                                                />
                                            </td>
                                            <td>
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            
                                            <td>
                                                <Select
                                                    value={selectedOption2}
                                                    onChange={handleSelectChange2}
                                                    options={options2}
                                                    placeholder=""
                                                />
                                            </td>
                                            
                                            <td>
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />   
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            
                                            <td>
                                                <Select
                                                    value={selectedOption3}
                                                    onChange={handleSelectChange3}
                                                    options={options3}
                                                    placeholder=""
                                                />
                                            </td>
                                            
                                            <td>
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            
                                            <td>
                                                <Select
                                                    value={selectedOption4}
                                                    onChange={handleSelectChange4}
                                                    options={options4}
                                                    placeholder=""
                                                />
                                            </td>
                                            
                                            <td>
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" class="form-control" /></td>
                                            <td><input type="text" class="form-control" /></td>
                                            
                                            <td>
                                                <Select
                                                    value={selectedOption5}
                                                    onChange={handleSelectChange5}
                                                    options={options5}
                                                    placeholder=""
                                                />
                                            </td>
                                            
                                            <td>
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr />
                                <div class="form-group row">
                        <label class="col-md-3 col-form-label text-danger">Confirmation</label>
                        <div class="col-md-5">
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div class="col-md-4">
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
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
          </div>
      </div>
      <div className="row">
          <div class="col-md-12">
            <div class="col-md-12 d-flex">
                <div class="card flex-fill">
                    <div class="card-header">
                        <h4 class="card-title mb-0">Confirmation</h4>
                    </div>
                    <div class="card-body">
                        <form action="#">
                            <div class="form-group row">
                                <label class="col-md-3 ml-3 pt-0 col-form-label text-danger">Confirmation</label>
                                <div class="col-md-0">
                                    <Checkbox
                                        name="isPermanent"
                                        label="Appointment"
                                    />
                                </div>
                                <div class="col-md-4">
                                 Additional Job Confirmation
                                </div>
                                <div class="col-md-0">
                                    <Checkbox
                                        name="isPermanent"
                                        label="Appointment"
                                    />
                                </div>
                                <div class="col-md-4">
                                  Car Wash ( Needed / Unneeded )
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
                                <div class="col-md-4">
                                 Valuables ( Yes / No )
                                </div>
                                <div class="col-md-0">
                                    <Checkbox
                                        name="isPermanent"
                                        label="Appointment"
                                    />
                                </div>
                                <div class="col-md-4">
                                  Replaced Parts Keep ( Yes / No )
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
                                  Present Estimate w/ Explanation
                                </div> 
                                
                                               
                            </div>
                            <hr />
                            <div class="form-group row">
                                <label class="col-md-3 ml-3 pt-0 col-form-label text-danger">Courtesy Items</label>
                                <div class="col-md-0">
                                  <Checkbox
                                    name="isPermanent"
                                    label="Appointment"
                                  />
                                </div> 
                                <div class="col-md-2">
                                 Seat Cover
                                </div>
                                
                                <div class="col-md-0">
                                  <Checkbox
                                    name="isPermanent"
                                    label="Appointment"
                                  />
                                </div>
                                <div class="col-md-6">
                                  Floor Mat
                                </div>        
                            </div>
                            <hr />
                            <div class="form-group row">
                              <label class="col-md-3 col-form-label text-danger">Memo</label>
                              <div class="col-md-9">
                                  <textarea type="text" rows="5" class="form-control"></textarea>
                              </div>
                          </div>
                          <div class="form-group row">
                            <label class="col-md-3 col-form-label text-danger">Payment Method</label>
                            <div class="col-md-9">
                                <Select
                                    value={paymentSelectedOption}
                                    onChange={handlePaymentSelectChange}
                                    options={paymentOptions}
                                    placeholder=""
                                />
                            </div>
                          </div>
                          <div class="form-group row">
                                <label class="col-md-3 col-form-label text-danger">Other</label>
                                <div class="col-md-9">
                                    <input type="text" class="form-control" />
                                </div>
                            </div> 
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label text-danger">Odometer Reading at Reception</label>
                                <div class="col-md-7">
                                    <input type="text" class="form-control" />
                                </div>
                                <label class="col-md-2 col-form-label text-danger">km/mile</label>
                            </div>
                           <div class="form-group row">
                              <label class="col-md-3 col-form-label text-danger">Reception</label>
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
    </div>
  )
}

export default PartsStockConfirmation;