import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch } from "react-redux";

export default function DemoLogin() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  const email = "demo@user.io";
  const password = "password";

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    return dispatch(sessionActions.login({ email, password })).catch(
      async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      }
    );
  };

  return (
    <>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Demo Login</button>
    </>
  );
}
