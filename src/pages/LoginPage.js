import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useInput from "./../hooks/use-input";
import { useDispatch } from "react-redux";
import { loginStatusActions } from "../store";

const isNotEmpty = (value) => value.trim() !== "";

const LoginPage = () => {
  const [loginFail, setLoginFail] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    value: emailEntered,
    isValid: emailEnteredIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: passwordEntered,
    isValid: passwordEnteredIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    reset: resetPasswordInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (emailEnteredIsValid && passwordEnteredIsValid) formIsValid = true;

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    //thực hiện các hành động khi form valid
    let userArr = localStorage.getItem("storedUserArr") || [];
    if (userArr.length > 0) userArr = JSON.parse(userArr);
    console.log(userArr);

    if (userArr.length > 0) {
      const dataUser = userArr.filter(
        (data) =>
          data.email === emailEntered && data.password === passwordEntered
      );
      if (dataUser.length > 0) {
        //ĐĂNG NHẬP THÀNH CÔNG
        let [currentUser] = dataUser;
        dispatch(loginStatusActions.onLogin());
        currentUser = { ...currentUser, isLogin: true };
        currentUser = JSON.stringify(currentUser);
        // console.log(currentUser);
        localStorage.setItem("loginData", currentUser);
        alert("Successful Login!");
        navigate("/");
        return;
      } else {
        //ĐĂNG NHẬP THẤT BẠI
        setLoginFail(true);
      }
    } else {
      //ĐĂNG NHẬP THẤT BẠI (VÌ CHƯA CÓ TÀI KHOẢN NÀO ĐƯỢC ĐĂNG KÝ)
      setLoginFail(true);
    }

    resetPasswordInput();
  };

  return (
    <div className="loginpage-container position-relative top-0 start-0">
      <div className="signup-container position-absolute top-50 start-50 translate-middle">
        <form onSubmit={submitFormHandler}>
          <div className="form-inner">
            <h2 className="my-5">Sign In</h2>
            <div
              className={`form-group row ${
                emailInputHasError ? "invalid" : ""
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
                <p className="text-error m-0">Please enter Email.</p>
              )}
            </div>
            <div
              className={`form-group last-group row ${
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
                <p className="text-error m-0">Please enter Password.</p>
              )}
            </div>
            <div className="button-container row">
              {loginFail && (
                <p className="text-error m-0 mt-3">Wrong login information.</p>
              )}
              <button
                type="submit"
                disabled={!formIsValid}
                className="col-12 py-2 my-3"
              >
                SIGN IN
              </button>
              <h4 className="mt-1">
                Create an account?
                <span>
                  <Link to="/register" className="click-link ms-1">
                    Sign up
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
export default LoginPage;
