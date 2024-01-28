
import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//  Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light');
   const [alert,setAlert] =useState(null);

   const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
   }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode ( 'dark')
      document.body.style.backgroundColor ='#000000';
      showAlert("Dark Mode has been enable ", "primary ")
    } else{
      setMode (
        'light'
      
      )
      document.body.style.backgroundColor ='white';
      showAlert("Light Mode has been enable ", "warning ")
    }
  }
  return(
      <>

<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">

{/* <<About /> */}
	
      <Textform element showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
 


     

</div>
  </>
  );
}

export default App;
