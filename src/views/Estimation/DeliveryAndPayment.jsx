import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { IconButton } from '@mui/material';
import EditIcon from '@material-ui/icons/Edit';


// import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
// import MobileDatePicker from '@mui/lab/MobileDatePicker';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import Stack from '@mui/material/Stack';


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

const deliveryTypeOptions = [
  { value: '1', label: 'Customer Come-in' },
  { value: '2', label: 'Place of Work' },
  { value: '3', label: 'Home' },
  { value: '4', label: 'Other' },
];
const paymentMethodOptions = [
  { value: '1', label: 'Credit Card' },
  { value: '2', label: 'Cash' },
  { value: '3', label: 'Other' },
];

const DeliveryAndPayment = () => {
    // const [value, setValue] = React.useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [modalForm, setModalForm] = useState(false);
    const [deliveryType, setDeliveryType] = useState(deliveryTypeOptions);
    const [paymentMethod, setPaymentMethod] = useState(paymentMethodOptions);

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
                      <h4 className="card-title mb-0">Estimation</h4>
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
                            <label className="col-md-3 col-form-label text-danger">Delivery Type</label>
                            <div className="col-md-9">
                              <Select
                                value={deliveryType}
                                onChange={setDeliveryType}
                                options={deliveryTypeOptions}
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
                            <label className="col-md-3 col-form-label text-danger">Payment Method</label>
                            <div className="col-md-9">
                              <Select
                                value={paymentMethod}
                                onChange={setPaymentMethod}
                                options={paymentMethodOptions}
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
                              <h5 className="col-md-9 col-form-label">
                                I have received an explanation of and agreed to the items listed above,
                                and accept these terms and conditions.
                              </h5>
                              <div className="col-md-3">
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

export default DeliveryAndPayment;