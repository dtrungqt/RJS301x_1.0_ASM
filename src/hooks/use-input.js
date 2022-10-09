import { useState } from "react";

const useInput = (validateValueFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValidate = validateValueFn(enteredValue);
  const hasError = !valueIsValidate && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  //khi input mất focus
  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    isValid: valueIsValidate,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
