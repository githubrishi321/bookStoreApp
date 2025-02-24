import React from 'react';
import { useForm } from "react-hook-form";

function Contact() {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = data => console.log(data);

   return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
         <h1 className="text-3xl font-bold text-blue-500 mb-4">Contact Us</h1>

         <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
            {/* Name Field */}
            <div className="mb-4">
               <label className="block text-gray-700">Name</label>
               <input type="text"
                  className="w-full px-3 py-2 border rounded-md outline-none"
                  {...register("name", { required: true })} />
               {errors.name && <p className="text-sm text-red-500">This field is required</p>}
            </div>

            {/* Email Field */}
            <div className="mb-4">
               <label className="block text-gray-700">Email</label>
               <input type="email"
                  className="w-full px-3 py-2 border rounded-md outline-none"
                  {...register("email", { required: true })} />
               {errors.email && <p className="text-sm text-red-500">This field is required</p>}
            </div>

            {/* Message Field */}
            <div className="mb-4">
               <label className="block text-gray-700">Message</label>
               <textarea
                  className="w-full px-3 py-2 border rounded-md outline-none"
                  {...register("message", { required: true })}>
               </textarea>
               {errors.message && <p className="text-sm text-red-500">This field is required</p>}
            </div>

            {/* Submit Button */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all">
               Send Message
            </button>
         </form>
      </div>
   );
}

export default Contact;
