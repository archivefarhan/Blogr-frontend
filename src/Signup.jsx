import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="w-screen h-auto min-h-screen">
      <h1 className="text-center font-bold text-2xl mt-10">Signup</h1>
      <hr />
      <br />
      <ul className="text-center">
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <br />
      <form onSubmit={handleSubmit} className="ml-96">
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" type="password" />
        </div>
        <button type="submit" className="bg-sky-400 rounded-xl w-20 text-center text-white mt-1">
          Signup
        </button>
      </form>
    </div>
  );
}
