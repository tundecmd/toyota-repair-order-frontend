// import DateTimePicker from 'controls/DateTimePicker';
import DatePicker from "react-datepicker";
import { getTime } from 'date-fns/fp';
import React, { useEffect, useReducer, useState } from 'react';
import Select from 'react-select';
import Layout from '../../Layout.jsx';
import { useDispatch, useSelector } from "react-redux";
import { getCustomerOrder, getCustomerOrderById } from "../../actions/customerOrder.actions.js";
import { useParams } from "react-router-dom";


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
const deliveryTypeOptions = [
    { value: '1', label: 'Customer Come-In' },
    { value: '2', label: 'Dealer Delivery' }
];

const Reception = (props) => {
    const customerOrder = useSelector(state => state.customerOrder);

    const [selectedReceptionType, setSelectedReceptionType] = useState(customerOrder ? customerOrder.customerOrder.Reception_Type : null);
    const [selectedCourtesyVehicle, setSelectedCourtesyVehicle] = useState(null);
    const [selectedDeliveryType, setSelectedDeliveryType] = useState(null);
    
    
    
    // console.log('customerOrder', customerOrder)
    // const [Reception_Type, setReception_Type] = useState(customerOrder ? customerOrder.customerOrder.Reception_Type : null);
    const [No, setNo] = useState(customerOrder ? customerOrder.customerOrder.No : "");
    const [startDate, setStartDate] = useState(
        customerOrder.customerOrder.Reception_Date 
        ?   new Date(customerOrder.customerOrder.Reception_Date)
        :   null
    );
    const [Delivery_Date, setDelivery_Date] = useState(
        customerOrder.customerOrder.Delivery_Date 
        ?   new Date(customerOrder.customerOrder.Delivery_Date)
        :   null
    );
    const [Confirmation_Date, setConfirmation_Date] = useState(
        customerOrder.customerOrder.Confirmation_Date 
        ?   new Date(customerOrder.customerOrder.Confirmation_Date)
        :   null
    );
    const [startTime, setStartTime] = useState(
        new Date()
    );
    // const orderFormId = useParams();
    // console.log('props', props.orderFormId.formId);
   
    // console.log('date', typeof(customerOrder.customerOrder.Reception_Date));

    const customerOrderList = useSelector(state => state.customerOrder.customerOrderList);
    const dispatch = useDispatch();
    // console.log('customerOrderList', customerOrderList);

    useEffect(() => {
         
        dispatch(getCustomerOrderById(props.orderFormId.formId)); 
        // console.log("jjjj")
        
        
        // console.log('kkkkk');
    }, []);

    // const customerOder = customerOrderList.map()
    

    const handleSelectChange = selectedReceptionType => {
        // setReception_Type(selectedReceptionType);
        setSelectedReceptionType(selectedReceptionType);
        // console.log('selectedOption :>> ', selectedReceptionType);
    };
    const handleSelectCourtesyVehicle = selectedCourtesyVehicle => {
        // setReception_Type(selectedCourtesyVehicle);
        setSelectedCourtesyVehicle(selectedCourtesyVehicle);
        // console.log('selectedOption :>> ', selectedCourtesyVehicle);
    };
    const handleSelectDeliveryType = selectedDeliveryType => {
        // setReception_Type(selectedCourtesyVehicle);
        setSelectedDeliveryType(selectedDeliveryType);
        // console.log('selectedOption :>> ', selectedDeliveryType);
    };
    
    
  return (
    <div className="content container-fluid">
      <div className="row">
          <div className="col-xl-12 d-flex">
              <div className="card flex-fill">
                  <div className="card-header">
                      <h4 className="card-title mb-0">Reception and Delivery Information</h4>
                  </div>
                  <div className="card-body">
                      <form>
                      <div className="form-group row">
                            <label className="col-md-3 col-form-label text-danger">Customer Order Form No</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control" value={No} onChange={setNo} />
                            </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Date</label>
                              <div className="col-md-5">
                                <DatePicker 
                                // dateFormat={"mm-dd-yyyy"}
                                    selected={startDate}
                                    onChange={(startDate) => setStartDate(startDate)} 
                                />
                              </div>
                              <div className="col-md-4">
                              <DatePicker
                                selected={startTime}
                                onChange={(time) => setStartTime(time)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                />
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
                                <label className="col-md-3 col-form-label text-danger">Reception Type</label>
                                <div className="col-md-9">
                                    <Select
                                        value={selectedReceptionType}
                                        defaultValue={customerOrder.customerOrder.Reception_Type}
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
                                        value={selectedCourtesyVehicle}
                                        defaultValue={selectedCourtesyVehicle}
                                        onChange={handleSelectCourtesyVehicle}
                                        options={courtesyVehicleOptions}
                                        placeholder=""
                                    />
                                </div>
                            </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Delivery</label>
                              <div className="col-md-5">
                              <DatePicker selected={Delivery_Date} onChange={(date) => setDelivery_Date(date)} />
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
                                    value={selectedDeliveryType}
                                    onChange={handleSelectDeliveryType}
                                    options={deliveryTypeOptions}
                                    placeholder=""
                                />
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
                      <h4 className="card-title mb-0">Parts Ordering</h4>
                  </div>
                  <div className="card-body">
                      <form action="#">
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Confirmation</label>
                              <div className="col-md-5">
                              <DatePicker selected={Confirmation_Date} onChange={(date) => setConfirmation_Date(date)} />
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
                              <label className="col-md-3 col-form-label text-danger">Parts Ordered</label>
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
                              <label className="col-md-3 col-form-label text-danger">Parts Arrived</label>
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
                          
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Reception;