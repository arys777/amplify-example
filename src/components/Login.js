import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Amplify, { API, graphqlOperation, Auth } from "aws-amplify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  
  const handleSubmit = () => {
    Auth.signIn(email, password)
      .then(() => location.reload())
      .catch((err) => setError(err.message));
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <input onChange={(e) => setEmail(e.target.value)} name="email" />
      <input onChange={(e) => setPassword(e.target.value)} name="password" />
      <button type="button" onClick={handleSubmit}>Login</button>
    </div>
  );
};

Login.propTypes = {
  onSubmit: PropTypes.func,
};

export default Login;