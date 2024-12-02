import React, { useEffect, useState } from 'react';
import "./Form.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Dashboard.js";
import { useNavigate } from 'react-router-dom';

function Form1(props) {
  // toogle between login and sign up
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

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

  // An array state variable to store registered user data.
  const [reguser, setReguser] = useState([]);
  // A boolean state variable to check user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // to store current logged-in user data.
  const [currentUser, setCurrentUser] = useState({});

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateForm = () => {
    // Creates an errors object to store err messages for each field.
    const errors = {
      name: null,
      email: null,
      password: null,
      contact: null,
      images: null,
    };

    // Checks whether it's a login form or signup form.
    if (!isLogin) {
      // if signup form then check
      if (name === "") {
        errors.name = "Please enter your name";
      }
      if (email === '') {
        errors.email = 'Please enter your email';
      } else if (!emailPattern.test(email)) {
        errors.email = 'Invalid email address';
      }
      if (password === '') {
        errors.password = 'Please enter your password';
      }
      if (contact === '') {
        errors.contact = 'Please enter your contact';
      }
      if (images === '') {
        errors.images = 'Please enter your image';
      }
    }
    // if login form
    else {
      if (email === "") {
        errors.email = 'Please enter your email';
      }
      if (password === '') {
        errors.password = 'Please enter your password';
      }
    }
    setErr(errors); // Update errors state
    return errors;
  };

  const toggleForm = () => {
    //toggle login and signup
    setIsLogin(!isLogin);
    // Clears all input fields
    setName("");
    setEmail("");
    setPassword("");
    setContact("");
    setImages("");
    // Resets error messages
    setErr({
      name: null,
      email: null,
      password: null,
      contact: null,
      images: null,
    });
  };

  const handleImageChange = (e) => {
    setImages(e.target.value);
    const userData = {
      name,
      email,
      contact,
      images: e.target.value
    };
    props.setUserData(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.values(errors).some((err) => err !== null)) {
      toast.error("Please fill all the fields.");
      return;
    }
    setErr(errors);
    if (isLogin) {
      handleLogin();
    } else {
      handleSignup();
    }
  };
  
  //local storage
  //store registered user in local storage
  //users parameter it is used to store reg. users info.
  const storeUsersLocalStorage = (users) => {
    localStorage.setItem('regUsers',JSON.stringify(users));
  };

  // Retrieve registered users from local storage
  const getRegisteredUserLocalStorage = () => {
    const storedUsers = localStorage.getItem('regUsers');
    return storedUsers ? JSON.parse(storedUsers) : [];
  };

  // Store logged-in user in local storage
  const storeLoggedInUserLocalStorage = (user) => {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  };

  // Retrieve logged-in user from local storage
  const getLoggedInUserLocalStorage = () => {
    const storedUser = localStorage.getItem('loggedInUser');
    return storedUser ? JSON.parse(storedUser) : null;
  };
  const handleSignup = () => {
    const newUser = {
      email,
      password,
      name,
      contact,
      images
    };
    const storedUsers = localStorage.getItem('regUsers');
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      users.push(newUser);
      localStorage.setItem('regUsers', JSON.stringify(users));
    } else {
      localStorage.setItem('regUsers', JSON.stringify([newUser]));
    }
    toast.success('Signup successful.');
    toggleForm();
  };

  const handleLogin = () => {
    const storedUsers = localStorage.getItem('regUsers');
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      const user = users.find((user) => user.email === email && user.password === password);
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        props.setCurrentUser(user); //pass current user data 
        
        toast.success('Login successful.');
        navigate("/dashboard");
      } else {
        setErr({ ...err, email: 'Invalid credentials' });
      }
    }
  };

  // Use effect to retrieve logged-in user and registered users on mount
  useEffect(() => {
    const storedUser = getLoggedInUserLocalStorage();
    if (storedUser) {
      setIsLoggedIn(true);
      setCurrentUser(storedUser);
    }
    setReguser(getRegisteredUserLocalStorage());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard
          email={currentUser.email}
          name={currentUser.name}
          contact={currentUser.contact}
          images={currentUser.images}
        />
      ) : (
        <div>
          {isLogin ? (
            <div className="flex justify-center mt-20">
              <div className="w-full max-w-xs">
                <form
                  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                  onSubmit={handleSubmit}
                >
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
                  <div className="mb-10">
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
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Login
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={toggleForm}
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
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

                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="image"
                    >
                      Image
                    </label>
                    <input
                      className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="images"
                      type="text"
                      placeholder="choose Image"
                      value={images}
                      onChange={(e) => setImages(e.target.value)}
                    />
                    {err.images && (
                      <p className="text-red-500 text-xs italic">
                        {err.images}
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
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={toggleForm}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )
      }
      <ToastContainer position="top-left" theme="light" />
    </div>
  );
}

export default Form1;