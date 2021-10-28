import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';

function SignIn({ className }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const responseFacebook = async (response) => {
    const { name, email, accessToken, userID } = response
    const user = { name, email, accessToken, userId: userID };
    const res = await axios({
      method: "post",
      url: "http://localhost:8080/auth/signin/facebook",
      data: { user }//option ส่งข้อมูลกลับไป(body เหมือนในpostman)
    });
    localStorage.setItem(`token`, JSON.stringify(res.data.token));
    localStorage.setItem(`name`, JSON.stringify(res.data.name));
    history.push('/home')
  }

  const login = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/auth/sign-in',{
      email: email,
      password: password
    }).then((res) => {
      localStorage.setItem(`token`, JSON.stringify(res.data.token));
      localStorage.setItem(`name`, JSON.stringify(res.data.user.name));
      history.push('/home')
    })
  }
  useEffect(() => {
    axios.get('http://localhost:8080/auth/sign-in').then((response) => {
    })

  }, [])


  return (
    <>
      <div className={className}>
        <div className="container">
          <h1>Sign In</h1>
          <form id="create-form" className="createform" action="sign-in" method="post">
            <div className="input-group">

              <input
                type="text"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Username"
              />
            </div>

            <div className=" input-group">

              <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
              />
            </div>

            <div className="btnLogIn">
              <button onClick={login} type="button">Log in</button>


            </div>
            <h1>{loginStatus}</h1>

            <Link to="/sign-up" className="link-signup">Don't have account ?</Link>


          </form>

          <FacebookLogin
            className="facebooklogin"
            appId="587112042632028"
            fields="name,email,picture" //เอาอะไรมาจากfacebookบ้าง
            scope="public_profile, email"
            callback={responseFacebook} />

        </div>

      </div>
    </>
  );
}

SignIn.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(SignIn)`
.className{
  background-color: #e6ecf0;
}
  .container {
    background-color: white;
    width: 380px;
    height: 450px;
    padding: 30px;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: 0 2px 4px 0 lightgray, 0 3px 10px 0 lightgray;
    transition: .3s;
    margin-top: 8%;
  }
  .container:hover {
    box-shadow: 0 4px 8px 0 lightgray, 0 6px 20px 0 lightgray;
  }
 
  .facebooklogin{
    border-radius: 0.75rem;
    border: none;
  }
  h1 {
    margin-top: 20px;
    text-align: center;
    margin-bottom: 30px;
  }
  form label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  form input {
    padding: 0.3rem 0.7rem;
    font-size: 1rem;
    line-height: 1.5;
    outline: none;    
    border-bottom: 1.5px solid #ced4da;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 100%;
    transition: .3s;

  }
  form input:hover {
    border-bottom: 1.5px solid darkgray;
  }
  
  .btnLogIn {
    display: flex;
    justify-content: center;
  }
  button {
    width: 100%;
    transition: .3s;
    margin-top: 30px;
  }
  button:hover {
    box-shadow: 0 2px 4px 0 lightgray, 0 3px 10px 0 lightgray;
  }
  form button {
    font-size: 1rem;
    line-height: 1.5;
    padding: 0.5rem 0.7rem;
    cursor: pointer;
    color: #ffffff;
    background-color: #50b7f5;
    border-radius: 0.75rem;
    border: none;
    margin-bottom: 30px;
  }
  form .input-group {
    margin-bottom: 1.5rem;
  }
  .link-signup {
    color: gray;
    text-decoration: none;
    transition: 0.2s;
    margin-left: 30%;
  }
  .link-signup:hover {
    color: black;
  }
  .kep-login-facebook.metro{
    border-radius: 0.75rem;
    border: none;
    width: fit-content;
    font-size: 0.2rem;
    margin-left: 30%;
  }
`;
