import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Signin from './views/Signin/Signin';
import Signup from './views/Signup/Signup';
import PrivateRoute from './utils/PrivateRoute';
import { isUserLoggedIn } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout';
import App from './App';
import Dashboard from './views/Dashboard';
import ExpectedVehicles from './views/ExpectedVehicles/ExpectedVehicles';
import ReceivedVehicles from './views/ReceivedVehicles/ReceivedVehicles';
import Questionnaire from './views/Questionnaire/Questionnaire';
import JobInstruction from './views/JobInstruction/JobInstruction';
import Invoice from './views/Invoice/Invoice';
import Estimation from './views/Estimation/Estimation';
import CustomerOrderForm from './views/CustomerOrderForm/CustomerOrderForm';
import CustomerOrders from './views/CustomerOrderForm/CustomerOrders';


function Main() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth);
  
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn())
    }    
    if (auth.authenticate) {
      
    }
    
  }, [auth.authenticate])

  return (
    <div className="App">


      <Layout />
      <Routes>
        {
          <Route end path="/" elememt={<App />}>

            <Route index element={<PrivateRoute><App /></PrivateRoute>} />
            <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="expected-vehicles" element={<PrivateRoute><ExpectedVehicles /></PrivateRoute>} />
            <Route path="received-vehicles" element={<PrivateRoute><ReceivedVehicles /></PrivateRoute>}  />
            <Route path="questionnaire" element={<PrivateRoute><Questionnaire /></PrivateRoute>} />
            <Route path="job-instruction" element={<PrivateRoute><JobInstruction /></PrivateRoute>} />
            <Route path="invoice" element={<PrivateRoute><Invoice /></PrivateRoute>} />
            <Route path="estimation" element={<PrivateRoute><Estimation /></PrivateRoute>} />
            <Route path="customer-orders/:formId" element={<PrivateRoute><CustomerOrderForm /></PrivateRoute>} />
            <Route path="customer-orders" element={<PrivateRoute><CustomerOrders /></PrivateRoute>} />
            
            {/* <Route path="customer-orders" element={<PrivateRoute><CustomerOrders /></PrivateRoute>}>
              <Route path=":formId" element={<PrivateRoute><CustomerOrderForm /></PrivateRoute>} />
            </Route> */}


            {/* <Route path="signout" element={<Signin />} */}
            {/* <Route path="*" element={<Dashboard />} /> */}

            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
          </Route>
        }
      </Routes>
    </div>
  );
}

export default Main;