
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';


function SignUp (){

  const [formData,setFormData] = useState({
       name:"",
       age:"",
       email:"",
       password:""
  })
// variable to handle error
const[error,setError] = useState(null);
const[loading,setLoading] = useState(false);
const navigate = useNavigate()
  
  const handleChange=(e)=>{
        setFormData((prevFormData)=>{
          return {...prevFormData,[e.target.name]:e.target.value}


        })
  }

  
  
  const handleSubmit = async(e)=>{
     e.preventDefault()
     
     //send form data to database using our url
   //at the begining of our request setloading to true

     try {
        setLoading(true);
       const res = await fetch("/api/auth/signup",
      {
       method:"POST",
       headers:{
          "Content-Type":"application/json"
       },
       body: JSON.stringify(formData),

        }
      );

     const data = await res.json();
     //console.log(data);
     
     //end of req we wanna checked wheather the data has error
     if ( data.success ===false) {
      //here we are checking our data from backend index.js middleware
       setLoading(false);
       setError(data.message);
      
       return; 
     }
      setLoading(false)
       setError(null)
       navigate("/login")
  
      
     
      
     } catch (error) {
        setLoading(false);
        setError(error.message)
     
     }

   
     


  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input  type="text" name="name"value={formData.name} onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your name"
            />
           
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input type="number"  name="age" value={formData.age}
              onChange={handleChange}
           className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="enter age"
            />
           
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email"name="email" value={formData.email} onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder=" enter your email"
            />
          
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password"  name="password"  value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
           
          </div>

          <button  disabled={loading} // when never the loading variable is trues we make the button disable
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
          {loading ? "loading ...":"signup"} {/*here we are using loading var to change the message*/}
          </button>
        </form>

        <div className='flex-gap-2 mt-5'>
          <p>have an account ?</p>
          <Link to={'/login'}>
          <span className='text-blue-600 mt-3'> signIn</span>
          </Link>

        </div>
        <p className='text-red-500 mt-3'>{error}</p>

        <div className="mt-6 text-center text-gray-500">or sign up with</div>

        <div className="mt-4 flex flex-col space-y-3">
          <button className="flex items-center justify-center bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.35 11.1h-9.18v2.92h5.3c-.23 1.3-1.4 3.8-5.3 3.8-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8c1.8 0 3 .7 3.7 1.3l2.5-2.5C17.6 3.9 15.7 3 13.3 3 7.9 3 3.6 7.3 3.6 12.7s4.3 9.7 9.7 9.7c5.6 0 9.3-3.9 9.3-9.3 0-.6-.1-1.3-.2-1.9z" />
            </svg>
            Sign up with Google
          </button>

          <button className="flex items-center justify-center bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7H7.5v-3h3V9.5c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3h-2.9v7C18.3 21.1 22 17 22 12z" />
            </svg>
            Sign up with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
