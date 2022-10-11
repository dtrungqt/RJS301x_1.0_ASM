// import { useState, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import useInput from "./../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isPassword = (value) => value.length > 8;

const RegisterPage = () => {
  const navigate = useNavigate();
  const [duplicateEmailError, setDuplicateEmailError] = useState(false);

  const {
    value: fullnameEntered,
    isValid: fullnameEnteredIsValid,
    hasError: fullnameInputHasError,
    valueChangeHandler: fullnameInputChangeHandler,
    inputBlurHandler: fullnameInputBlurHandler,
    reset: resetFullnameInput,
  } = useInput(isNotEmpty);

  const {
    value: emailEntered,
    isValid: emailEnteredIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  const {
    value: passwordEntered,
    isValid: passwordEnteredIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    reset: resetPasswordInput,
  } = useInput(isPassword);

  const {
    value: phoneEntered,
    isValid: phoneEnteredIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneInputChangeHandler,
    inputBlurHandler: phoneInputBlurHandler,
    reset: resetPhoneInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (
    fullnameEnteredIsValid &&
    emailEnteredIsValid &&
    passwordEnteredIsValid &&
    phoneEnteredIsValid
  )
    formIsValid = true;

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    //thực hiện các hành động khi form valid
    let userArr = localStorage.getItem("storedUserArr") || [];
    if (userArr.length > 0) userArr = JSON.parse(userArr);
    console.log(userArr);

    const userData = {
      name: fullnameEntered,
      email: emailEntered,
      password: passwordEntered,
      phone: phoneEntered,
    };

    //kiểm tra xem email đăng ký có bị trùng hay không
    if (userArr.length > 0) {
      //duplicateData (dữ liệu trùng lặp): mảng các phần tử có cùng giá trị thuộc tính email
      const duplicateData = userArr.filter(
        (data) => data.email === emailEntered
      );
      if (duplicateData.length > 0) {
        setDuplicateEmailError(true);
        return;
      }
    }
    userArr.push(userData);
    // console.log(userArr);
    let transformUserArr = JSON.stringify(userArr);
    localStorage.setItem("storedUserArr", transformUserArr);

    resetFullnameInput();
    resetEmailInput();
    resetPasswordInput();
    resetPhoneInput();

    alert("Sign Up Success!");
    navigate("/login");
  };

  return (
    <div className="loginpage-container position-relative top-0 start-0">
      <div className="signup-container position-absolute top-50 start-50 translate-middle">
        <form onSubmit={submitFormHandler}>
          <div className="form-inner">
            <h2 className="my-5">Sign Up</h2>
            <div
              className={`form-group row ${
                fullnameInputHasError ? "invalid" : ""
              }`}
            >
              <label className="col-12 col-sm-4" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                className="col-12 col-sm-8"
                id="name"
                value={fullnameEntered}
                onChange={fullnameInputChangeHandler}
                onBlur={fullnameInputBlurHandler}
              />
              {fullnameInputHasError && (
                <p className="text-error m-0">Please enter Full name.</p>
              )}
            </div>
            <div
              className={`form-group row ${
                emailInputHasError || duplicateEmailError ? "invalid" : ""
              }`}
            >
              <label className="col-12 col-sm-4" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                className="col-12 col-sm-8"
                id="email"
                value={emailEntered}
                onChange={emailInputChangeHandler}
                onBlur={emailInputBlurHandler}
              />
              {emailInputHasError && (
                <p className="text-error m-0">Email must be have @.</p>
              )}
            </div>
            <div
              className={`form-group row ${
                passwordInputHasError ? "invalid" : ""
              }`}
            >
              <label className="col-12 col-sm-4" htmlFor="password">
                Password
              </label>
              <input
                type="text"
                className="col-12 col-sm-8"
                id="password"
                value={passwordEntered}
                onChange={passwordInputChangeHandler}
                onBlur={passwordInputBlurHandler}
              />
              {passwordInputHasError && (
                <p className="text-error m-0">
                  Password at least 9 characters.
                </p>
              )}
            </div>
            <div
              className={`form-group row last-group ${
                phoneInputHasError ? "invalid" : ""
              }`}
            >
              <label className="col-12 col-sm-4" htmlFor="phone">
                Phone
              </label>
              <input
                type="number"
                className="col-12 col-sm-8"
                id="phone"
                value={phoneEntered}
                onChange={phoneInputChangeHandler}
                onBlur={phoneInputBlurHandler}
              />
              {phoneInputHasError && (
                <p className="text-error m-0">Please enter Phone.</p>
              )}
            </div>
            <div className="button-container row">
              {duplicateEmailError && (
                <p className="text-error m-0 mt-3">
                  This email is already registered.
                </p>
              )}
              <button
                type="submit"
                disabled={!formIsValid}
                className="col-12 py-2 my-3"
              >
                SIGN UP
              </button>
              <h4 className="mt-1">
                Login?
                <span>
                  <Link to="/login" className="click-link ms-1">
                    Click
                  </Link>
                </span>
              </h4>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;
