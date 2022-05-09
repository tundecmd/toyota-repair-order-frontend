import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Checkbox from 'rc-checkbox';
import Select from 'react-select';

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [disabled, setDisabled] = React.useState(true);
  const [active, setActive] = React.useState(false);
  const [deliveryType, setDeliveryType] = React.useState(deliveryTypeOptions);

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

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" disabled={active} {...a11yProps(0)} />
          <Tab label="Item Two" disabled={disabled} {...a11yProps(1)} />
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
                      Male
                  </label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender"
                      id="gender_female" value="option2" />
                  <label class="form-check-label" for="gender_female">
                      Female
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
                      Male
                  </label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender"
                      id="gender_female" value="option2" />
                  <label class="form-check-label" for="gender_female">
                      Female
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
                      Male
                  </label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender"
                      id="gender_female" value="option2" />
                  <label class="form-check-label" for="gender_female">
                      Female
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
                      Male
                  </label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender"
                      id="gender_female" value="option2" />
                  <label class="form-check-label" for="gender_female">
                      Female
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
                      Male
                  </label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender"
                      id="gender_female" value="option2" />
                  <label class="form-check-label" for="gender_female">
                      Female
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
        <button onClick={handlePrevious} className='btn btn-danger text-white mx-auto px-5 my-5'>Previous</button>
        <button onClick={handleContinue} className='btn btn-danger text-white mx-auto px-5 my-5'>Continue</button>
      </div>
      
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>

      {/* <div className="d-flex">
        <button onClick={handlePrevious} className='btn btn-danger text-white'>Previous</button>
        <button onClick={handleContinue} className='btn by btn-danger text-white'>Continue</button>
      </div> */}
     
    </Box>
  );
}
