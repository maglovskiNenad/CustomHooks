import React from "react";

import useInput from "../hooks/use-input";

const MainPage = () => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    inputBlurHandler: nameInputBlurHandler,
    inputChangeHandler: inputNameChangeHandler,
    resetInput: reseetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    inputBlurHandler: lastNameInputBlurHandler,
    inputChangeHandler: lastNameInputChangeHandler,
    resetInput: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    inputBlurHandler: emailInputBlurHandler,
    inputChangeHandler: emailInputChangeHandler,
    resetInput: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredName && enteredLastName && enteredEmail) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(enteredName, enteredLastName, enteredEmail);
    reseetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClass = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClass = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler} className="app">
      <div className={nameInputClass}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={inputNameChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>

      <div className={lastNameInputClass}>
        <label htmlFor="lastName">Last name: </label>
        <input
          type="text"
          id="lastName"
          value={enteredLastName}
          onChange={lastNameInputChangeHandler}
          onBlur={lastNameInputBlurHandler}
        />
        {lastNameInputHasError && (
          <p className="error-text">Last name must not be empty!</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email">E-Mail: </label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputHasError && <p className="error-text">Email is invalid!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Switch </button>
      </div>
    </form>
  );
};

export default MainPage;
