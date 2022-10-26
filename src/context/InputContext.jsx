import { useEffect, useState } from "react";
import { createContext } from "react";

export const InputContext = createContext();

export function InputContextProvider(props) {
  const [input, setInput] = useState({});
  const [error, setError] = useState("");
  useEffect(()=>{
    setInput("")
    setError("")
  },[])

  function validate(input) {
    input.validity.valid ? removeError(setError) : displayError(input, setError);
  }

  function displayError(input, setError) {
    if (input.validity.valueMissing) {
      setError("This field can not be blank");
    } else if (input.validity.patternMismatch) {
      setError("Please enter a valid email");
    }
  }

  function removeError() {
    setError("");
  }

  return (
    <InputContext.Provider value={{ input, setInput, error, setError, validate }}>
      {props.children}
    </InputContext.Provider>
  );
}
