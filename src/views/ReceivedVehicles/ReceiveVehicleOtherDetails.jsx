import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Checkbox from 'rc-checkbox';
import Select from 'react-select';

import MaterialTable from '@material-table/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const deliveryTypeOptions = [
  { value: '1', label: 'Yes' },
  { value: '2', label: 'No' }
];

const CODTUrl = 'http://localhost:4000/received-vehicles';

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [disabled, setDisabled] = React.useState(true);
  const [active, setActive] = React.useState(false);
  const [deliveryType, setDeliveryType] = React.useState(deliveryTypeOptions);

  const [dataReceivedVehicles, setDataReceivedVehicles] = React.useState([]);
  const [receivedVehicle, setReceivedVehicle] = React.useState({});

  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleContinue = (event, newValue) => {
    setValue(1);
    setDisabled(!disabled);
    setActive(!active);
  };
  const handlePrevious = (event, newValue) => {
    setValue(0);
    setDisabled(!disabled);
    setActive(!active);
  };

  const columnsReceivedVehicles = [
    // {
    //   title: 'ID',
    //   field: 'id',
    //   width: "5%"
    // },
    {
      title: 'Item',
      field: 'regNo'
    },
    {
      title: 'QTY',
      field: 'modelName'
    },
    {
      title: 'In-Stock',
      field: 'customerName'
    },
    {
        title: 'Reception Date',
        field: 'timeReceived',
        type: "datetime",
        render: (data) => {
          // console.log(data);
          return new Date('2019-02-19T06:00:00Z').toLocaleTimeString('en-gb');
        }
    },
    {
        title: 'Cost',
        field: 'stage',
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
          setDataReceivedVehicles(res);
        })
        .catch(e => console.log(e))
    }
  
    React.useEffect(() => {
      getCODT();
    }, [])

  return (
    <>
      <div className="modal-header"></div>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="1. Other Details" disabled={active} {...a11yProps(0)} />
          <Tab label="2. Parts/Job Details" disabled={disabled} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="form-group row">
          <label className="col-md-5 col-form-label text-danger">Walk-around Confirmation</label>
          <div className="col-md-7 d-flex">
            <div className="image-box mx-auto"></div>
            <div className="image-box mx-auto"></div>
            <div className="image-box mx-auto"></div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-5 col-form-label text-danger"></label>
          <div className="col-md-7 d-flex">
          <div className="image-box mx-auto"></div>
          <div className="image-box mx-auto"></div>
          <div className="image-box-third mx-auto"></div>
          </div>
        </div>
      <hr />
      <div class="form-group row">
          <label class="col-md-5 col-form-label text-danger">Additional Job Confirmation</label>
          <div class="col-md-4">
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender"
                      id="gender_male" value="option1" checked />
                  <label class="form-check-label" for="gender_male">
                      Yes
                  </label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender"
                      id="gender_female" value="option2" />
                  <label class="form-check-label" for="gender_female">
                      No
                  </label>
              </div>
          </div>
      </div>
      <div class="form-group row">
          <label class="col-md-5 col-form-label text-danger">Valuables</label>
          <div class="col-md-4">
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender"
                      id="gender_male" value="option1" checked />
                  <label class="form-check-label" for="gender_male">
                      Yes
                  </label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender"
                      id="gender_female" value="option2" />
                  <label class="form-check-label" for="gender_female">
                      No
                  </label>
              </div>
          </div>
      </div>
      <div class="form-group row">
          <label class="col-md-5 col-form-label text-danger">Present Estimate with Evaluation</label>
          <div class="col-md-4">
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender"
                      id="gender_male" value="option1" checked />
                  <label class="form-check-label" for="gender_male">
                      Yes
                  </label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender"
                      id="gender_female" value="option2" />
                  <label class="form-check-label" for="gender_female">
                      No
                  </label>
              </div>
          </div>
      </div>
      <div class="form-group row">
          <label class="col-md-5 col-form-label text-danger">Car wash</label>
          <div class="col-md-4">
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender"
                      id="gender_male" value="option1" checked />
                  <label class="form-check-label" for="gender_male">
                      Yes
                  </label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender"
                      id="gender_female" value="option2" />
                  <label class="form-check-label" for="gender_female">
                      No
                  </label>
              </div>
          </div>
      </div>
      <div class="form-group row">
          <label class="col-md-5 col-form-label text-danger">Replacement Parts Keep</label>
          <div class="col-md-4">
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender"
                      id="gender_male" value="option1" checked />
                  <label class="form-check-label" for="gender_male">
                      Yes
                  </label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender"
                      id="gender_female" value="option2" />
                  <label class="form-check-label" for="gender_female">
                      No
                  </label>
              </div>
          </div>
      </div>
        {/* <div className="form-group row">
          <label className="col-md-5 col-form-label text-danger">Additional Job Confirmation</label>
          <div className="col-md-7">
            <Select
              value={deliveryType}
              onChange={setDeliveryType}
              options={deliveryTypeOptions}
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-5 col-form-label text-danger">Valuables</label>
          <div className="col-md-7">
            <Select
              value={deliveryType}
              onChange={setDeliveryType}
              options={deliveryTypeOptions}
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-5 col-form-label text-danger">Present Estimate with Explanation</label>
          <div className="col-md-7">
            <Select
              value={deliveryType}
              onChange={setDeliveryType}
              options={deliveryTypeOptions}
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-5 col-form-label text-danger">Car Wash</label>
          <div className="col-md-7">
            <Select
              value={deliveryType}
              onChange={setDeliveryType}
              options={deliveryTypeOptions}
              placeholder=""
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-5 col-form-label text-danger">Replacement Parts Keep</label>
          <div className="col-md-7">
            <Select
              value={deliveryType}
              onChange={setDeliveryType}
              options={deliveryTypeOptions}
              placeholder=""
            />
          </div>
        </div> */}
        <hr />
        <div className="form-group row">
                              <label className="col-md-5 mr-3 col-form-label text-danger">Courtesy Items</label>
                                <div className="col-md-0">
                                    <Checkbox
                                      name="isPermanent"
                                      label="Seat Cover"
                                    />
                                </div> 
                                <div className="col-md-3">
                                  Seat Position
                                </div>
                                <div className="col-md-0">
                                    <Checkbox
                                        name="isPermanent"
                                        label="Appointment"
                                    />
                                </div>
                                <div className="col-md-3">
                                  Floor Mat
                                </div>              
                        </div>

      <hr />
      <div className="form-group row">
          <label className="col-md-5 col-form-label text-danger">Current Odometer</label>
          <div className="col-md-7">
            <input type="text" className="form-control" placeholder='Enter Odometer' />
          </div>
      </div>
      <hr />
      <div className="d-flex">
        <button onClick={handlePrevious} className='btn btn-danger text-white mx-auto px-5 my-5'>Cancel</button>
        <button onClick={handleContinue} className='btn btn-danger text-white mx-auto px-5 my-5'>Continue</button>
      </div>
      
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="card-body">
                                <MaterialTable
                                  title="Parts Stock"
                                  columns={columnsReceivedVehicles}
                                  data={dataReceivedVehicles}
                                  options={{
                                    search: true,
                                    paging: true,
                                    filtering: false,
                                    exportButton: false,
                                    actionsColumnIndex: -1,
                                    addRowPosition: 'first'
                                  }}
                                  actions={[
                                    {
                                      icon: 'save',
                                      tooltip: 'Save User',
                                      onClick: (event, rowData) => {
                                        console.log(event, rowData);
                                        setReceivedVehicle(rowData);
                                        setOpen(true);
                                      }
                                    },
                                    // {
                                    //   icon: 'delete',
                                    //   tooltip: 'Delete User',
                                    //   onClick: (event, rowData) => alert("You want to delete " + rowData.name)
                                    // }
                                  ]}
                                  editable= {{
                                    onRowAdd: (newRow) => new Promise((resolve, reject) => {
                                      const allRows = [...dataReceivedVehicles];
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
                                />
                            </div>
                            <div className="form-group row">
                              <div className="col-md-7"></div>
                              <label className="col-md-1 col-form-label text-danger">Total </label>
                              <div className="col-md-3">
                                  <input type="text" className="form-control" />
                              </div>
                          </div>
                          <hr />
                          <h4>Job Details</h4>
                          <div className="alert alert-dark">
                            <strong>Description </strong>
                            <div className="close">
                              {/* <span aria-hidden="true">&times;</span> */}
                            </div>
                          </div>
                          <div className="alert">
                            <strong>PM 45000KM </strong> ... REPLACE ENGINE OIL, OIL FILTER 
                          </div>
                          <div className="alert">
                            <strong>PM 45000KM </strong> ... REPLACE ENGINE OIL, OIL FILTER 
                          </div>
                          <div className="form-group row">
                              <div className="col-md-5"></div>
                              <label className="col-md-3 col-form-label text-danger">Estimated Time </label>
                              <div className="col-md-3">
                                  <input type="text" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <div className="col-md-5"></div>
                              <label className="col-md-3 col-form-label text-danger">Subtotal </label>
                              <div className="col-md-3">
                                  <input type="text" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <div className="col-md-5"></div>
                              <label className="col-md-3 col-form-label text-danger">VAT @ 2% </label>
                              <div className="col-md-3">
                                  <input type="text" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <div className="col-md-5"></div>
                              <label className="col-md-3 col-form-label text-danger">Grand Cost </label>
                              <div className="col-md-3">
                                  <input type="text" className="form-control" />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-5 col-form-label">I have received an explanation of and agreed to the items listed above and accepted these terms and conditions. </label>
                              <div className="col-md-7">
                                  <textarea type="text" rows="4" className="form-control" placeholder='Customer Signature'></textarea>
                              </div>
                          </div>
                          <div className="d-flex">
                            <button onClick={handlePrevious} className='btn btn-danger text-white mx-auto px-5 my-5'>Previous</button>
                            <button onClick={handlePrevious} className='btn btn-danger text-white mx-auto px-5 my-5'>Submit</button>
                          </div>
      </TabPanel>

      {/* <div className="d-flex">
        <button onClick={handlePrevious} className='btn btn-danger text-white'>Previous</button>
        <button onClick={handleContinue} className='btn by btn-danger text-white'>Continue</button>
      </div> */}
    </Box>
    </>
  );
}
