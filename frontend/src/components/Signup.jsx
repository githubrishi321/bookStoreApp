import React from 'react'
import { Link } from "react-router-dom";
import Login from './login';
import { useForm } from "react-hook-form";

function Signup() {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = data => console.log(data);

   return (
      <>
         <div className='flex h-screen items-center justify-center'>
            <div className="w-[600px]">
               <div className="modal-box">
                  <form onSubmit={(e) => handleSubmit(onSubmit)(e)} method="dialog">
                     {/* Close Button */}
                     <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                     <h3 className="font-bold text-lg">Signup</h3>

                     {/* Name Field */}
                     <div className='mt-4 space-y-1'>
                        <span>Name</span>
                        <input type="text"
                           placeholder='Enter your fullname'
                           className='w-80 px-3 py-1 border rounded-md outline-none'
                           {...register("name", { required: true })} />
                        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                     </div>

                     {/* Email Field */}
                     <div className='mt-4 space-y-1'>
                        <span>Email</span>
                        <input type="email"
                           placeholder='Enter your email'
                           className='w-80 px-3 py-1 border rounded-md outline-none'
                           {...register("email", { required: true })} />
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                     </div>

                     {/* Password Field */}
                     <div className='mt-4 space-y-1'>
                        <span>Password</span>
                        <input type="password"
                           placeholder='Enter your password'
                           className='w-80 px-3 py-1 border rounded-md outline-none'
                           {...register("password", { required: true })} />
                        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                     </div>

                     {/* Signup Button & Login Link */}
                     <div className='flex justify-around mt-4'>
                        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'> Signup </button>
                        <p className='text-xl'>
                           Have an account? {" "}
                           <button 
                              className='underline text-blue-500 cursor-pointer'
                              onClick={() => document.getElementById("my_modal_3").showModal()}>
                              Login
                           </button>
                        </p>
                     </div>
                  </form>
               </div>
            </div>
         </div>

         {/* Move the Login component outside the <p> */}
         <Login />
      </>
   )
}

export default Signup;
