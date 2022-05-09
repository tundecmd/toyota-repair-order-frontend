import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../actions';
import { Navigate } from 'react-router-dom';


const Signin = () => {
    // const [value, setValue] = React.useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();

      const user = { email, password };
      console.log('user :>> ', user);
      dispatch(signin(user));

      console.log('auth :>> ', auth);
    };
    if (auth.authenticate) {
      return <Navigate replace={true} to='/' />
    }

  return (
    <div className="content container-fluid px-5 mt-5">
      <div className="row">
          <div className="col-xl-12 d-flex">
              <div className="card flex-fill">
              <div className="card-header table-light">
                  <h4 className="card-title mb-0">Login</h4>
                </div>
                  <div className="card-body">
                      <form onSubmit={handleSubmit}>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Email</label>
                              <div className="col-md-9">
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}  
                                />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Password</label>
                              <div className="col-md-9">
                                <input 
                                  type="password" 
                                  className="form-control" 
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                              </div>
                          </div>
                          <div className="row">
                            <button className='btn btn-danger text-white mx-auto px-5 my-2' type='submit'>Login</button>
                          </div>
                          {/* <button >Check In</button> */}
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Signin;