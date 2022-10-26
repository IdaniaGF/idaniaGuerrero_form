import Button from "./Button";
import Input from "./Input";
import { useContext } from "react";
import { InputContext } from "../context/InputContext";

function Form() {
  const { setInput, error, validate } = useContext(InputContext);

  return (
    <form action="#" className="form">
      <h1 className="title">Log in</h1>
      <div className="input-container">
        <input
          type="email"
          name="email"
          className="input"
          maxLength="40"
          placeholder="E-mail"
          id="email"
          pattern="[\w]*[-_.]*@[a-z]*\.[a-z]{1,4}"
          required
          onBlur={(e) => {
            setInput(e.target);
            validate(e.target);
          }}
        ></input>
        <label htmlFor="email" className="input-label">
          E-mail
        </label>
        <span className="error">{error}</span>
      </div>
      <div className="input-container">
        <input
          type="password"
          name="password"
          className="input"
          maxLength="40"
          placeholder="Password"
          id="password"
          required
          onBlur={(e) => {
            setInput(e.target);
            validate(e.target);
          }}
        ></input>
        <label htmlFor="password" className="input-label">
          E-mail
        </label>
        <span className="error">{error}</span>
      </div>
      <Button />
    </form>
  );
}

export default Form;
