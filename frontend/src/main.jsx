import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom";
<<<<<<< HEAD
import AuthProvider from './context/AuthProvider.jsx';
=======
>>>>>>> 20e288ccfc57be25cfbb9c5467db4342adeaf7f6

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>

<<<<<<< HEAD
<AuthProvider>
   <div className='dark:bg-slate-900 dark:text-white'> 
  <App />
  </div>
  
</AuthProvider>
 
=======
  <div className='dark:bg-slate-900 dark:text-white'> 
  <App />
  </div>
  
>>>>>>> 20e288ccfc57be25cfbb9c5467db4342adeaf7f6
  </BrowserRouter>

   
 
);
