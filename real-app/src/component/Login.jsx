import React, { useState } from 'react'; 
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

// const[error,setError] = useState(null);
//const[loading,setLoading] = useState(false);
const {loading, error} = useSelector((state) => state.user);// to access our user state in the component use useSelector((state)=>state.user)
const navigate = useNavigate()
 const dispatch = useDispatch();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e)=>{
     e.preventDefault()
     
     //send form data to database using our url
   //at the begining of our request setloading to true

     try {
        dispatch(signInStart());  
       //setLoading(true);
       const res = await fetch("/api/auth/signin",
      {
       method:"POST",
       headers:{
          "Content-Type":"application/json"
       },
       body: JSON.stringify(formData),

        }
      );

     const data = await res.json();
     console.log(data);
     
     //end of req we wanna checked wheather the data has error
     if ( data.success ===false) {
       dispatch(signInFailure(data.message));
      //here we are checking our data from backend index.js middleware
     // istead of this we 
    
   
      
       return; 
     }
  
    dispatch(signInSuccess(data)); // everything is fine we get user data from backend

     //setLoading(false)
      // setError(null)
       navigate("/")
  
      
     
      
     } catch (error) {
     dispatch(signInFailure(error.message));
       // setLoading(false);
       // setError(error.message);
     }


  }





  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email@gmail.com"
            />
          
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          
          </div>

          <button
          disabled ={loading}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {loading ? "loading ...":"signin"} 
          </button>
        </form>

        <div className='flex-gap-2 mt-5'>
                  <p>Dont have an account ?</p>
                  <Link to={'/login'}>
                  <span className='text-blue-600 mt-3'> signIn</span>
                  </Link>
               </div>
            <p className='text-red-500 mt-3'>{error}</p>

        <div className="mt-4 flex flex-col space-y-3">
          <button className="flex items-center justify-center bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
            {/* Google Icon */}
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.35 11.1h-9.18v2.92h5.3c-.23 1.3-1.4 3.8-5.3 3.8-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8c1.8 0 3 .7 3.7 1.3l2.5-2.5C17.6 3.9 15.7 3 13.3 3 7.9 3 3.6 7.3 3.6 12.7s4.3 9.7 9.7 9.7c5.6 0 9.3-3.9 9.3-9.3 0-.6-.1-1.3-.2-1.9z" />
            </svg>
            Sign in with Google
          </button>

          <button className="flex items-center justify-center bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition">
            {/* Facebook Icon */}
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7H7.5v-3h3V9.5c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3h-2.9v7C18.3 21.1 22 17 22 12z" />
            </svg>
            Sign in with Facebook
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?
            <Link to={"/signup"} className="text-blue-600 hover:underline font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
