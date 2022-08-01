import React, { useState } from "react";

import { postRequest } from "./utils/api";

export default function Customer() {
  const [formData, setFormData] = useState({});

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    postRequest("/user/register", formData)
      .then((resp) => {
        console.log(resp);
        alert("Customer Created");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div >
      <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
        <div >Create An Account</div>
        <div >
          <label>Name</label>
          <input name="name" type="text" />
        </div>
        <div >
          <label>Email</label>
          <input name="email" type="email" />
        </div>
        <div >
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <div>
          <label>Phone</label>
          <input name="phone" type="number" />
        </div>
        <div >
          <button>Create Account</button>
        </div>
      </form>
    </div>
  );
}
