import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../actions';


const Signup = () => {
    // const [value, setValue] = React.useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();

      const user = { firstName, lastName, email, password, username };
      console.log('user :>> ', user);
      
      dispatch(signup(user));
    };

  return (
    <div className="content container-fluid px-5 mt-5">
      <div className="row">
          <div className="col-xl-12 d-flex">
              <div className="card flex-fill">
              <div className="card-header table-light">
                  <h4 className="card-title mb-0">Register</h4>
                </div>
                  <div className="card-body">
                      <form onSubmit={handleSubmit}>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">First Name</label>
                              <div className="col-md-9">
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  value={firstName} 
                                  onChange={(e) => setFirstName(e.target.value)} 
                                />
                              </div>
                          </div>
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Last Name</label>
                              <div className="col-md-9">
                                <input 
                                  type="text" 
                                  className="form-control"
                                  value={lastName}
                                  onChange={(e) => setLastName(e.target.value)}
                                />
                              </div>
                          </div>
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
                          <div className="form-group row">
                              <label className="col-md-3 col-form-label text-danger">Username</label>
                              <div className="col-md-9">
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  value={username}
                                  onChange={(e) => setUsername(e.target.value)}  
                                />
                              </div>
                          </div>
                          <div className="row">
                            <button className='btn btn-danger text-white mx-auto px-5 my-2' type='submit'>Register</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Signup;