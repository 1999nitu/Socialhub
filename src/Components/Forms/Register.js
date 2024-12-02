import React, { useState } from 'react';

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [images, setImages] = useState([]);
  const [err, setErr] = useState({
    name: null,
    email: null,
    password: null,
    contact: null,
    images: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {
      name: null,
      email: null,
      password: null,
      contact: null,
      images: null,
    };
    if (name === "") {
      errors.name = "Please enter your name";
    }
    if (email === "") {
      errors.email = "Please enter your email";
    }
    if (password === "") {
      errors.password = "Please enter your password";
    }
    if (contact === "") {
      errors.contact = "Please enter your contact";
    }
    setErr(errors);
    if (Object.values(errors).every((error) => error === null)) {
      // Submit form data here
      console.log("Form submitted successfully!");
      const userData = {
        name,
        email,
        contact,
        images,
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      props.toggleForm();
    }
  };

  const handleImageChange = (e) => {
    setImages(e.target.value);
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {err.name && (
              <p className="text-red-500 text-xs italic">
                {err.name}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {err.email && (
              <p className="text-red-500 text-xs italic">
                {err.email}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {err.password && (
              <p className="text-red-500 text-xs italic">
                {err.password}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="contact"
            >
              Contact
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="contact"
              type="text"
              placeholder="Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            {err.contact && (
              <p className="text-red-500 text-xs italic">
                {err.contact}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
          <button
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Sign Up
      </button>
      </div>
</form>
</div>
</div>
)};
export default Register;
