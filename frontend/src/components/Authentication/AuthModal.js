import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DotSpinner } from '@uiball/loaders'
import axios from "axios";

import { useContext } from "react";
function AuthModal() {
    
 

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", phone: "", password: "" ,type : ""});
  const { name, email, phone, password , type } = credentials;
  const [loading, setLoading] = useState(false);
  const [isLogin, setLogin] = useState(true);
  const [vendor,setVendor] = useState(true)

  async function handleLoginSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`http://localhost:8000/api/auth/userlogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email:email, password:password , vendor:vendor}),
    });
    const json = await response.json();
    if (json.success) {
      setLoading(false);
      
      localStorage.setItem('token', json.authtoken);
      
      navigate('/');
    
      
    }
    else {
      setLoading(false);
      alert('fail');
     
    }
  }


  async function handleSignupSubmit(e) {
    
        e.preventDefault();
        setLoading(true);
      
        try {
          const response = await axios.post(
            'http://localhost:8000/api/auth/usersignup',
            {
              name,
              email,
              phone,
              password,
              type,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
      
          const json = response.data;
      
          if (json.success) {
            setLoading(false);
            alert('User successfully created. Please log in.');
            navigate('/login');
          } else {
            setLoading(false);
            alert('Signup failed: ' + json.error);
          }
        } catch (error) {
          console.error('Error during signup:', error);
          setLoading(false);
          alert('An error occurred during signup. Please try again.');
        }
  }
  
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
 

 

return (
  <div className="fixed top-0 left-0 h-full w-full bg-gradient-to-r from-red-500 to-red-700 bg-modal-bg-opacity-90 flex items-center justify-center">
  <div className="bg-white p-8 rounded-lg shadow-lg w-96">
    <h2 className="text-3xl font-semibold text-center mb-6 text-red-500">{isLogin ? "Login" : "Sign Up"}</h2>
    
    {isLogin ? (
      <form className="space-y-4" onSubmit={handleLoginSubmit}>

        <div>
          <label className="block text-sm font-medium text-black">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-red-300 text-white border rounded focus:outline-none focus:bg-red-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-red-300 text-white border rounded focus:outline-none focus:bg-red-500"
          />
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div>
            <label className="text-sm font-medium text-black">Login as:</label>
            <select id="loginRole" name="loginRole" className="px-4 py-2 bg-red-300 text-white border rounded focus:outline-none focus:bg-red-500">
              <option value="customer">Customer</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>
          
          <div className="flex items-center">
            <Link
              to="/forgot-password"
              className="text-sm text-gray-800 hover:underline focus:outline-none focus:underline mr-4"
            >
              Forgot Password?
            </Link>
            <button
              type="submit"
              className="bg-red-300 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
            >
              {loading ? (
                <DotSpinner size={40} speed={0.9} color="white" />
              ) : (
                "Login"
              )}
            </button>
          </div>
        </div>
        
      </form>
        ) : (
          <form className="space-y-4 max-w-sm mx-auto" onSubmit={handleSignupSubmit}>

          <div>
            <label className="block text-sm font-medium text-gray-800">Name</label>
            <input
              aria-label="enter your name"
              type="text"
              name="name"
              onChange={handleChange}
              className="bg-red-500 border rounded focus:outline-none text-xs font-medium leading-none text-white py-3 w-full pl-3 mt-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800">Email</label>
            <input
              aria-label="enter email address"
              type="email"
              name="email"
              onChange={handleChange}
              className="bg-red-500 border rounded focus:outline-none text-xs font-medium leading-none text-white py-3 w-full pl-3 mt-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800">Mobile</label>
            <input
              aria-label="enter phone number"
              type="tel"
              name="phone"
              onChange={handleChange}
              className="bg-red-500 border rounded focus:outline-none text-xs font-medium leading-none text-white py-3 w-full pl-3 mt-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800">Password</label>
            <div className="relative flex items-center">
              <input
                aria-label="enter Password"
                type="password"
                name="password"
                onChange={handleChange}
                className="bg-red-500 border rounded focus:outline-none text-xs font-medium leading-none text-white py-3 w-full pl-3 mt-2"
              />
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                {/* Password visibility icon */}
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-black">Type</label>
            <select id="role" name="role" className="bg-red-500 border rounded focus:outline-none text-xs font-medium leading-none text-white py-3 w-full pl-3 mt-2">
              <option value="user">Customer</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>
          <p className="text-sm mt-4 font-medium text-gray-500">
            <span className="text-sm font-medium underline text-gray-800 cursor-pointer">
              Forgot Password?
            </span>
          </p>
          <div className="mt-8">
            <button
              type="submit"
              aria-label="create my account"
              className="flex justify-center text-sm font-semibold leading-none text-white bg-red-500 border rounded hover:bg-red-600 py-4 w-full"
            >
              {loading ? <DotSpinner size={40} speed={0.9} color="white" /> : "Sign Up"}
            </button>
          </div>
        
        </form>
        
        )}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-800">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              className="font-medium text-blue-500 hover:underline cursor-pointer"
              onClick={() => setLogin(!isLogin)}
            >
              {isLogin ? "Sign up here" : "Login here"}
            </span>
          </p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-800">OR</p>
        </div>
        <button
          aria-label="Continue with Google"
          className="flex items-center justify-center mt-4 bg-white text-gray-800 py-2 px-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-red-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Google icon path */}
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default AuthModal;