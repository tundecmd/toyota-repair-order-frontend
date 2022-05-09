import React, { useEffect, useState } from 'react';
import Select from 'react-select';
// import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerOrderById } from '../../actions';
// import DateTimePicker from 'controls/DateTimePicker';


const vehicleDrivenByOptions = [
    { value: 'owner', label: 'Owner' },
    { value: 'family', label: 'Family' },
    { value: 'other', label: 'Other' }
];

const AddressAndInformation = (props) => {
    console.log('props :>> ', props);
    const customerOrder = useSelector(state => state.customerOrder);
    console.log('customerOrder', customerOrder);

    const [Customer_Name, setCustomer_Name] = useState(customerOrder ? customerOrder.customerOrder.No : "");
    const [Engine_No, setEngine_No] = useState(customerOrder.customerOrder && customerOrder.customerOrder.Engine_No);
    const [Frame_No_VIN, setFrame_No_VIN] = useState(customerOrder.customerOrder && customerOrder.customerOrder.Frame_No_VIN);
    const [Model_Name, setModel_Name] = useState(customerOrder.customerOrder && customerOrder.customerOrder.Model_Name);
    const [Model_No, setModel_No] = useState(customerOrder.customerOrder && customerOrder.customerOrder.Model_Name);
    const [Model_Year, setModel_Year] = useState(customerOrder.customerOrder && customerOrder.customerOrder.Model_No);
    const [Vehicle_Registration_No, setVehicle_Registration_No] = useState(customerOrder.customerOrder && customerOrder.customerOrder.Vehicle_Registration_No);
    const [Address, setAddress] = useState(customerOrder.customerOrder && customerOrder.customerOrder.Address);
    const [JI_Email2, setJI_Email2] = useState(customerOrder ? customerOrder.customerOrder.JI_Email2 : "");
    const [Telephone_No, setTelephone_No] = useState(customerOrder ? customerOrder.customerOrder.Telephone_No : "");
    const [Odometer_At_Appointment, setOdometer_At_Appointment] = useState(customerOrder ? customerOrder.customerOrder.Odometer_At_Appointment : "");
    const [Vehicle_Driven_By, setVehicle_Driven_By] = useState(customerOrder && customerOrder.customerOrder.Vehicle_Driven_By);
    const [selectedDeliveryType, setSelectedDeliveryType] = useState(null);

    const [selectedVehicle_Driven_By, setSelectedVehicle_Driven_By] = useState(customerOrder.customerOrder && customerOrder.customerOrder.Vehicle_Driven_By);
    const [startDate, setStartDate] = useState(new Date());
    const [disabled] = useState(false);

    const [Vehicle_Registered_Date, setVehicle_Registered_Date] = useState(
        customerOrder.customerOrder && new Date(customerOrder.customerOrder.Vehicle_Registered_Date)
    );

    // const handleSelectChange = selectedOption => {
    //     setSelectedOption(selectedOption);
    //     console.log('selectedOption :>> ', selectedOption);
    // };
    const dispatch = useDispatch();

    useEffect(() => {
         
        dispatch(getCustomerOrderById(props.orderFormId.formId)); 
        console.log("jjjj")
        
        
        console.log('kkkkk');
    }, []);

    // const handleCheckboxChange = e => {
    //     console.log('Checkbox checked:', (e.target.checked));
    //     setSelectedOption(disabled);
    // };

    const handleSelectDeliveryType = selectedDeliveryType => {
        // setReception_Type(selectedCourtesyVehicle);
        setSelectedDeliveryType(selectedDeliveryType);
        console.log('selectedOption :>> ', selectedDeliveryType);
    };
    const handleVehicleDrivenBy = selectedVehicle_Driven_By => {
        // setReception_Type(selectedCourtesyVehicle);
        setSelectedVehicle_Driven_By(selectedVehicle_Driven_By);
        console.log('selectedOption :>> ', selectedVehicle_Driven_By);
    };
    
  return (
    <div class="content container-fluid px-5">
      <div className="row">
          <div class="col-md-12 d-flex">
              <div class="card flex-fill">
                  <div class="card-header">
                      <h4 class="card-title mb-0">Address</h4>
                  </div>
                  <div class="card-body">
                      <form action="#">
                          <div class="form-group row">
                              <label class="col-md-3 col-form-label text-danger">Customer Name</label>
                              <div class="col-md-9">
                                  <input type="text" value={Customer_Name} onChange={setCustomer_Name} class="form-control" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-md-3 col-form-label text-danger">Email</label>
                              <div class="col-md-9">
                                  <input type="email" value={JI_Email2} class="form-control" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-md-3 col-form-label text-danger">Telephone No</label>
                              <div class="col-md-9">
                                  <input type="text" value={Telephone_No} class="form-control" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-md-3 col-form-label text-danger">Address</label>
                              <div class="col-md-9">
                                  <textarea type="text" rows="5" value={Address} class="form-control"></textarea>
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-md-3 col-form-label text-danger">Vehicle Registration No</label>
                              <div class="col-md-9">
                                  <input type="text" value={Vehicle_Registration_No} class="form-control" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-md-3 col-form-label text-danger">Vehicle Registration Date</label>
                              <div class="col-md-9">
                                  {/* <input type="date" class="form-control" /> */}
                                  <DatePicker selected={Vehicle_Registered_Date} onChange={(date) => setVehicle_Registered_Date(date)} />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-md-3 col-form-label text-danger">Model Year</label>
                              <div class="col-md-9">
                                  <input type="text" value={Model_Year} class="form-control" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-md-3 col-form-label text-danger">Model Name</label>
                              <div class="col-md-9">
                                  <input type="text" value={Model_Name} class="form-control" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-md-3 col-form-label text-danger">VIN</label>
                              <div class="col-md-9">
                                  <input type="text" value={Frame_No_VIN} class="form-control" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-md-3 col-form-label text-danger">Engine No</label>
                              <div class="col-md-9">
                                  <input type="text" value={Engine_No} class="form-control" />
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-md-3 col-form-label text-danger">Available Time</label>
                              <div class="col-md-5">
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
                              <label class="col-md-3 col-form-label text-danger">Vehicle Driven By</label>
                              <div class="col-md-9">
                                <Select
                                    value={selectedVehicle_Driven_By}
                                    defaultValue={selectedVehicle_Driven_By}
                                    onChange={handleVehicleDrivenBy}
                                    options={vehicleDrivenByOptions}
                                    placeholder=""
                                />
                              </div>
                          </div>
                          {
                              selectedVehicle_Driven_By && selectedVehicle_Driven_By.value === 'other' &&
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label text-danger">Other</label>
                                <div class="col-md-9">
                                  <input type="text" class="form-control" />
                                </div>
                            </div> 
                          }
                          
                          <div class="form-group row">
                              <label class="col-md-3 col-form-label text-danger">Odometer Reading at Appointment</label>
                              <div class="col-md-7">
                                  <input type="text" value={Odometer_At_Appointment} onChange={setOdometer_At_Appointment} class="form-control" />
                              </div>
                              <label class="col-md-2 col-form-label">km/mile</label>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default AddressAndInformation;