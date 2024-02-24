//google authentication backend is commented
import React, { useEffect, useState } from "react";
import { Link, Navigate,  } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { DotSpinner } from '@uiball/loaders'
import axios from "axios"

function Login() {
  
  
  // const [initial, final] = useState({ email: "", password: "" });


  ///different things has been changed and as a result now our authentication is working
  // knowleade to get useState are important and must use arrow functionx
  const [loading,setLoading]=useState(false);
  const history = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
    
  

  
  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    // const response = await fetch(`http://localhost:8000/api/auth/userlogin`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email:email, password:password }),
    // });
    const response = await axios(`http://localhost:8000/api/auth/userlogin`,{
         email,password
    })
    const json = await response.json();
    
    if (json.success) {
      setLoading(false);
      localStorage.setItem('token', json.authtoken);
      history('/');
    }
    else {
      setLoading(false);
      alert('fail');
    }
  }

 
// async function handleSubmit(e) {
//   e.preventDefault();
//   setLoading(true);

//   try {
//     const response = await axios.post(
//       'http://localhost:8000/api/auth/userlogin',
//       {
//         email: email,
//         password: password,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     const json = response.data;

//     if (json.success) {
//       setLoading(false);
//       localStorage.setItem('token', json.authtoken);
//       history('/');
//     } else {
//       setLoading(false);
//       // Display the error message in your UI
//       return <p className="text-red-500">Login failed: {json.error}</p>;
//     }
//   } catch (error) {
//     console.error('Error during login:', error);
//     console.log('Response:', error.response); // Log the response
//     setLoading(false);
//     // Display a generic error message in your UI
//     return <p className="text-red-500">An error occurred during login. Please try again.</p>;
//   }
// }

   
  

  // const handleChange = (e) => {
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value })
  // }
 

  return (
    <div className="fixed top-0 left-0 h-full w-full bg-modal-bg bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <Link
              to="/forgot-password"
              className="text-sm text-gray-800 hover:underline focus:outline-none focus:underline"
            >
              Forgot Password?
            </Link>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              {loading ? (
                <DotSpinner size={40} speed={0.9} color="white" />
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-800">
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium text-blue-500 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-800">OR</p>
        </div>
        <button
          aria-label="Continue with Google"
          className="flex items-center justify-center mt-4 bg-white text-gray-800 py-2 px-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
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

export default Login;