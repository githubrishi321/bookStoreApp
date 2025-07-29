<<<<<<< HEAD
import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
=======
import React from 'react';
import Home from './home/Home';
import {Route,Routes} from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';



function App  () {
  return (
    <>

<div className='dark:bg-slate-900 dark:text-white'>

<Routes>
<Route path="/" element= {<Home/>} />
<Route path="/course" element= {<Courses/>} />
<Route path="/contact" element= {<Contact/>} />
<Route path="/signup" element= {<Signup/>} />
</Routes>
</div>


      </>
  )
}

export default App
>>>>>>> 20e288ccfc57be25cfbb9c5467db4342adeaf7f6
