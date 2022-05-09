import React, { useState } from 'react';
import Select from 'react-select';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
// import DateTimePicker from 'controls/DateTimePicker';

import Webcam from "react-webcam";
import { Edit } from '@material-ui/icons';
import { CameraAltOutlined } from '@material-ui/icons';
import Iconbutton from "@material-ui/core/Iconbutton";
// import button from 'components/Custombuttons/button.jsx';

import DatePicker from "react-datepicker";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import Close from "@material-ui/icons/Close";

// import modalStyle from "assets/jss/styling-kit/views/componentsSection/modalStyle";
// import { makeStyles } from '@material-ui/styles';

// const useStyles = makeStyles(modalStyle);

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

const videoConstraints = {
  width: 1280,
  height: 900,
  facingMode: "user"
  // facingMode: {exact :"environment"}
};

const WalkAroundAndConfirmation = () => {
    // const classes = useStyles();
    // const [modalTable, setModalTable] = useState(false);
    const [modalImageLeft, setModalImageLeft] = useState(false);
    const [modalImageRight, setModalImageRight] = useState(false);
    const [modalImageFront, setModalImageFront] = useState(false);
    const [modalImageRear, setModalImageRear] = useState(false);
    const [camShowFront, setCamShowFront] = useState(false);
    const [camShowRear, setCamShowRear] = useState(false);
    const [camShowRight, setCamShowRight] = useState(false);
    const [camShowLeft, setCamShowLeft] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const [selectedOption1, setSelectedOption1] = useState(1);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [selectedOption3, setSelectedOption3] = useState(null);
    const [selectedOption4, setSelectedOption4] = useState(null);
    const [selectedOption5, setSelectedOption5] = useState(null);
    const [paymentSelectedOption, setpaymentSelectedOption] = useState(null);

    const handleCamShowFront = () => {
      setCamShowFront(true);
    }
    const handleCamShowRear = () => {
      setCamShowRear(true);
    }

    const handleCamShowRight = () => {
      setCamShowRight(true);
    }

    const handleCamShowLeft = () => {
      setCamShowLeft(true);
    }
    
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

    const webcamRefFront = React.useRef(null);
    const webcamRefRear = React.useRef(null);
    const webcamRefRight = React.useRef(null);
    const webcamRefLeft = React.useRef(null);

    const [imgSrcFront, setImgSrcFront] = React.useState(null);
    const [imgSrcRear, setImgSrcRear] = React.useState(null);
    const [imgSrcRight, setImgSrcRight] = React.useState(null);
    const [imgSrcLeft, setImgSrcLeft] = React.useState(null);

    const [modalForm, setModalForm] = useState(false);

    const captureFront = React.useCallback((e) => {
      e.preventDefault();
      const imageSrc = webcamRefFront.current.getScreenshot({width: 300, height: 200});
      setImgSrcFront(imageSrc);
    }, [webcamRefFront, setImgSrcFront]);

    const captureRear = React.useCallback((e) => {
      e.preventDefault();
      const imageSrc = webcamRefRear.current.getScreenshot({width: 300, height: 200});
      setImgSrcRear(imageSrc);
    }, [webcamRefRear, setImgSrcRear]);

    const captureRight = React.useCallback((e) => {
      e.preventDefault();
      const imageSrc = webcamRefRight.current.getScreenshot({width: 300, height: 200});
      setImgSrcRight(imageSrc);
    }, [webcamRefRight, setImgSrcRight]);

    const captureLeft = React.useCallback((e) => {
      e.preventDefault();
      const imageSrc = webcamRefLeft.current.getScreenshot({width: 300, height: 200});
      setImgSrcLeft(imageSrc);
    }, [webcamRefLeft, setImgSrcLeft]);

    const clearFrontImg = (e) => {
      e.preventDefault();
      setImgSrcFront(null);
    };
    const clearRearImg = (e) => {
      e.preventDefault();
      setImgSrcRear(null);
    };
    const clearRightImg = (e) => {
      e.preventDefault();
      setImgSrcRight(null);
    };
    const clearLeftImg = (e) => {
      e.preventDefault();
      setImgSrcLeft(null);
    };

    const stopCaptureFront = React.useCallback((e) => {
      e.preventDefault();
      setCamShowFront(false);
    }, []);

    const stopCaptureRear = React.useCallback((e) => {
      e.preventDefault();
      setCamShowRear(false);
    }, []);

    const stopCaptureRight = React.useCallback((e) => {
      e.preventDefault();
      setCamShowRight(false);
    }, []);

    const stopCaptureLeft = React.useCallback((e) => {
      e.preventDefault();
      setCamShowLeft(false);
    }, []);
    
  return (
    <div class="content container-fluid px-3">
      <div className="row">
          <div class="col-md-12">
            <div class="col-md-12 d-flex">
                <div class="card flex-fill">
                    <div class="card-header">
                        <h4 class="card-title mb-0">Walk-around Check</h4>
                    </div>
                    <div class="card-body">
                        <form action="#">
                          <div class="form-group row">
                              <div className="row col-md-6">
                                <label class="col-md-3 col-form-label text-danger">Front Side</label>
                                <div class="col-md-6 mt-4">
                                  {
                                    camShowFront ? 
                                    <>
                                      <Webcam
                                        audio={false}
                                        height={200}
                                        ref={webcamRefFront}
                                        screenshotFormat="image/jpeg"
                                        screenshotQuality= {1}
                                        width={300}
                                        videoConstraints={videoConstraints}
                                      />
                                      <div className="cam-btn-row">
                                        <button 
                                          onClick={(e) => captureFront(e)}
                                          color="danger"
                                        >
                                          Capture Photo
                                        </button> 
                                        <button 
                                          onClick={(e) => stopCaptureFront(e)}
                                          simple
                                          color="danger"
                                        >
                                          Stop Capturing
                                        </button> 
                                      </div>
                                    </>
                                    : 
                                      <Iconbutton
                                        key="close"
                                        aria-label="Close"
                                        color="inherit"
                                        onClick={() => handleCamShowFront(camShowFront)}
                                      >
                                        <CameraAltOutlined color="danger" />
                                      </Iconbutton>                                    
                                  }
                                </div>
                              </div>
                          </div> 
                          <hr />
                          <div class="form-group row">
                              <div className="row col-md-6">
                                <label class="col-md-3 col-form-label text-danger">Rear Side</label>
                                <div class="col-md-6 mt-4">
                                  {
                                    camShowRear ? 
                                    <>
                                      <Webcam
                                        audio={false}
                                        height={200}
                                        ref={webcamRefRear}
                                        screenshotFormat="image/jpeg"
                                        width={300}
                                        videoConstraints={videoConstraints}
                                      />
                                      <div className="cam-btn-row">
                                        <button 
                                          onClick={(e) => captureRear(e)}
                                          color="danger"
                                        >
                                          Capture Photo
                                        </button> 
                                        <button 
                                          onClick={(e) => stopCaptureRear(e)}
                                          simple
                                          color="danger"
                                        >
                                          Stop Capturing
                                        </button> 
                                      </div>
                                    </>
                                    : 
                                      <Iconbutton
                                        key="close"
                                        aria-label="Close"
                                        color="inherit"
                                        onClick={() => handleCamShowRear(camShowRear)}
                                      >
                                        <CameraAltOutlined color="danger" />
                                      </Iconbutton>                                    
                                  }
                                </div>
                              </div>
                          </div>  
                          <hr />
                          <div class="form-group row">
                              <div className="row col-md-6">
                                <label class="col-md-3 col-form-label text-danger">Right Side</label>
                                <div class="col-md-6 mt-4">
                                  {
                                    camShowRight ? 
                                    <>
                                      <Webcam
                                        audio={false}
                                        height={200}
                                        ref={webcamRefRight}
                                        screenshotFormat="image/jpeg"
                                        screenshotQuality="1"
                                        imageSmoothing="true"
                                        mirrored="true"
                                        width={300}
                                        videoConstraints={videoConstraints}
                                      />
                                      <div className="cam-btn-row">
                                        <button 
                                          onClick={(e) => captureRight(e)}
                                          color="danger"
                                        >
                                          Capture Photo
                                        </button> 
                                        <button 
                                          onClick={(e) => stopCaptureRight(e)}
                                          simple
                                          color="danger"
                                        >
                                          Stop Capturing
                                        </button> 
                                      </div>
                                    </>
                                    : 
                                      <Iconbutton
                                        key="close"
                                        aria-label="Close"
                                        color="inherit"
                                        onClick={() => handleCamShowRight(camShowRight)}
                                      >
                                        <CameraAltOutlined color="danger" />
                                      </Iconbutton>                                    
                                  }
                                </div>
                              </div>
                          </div>
                          <hr />
                          <div class="form-group row">
                              <div className="row col-md-6">
                                <label class="col-md-3 col-form-label text-danger">Left Side</label>
                                <div class="col-md-6 mt-4">
                                  {
                                    camShowLeft ? 
                                    <>
                                      <Webcam
                                        audio={false}
                                        height={200}
                                        ref={webcamRefLeft}
                                        screenshotFormat="image/jpeg"
                                        width={300}
                                        videoConstraints={videoConstraints}
                                      />
                                      <div className="cam-btn-row">
                                        <button 
                                          onClick={(e) => captureLeft(e)}
                                          color="danger"
                                        >
                                          Capture Photo
                                        </button> 
                                        <button 
                                          onClick={(e) => stopCaptureLeft(e)}
                                          simple
                                          color="danger"
                                        >
                                          Stop Capturing
                                        </button> 
                                      </div>
                                    </>
                                    : 
                                      <Iconbutton
                                        key="close"
                                        aria-label="Close"
                                        color="inherit"
                                        onClick={() => handleCamShowLeft(camShowLeft)}
                                      >
                                        <CameraAltOutlined color="danger" />
                                      </Iconbutton>                                    
                                  }
                                </div>
                              </div>
                          </div>
                          <hr />
                          <div class="form-group row">
                              <div className="col-md-3">
                                <div href className="imgContainer" onClick={() => setModalImageLeft(!modalImageLeft)}>
                                  {imgSrcLeft && (<div onClick={() => setModalImageLeft(true)}>
                                    <img src={imgSrcLeft} alt="screen shot" />
                                  </div>)}
                                </div>
                                { imgSrcLeft &&  <button 
                                                    onClick={(e) => clearLeftImg(e)}
                                                    simple
                                                    color="danger"
                                                  >
                                                    Clear
                                                  </button> 
                                }
                              </div>
                              
                              <div className="col-md-3">
                              <div href className="imgContainer" onClick={() => setModalImageRight(true)}>
                                  {imgSrcRight && (<div onClick={() => setModalImageRight(true)}>
                                    <img src={imgSrcRight} alt="screen shot" />
                                  </div>)}
                                </div>
                                  { imgSrcRight &&  <button 
                                                      onClick={(e) => clearRightImg(e)}
                                                      simple
                                                      color="danger"
                                                    >
                                                      Clear
                                                    </button> 
                                  }
                              </div>
                              <div className="col-md-3">
                                  <div href className="imgContainer" onClick={() => setModalImageRight(true)}>
                                    {imgSrcRear && (<div onClick={() => setModalImageRight(true)}>
                                      <img src={imgSrcRear} alt="screen shot" />
                                  </div>)}
                                </div>
                                  { imgSrcRear &&  <button 
                                                      onClick={(e) => clearRearImg(e)}
                                                      simple
                                                      color="danger"
                                                    >
                                                      Clear
                                                    </button> 
                                  }
                              </div>
                              <div className="col-md-3">
                                  <div href className="imgContainer" onClick={() => setModalImageRight(true)}>
                                    {imgSrcFront && (<div onClick={() => setModalImageRight(true)}>
                                      <img src={imgSrcFront} alt="screen shot" />
                                  </div>)}
                                </div>
                                  { imgSrcFront &&  <button 
                                                      onClick={(e) => clearFrontImg(e)}
                                                      simple
                                                      color="danger"
                                                    >
                                                      Clear
                                                    </button> 
                                  }
                              </div>
                             
                          </div>                  
                        </form>
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
      <div>
        <Dialog
          open={modalImageLeft}
          fullWidth
          maxWidth="lg"
          keepMounted
          onClick={() => setModalImageLeft(!modalImageLeft)}
          onClose={() => setModalImageLeft(false)}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
          >
            <Iconbutton
              key="close"
              aria-label="Close"
              onClick={() => setModalImageLeft(false)}
            >
              <Close color="danger" />
            </Iconbutton>
          </DialogTitle>
          <DialogContent
            id="classic-modal-slide-description"
          >
            <div className="row">
              <div class="col-xl-12 d-flex">
                  <div class="card flex-fill">
                      <div class="card-body img-lg" onClick={() => setModalImageLeft(true)}>
                          <img src={imgSrcLeft} alt="Front" />
                      </div>
                  </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <div onClick={() => setModalImageFront(!modalImageFront)}>
        <Dialog
          open={modalImageFront}
          fullWidth
          maxWidth="lg"
          keepMounted
          onClose={() => setModalImageFront(false)}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
          >
            <Iconbutton
              key="close"
              aria-label="Close"
              onClick={() => setModalImageFront(false)}
            >
              <Close color="danger" />
            </Iconbutton>
          </DialogTitle>
          <DialogContent
            id="classic-modal-slide-description"
          >
            <div className="row">
              <div class="col-xl-12 d-flex">
                  <div class="card flex-fill">
                      <a href class="card-body img-lg" onClick={() => setModalImageFront(true)}>
                          <img src={imgSrcFront} alt="Front" />
                      </a>
                  </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div onClick={() => setModalImageRear(!modalImageRear)}>
        <Dialog
          
          open={modalImageRear}
          fullWidth
          maxWidth="lg"
          keepMounted
          onClose={() => setModalImageRear(false)}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
           
          >
            <Iconbutton
              key="close"
              aria-label="Close"
              onClick={() => setModalImageRear(false)}
            >
              <Close color="danger" />
            </Iconbutton>
          </DialogTitle>
          <DialogContent
            id="classic-modal-slide-description"
          >
            <div className="row">
              <div class="col-xl-12 d-flex">
                  <div class="card flex-fill">
                      <a href class="card-body img-lg" onClick={() => setModalImageRear(true)}>
                          <img src={imgSrcRear} alt="Front" />
                      </a>
                  </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <div onClick={() => setModalImageRight(!modalImageRight)}>
        <Dialog
          open={modalImageRight}
          fullWidth
          maxWidth="lg"
          keepMounted
          onClose={() => setModalImageRight(false)}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
          >
            <Iconbutton
              key="close"
              aria-label="Close"
              onClick={() => setModalImageRight(false)}
            >
              <Close color="danger" />
            </Iconbutton>
          </DialogTitle>
          <DialogContent
            id="classic-modal-slide-description"
          >
            <div className="row">
              <div class="col-xl-12 d-flex">
                  <div class="card flex-fill">
                      <a href class="card-body img-lg" onClick={() => setModalImageRight(true)}>
                          <img src={imgSrcRight} alt="Front" />
                      </a>
                  </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default WalkAroundAndConfirmation;