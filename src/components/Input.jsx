import { useContext } from "react";
import { useEffect } from "react";
import { InputContext } from "../context/InputContext";

function Input({ type, label, pattern }) {
  const { setInput, error, validate } = useContext(InputContext);

  return (
    <div className="input-container">
      <input
        type={type}
        name={type}
        className="input"
        maxLength="40"
        placeholder={label}
        id={type}
        pattern={pattern}
        required
        onBlur={(e) => {
          setInput(e.target);
          validate(e.target);
        }}
      ></input>
      <label htmlFor={type} className="input-label">
        {label}
      </label>
      <span className="error">{error}</span>
    </div>
  );
}

export default Input;
