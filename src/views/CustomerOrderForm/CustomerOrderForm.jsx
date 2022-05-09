import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Reception from './Reception';
import AddressAndInformation from './AddressAndInformation';
import WalkAroundAndConfirmation from './WalkAroundAndConfirmation';
import PartsStockConfirmation from './PartsStockConfirmation';
import ServiceHistoryAndCustomerRequest from './ServiceHistoryAndCustomerRequests';
import Layout from '../../Layout.jsx';
import { useParams } from 'react-router-dom';
import { getCustomerOrderById } from '../../actions';
import { useDispatch } from 'react-redux';

const steps = [
  'Reception and Delivery Information', 
  'Customer & Vehicle Information', 
  'Service History & Customer Requests', 
  'Parts Stock Confirmation', 
  'Walk Around and Confirmation'
];

// const modelObject = {  
//   receptionDate: new Date(),
//   receptionTime: new Date().getTime(),
//   deliveryDate: new Date(),
//   deliveryTime: new Date().getTime(),
//   bringInPickUp: '',
//   courtesyVehicle:'',
//   customerOrderFormNo: '',
//   isPermanent: false
// };
export default function CustomerOrderForm (props) {
  
  console.log('props', props);
  const orderFormId = useParams();
  // console.log('orderFormId', orderFormId)
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCustomerOrderById(orderFormId.formId));      
}, [orderFormId.formId])

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

//   React.useEffect(() => {
         
//     dispatch(getCustomerOrderById(props && props.orderFormId.formId)); 
//     // console.log("jjjj")
    
    
//     // console.log('kkkkk');
// }, []);

  return (
      <Box sx={{ width: '100%', marginLeft: '-200px', marginBottom: '20px' }}>
        <Layout sidebar className='content-layout'>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            // if (isStepOptional(index)) {
            //   labelProps.optional = (
            //     <Typography variant="caption"></Typography>
            //   );
            // }
            // if (isStepSkipped(index)) {
            //   stepProps.completed = false;
            // }
            return (
              <Step key={label} {...stepProps} sx={{ marginBottom: '20px' }}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1, ml: 5, mb: 5 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {/* {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )} */}

              <Button onClick={handleNext} sx={{ mb: 5, mr: 5 }}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
        </Layout>
      </Box>
  );


  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Reception orderFormId={orderFormId} />;
      case 1:
        return <AddressAndInformation orderFormId={orderFormId} />;
      case 2:
        return <ServiceHistoryAndCustomerRequest />;
      case 3:
        return <PartsStockConfirmation />;
      case 4:
        return <WalkAroundAndConfirmation />;
      default:
        throw new Error('Unknown step');
    }
  }
}

