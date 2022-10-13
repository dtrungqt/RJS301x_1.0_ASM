import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addListCartActions } from "../store";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const getStoredItem = (storedDataName) => {
  const storedData = localStorage.getItem(storedDataName);
  if (!storedData) return false;

  const transformData = JSON.parse(storedData);
  if (transformData.length < 1) return false;

  return transformData;
};

//component chinh
const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.listCart.products);

  let totalPrice = 0;
  useEffect(() => {
    const storedListCart = getStoredItem("listCart");
    if (storedListCart) {
      dispatch(addListCartActions.updateCart(storedListCart));
    }
  }, []);
  console.log(listCart);

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
    value: phoneEntered,
    isValid: phoneEnteredIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneInputChangeHandler,
    inputBlurHandler: phoneInputBlurHandler,
    reset: resetPhoneInput,
  } = useInput(isNotEmpty);

  const {
    value: addressEntered,
    isValid: addressEnteredIsValid,
    hasError: addressInputHasError,
    valueChangeHandler: addressInputChangeHandler,
    inputBlurHandler: addressInputBlurHandler,
    reset: resetAddressInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (
    fullnameEnteredIsValid &&
    emailEnteredIsValid &&
    addressEnteredIsValid &&
    phoneEnteredIsValid
  )
    formIsValid = true;

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    //thực hiện các hành động khi form valid
    const userData = {
      name: fullnameEntered,
      email: emailEntered,
      password: addressEntered,
      phone: phoneEntered,
    };

    resetFullnameInput();
    resetEmailInput();
    resetAddressInput();
    resetPhoneInput();

    alert("Order Successfully!");
    navigate("/");
  };

  const orderBox = listCart.map((item) => {
    totalPrice = totalPrice + Number(item.price) * item.quantity;
    return (
      <React.Fragment key={item.id}>
        <div className="item-container d-flex justify-content-between mt-2">
          <h6 className="item-name">{item.name}</h6>
          <h6>{`${item.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND x ${
            item.quantity
          }`}</h6>
        </div>
      </React.Fragment>
    );
  });
  console.log(totalPrice);

  return (
    <div className="checkout-container mb-5">
      <div className="brand-container d-flex justify-content-between align-items-center">
        <h1 className="ms-5">CHECKOUT</h1>
        <h4 className="me-5">
          HOME / CART / <span>CHECKOUT</span>
        </h4>
      </div>
      <h3 className="text-start mb-4 mt-5">BILLING DETAILS</h3>
      <div className="billdetail-container row  text-start">
        <div className="billdetail-form col-12 col-lg-8">
          <form onSubmit={submitFormHandler}>
            <div className="form-inner">
              <div
                className={`form-gr m-0 row my-3  ${
                  fullnameInputHasError ? "invalid" : ""
                }`}
              >
                <label htmlFor="name" className="col-12 mb-2 p-0">
                  FULL NAME:
                </label>
                <input
                  type="text"
                  className="col-12 p-2 mb-2"
                  id="name"
                  placeholder="Enter Your Name Here!"
                  onChange={fullnameInputChangeHandler}
                  onBlur={fullnameInputBlurHandler}
                  value={fullnameEntered}
                />
                {fullnameInputHasError && (
                  <p className="text-error m-0">Please enter your Full Name.</p>
                )}
              </div>
              <div
                className={`form-gr m-0 row my-3  ${
                  emailInputHasError ? "invalid" : ""
                }`}
              >
                <label htmlFor="email" className="col-12 mb-2 p-0">
                  EMAIL:
                </label>
                <input
                  type="text"
                  className="col-12 p-2 mb-2"
                  id="email"
                  placeholder="Enter Your Email Here!"
                  onChange={emailInputChangeHandler}
                  onBlur={emailInputBlurHandler}
                  value={emailEntered}
                />
                {emailInputHasError && (
                  <p className="text-error m-0">Please enter a valid Email.</p>
                )}
              </div>
              <div
                className={`form-gr m-0 row my-3  ${
                  phoneInputHasError ? "invalid" : ""
                }`}
              >
                <label htmlFor="phone" className="col-12 mb-2 p-0">
                  PHONE NUMBER:
                </label>
                <input
                  type="number"
                  className="col-12 p-2 mb-2"
                  id="phone"
                  placeholder="Enter Your Phone Number Here!"
                  onChange={phoneInputChangeHandler}
                  onBlur={phoneInputBlurHandler}
                  value={phoneEntered}
                />
                {phoneInputHasError && (
                  <p className="text-error m-0">
                    Please enter your Phone Number.
                  </p>
                )}
              </div>
              <div
                className={`form-gr m-0 row my-3  ${
                  addressInputHasError ? "invalid" : ""
                }`}
              >
                <label htmlFor="address" className="col-12 mb-2 p-0">
                  ADDRESS:
                </label>
                <input
                  type="text"
                  className="col-12 p-2 mb-2"
                  id="address"
                  placeholder="Enter Your Address Here!"
                  onChange={addressInputChangeHandler}
                  onBlur={addressInputBlurHandler}
                  value={addressEntered}
                />
                {addressInputHasError && (
                  <p className="text-error m-0">Please enter your Full Name.</p>
                )}
              </div>
              <div className="form-gr m-0 row">
                <button className="col-12 col-sm-3">Place order</button>
              </div>
            </div>
          </form>
        </div>
        <div className="price-container col-12 col-lg-4 mt-4">
          <div className="price-box">
            <h2 className="mb-4">YOUR ORDER</h2>
            {orderBox}
            <div className="d-flex justify-content-between mt-3">
              <h5>TOTAL</h5>
              <h4 className="fw-bold">{`${totalPrice
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND`}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
